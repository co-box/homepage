import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, ShieldCheck, Users } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
  const { t } = useLanguage();

  const pillars = [
    { icon: Code2, title: t("footer.opensource"), desc: t("footer.opensource.desc") },
    { icon: ShieldCheck, title: t("footer.sustain"), desc: t("footer.sustain.desc") },
    { icon: Users, title: t("footer.community"), desc: t("footer.community.desc") },
  ];

  return (
    <footer className="bg-section-alt border-t border-border">
      <div className="container mx-auto py-16 px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((p) => (
            <div key={p.title} className="text-center">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h4 className="font-heading font-semibold text-foreground mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-6 flex flex-col items-center gap-3 text-center">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} CoBox · Die Businessbox GmbH. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
