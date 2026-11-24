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
    <div className="border-t-2 border-foreground">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[36rem] border-collapse text-left">
          <caption className="sr-only">
            Vergleich zwischen {columns[1]} und {columns[2]}
          </caption>
          <thead>
            <tr className="border-b border-foreground/15">
              <th scope="col" className="px-4 py-5 text-base font-semibold text-foreground">
                {columns[0]}
              </th>
              <th scope="col" className="px-4 py-5 text-base font-semibold text-primary">
                {columns[1]}
              </th>
              <th scope="col" className="px-4 py-5 text-base font-semibold text-muted-foreground">
                {columns[2]}
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr
                key={row.topic}
                className="border-b border-foreground/15"
              >
                <th
                  scope="row"
                  className="px-4 py-5 text-base font-semibold text-foreground"
                >
                  {row.topic}
                </th>
                <td className="px-4 py-5 text-base leading-relaxed text-card-foreground">
                  {row.westphal}
                </td>
                <td className="px-4 py-5 text-base leading-relaxed text-muted-foreground">
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
