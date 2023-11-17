export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="w-full min-h-screen p-4">{children}</section>
  }