export default function Loading() {
  return (
    <div className="container animate-pulse py-10">
      <div className="mb-10">
        <div className="mb-8 h-1 w-full rounded-full bg-muted" />
        <div className="mb-4 h-10 w-3/4 rounded-md bg-muted" />
        <div className="mb-4 h-6 w-1/2 rounded-md bg-muted" />
        <div className="h-4 w-1/4 rounded-md bg-muted" />
      </div>
      <div className="space-y-4">
        <div className="h-4 w-full rounded-md bg-muted" />
        <div className="h-4 w-5/6 rounded-md bg-muted" />
        <div className="h-4 w-4/6 rounded-md bg-muted" />
        <div className="h-4 w-full rounded-md bg-muted" />
        <div className="h-4 w-3/4 rounded-md bg-muted" />
      </div>
    </div>
  );
}
