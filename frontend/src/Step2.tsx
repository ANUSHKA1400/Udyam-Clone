import { useForm } from "react-hook-form";

interface PANFormData {
  pan: string;
}

export default function Step2({ onNext }: { onNext: (pan: string) => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PANFormData>();

  const onSubmit = (data: PANFormData) => {
    console.log("Submitted PAN:", data);
    alert("Step 2 complete! ✅");
    onNext(data.pan); // ✅ Pass the PAN value to Step 3
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Udyam Registration – Step 2
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
          noValidate
        >
          {/* PAN Number */}
          <div>
            <label className="block mb-1 font-medium">PAN Number</label>
            <input
              type="text"
              {...register("pan", {
                required: "PAN is required",
                pattern: {
                  value: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
                  message: "Invalid PAN format (e.g., ABCDE1234F)",
                },
              })}
              placeholder="Enter PAN number (ABCDE1234F)"
              className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.pan && (
              <p className="text-red-500 text-sm mt-1">{errors.pan.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
