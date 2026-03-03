import { CircleX } from "lucide-react";
import type { AppError } from "../lib/errors";

export default function ErrorDisplay({
  error,
  setError,
}: {
  error?: AppError;
  setError: (error: AppError | null) => void;
}) {
  const handleCloseDisplay = () => {
    setError(null);
  };

  if (!error) return;

  return (
    <>
      {error.type === "error" && (
        <div className="fixed z-50 animate-bounce right-1/2 translate-x-1/2 bg-c-burntpeach/80 backdrop-blur-sm text-white p-3 rounded-xl overflow-visible">
          <button
            className="absolute -top-2 -right-2 bg-c-burntpeach/80 backdrop-blur-sm rounded-full cursor-pointer"
            onClick={handleCloseDisplay}
          >
            <CircleX />
          </button>
          {error?.message && <p>{error?.message}</p>}
        </div>
      )}
    </>
  );
}
