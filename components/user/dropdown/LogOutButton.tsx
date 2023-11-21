import { DropdownMenuItem, DropdownMenuShortcut } from "../../ui/dropdown-menu"
import deleteSessionCookie from "@/lib/server-actions/delete-session-cookie"
import redirection from "@/lib/server-actions/redirect"

export default function LogOutButton() {
  const logOut = () => {
    deleteSessionCookie()
    redirection('/');
  }
  return (
    <>
      <DropdownMenuItem onClick={() => logOut()}>
          Log out
        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
      </DropdownMenuItem>
    </>
  )
}