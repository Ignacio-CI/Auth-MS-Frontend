'use server'

import { cookies } from 'next/headers'

export default async function setSessionCookie(
    { data }:
    { data: {
        username: string,
        token: string,
        email: string
    } }
) {
    cookies().set('username', data.username);
    cookies().set('token', data.token);
    cookies().set('email', data.email);
}