import db from '$lib/database.js'
import { error } from '@sveltejs/kit'

export const load = async ({ params }) => {
   const post = await db.post.findUnique({
      where: { slug: params.slug }
   })

   if (!post) {
      throw error(404, "Post not Found")
   }

   return { post }
}