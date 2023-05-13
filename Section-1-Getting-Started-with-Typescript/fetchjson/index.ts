import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const isCompleted = todo.completed;

  logResponse(id, title, isCompleted);
});

function logResponse(id: number, title: string, isCompleted: boolean) {
  console.log(`
    This todo has id: ${id}
    The title is ${title}
    Completed status is: ${isCompleted}
  `);
}
