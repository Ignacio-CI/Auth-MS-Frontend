import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/mode-toggle"

export default function Home() {
  return (
    <>
      <nav className="w-full shadow-md p-4 flex items-center justify-end gap-2">
        <ModeToggle />
        <Link className={buttonVariants({ variant: "outline" })} href="/sign-in">Sign in</Link>
        <Link className={buttonVariants({ variant: "default" })} href="/register">Register</Link>
      </nav>
      <main className="w-full h-screen mt-2">
        <section className="h-full flex flex-col items-center justify-center gap-4">
          <h1 className="font-bold text-black text-4xl uppercase dark:text-white">Unleashing the power of <span className="text-purple-600">Web3</span></h1>
          <p className="font-semibold text-slate-500 text-2xl dark:text-white">A Decentralized Revolution</p>
        </section>
      </main>
    </>
  )
}
