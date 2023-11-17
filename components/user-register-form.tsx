"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import fetchData from "@/lib/server-actions/fetch-auth";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Icons } from "@/components/icons"
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

const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
});

export default function UserRegisterForm() {
  const [isLoading, setIsLoading] = useState(false);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    let success = false;

    try {
      const response = await fetchData({
        path: 'http://localhost:3002/api/v1/services/registration',
        method: 'post',
        data: values,
        cache: 'no-store'
      })
      console.log(response);
      
      if (response.error) throw response.data
      success = true;
    } catch (error) {
      console.error(error);
    }
    if (success) redirection('/sign-in')

}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
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
          Register
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Already have an account?
            </span>
          </div>
        </div>
        <Button
          variant="link"
          className='w-full'
          asChild
        >
          <Link
            href="/sign-in"
          >
            Sign in
          </Link>
        </Button>
      </form>
    </Form>
  );
}
