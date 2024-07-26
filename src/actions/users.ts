"use server"

import { db } from "@/db"
import { users, usersSchema } from "@/db/schemas"
import { catchError } from "@/lib/errors"
import {
  unstable_cache as cache,
  revalidatePath,
  revalidateTag,
} from "next/cache"
import { z } from "zod"

export async function getUsers() {
  try {
    return await cache(
      async () => {
        const users = await db.query.users.findMany()

        if (!users) return []
        return users
      },
      ["getUsers"],
      {
        tags: ["getUsers"],
        revalidate: 86400,
      },
    )()
  } catch (error) {
    return []
  }
}

export type GetUsersType = Awaited<ReturnType<typeof getUsers>>

export async function addUser(rawInput: z.infer<typeof usersSchema>) {
  try {
    await db.insert(users).values({
      ...rawInput,
    })

    revalidateTag("getUsers")
    revalidatePath("/")

    return {
      data: null,
      error: null,
    }
  } catch (error) {
    return catchError(error)
  }
}
