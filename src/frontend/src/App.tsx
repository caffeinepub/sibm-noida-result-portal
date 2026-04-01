import { useState } from "react";
import HomePage from "./pages/HomePage";
import ResultPage from "./pages/ResultPage";

export type Page = "home" | "result";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [applicationNumber, setApplicationNumber] = useState("");

  const goToResult = (appNum: string) => {
    setApplicationNumber(appNum);
    setPage("result");
  };

  const goHome = () => {
    setPage("home");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {page === "home" && <HomePage onCheckResult={goToResult} />}
      {page === "result" && (
        <ResultPage applicationNumber={applicationNumber} onBack={goHome} />
      )}
    </div>
  );
}
