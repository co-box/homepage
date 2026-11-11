import { useLanguage } from "@/contexts/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1500;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) requestAnimationFrame(tick);
    };
    tick();
  }, [inView, target]);

  return (
    <span ref={ref} className="font-heading text-5xl md:text-6xl font-bold text-gradient">
      {value}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { value: 100, suffix: "%", label: t("stats.opensource"), desc: t("stats.opensource.desc") },
    { value: 0, suffix: "", label: t("stats.energy"), desc: t("stats.energy.desc") },
    { value: 0, suffix: "", label: t("stats.costs"), desc: t("stats.costs.desc") },
    { value: 100, suffix: "%", label: t("stats.sovereignty"), desc: t("stats.sovereignty.desc") },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <AnimatedNumber target={s.value} suffix={s.suffix} />
              <p className="font-heading font-semibold text-foreground mt-2">{s.label}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
