import { error } from "@sveltejs/kit"

export const load = async () => {
  throw error(404, { message: 'BOOM!! 💥' })
} 