const { Router } = require('express');
const { createTodo, getAllTodos, getTodoByID, updateTodo, deleteTodo } = require('../controllers/todos.controllers');

const router = Router();

// Crear una nueva tarea 
router.post('/api/v1/todos', createTodo);

// Obtener todas las tareas
router.get('/api/v1/todos', getAllTodos);

// Obtener una tarea por id 
router.get('/api/v1/todos/:id', getTodoByID);

// Actualizar una tarea
router.put('/api/v1/todos/:id', updateTodo);

// Eliminar una tarea 
router.delete('/api/v1/todos/:id', deleteTodo);

module.exports = router; 