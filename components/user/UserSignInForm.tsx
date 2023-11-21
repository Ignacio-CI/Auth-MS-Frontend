"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import fetchData from "@/lib/server-actions/fetch-auth";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/utils/icons"
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useState } from "react";
import redirection from "@/lib/server-actions/redirect";
import setSessionCookie from "@/lib/server-actions/set-session-cookie";
import Callout from "../utils/Callout";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default function UserSignInForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [alert, setAlert] = useState<{ error: boolean; msg: string }>({error: false, msg: ''});


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    let success = false;

    try {
      const response = await fetchData({
        path: 'http://localhost:3002/api/v1/services/auth',
        method: 'post',
        data: values,
        cache: 'no-store'
      })
      
      if (response.err) {
        setAlert({
          error: true,
          msg: response.data
        })
        setIsLoading(false);
        return;
      }

      setSessionCookie({ data: response.data });
      success = true;
    } catch (error) {
      console.error(error);
    }
    if (success) redirection('/dashboard')

  }
  const { error } = alert;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {error && <Callout alert={alert}/>}
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Enter your username" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button 
          className="w-full" 
          type="submit"
          disabled={isLoading}
        >
          {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign in
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Do not have an account?
            </span>
          </div>
        </div>
        <Button
          variant="link"
          className='w-full'
          asChild
        >
          <Link
            href="/register"
          >
            Register
          </Link>
        </Button>
      </form>
    </Form>
  );
}
