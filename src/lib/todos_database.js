let todos = [
   {
      id: Date.now(),
      text: 'Lear how forms work',
      completed: false
   }
]

export function getTodos() {
   return todos
}

export function addTodo(text) {
   const todo = {
      id: Date.now(),
      text,
      completed: false
   }

   todos.push(todo)
}

export function removeTodo(id) {
   todos = todos.filter(todo => todo.id != id)
}

export function clearTodos() {
   todos = []
}