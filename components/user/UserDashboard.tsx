import fetchData from "@/lib/server-actions/fetch-auth";
import { UserNav } from "@/components/user/dropdown/UserNav"
import { Search } from "../utils/Search";
import updateUser from "@/lib/server-actions/update-user";


export default function UserDashboard({ token }: { token: string }) {
  
  const updatedUser = updateUser({ token });

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
