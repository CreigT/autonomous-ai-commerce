import './globals.css'

export const metadata = {
  title: 'Autonomous AI Commerce',
  description: 'Fully autonomous AI commerce system. No human involvement.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body className="bg-gray-50 text-gray-900">{children}</body>
    </html>
  )
}