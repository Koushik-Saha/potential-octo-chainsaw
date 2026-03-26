import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Rabeya Boshrie – ESL & TESOL Educator Portfolio',
  description:
    'Professional teaching portfolio of Rabeya Boshrie, an experienced English teacher and TESOL graduate student at Westcliff University.',
  keywords: [
    'ESL teacher',
    'TESOL educator',
    'English language teaching',
    'Westcliff University',
    'Rabeya Boshrie',
    'teaching portfolio',
    'language pedagogy',
  ],
  openGraph: {
    title: 'Rabeya Boshrie – ESL & TESOL Educator Portfolio',
    description:
      'Professional teaching portfolio of Rabeya Boshrie, an experienced English teacher and TESOL graduate student at Westcliff University.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
