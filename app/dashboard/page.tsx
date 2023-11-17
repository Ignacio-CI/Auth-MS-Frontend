import { Metadata } from "next"
import { UserNav } from "@/components/UserNav"
import { Search } from "@/components/search"

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Example dashboard page'
}

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-col border rounded">
        <header className="border-b h-16 flex items-center justify-end gap-4 pr-4">
          <Search />
          <UserNav />
        </header>
        <div className="w-full h-32">
          <h2 className="text-black text-2xl font-bold mt-4 ml-4 dark:text-white">Dashboard</h2>
        </div>
      </div>
    </>
  )  
}
