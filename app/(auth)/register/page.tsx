import { Metadata } from "next";
import UserRegisterForm from "@/components/user/UserRegisterForm";

export const metadata: Metadata = {
  title: 'Register',
}

export default function SignIn() {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Create an account
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter your username, email and password below to create an account
        </p>
      </div>
      <UserRegisterForm />
    </div>
  )
}