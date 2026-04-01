import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Printer } from "lucide-react";
import { motion } from "motion/react";

interface Props {
  applicationNumber: string;
  onBack: () => void;
}

export default function ResultPage({ applicationNumber, onBack }: Props) {
  const today = new Date();
  const dateStr = today.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main
        className="flex-1 py-10 px-4"
        style={{ background: "oklch(0.96 0 0)" }}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Action Bar */}
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="outline"
                data-ocid="result.secondary_button"
                onClick={onBack}
                className="flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Search
              </Button>
              <Button
                variant="outline"
                onClick={() => window.print()}
                className="flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print
              </Button>
            </div>

            {/* Letter Document */}
            <div
              className="bg-white rounded-lg shadow-md print:shadow-none"
              style={{
                border: "1.5px solid oklch(0.85 0 0)",
                padding: "3rem 3.5rem",
              }}
              data-ocid="result.panel"
            >
              {/* Letter Header */}
              <div
                className="border-b-4 pb-4 mb-8"
                style={{ borderColor: "oklch(0.38 0.17 22)" }}
              >
                <div className="flex items-start gap-4">
                  {/* Text logo instead of seal */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                    style={{ background: "oklch(0.38 0.17 22)" }}
                  >
                    SN
                  </div>
                  <div>
                    <h1
                      className="text-2xl font-bold font-serif tracking-wide"
                      style={{ color: "oklch(0.38 0.17 22)" }}
                    >
                      SIBM NOIDA
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Symbiosis Institute of Business Management, Noida
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Sector 62, Noida, Uttar Pradesh – 201309
                    </p>
                  </div>
                </div>
              </div>

              {/* Date + Reference */}
              <div className="flex justify-between items-start mb-8 text-sm">
                <div>
                  <span className="text-muted-foreground">Ref: </span>
                  <span className="font-medium">SIBM/ADM/2026/RESULT</span>
                </div>
                <div className="text-right">
                  <span className="text-muted-foreground">Date: </span>
                  <span className="font-medium">{dateStr}</span>
                </div>
              </div>

              {/* Subject Line */}
              <div
                className="text-center font-bold text-base mb-8 py-3 rounded"
                style={{
                  background: "oklch(0.96 0.02 22)",
                  color: "oklch(0.38 0.17 22)",
                  border: "1px solid oklch(0.88 0.04 22)",
                }}
              >
                ADMISSION RESULT – BATCH 2026-28
              </div>

              {/* Salutation */}
              <p className="mb-4 text-sm leading-relaxed">
                Dear <strong>ANSH ARYA</strong>,
              </p>

              {/* Body */}
              <div className="space-y-4 text-sm leading-relaxed text-foreground">
                <p>
                  We regret to inform you that after careful evaluation of your
                  application{" "}
                  <strong>(Application No: {applicationNumber})</strong> for
                  admission to the <strong>MBA Program – Batch 2026-28</strong>{" "}
                  at Symbiosis Institute of Business Management, Noida, we are
                  unable to offer you admission at this time.
                </p>

                <p>
                  The selection process was highly competitive, and the decision
                  was made after a thorough review of all applications received.
                  While your profile was considered, we were unable to
                  accommodate your candidacy in the current batch.
                </p>

                <p>
                  We appreciate your interest in SIBM Noida and wish you all the
                  best in your future endeavors.
                </p>
              </div>

              {/* Closing */}
              <div className="mt-12">
                <p className="text-sm mb-8">Regards,</p>
                <div
                  className="border-t pt-4 text-sm"
                  style={{ borderColor: "oklch(0.85 0 0)" }}
                >
                  <p
                    className="font-bold"
                    style={{ color: "oklch(0.38 0.17 22)" }}
                  >
                    Admissions Committee
                  </p>
                  <p className="text-muted-foreground">SIBM Noida</p>
                  <p className="text-muted-foreground">Batch 2026-28</p>
                </div>
              </div>

              {/* Footer note */}
              <div
                className="mt-10 pt-4 text-xs text-muted-foreground border-t"
                style={{ borderColor: "oklch(0.88 0 0)" }}
              >
                <p>
                  This is an official communication from SIBM Noida Admissions
                  Office. For queries, contact admissions@sibmnoida.edu.in
                </p>
              </div>
            </div>

            {/* Bottom action */}
            <div className="mt-6 flex justify-center">
              <Button
                data-ocid="result.cancel_button"
                onClick={onBack}
                className="px-8 text-white"
                style={{ background: "oklch(0.38 0.17 22)" }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </Button>
            </div>
          </motion.div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
