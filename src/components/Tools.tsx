import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, FileText, Folder, MessageSquare, Receipt, Sparkles, Monitor, Laptop, Smartphone, Tablet, Globe } from "lucide-react";

export default function Tools() {
  const { t } = useLanguage();

  const tools = [
    { icon: Mail, title: t("tools.mail.title"), desc: t("tools.mail.desc") },
    { icon: FileText, title: t("tools.docs.title"), desc: t("tools.docs.desc") },
    { icon: Folder, title: t("tools.files.title"), desc: t("tools.files.desc") },
    { icon: MessageSquare, title: t("tools.chat.title"), desc: t("tools.chat.desc") },
    { icon: Receipt, title: t("tools.erp.title"), desc: t("tools.erp.desc") },
    { icon: Sparkles, title: t("tools.ai.title"), desc: t("tools.ai.desc") },
  ];

  const devices = [
    { icon: Monitor, label: t("tools.devices.windows") },
    { icon: Laptop, label: t("tools.devices.mac") },
    { icon: Monitor, label: t("tools.devices.linux") },
    { icon: Smartphone, label: t("tools.devices.ios") },
    { icon: Tablet, label: t("tools.devices.android") },
    { icon: Globe, label: t("tools.devices.web") },
  ];

  return (
    <section id="tools" className="section-padding">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4 text-foreground"
        >
          {t("tools.title")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-muted-foreground text-lg text-center max-w-3xl mx-auto mb-16"
        >
          {t("tools.subtitle")}
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-xl p-8 hover:glow-sm transition-shadow"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <tool.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">{tool.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{tool.desc}</p>
            </motion.div>
          ))}
        </div>

        <h3 className="font-heading text-lg font-semibold text-center mb-6 text-foreground">
          {t("tools.devices.title")}
        </h3>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {devices.map((d) => (
            <div
              key={d.label}
              className="glass-card rounded-full px-5 py-2 flex items-center gap-2 text-sm font-medium text-foreground"
            >
              <d.icon className="w-4 h-4 text-primary" />
              {d.label}
            </div>
          ))}
        </div>

        <p className="text-center font-heading text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto">
          {t("tools.future")}
        </p>
      </div>
    </section>
  );
}
