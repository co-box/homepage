import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Cloud, ShieldCheck, Lock } from "lucide-react";

export default function CloudHosting() {
  const { t } = useLanguage();

  const items = [
    { icon: Cloud, title: t("cloud.swiss.title"), desc: t("cloud.swiss.desc") },
    { icon: ShieldCheck, title: t("cloud.sovereign.title"), desc: t("cloud.sovereign.desc") },
    { icon: Lock, title: t("cloud.security.title"), desc: t("cloud.security.desc") },
  ];

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t("cloud.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-16"
        >
          {t("cloud.desc")}
        </motion.p>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-8 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
