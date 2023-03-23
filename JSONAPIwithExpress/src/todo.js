import { v4 as uuidv4 } from 'uuid';
import { Router } from 'express';
import * as fs from 'node:fs/promises';

const todoRouter = Router()

todoRouter.get('/todo', async (req, res) => {
	const directoryContents = await fs.readdir('storage/')
	const allTodos = {
		todos: [],
		const: directoryContents.length
	};

	for (const entry of directoryContents) {
		const contents = await fs.readFile(`storage/${entry}`);
		allTodos.todos.push(JSON.parse(contents));
	}

	res.send(allTodos);
})

todoRouter.get('/todo/:todoId', async (req, res) => {
	const todoID = req.params.todoId;
	try {
		const todo = await fs.readFile(`storage/${todoID}.json`);
		res.json(JSON.parse(todo));
	} catch (e) {
		console.log(e);
		res.status(500);
		res.send('Get failed');
	}
})

todoRouter.post('/todo', async (req, res) => {
    req.body.id = uuidv4();
    await fs.writeFile(`storage/${req.body.id}.json`, JSON.stringify(req.body));
    res.status(201);
    res.send('Post completed');
})

todoRouter.put('/todo/:todoId', async (req, res) => {
	const todoID = req.params.todoId;
	const updatedTodo = req.body.body
	try {
		await fs.readFile(`storage/${todoID}.json`);
		await fs.writeFile(`storage/${todoID}.json`, JSON.stringify(updatedTodo));
		res.status(201);
		res.send('Update completed');
	} catch (e) {
		console.log(e);
		res.status(500);
		res.send('Update failed');
	}
})

todoRouter.delete('/todo/:todoId', async (req, res) => {
	const todoID = req.params.todoId;
	try {
		fs.unlink(`storage/${todoID}.json`)
		res.status(500);
		res.send('Delete completed');
	} catch (e) {
		console.log(e);
		res.status(500);
		res.send('Delete failed');
	}
})

const sampleTodo = {
	id: uuidv4(),
	description: "some sample task",
	completed: false,
};

export default todoRouter;