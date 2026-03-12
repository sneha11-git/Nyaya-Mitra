import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { type IPCSection, findSection } from "@/data/sections";
import { AlertCircle, BookOpen, Scale, Search } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const popularSections = ["302", "376", "420", "498A", "304B", "379", "354"];

export function SectionSimplifier() {
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
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gradient-saffron mb-4 shadow-saffron">
            <BookOpen className="w-7 h-7 text-primary-foreground" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-3">
            Section <span className="text-gradient-saffron">Simplifier</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Enter any IPC section number to get a plain-language explanation —
            no legal jargon, just clarity.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 mb-6 card-glow"
        >
          <label
            htmlFor="simplifier-input"
            className="font-body text-sm font-medium text-foreground mb-2 block"
          >
            Enter IPC Section Number
          </label>
          <div className="flex gap-3">
            <Input
              id="simplifier-input"
              data-ocid="simplifier.section.input"
              placeholder="e.g. 302, 420, IPC 498A…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-accent border-border text-foreground placeholder:text-muted-foreground font-body flex-1"
            />
            <Button
              data-ocid="simplifier.search.button"
              onClick={handleSearch}
              className="gradient-saffron text-primary-foreground border-0 hover:opacity-90 px-6 font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="mt-4">
            <p className="font-body text-xs text-muted-foreground mb-2">
              Popular sections:
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
            >
              {result ? (
                <Card
                  data-ocid="simplifier.result.card"
                  className="card-glow border-border"
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Scale className="w-5 h-5 text-saffron" />
                          <span className="font-body text-sm font-medium text-muted-foreground">
                            IPC Section {result.number}
                          </span>
                        </div>
                        <CardTitle className="font-display text-2xl">
                          {result.title}
                        </CardTitle>
                      </div>
                      <Badge
                        className={`shrink-0 font-body text-xs px-3 py-1 ${
                          result.bailable
                            ? "bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                            : "bg-red-500/20 text-red-300 border-red-500/30"
                        }`}
                        variant="outline"
                      >
                        {result.bailable ? "Bailable" : "Non-Bailable"}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-5">
                    <div className="bg-accent/50 rounded-lg p-4 border border-border">
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        Official Legal Text
                      </p>
                      <p className="font-body text-sm text-foreground/80 leading-relaxed italic">
                        "{result.description}"
                      </p>
                    </div>

                    <div>
                      <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-2">
                        In Simple Words
                      </p>
                      <p className="font-body text-base text-foreground leading-relaxed">
                        {result.simplifiedExplanation}
                      </p>
                    </div>

                    {result.punishment && (
                      <div className="bg-primary/10 rounded-lg p-4 border border-primary/20">
                        <p className="font-body text-xs text-muted-foreground uppercase tracking-wider mb-1">
                          Punishment
                        </p>
                        <p className="font-body text-sm font-semibold text-saffron">
                          {result.punishment}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ) : (
                <div
                  data-ocid="simplifier.empty_state"
                  className="text-center py-14 bg-card border border-border rounded-xl card-glow"
                >
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Section Not Found
                  </h3>
                  <p className="font-body text-muted-foreground text-sm max-w-sm mx-auto">
                    We couldn't find IPC Section "{query}". Please check the
                    number and try again, or try a different format (e.g., "302"
                    or "IPC 302").
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-4">
                    Tip: Try one of the popular sections above.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!searched && (
          <div className="text-center py-12 text-muted-foreground">
            <BookOpen className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-body text-sm">
              Enter a section number above to get started.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
