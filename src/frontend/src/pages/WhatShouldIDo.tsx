import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type IPCSection, findSection } from "@/data/sections";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const popularSections = ["302", "420", "498A", "354", "379", "499", "506"];

const generalRights = [
  "You have the right to remain silent — anything you say can be used against you in court.",
  "You have the right to be informed of the charges or grounds for arrest.",
  "You have the right to consult and be defended by a legal practitioner of your choice.",
  "You cannot be detained for more than 24 hours without a Magistrate's order.",
  "You have the right to be produced before a Magistrate within 24 hours of arrest.",
  "You have the right to inform a family member or friend about your arrest.",
];

export function WhatShouldIDo() {
  const [query, setQuery] = useState("");
  const [searched, setSearched] = useState(false);
  const [result, setResult] = useState<IPCSection | undefined>(undefined);

  const handleSearch = () => {
    if (!query.trim()) return;
    setResult(findSection(query));
    setSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleQuick = (section: string) => {
    setQuery(section);
    setResult(findSection(section));
    setSearched(true);
  };

  return (
    <main className="min-h-screen pt-24 pb-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-500/20 mb-4 border border-blue-500/30">
            <HelpCircle className="w-7 h-7 text-blue-400" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-3">
            What Should <span className="text-gradient-saffron">I Do?</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Know if an offence is bailable, understand your rights, and get
            clear actionable steps to follow after an allegation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 mb-6 card-glow"
        >
          <label
            htmlFor="whatnow-input"
            className="font-body text-sm font-medium text-foreground mb-2 block"
          >
            Enter the IPC Section You've Been Charged Under
          </label>
          <div className="flex gap-3">
            <Input
              id="whatnow-input"
              data-ocid="whatnow.section.input"
              placeholder="e.g. 302, 420, IPC 498A…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-accent border-border text-foreground placeholder:text-muted-foreground font-body flex-1"
            />
            <Button
              data-ocid="whatnow.search.button"
              onClick={handleSearch}
              className="gradient-saffron text-primary-foreground border-0 hover:opacity-90 px-6 font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>
          <div className="mt-4">
            <p className="font-body text-xs text-muted-foreground mb-2">
              Common charges:
            </p>
            <div className="flex flex-wrap gap-2">
              {popularSections.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => handleQuick(s)}
                  className="font-body text-xs px-3 py-1 rounded-full bg-accent hover:bg-primary/20 hover:text-saffron text-foreground/70 transition-colors border border-border"
                >
                  IPC {s}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {searched && (
            <motion.div
              key={result ? "found" : "not-found"}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {result ? (
                <>
                  <div
                    data-ocid="whatnow.result.card"
                    className={`rounded-xl border p-6 ${
                      result.bailable
                        ? "bg-emerald-500/10 border-emerald-500/30"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${
                          result.bailable
                            ? "bg-emerald-500/20"
                            : "bg-red-500/20"
                        }`}
                      >
                        {result.bailable ? (
                          <CheckCircle className="w-8 h-8 text-emerald-400" />
                        ) : (
                          <XCircle className="w-8 h-8 text-red-400" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-body text-sm text-muted-foreground">
                            IPC Section {result.number} — {result.title}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge
                            variant="outline"
                            className={`text-base font-bold px-4 py-1 ${
                              result.bailable
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/40 text-lg"
                                : "bg-red-500/20 text-red-300 border-red-500/40 text-lg"
                            }`}
                          >
                            {result.bailable
                              ? "✓ Bailable Offence"
                              : "✗ Non-Bailable Offence"}
                          </Badge>
                        </div>
                        <p className="font-body text-sm text-foreground/80">
                          {result.bailable
                            ? "You have the right to demand bail from the police station. A bail bond may be required. You do not need a lawyer to apply for bail at the station level."
                            : "Bail cannot be granted by the police. Only a Magistrate or Sessions Court can grant bail. You should immediately contact a lawyer who can file a bail application on your behalf."}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Card className="card-glow border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-display text-xl flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-saffron" />
                        Recommended Next Steps
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {result.steps.map((step, i) => (
                        <div
                          key={`step-${result.number}-${i}`}
                          className="flex items-start gap-3"
                        >
                          <div className="w-6 h-6 rounded-full gradient-saffron flex items-center justify-center shrink-0 mt-0.5">
                            <span className="font-body text-xs font-bold text-primary-foreground">
                              {i + 1}
                            </span>
                          </div>
                          <p className="font-body text-sm text-foreground/85 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card className="card-glow border-border">
                    <CardHeader className="pb-3">
                      <CardTitle className="font-display text-xl flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-blue-400" />
                        Your Fundamental Rights Under Arrest
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {generalRights.map((right) => (
                        <div
                          key={right.slice(0, 30)}
                          className="flex items-start gap-3"
                        >
                          <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-0.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          </div>
                          <p className="font-body text-sm text-foreground/80 leading-relaxed">
                            {right}
                          </p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </>
              ) : (
                <div
                  data-ocid="whatnow.empty_state"
                  className="text-center py-14 bg-card border border-border rounded-xl card-glow"
                >
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Section Not Found
                  </h3>
                  <p className="font-body text-muted-foreground text-sm max-w-sm mx-auto">
                    We couldn't find IPC Section "{query}". Please verify the
                    section number and try again.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!searched && (
          <div className="text-center py-12 text-muted-foreground">
            <HelpCircle className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-body text-sm">
              Enter the section number you've been charged under to get
              immediate guidance.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
