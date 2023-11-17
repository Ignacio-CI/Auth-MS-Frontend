export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className="w-full h-screen flex items-center justify-center">
        {children}
      </section>
    )
  }