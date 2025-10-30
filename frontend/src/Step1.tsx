import { useForm } from "react-hook-form";

interface FormData {
  aadhaar: string;
  otp: string;
}

export default function Step1({ onNext }: { onNext: (aadhaar: string) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log("Submitted data:", data);
    alert("Step 1 complete!");
    onNext(data.aadhaar); // ✅ Pass Aadhaar to next step
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Udyam Registration – Step 1
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* Aadhaar */}
          <div>
            <label className="block mb-1 font-medium">Aadhaar Number</label>
            <input
              type="text"
              {...register("aadhaar", {
                required: "Aadhaar is required",
                pattern: {
                  value: /^\d{12}$/,
                  message: "Must be exactly 12 digits",
                },
              })}
              placeholder="Enter 12-digit Aadhaar number"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.aadhaar && (
              <p className="text-red-500 text-sm mt-1">
                {errors.aadhaar.message}
              </p>
            )}
          </div>

          {/* OTP */}
          <div>
            <label className="block mb-1 font-medium">OTP (mock)</label>
            <input
              type="text"
              {...register("otp", { required: "OTP is required" })}
              placeholder="Enter OTP – mock value"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.otp && (
              <p className="text-red-500 text-sm mt-1">{errors.otp.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Next →
          </button>
        </form>
      </div>
    </div>
  );
}
