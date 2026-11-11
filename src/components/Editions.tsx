import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Box, Server, Brain, Check } from "lucide-react";

export default function Editions() {
  const { t } = useLanguage();

  const editions = [
    {
      icon: Box,
      title: t("ed.basis.title"),
      desc: t("ed.basis.desc"),
      features: [t("ed.basis.f1"), t("ed.basis.f2"), t("ed.basis.f3")],
    },
    {
      icon: Server,
      title: t("ed.cluster.title"),
      desc: t("ed.cluster.desc"),
      features: [t("ed.cluster.f1"), t("ed.cluster.f2"), t("ed.cluster.f3")],
      highlighted: true,
    },
    {
      icon: Brain,
      title: t("ed.ai.title"),
      desc: t("ed.ai.desc"),
      features: [t("ed.ai.f1"), t("ed.ai.f2"), t("ed.ai.f3")],
    },
  ];

  return (
    <section id="editions" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t("ed.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16"
        >
          {t("ed.subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {editions.map((ed, i) => (
            <motion.div
              key={ed.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className={`glass-card rounded-xl p-8 flex flex-col ${
                ed.highlighted ? "ring-2 ring-primary glow-md" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <ed.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{ed.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6 flex-1">{ed.desc}</p>
              <ul className="space-y-2">
                {ed.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
