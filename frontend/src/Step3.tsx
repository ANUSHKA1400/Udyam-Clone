import React, { useEffect } from "react";

interface Step3Props {
  aadhaar: string;
  pan: string;
  onRestart: () => void;
}

const Step3: React.FC<Step3Props> = ({ aadhaar, pan, onRestart }) => {
  // Send data to backend when component mounts
  useEffect(() => {
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ aadhaar, pan }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Backend response:", data))
      .catch((err) => console.error("Error:", err));
  }, [aadhaar, pan]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md text-center">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">
          🎉 Registration Complete!
        </h2>

        <p className="text-gray-700 mb-6">
          Your Udyam registration details have been successfully submitted to
          the backend server.
        </p>

        <div className="bg-gray-100 rounded-lg p-4 mb-6 text-left">
          <p className="font-medium text-gray-800">
            <span className="text-gray-500">Aadhaar:</span> {aadhaar}
          </p>
          <p className="font-medium text-gray-800">
            <span className="text-gray-500">PAN:</span> {pan}
          </p>
        </div>

        <button
          onClick={onRestart}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Start Over
        </button>
      </div>
    </div>
  );
};

export default Step3;
