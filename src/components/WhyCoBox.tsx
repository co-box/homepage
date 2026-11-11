import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Smartphone, Package, Code2, Landmark } from "lucide-react";

export default function WhyCoBox() {
  const { t } = useLanguage();

  const items = [
    { icon: Smartphone, title: t("why.mobile.title"), desc: t("why.mobile.desc") },
    { icon: Package, title: t("why.erp.title"), desc: t("why.erp.desc") },
    { icon: Code2, title: t("why.opensource.title"), desc: t("why.opensource.desc") },
    { icon: Landmark, title: t("why.social.title"), desc: t("why.social.desc") },
  ];

  return (
    <section id="why" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
        >
          {t("why.title")}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex-shrink-0 flex items-center justify-center mt-1">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
