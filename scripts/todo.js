// create an Array
// when we click add the list should be added to the Array
// console log the array to see if its working
const Todo = [
  {
    name: "Complete Project Proposal",
    date: "2023-12-15",
  },
  {
    name: "Meeting with Team",
    date: "2023-12-17",
  },
];
renderTodo();
function renderTodo() {
  let TodoHTML = "";
  for (let i = 0; i < Todo.length; i++) {
    const todolObject = Todo[i];
    const name = todolObject.name;
    const date = todolObject.date;
    const html = `<p>
    ${name} ${date}  
    <button onClick="
    Todo.splice(${i}, 1);
    renderTodo();
    ">Delete</button>
    </p>  `;
    TodoHTML += html;
  }
  console.log(TodoHTML);
  document.querySelector(".jslist").innerHTML = TodoHTML;
}
function addTodo() {
  const input = document.querySelector(".jsinput");
  const dateInputElement = document.querySelector(".jsdate");
  const date = dateInputElement.value;
  const name = input.value;
  Todo.push({ name, date });
  console.log(Todo);
  input.value = "";
  renderTodo();
}
function list() {
  document.querySelector(".jslist").innerHTML = Todo;
}
