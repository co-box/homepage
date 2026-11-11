# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

# ---- Base: shared dependency layer -------------------------------------------
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Development: Vite dev server with hot reload ----------------------------
FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]

# ---- Build: static production bundle -----------------------------------------
FROM base AS build
COPY . .
RUN npm run build

# ---- Runtime: static files served by nginx -----------------------------------
FROM nginx:1.27-alpine AS runtime
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
