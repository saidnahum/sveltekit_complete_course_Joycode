import { addTodo, clearTodos, getTodos, removeTodo } from '$lib/todos_database';
import { fail } from '@sveltejs/kit';

export async function load() {
   const todos = getTodos()

   return { todos };
}

async function sleep(time) {
   return new Promise((resolve) => setTimeout(resolve, time))
}

export const actions = {
   addTodo: async ({ request }) => {
      const formData = await request.formData()
      const todo = String(formData.get('todo'))

      if (!todo) {
         return fail(400, { todo, missing: true })
      }

      await sleep(2000)

      addTodo(todo)

      return { success: true }
   },
   removeTodo: async ({ request }) => {
      const formData = await request.formData()
      const todoId = Number(formData.get('id'))

      removeTodo(todoId)

      return { success: true }
   },
   clearTodos: async () => {
      clearTodos()
   }
}