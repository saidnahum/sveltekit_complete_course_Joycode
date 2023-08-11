import { json } from "@sveltejs/kit"
import db from "$lib/database"

/** @type {import('./$types').RequestHandler} */

export async function GET({ url }) {

   const limit = Number(url.searchParams.get('limit') ?? 30)
   const order = url.searchParams.get('order') ?? 'asc'

   const posts = await db.post.findMany({
      orderBy: { id: order },
      take: limit
   })
   return json(posts)
}