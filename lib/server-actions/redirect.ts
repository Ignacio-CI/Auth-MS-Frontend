'use server'

import { redirect } from "next/navigation"

export default async function redirection (path: string) {
    return redirect(path);
}