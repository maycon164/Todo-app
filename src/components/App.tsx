import { useState, useEffect } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { Task } from './intrerfaces/Task'
import { EditTaskModal } from './EditTaskModal';

export const TodoApp = () => {

    const [tasks, setTasks] = useState<Task[]>([]);

    useEffect(() => {
        setTasks([
            {
                id: 1,
                task: 'Task 1',
                priority: 'medium'
            },
            {
                id: 2,
                task: 'Task 2',
                priority: 'low'
            },
            {
                id: 3,
                task: 'Task 3',
                priority: 'high'
            }
        ])
    }, []);

    function handleSubmit(event: any) {

        event.preventDefault();
        const formTask = event.target;
        const data = new FormData(formTask);
        try {
            const task = { id: tasks.length + 1 };
            data.forEach((value, key) => {
                task[key] = value;
            });
            setTasks([...tasks, task]);

        } catch (error) {
            console.log(error);
        }
    }


    function editTask() {
        console.log("Salvar o Edit Task")
    }

    return (
        <div className='cont-app'>
            <h1>Todo App</h1>

            <TodoForm handleSubmit={handleSubmit} />
            <TodoList tasks={tasks} editTask={editTask} />
        </div>

    )
}
