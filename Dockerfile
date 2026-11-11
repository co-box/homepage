# syntax=docker/dockerfile:1

ARG NODE_VERSION=22

# ---- Base: shared dependency layer -------------------------------------------
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---- Development: Astro dev server with hot reload ----------------------------
FROM base AS dev
ENV NODE_ENV=development
COPY . .
EXPOSE 8080
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "8080"]

# ---- Build: static production bundle -----------------------------------------
FROM base AS build
ENV NODE_ENV=production
COPY . .
RUN npm run build

# ---- Runtime: static files served by Caddy -----------------------------------
FROM caddy:2-alpine AS runtime
COPY docker/Caddyfile /etc/caddy/Caddyfile
COPY --from=build /app/dist /srv
EXPOSE 80
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/healthz >/dev/null || exit 1
