type Row = { name: string; type: string; required?: boolean; description: string };

export function ApiTable({ rows }: { rows: Row[] }) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-800">
      <table className="w-full text-sm">
        <thead className="bg-slate-50 dark:bg-slate-900">
          <tr>
            <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-white">Champ</th>
            <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-white">Type</th>
            <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-white">Description</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
          {rows.map((r) => (
            <tr key={r.name}>
              <td className="px-3 py-2 font-mono text-novar-blue dark:text-novar-cyan">
                {r.name}{r.required && <span className="ml-1 text-red-500">*</span>}
              </td>
              <td className="px-3 py-2 font-mono text-xs text-slate-600 dark:text-slate-400">{r.type}</td>
              <td className="px-3 py-2 text-slate-700 dark:text-slate-300">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
