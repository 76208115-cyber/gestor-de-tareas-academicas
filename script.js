// Estructura de datos en memoria
const tasks = [];
let currentFilter = 'all';

// Elementos del DOM
const form = document.querySelector('#task-form');
const titleInput = document.querySelector('#title');
const courseInput = document.querySelector('#course');
const priorityInput = document.querySelector('#priority');
const tasksArea = document.querySelector('#tasks-area');
const validation = document.querySelector('#validation');
const filterButtons = document.querySelectorAll('.filter-btn');
const countPendingEl = document.querySelector('#count-pending');
const countCompletedEl = document.querySelector('#count-completed');

// Helpers
function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 6) }

function createTaskObject(title, course, priority) {
    return { id: uid(), title: title.trim(), course: course.trim(), priority, completed: false };
}

function addTask(task) {
    tasks.push(task);
    render();
}

function removeTask(id) {
    const idx = tasks.findIndex(t => t.id === id);
    if (idx > -1) {
        tasks.splice(idx, 1);
    }
    const el = tasksArea.querySelector(`[data-id="${id}"]`);
    if (el) el.remove();
    updateCounters();
}

function toggleTaskCompleted(id) {
    const t = tasks.find(x => x.id === id);
    if (t) t.completed = !t.completed;
    render();
}

function filteredTasks() {
    if (currentFilter === 'all') return tasks;
    if (currentFilter === 'pending') return tasks.filter(t => !t.completed);
    if (currentFilter === 'completed') return tasks.filter(t => t.completed);
}

function clearTasksArea() {
    tasksArea.innerHTML = '';
}

function createTaskCard(task) {
    const card = document.createElement('article');
    card.classList.add('task-card');
    card.classList.toggle('completed', task.completed);
    card.dataset.id = task.id;

    const title = document.createElement('h3');
    title.textContent = task.title;

    const course = document.createElement('div');
    course.classList.add('course');
    course.textContent = task.course || '—';

    const meta = document.createElement('div');
    meta.classList.add('task-meta');

    const priority = document.createElement('span');
    priority.textContent = task.priority;
    priority.classList.add('priority-' + task.priority);

    const actions = document.createElement('div');
    actions.classList.add('task-actions');

    const toggleBtn = document.createElement('button');
    toggleBtn.classList.add('btn', 'toggle');
    toggleBtn.textContent = task.completed ? 'Marcar pendiente' : 'Marcar completada';
    toggleBtn.addEventListener('click', () => toggleTaskCompleted(task.id));

    const delBtn = document.createElement('button');
    delBtn.classList.add('btn');
    delBtn.textContent = 'Eliminar';
    delBtn.addEventListener('click', () => removeTask(task.id));

    actions.appendChild(toggleBtn);
    actions.appendChild(delBtn);

    meta.appendChild(priority);
    meta.appendChild(actions);

    card.appendChild(title);
    card.appendChild(course);
    card.appendChild(meta);

    return card;
}

function render() {
    clearTasksArea();
    const list = filteredTasks();
    list.forEach(t => {
        const card = createTaskCard(t);
        tasksArea.appendChild(card);
    });
    updateCounters();
}

function updateCounters() {
    const pending = tasks.filter(t => !t.completed).length;
    const completed = tasks.filter(t => t.completed).length;
    countPendingEl.textContent = pending;
    countCompletedEl.textContent = completed;
}

// Eventos
form.addEventListener('submit', (e) => {
    e.preventDefault();
    validation.textContent = '';
    const title = titleInput.value;
    const course = courseInput.value;
    const priority = priorityInput.value;
    if (!title.trim()) {
        validation.textContent = 'El título es obligatorio.';
        return;
    }
    const task = createTaskObject(title, course, priority);
    addTask(task);
    form.reset();
});

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentFilter = btn.dataset.filter;
        render();
    });
});

// Datos iniciales (para demo)
addTask(createTaskObject('Leer capítulo 4', 'Matemáticas', 'alta'));
addTask(createTaskObject('Entregar práctica', 'Física', 'media'));
addTask(createTaskObject('Estudiar para parcial', 'Química', 'alta'));
