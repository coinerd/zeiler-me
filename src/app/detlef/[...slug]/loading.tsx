export default function Loading() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="animate-pulse space-y-6">
        {/* Breadcrumb skeleton */}
        <div className="h-4 w-64 rounded bg-muted" />
        {/* Title skeleton */}
        <div className="h-10 w-3/4 rounded bg-muted" />
        {/* Description skeleton */}
        <div className="h-6 w-full rounded bg-muted" />
        <div className="h-6 w-2/3 rounded bg-muted" />
        {/* Divider */}
        <div className="h-1 w-40 rounded bg-muted" />
        {/* Content skeleton */}
        <div className="space-y-4 pt-4">
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-5/6 rounded bg-muted" />
          <div className="h-4 w-4/6 rounded bg-muted" />
          <div className="h-32 w-full rounded bg-muted" />
          <div className="h-4 w-full rounded bg-muted" />
          <div className="h-4 w-3/4 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
