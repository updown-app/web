import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0f172a] text-[#F8FAFC]">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
