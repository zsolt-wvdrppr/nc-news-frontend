export default function ErrorDisplay({ error }: { error?: Error }) {
  if (!error?.message) return;

  return (
    <div className="fixed z-50 animate-bounce right-1/2 translate-x-1/2 bg-c-burntpeach/80 backdrop-blur-sm text-white p-3 rounded-xl">
      {error?.message && <p>{error?.message}</p>}
    </div>
  );
}
