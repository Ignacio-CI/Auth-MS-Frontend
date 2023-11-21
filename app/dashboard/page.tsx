import { Metadata } from "next"
import UserDashboard from "@/components/user/UserDashboard"
import { cookies } from "next/headers"
import { redirect } from "next/navigation";
import updateUser from "@/lib/server-actions/update-user";

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'User\'s Dashboard'
}

export default function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if(!token) redirect('/sign-in');

  updateUser({ token: token.value })
  return (<UserDashboard token={token.value}/>);   
}
