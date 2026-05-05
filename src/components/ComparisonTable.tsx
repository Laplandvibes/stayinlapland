interface Row {
  name: string;
  scores: number[];
  verdict: string;
}

interface ComparisonTableProps {
  axes: string[];
  rows: Row[];
  title?: string;
  rubric?: string;
}

function Dots({ n }: { n: number }) {
  return (
    <span className="inline-flex gap-[3px]" aria-label={`${n} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <span
          key={i}
          className={`w-1.5 h-1.5 rounded-full ${
            i < n ? 'bg-vibe-pink' : 'bg-charcoal/15'
          }`}
        />
      ))}
    </span>
  );
}

export default function ComparisonTable({ axes, rows, title, rubric }: ComparisonTableProps) {
  return (
    <section className="rounded-2xl overflow-hidden bg-white border border-charcoal/10 shadow-sm">
      {(title || rubric) && (
        <div className="px-5 sm:px-7 py-5 border-b border-charcoal/8">
          {title && (
            <h3 className="font-heading text-2xl sm:text-3xl text-charcoal">{title}</h3>
          )}
          {rubric && (
            <p className="text-stone text-sm mt-1 leading-relaxed">{rubric}</p>
          )}
        </div>
      )}

      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-charcoal/8">
              <th className="text-left text-[11px] font-semibold text-stone uppercase tracking-[0.16em] py-4 px-5 sm:px-7">
                Property
              </th>
              {axes.map((axis) => (
                <th
                  key={axis}
                  className="text-left text-[11px] font-semibold text-stone uppercase tracking-[0.16em] py-4 px-3"
                >
                  {axis}
                </th>
              ))}
              <th className="text-left text-[11px] font-semibold text-stone uppercase tracking-[0.16em] py-4 px-5 sm:px-7">
                Verdict
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.name}
                className={`${i !== rows.length - 1 ? 'border-b border-charcoal/6' : ''} hover:bg-cream-2/60 transition-colors`}
              >
                <td className="py-4 px-5 sm:px-7 font-heading text-lg text-charcoal whitespace-nowrap">
                  {row.name}
                </td>
                {row.scores.map((s, j) => (
                  <td key={j} className="py-4 px-3">
                    <Dots n={s} />
                  </td>
                ))}
                <td className="py-4 px-5 sm:px-7 text-graphite italic">{row.verdict}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="md:hidden divide-y divide-charcoal/8">
        {rows.map((row) => (
          <div key={row.name} className="px-5 py-5">
            <p className="font-heading text-xl text-charcoal">{row.name}</p>
            <p className="text-graphite text-sm italic mt-1 mb-3">{row.verdict}</p>
            <dl className="grid grid-cols-2 gap-x-4 gap-y-2">
              {axes.map((axis, j) => (
                <div key={axis} className="flex items-center justify-between gap-2">
                  <dt className="text-[11px] font-semibold text-stone uppercase tracking-[0.1em]">
                    {axis}
                  </dt>
                  <dd>
                    <Dots n={row.scores[j]} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}
