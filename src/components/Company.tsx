import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Coins, Users } from "lucide-react";

export default function Company() {
  const { t } = useLanguage();

  return (
    <section id="company" className="section-padding bg-section-alt">
      <div className="container mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t("company.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg text-center max-w-2xl mx-auto mb-12"
        >
          {t("company.desc")}
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            { icon: Coins, title: t("company.invest.title"), desc: t("company.invest.desc") },
            { icon: Users, title: t("company.contribute.title"), desc: t("company.contribute.desc") },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground"
        >
          {t("company.cta")}
        </motion.p>
      </div>
    </section>
  );
}
