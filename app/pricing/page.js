'use client'
import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-8">Simple Pricing</h1>
        <p className="text-xl mb-12">One plan. Full autonomous system. Cancel anytime.</p>

        <div className="bg-white p-10 rounded-2xl shadow-lg max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-4">Autonomous Operator</h2>
          <p className="text-5xl font-bold text-blue-600 mb-2">$29<span className="text-2xl">/mo</span></p>
          <p className="text-gray-600 mb-8">or $99 one-time</p>
          <ul className="text-left space-y-3 mb-8">
            <li>✓ All AI Agents (CEO to Support)</li>
            <li>✓ Product Research & Creation</li>
            <li>✓ Dynamic Pricing & Inventory</li>
            <li>✓ 24/7 Customer Support</li>
            <li>✓ Finance & Compliance Automation</li>
            <li>✓ Self-healing & Self-optimizing</li>
            <li>✓ Dashboard + Logs + KPIs</li>
          </ul>
          <form action="/api/checkout" method="POST">
            <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-full text-xl font-semibold hover:bg-blue-700">
              Start Now
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Secure payment via Stripe. Human override available.</p>
        </div>

        <Link href="/" className="inline-block mt-8 text-blue-600 underline">← Back to Home</Link>
      </div>
    </div>
  )
}