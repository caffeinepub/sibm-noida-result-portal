import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "motion/react";
import { useState } from "react";

interface Props {
  onCheckResult: (appNum: string) => void;
}

export default function HomePage({ onCheckResult }: Props) {
  const [appNum, setAppNum] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appNum.trim()) {
      setError("Please enter a valid application number.");
      return;
    }
    setError("");
    onCheckResult(appNum.trim());
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section
        className="relative flex-1 flex items-center justify-center py-24 px-4"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.28 0.17 22) 0%, oklch(0.38 0.17 22) 50%, oklch(0.46 0.19 22) 100%)",
        }}
      >
        {/* Decorative overlay pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
            backgroundSize: "20px 20px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 w-full max-w-lg"
        >
          {/* Hero text above card */}
          <div className="text-center text-white mb-8">
            <h1 className="text-3xl md:text-4xl font-bold font-serif mb-3">
              Admission Results Portal
            </h1>
            <p className="text-white/80 text-base">
              Symbiosis Institute of Business Management, Noida
            </p>
          </div>

          {/* White Card */}
          <div className="bg-white rounded-xl shadow-2xl p-8 border border-white/20">
            <h2
              className="text-xl font-bold text-center mb-1"
              style={{ color: "oklch(0.38 0.17 22)" }}
            >
              Check Your Application Result
            </h2>
            <p className="text-sm text-center text-muted-foreground mb-6">
              Enter your application number to view your admission result for
              the batch <strong>2026-28</strong>
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <Label htmlFor="appnum" className="font-medium">
                  Application Number
                </Label>
                <Input
                  id="appnum"
                  data-ocid="result.input"
                  placeholder="e.g. SIBM2026001"
                  value={appNum}
                  onChange={(e) => {
                    setAppNum(e.target.value);
                    if (error) setError("");
                  }}
                  className="h-11 text-base"
                />
                {error && (
                  <p
                    data-ocid="result.error_state"
                    className="text-sm"
                    style={{ color: "oklch(0.46 0.19 22)" }}
                  >
                    {error}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                data-ocid="result.primary_button"
                className="w-full h-11 text-base font-semibold text-white"
                style={{ background: "oklch(0.38 0.17 22)" }}
              >
                Check Result
              </Button>
            </form>
          </div>
        </motion.div>
      </section>

      {/* Info strip */}
      <section className="py-10 px-4 bg-secondary">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "MBA Program",
              desc: "Two-year full-time MBA with specializations in Finance, Marketing, and HR",
            },
            {
              title: "Batch 2026-28",
              desc: "Applications reviewed by the admissions committee on a rolling basis",
            },
            {
              title: "NAAC Accredited",
              desc: "A+ grade accreditation by the National Assessment and Accreditation Council",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 bg-white rounded-lg shadow-sm border border-border"
            >
              <h3
                className="font-bold text-base mb-2"
                style={{ color: "oklch(0.38 0.17 22)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
