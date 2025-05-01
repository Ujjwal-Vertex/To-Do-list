
# Todo List Web Application

A simple and elegant todo list application built with HTML, CSS, and JavaScript that helps you manage your daily tasks efficiently.

## Features

- Add new tasks
- Mark tasks as completed
- Delete tasks
- Local storage to persist tasks
- Clean and responsive design
- Filter tasks (All/Active/Completed)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Local Storage API

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/todo-list.git
```

2. Open `index.html` in your web browser

## Usage

1. Enter a task in the input field
2. Press Enter or click the "Add" button to add the task
3. Click on a task to mark it as completed
4. Click the delete (×) button to remove a task
5. Use the filter buttons to view All/Active/Completed tasks

## Project Structure

```
todo-list/
│
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
└── README.md
```

## Code Examples

### HTML Structure
```html
<div class="todo-container">
    <input type="text" id="taskInput" placeholder="Add new task...">
    <ul id="taskList"></ul>
</div>
```

### CSS Styling
```css
.completed {
    text-decoration: line-through;
    color: #888;
}
```

### JavaScript Functionality
```javascript
function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    taskList.appendChild(li);
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Your Name - [@ujjwal Tripathi](https://github.com/ujjwal-vertex)
Project Link: [https://github.com/ujjwal-vertex/todo-list](https://github.com/ujjwal-vertex/todo-list)
