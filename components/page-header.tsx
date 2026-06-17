export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <div className="border-b border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {eyebrow && (
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-muted-foreground text-pretty">
            {description}
          </p>
        )}
      </div>
    </div>
  )
}
