"use server"

import { db } from "@/db"
import { unstable_cache as cache } from "next/cache"

export async function getUsers() {
  try {
    return await cache(
      async () => {
        const users = await db.query.users.findMany()

        if (!users) return []
        return users
      },
      [`getUsers`],
      {
        tags: [`getUsers`],
        revalidate: 86400,
      },
    )()
  } catch (error) {
    return []
  }
}

export type GetUsersType = Awaited<ReturnType<typeof getUsers>>
