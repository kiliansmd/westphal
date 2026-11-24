export type ComparisonRow = {
  topic: string
  westphal: string
  other: string
}

export function ComparisonTable({
  columns,
  rows,
}: {
  columns: [string, string, string]
  rows: ComparisonRow[]
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <caption className="sr-only">
            Vergleich zwischen {columns[1]} und {columns[2]}
          </caption>
          <thead>
            <tr className="border-b border-border bg-secondary">
              <th scope="col" className="px-5 py-4 text-sm font-semibold text-foreground">
                {columns[0]}
              </th>
              <th scope="col" className="px-5 py-4 text-sm font-semibold text-primary">
                {columns[1]}
              </th>
              <th scope="col" className="px-5 py-4 text-sm font-semibold text-muted-foreground">
                {columns[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.topic}
                className="border-b border-border/60 last:border-0"
              >
                <th
                  scope="row"
                  className="px-5 py-4 text-sm font-semibold text-foreground"
                >
                  {row.topic}
                </th>
                <td className="px-5 py-4 text-sm leading-relaxed text-card-foreground">
                  {row.westphal}
                </td>
                <td className="px-5 py-4 text-sm leading-relaxed text-muted-foreground">
                  {row.other}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
