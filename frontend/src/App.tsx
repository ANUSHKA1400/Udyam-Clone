import { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";

function App() {
  const [step, setStep] = useState(1);
  const [aadhaarData, setAadhaarData] = useState("");
  const [panData, setPanData] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="w-full max-w-md mt-4">
        <ProgressBar step={step} totalSteps={3} />

        {step === 1 && (
          <Step1
            onNext={(aadhaar) => {
              setAadhaarData(aadhaar);
              setStep(2);
            }}
          />
        )}

        {step === 2 && (
          <Step2
            onNext={(pan) => {
              setPanData(pan);
              setStep(3);
            }}
          />
        )}

        {step === 3 && (
          <Step3
            aadhaar={aadhaarData}
            pan={panData}
            onRestart={() => {
              setAadhaarData("");
              setPanData("");
              setStep(1);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default App;
