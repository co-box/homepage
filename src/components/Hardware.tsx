import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Battery, Zap, Layers } from "lucide-react";

export default function Hardware() {
  const { t } = useLanguage();

  const steps = [
    { icon: Battery, num: 1, title: t("hw.ups.title"), desc: t("hw.ups.desc") },
    { icon: Zap, num: 2, title: t("hw.energy.title"), desc: t("hw.energy.desc") },
    { icon: Layers, num: 3, title: t("hw.scale.title"), desc: t("hw.scale.desc") },
  ];

  return (
    <section id="hardware" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t("hw.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16"
        >
          {t("hw.subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 glow-sm">
                <span className="font-heading text-2xl font-bold text-primary">{s.num}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
