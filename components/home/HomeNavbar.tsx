import Link from "next/link";
import { ModeToggle } from "../theme/ModeToggle";
import { buttonVariants } from "../ui/button";

export default function HomeNavbar() {
  return (
    <>
      <nav className="w-full shadow-md p-4 flex items-center justify-end gap-2">
        <ModeToggle />
        <Link
          className={buttonVariants({ variant: "outline" })}
          href="/sign-in"
        >
          Sign in
        </Link>
        <Link
          className={buttonVariants({ variant: "default" })}
          href="/register"
        >
          Register
        </Link>
      </nav>
    </>
  );
}
