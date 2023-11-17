import { Metadata } from "next";
import UserSignInForm from "@/components/user-signin-form";

export const metadata: Metadata = {
  title: 'Sign in',
}

export default function SignIn() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Sign in to your account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your username and password below
        </p>
      </div>
      <UserSignInForm />
    </div>
  )
}
