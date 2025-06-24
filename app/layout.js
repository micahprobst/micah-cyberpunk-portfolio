import './globals.css'

export const metadata = {
  title: 'Micah Probst | Philosophy Graduate & AI Ethics Specialist',
  description: 'Philosophy Graduate, Critical Thinker, People Person. Specializing in AI Ethics & Project Management in Denver/Boulder area.',
  keywords: 'Micah Probst, Philosophy, AI Ethics, Project Management, Data Analytics, Denver, Boulder, Colorado, Cyberpunk',
  authors: [{ name: 'Micah Probst' }],
  creator: 'Micah Probst',
  metadataBase: new URL('https://micahprobst.com'),
  openGraph: {
    title: 'Micah Probst | Philosophy Graduate & AI Ethics Specialist',
    description: 'Philosophy Graduate specializing in AI Ethics & Project Management. Ready to bring responsible AI implementation to your organization.',
    url: 'https://micahprobst.com',
    siteName: 'Micah Probst Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Micah Probst - Philosophy Graduate & AI Ethics Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micah Probst | Philosophy Graduate & AI Ethics Specialist',
    description: 'Philosophy Graduate specializing in AI Ethics & Project Management',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://micahprobst.com',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600;700&display=swap" 
          rel="stylesheet" 
        />
        <link rel="preload" href="/images/hero-profile.jpg" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="icon" href="/images/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-body">
        {children}
      </body>
    </html>
  )
}