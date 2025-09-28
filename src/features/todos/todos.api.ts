type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

const showTodos = async () => {
  const todos = await getTodos();
  todos.map((todo: Todo) => console.log(todo.title));
};

showTodos();
