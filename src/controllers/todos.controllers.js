const Todos = require("../models/todos.model");

// Crear una nueva tarea
const createTodo = async (req, res) => {
  try {
    const newTodo = req.body;
    await Todos.create(newTodo);
    res.status(201).send("Se creo una nueva tarea :D");
  } catch (err) {
    res.status(400).json(err);
  }
};

// Obtener todas las tareas
const getAllTodos = async (req, res) => {
  try {
    const todos = await Todos.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send(todos);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Obtener una tarea por id
const getTodoByID = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todos.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });
    res.send(todo);
  } catch (err) {
    res.status(400).json(err);
  }
};

// Actualizar una tarea
const updateTodo = async (req, res) => {
  try {
    const { title, description, completed } = req.body;
    const { id } = req.params;
    await Todos.update(
      {
        title,
        description,
        completed,
      },
      {
        where: { id },
      }
    );
    res.status(201).send("Se actualizo la tarea :D");
  } catch (err) {
    res.status(400).json(err);
  }
};

// Eliminar una tarea
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todos.destroy({
      where: { id },
    });
    res.send("Se elimino la tarea :D");
  } catch (err) {
    res.status(400).json(err);
  }
};

module.exports = {
  createTodo,
  getAllTodos,
  getTodoByID,
  updateTodo,
  deleteTodo,
};
