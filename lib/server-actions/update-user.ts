'use server'

import fetchData from "./fetch-auth";
import deleteSessionCookie from "./delete-session-cookie";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function updateUser() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const results = await fetchData({
    path: "http://localhost:3002/api/v1/services/protected",
    method: "post",
    headers,
    cache: "no-store",
    data: {},
  });

  console.log(results);
  if (!results) {
    deleteSessionCookie();
    redirect("/signin");
  }

  return results.data.toString()
}
