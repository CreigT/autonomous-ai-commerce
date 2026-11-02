'use client'
import Link from 'next/link'

export default function Dashboard() {
  const agents = [
    { name: 'CEO Agent', status: 'Optimizing strategy', kpi: 'Profit +12%' },
    { name: 'Product Research Agent', status: 'Scanning trends', kpi: '3 new products' },
    { name: 'Pricing Agent', status: 'Adjusting prices', kpi: 'Margin 42%' },
    { name: 'Sales Agent', status: 'Closing deals', kpi: '18 sales today' },
    { name: 'Support Agent', status: 'Handling tickets', kpi: 'CSAT 98%' },
    { name: 'Finance Agent', status: 'Forecasting cash', kpi: 'Runway 14mo' },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Agent Command Center</h1>
          <Link href="/" className="text-blue-400 underline">← Home</Link>
        </div>
        <p className="text-xl mb-8 text-green-400">All systems operational. Zero human intervention required.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((a, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-2">{a.name}</h3>
              <p className="text-green-400 mb-2">● {a.status}</p>
              <p className="text-blue-300">{a.kpi}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Recent Decisions (Logged)</h2>
          <ul className="space-y-2 text-sm">
            <li>Pricing Agent lowered price on Product #47 by 8% → conversion +15%</li>
            <li>Product Research Agent approved "AI SEO Toolkit" for launch</li>
            <li>Support Agent issued refund #1284 (policy compliant)</li>
            <li>CEO Agent recommended budget reallocation to high-ROI ads</li>
          </ul>
        </div>
      </div>
    </div>
  )
}