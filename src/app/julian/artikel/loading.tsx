export default function Loading() {
  return (
    <div className="container py-10">
      <div className="animate-pulse space-y-8">
        <div className="h-8 w-64 rounded bg-muted" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[1, 2].map((i) => (
            <div key={i} className="h-48 rounded-lg bg-muted" />
          ))}
        </div>
      </div>
    </div>
  );
}
