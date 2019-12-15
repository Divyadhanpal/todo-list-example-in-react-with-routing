const todos = [
  {
    id: 1,
    text: "Learn React",
    done: true,
    priority: 'High',
    Tasktype: 'Bussiness',
    startDate:'1/1/91'
  },
  {
    id: 2,
    text: "Learn JSX",
    done:false,
    priority: 'Low',
    startDate:'1/1/91'
  }
];

export function getTodoList() {
  return Promise.resolve(todos);
}

export function getTodo(id) {
  const todo = todos.find(todo => todo.id === parseInt(id));
  return Promise.resolve(todo);
}
