import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Shield, Globe2, LifeBuoy, Wallet } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function Features() {
  const { t } = useLanguage();

  const features = [
    { icon: Shield, title: t("features.data.title"), desc: t("features.data.desc") },
    { icon: Globe2, title: t("features.indep.title"), desc: t("features.indep.desc") },
    { icon: LifeBuoy, title: t("features.resil.title"), desc: t("features.resil.desc") },
    { icon: Wallet, title: t("features.cost.title"), desc: t("features.cost.desc") },
  ];

  return (
    <section id="features" className="section-padding bg-section-alt">
      <div className="container mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg max-w-3xl mx-auto text-center mb-16"
        >
          {t("features.intro")}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card rounded-xl p-8 hover:glow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
