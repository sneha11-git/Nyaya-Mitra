import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  type Lawyer,
  availableCities,
  findLawyersByCity,
} from "@/data/lawyers";
import {
  AlertCircle,
  Briefcase,
  Clock,
  Mail,
  MapPin,
  Phone,
  Search,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const specializationColors: Record<string, string> = {
  "Criminal Law": "bg-red-500/15 text-red-300 border-red-500/25",
  "Family Law": "bg-purple-500/15 text-purple-300 border-purple-500/25",
  "Civil Law": "bg-blue-500/15 text-blue-300 border-blue-500/25",
  "Women's Rights": "bg-pink-500/15 text-pink-300 border-pink-500/25",
  "Property Law": "bg-amber-500/15 text-amber-300 border-amber-500/25",
  "Cyber Law": "bg-cyan-500/15 text-cyan-300 border-cyan-500/25",
  "Labour Law": "bg-emerald-500/15 text-emerald-300 border-emerald-500/25",
  "Corporate Law": "bg-indigo-500/15 text-indigo-300 border-indigo-500/25",
};

function LawyerCard({ lawyer, index }: { lawyer: Lawyer; index: number }) {
  const initials = lawyer.name
    .split(" ")
    .slice(1, 3)
    .map((n) => n[0])
    .join("");
  const colorClass =
    specializationColors[lawyer.specialization] ??
    "bg-accent text-foreground border-border";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
    >
      <Card
        data-ocid={`lawyer.item.${index + 1}`}
        className="card-hover card-glow border-border"
      >
        <CardContent className="p-5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full gradient-saffron flex items-center justify-center shrink-0 shadow-saffron">
              <span className="font-display font-bold text-primary-foreground text-sm">
                {initials}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display font-semibold text-lg leading-tight">
                  {lawyer.name}
                </h3>
                <Badge
                  variant="outline"
                  className={`shrink-0 font-body text-xs ${colorClass}`}
                >
                  {lawyer.specialization}
                </Badge>
              </div>
              {lawyer.experience && (
                <div className="flex items-center gap-1.5 mb-3 text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-body text-xs">
                    {lawyer.experience} experience
                  </span>
                </div>
              )}
              <div className="space-y-1.5">
                <a
                  href={`tel:${lawyer.phone}`}
                  className="flex items-center gap-2 text-sm font-body hover:text-saffron transition-colors group"
                >
                  <Phone className="w-4 h-4 text-muted-foreground group-hover:text-saffron" />
                  <span>{lawyer.phone}</span>
                </a>
                <a
                  href={`mailto:${lawyer.email}`}
                  className="flex items-center gap-2 text-sm font-body hover:text-saffron transition-colors group"
                >
                  <Mail className="w-4 h-4 text-muted-foreground group-hover:text-saffron" />
                  <span className="truncate">{lawyer.email}</span>
                </a>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export function NearbyLawyerFinder() {
  const [city, setCity] = useState("");
  const [searched, setSearched] = useState(false);
  const [results, setResults] = useState<Lawyer[]>([]);
  const [searchedCity, setSearchedCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    setResults(findLawyersByCity(city));
    setSearchedCity(city.trim());
    setSearched(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  const handleCityClick = (c: string) => {
    setCity(c);
    setResults(findLawyersByCity(c));
    setSearchedCity(c);
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
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500/20 mb-4 border border-emerald-500/30">
            <MapPin className="w-7 h-7 text-emerald-400" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-3">
            Nearby <span className="text-gradient-saffron">Lawyer Finder</span>
          </h1>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Find verified advocates in your city. Get direct contact information
            to access legal help when you need it most.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-card border border-border rounded-xl p-6 mb-6 card-glow"
        >
          <label
            htmlFor="lawyer-city-input"
            className="font-body text-sm font-medium text-foreground mb-2 block"
          >
            Search by City
          </label>
          <div className="flex gap-3">
            <Input
              id="lawyer-city-input"
              data-ocid="lawyer.city.input"
              placeholder="Enter city name (e.g. Delhi, Mumbai)…"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-accent border-border text-foreground placeholder:text-muted-foreground font-body flex-1"
            />
            <Button
              data-ocid="lawyer.search.button"
              onClick={handleSearch}
              className="gradient-saffron text-primary-foreground border-0 hover:opacity-90 px-6 font-semibold"
            >
              <Search className="w-4 h-4 mr-2" />
              Search
            </Button>
          </div>

          <div className="mt-4">
            <p className="font-body text-xs text-muted-foreground mb-2">
              Available cities:
            </p>
            <div className="flex flex-wrap gap-2">
              {availableCities.map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => handleCityClick(c)}
                  className="font-body text-xs px-3 py-1 rounded-full bg-accent hover:bg-primary/20 hover:text-saffron text-foreground/70 transition-colors border border-border"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          {searched && (
            <motion.div
              key={searchedCity}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {results.length > 0 ? (
                <div data-ocid="lawyer.result.card">
                  <div className="flex items-center gap-2 mb-4">
                    <MapPin className="w-4 h-4 text-saffron" />
                    <h2 className="font-display text-xl font-semibold">
                      Advocates in{" "}
                      <span className="text-saffron">{searchedCity}</span>
                    </h2>
                    <span className="font-body text-sm text-muted-foreground ml-auto">
                      {results.length} found
                    </span>
                  </div>
                  <div className="space-y-3">
                    {results.map((lawyer, i) => (
                      <LawyerCard
                        key={lawyer.email}
                        lawyer={lawyer}
                        index={i}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div
                  data-ocid="lawyer.empty_state"
                  className="text-center py-14 bg-card border border-border rounded-xl card-glow"
                >
                  <AlertCircle className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-display text-xl font-semibold mb-2">
                    No Lawyers Found
                  </h3>
                  <p className="font-body text-muted-foreground text-sm max-w-sm mx-auto">
                    We don't have advocates listed in "{searchedCity}" yet. Try
                    one of the available cities listed above.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <p className="font-body text-xs text-muted-foreground">
                      Available: {availableCities.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {!searched && (
          <div className="text-center py-12 text-muted-foreground">
            <MapPin className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="font-body text-sm">
              Enter your city above or select one from the list to find
              advocates near you.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
