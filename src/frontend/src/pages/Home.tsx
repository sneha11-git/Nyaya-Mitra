import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  BookOpen,
  Gavel,
  HelpCircle,
  MapPin,
  Scale,
  Shield,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

const features = [
  {
    icon: BookOpen,
    title: "Section Simplifier",
    description:
      "Enter any IPC section number and instantly get a plain-language explanation. No legal jargon — just clear, understandable language for every citizen.",
    to: "/section-simplifier",
    ocid: "home.simplifier.button",
    gradient: "from-amber-500/20 to-orange-500/10",
    iconColor: "text-amber-400",
    cta: "Simplify a Section",
  },
  {
    icon: HelpCircle,
    title: "What Should I Do?",
    description:
      "Find out if an offence is bailable or non-bailable, understand your rights, and get a clear list of recommended next steps to take immediately.",
    to: "/what-should-i-do",
    ocid: "home.whatnow.button",
    gradient: "from-blue-500/20 to-indigo-500/10",
    iconColor: "text-blue-400",
    cta: "Get Guidance Now",
  },
  {
    icon: MapPin,
    title: "Nearby Lawyer Finder",
    description:
      "Search for verified advocates in your city by specialization. Get direct contact details to reach legal help when you need it most.",
    to: "/nearby-lawyers",
    ocid: "home.lawyer.button",
    gradient: "from-emerald-500/20 to-teal-500/10",
    iconColor: "text-emerald-400",
    cta: "Find a Lawyer",
  },
];

const stats = [
  { label: "IPC Sections Covered", value: "20+", icon: Gavel },
  { label: "Verified Advocates", value: "20+", icon: Users },
  { label: "Cities Covered", value: "6", icon: MapPin },
  { label: "Rights Protected", value: "Every Citizen", icon: Shield },
];

export function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "url('/assets/generated/nyaymitra-hero.dim_1400x600.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/85" />
        {/* Mandala decorative circle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-[600px] h-[600px] rounded-full opacity-5"
            style={{
              background:
                "radial-gradient(circle, oklch(0.72 0.18 58), transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full gradient-saffron flex items-center justify-center shadow-saffron">
                <Scale className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
              <span className="text-gradient-saffron">NyayMitra</span>
            </h1>
            <p className="font-display text-xl sm:text-2xl text-foreground/80 mb-3 italic">
              न्याय मित्र — Your Justice Friend
            </p>
            <p className="font-body text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Understanding India's legal system shouldn't be a privilege.
              NyayMitra empowers every citizen with clear, accessible
              information about the Indian Penal Code, your rights, and how to
              find legal help.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/section-simplifier">
                <Button
                  size="lg"
                  className="gradient-saffron text-primary-foreground font-semibold px-8 py-3 h-auto hover:opacity-90 shadow-saffron border-0"
                >
                  <BookOpen className="w-5 h-5 mr-2" />
                  Explore IPC Sections
                </Button>
              </Link>
              <Link to="/nearby-lawyers">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground px-8 py-3 h-auto hover:bg-accent"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Find a Lawyer
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats */}
      <section className="bg-card border-y border-border py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-saffron" />
                <div className="font-display font-bold text-2xl text-saffron">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">
              Three Pillars of{" "}
              <span className="text-gradient-saffron">Legal Clarity</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto">
              Choose a tool that fits your immediate need — all designed to be
              fast, clear, and practical.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <Card
                  className={`card-hover card-glow h-full bg-gradient-to-br ${feature.gradient} border-border`}
                >
                  <CardContent className="p-6 flex flex-col h-full">
                    <div
                      className={`w-12 h-12 rounded-xl bg-card flex items-center justify-center mb-4 ${feature.iconColor}`}
                    >
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-display font-bold text-xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="font-body text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                      {feature.description}
                    </p>
                    <Link to={feature.to}>
                      <Button
                        data-ocid={feature.ocid}
                        className="w-full gradient-saffron text-primary-foreground font-semibold border-0 hover:opacity-90"
                      >
                        {feature.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-5 flex gap-4">
            <Shield className="w-5 h-5 text-saffron shrink-0 mt-0.5" />
            <div>
              <p className="font-body text-sm font-medium text-foreground mb-1">
                Legal Disclaimer
              </p>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                NyayMitra provides general legal information for educational
                purposes only. The information on this platform does not
                constitute legal advice and should not be relied upon as a
                substitute for professional consultation with a qualified
                advocate. Laws may change — always verify with a licensed legal
                professional.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
