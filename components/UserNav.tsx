import { UserDropDown } from "./UserDropDown"
import { cookies } from "next/headers"
  
export function UserNav() {

  const cookieStore = cookies()
  const username = cookieStore.get('username')?.value;
  const email = cookieStore.get('email')?.value;

  return (
    <>
      <UserDropDown 
        username={username}
        email={email}
      />
    </>
  )
}