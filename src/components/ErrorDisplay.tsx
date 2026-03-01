import { CircleX } from "lucide-react";
import { useState, useEffect } from "react";

export default function ErrorDisplay({ error }: { error?: Error }) {
  const [showDisplay, setShowDisplay] = useState<boolean>(true);

  useEffect(() => {
    if (error) setShowDisplay(true);
  }, [error]);

  const handleCloseDisplay = () => {
    setShowDisplay(false);
  };

  if (!error?.message) {
    setShowDisplay(false);
    return;
  }

  return (
    <>
      {showDisplay && (
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
