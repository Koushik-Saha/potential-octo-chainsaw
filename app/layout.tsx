import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Md Moniruzzaman – ESL & TESOL Educator Portfolio',
  description:
    'Professional teaching portfolio of Md Moniruzzaman, an experienced ESL teacher and TESOL graduate student at Westcliff University.',
  keywords: [
    'ESL teacher',
    'TESOL educator',
    'English language teaching',
    'Westcliff University',
    'Md Moniruzzaman',
    'teaching portfolio',
    'language pedagogy',
  ],
  openGraph: {
    title: 'Md Moniruzzaman – ESL & TESOL Educator Portfolio',
    description:
      'Professional teaching portfolio of Md Moniruzzaman, an experienced ESL teacher and TESOL graduate student at Westcliff University.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
