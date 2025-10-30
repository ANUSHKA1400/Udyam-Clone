interface ProgressBarProps {
  step: number;
  totalSteps: number;
}

export default function ProgressBar({ step, totalSteps }: ProgressBarProps) {
  const percentage = (step / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
      <div
        className="bg-blue-600 h-2 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
      <p className="text-sm text-gray-600 mt-2 text-center">
        Step {step} of {totalSteps}
      </p>
    </div>
  );
}
