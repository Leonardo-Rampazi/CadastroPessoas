import { Header } from '@/componets/header'
import { ReactNode } from 'react'

export default function RegistrationLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
