import db from '$lib/database.js'

export const load = async (event) => {
   const posts = db.post.findMany({
      select: {
         title: true,
         slug: true
      },
      take: 4
   })

   return { posts }
}