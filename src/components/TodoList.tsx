import Modal from 'react-modal'
import { useState } from "react";
import { EditTaskModal } from './EditTaskModal';
import { Task } from './intrerfaces/Task';

Modal.setAppElement("#root");

export const TodoList = (props: any) => {
    const { tasks, editTask, deleteTask } = props;
    const [task, setTask] = useState<Task>({
        id: 0,
        task: 'Exemplo de Task',
        priority: 'HIGH',
        status: 'Hurry'
    });
    const [modalIsOpen, setIsOpen] = useState(false);

    function handleOpenModal(task: Task) {
        setTask(task);
        setIsOpen(true);
    }

    function handleCloseModal() {
        setIsOpen(false);
    }

    const customStyles = {
        content: {
            margin: '0 auto',
            width: '400px',
            height: '350px'
        }
    }

    return (
        <div className="cont-tasks">

            {
                (tasks.length == 0) ? (
                    <div>
                        <p>Começe digitando as terefas mais importantes pra voce </p>
                    </div>
                ) : (
                    <table className="tbl-tasks">
                        <tr>
                            <th>ID</th>
                            <th>TASK</th>
                            <th>PRIORITY</th>
                        </tr>
                        {
                            tasks.map((task: any) => {
                                return (
                                    <tr className={task.priority}>

                                        <td>{task.id}</td>
                                        <td>{task.task}</td>
                                        <td>{task.priority}</td>

                                        <td>
                                            <a href="#" onClick={() => { handleOpenModal(task) }}>
                                                EDIT
                                            </a>
                                        </td>
                                        <td>
                                            <a href="#" onClick={() => { deleteTask(task) }}>
                                                DELETE
                                            </a>
                                        </td>

                                    </tr>
                                )
                            })
                        }
                    </table>
                )
            }

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={handleCloseModal}
                style={customStyles}
            >
                <h2>Hello World</h2>
                <div>

                    <fieldset>Update the Task
                        <form action="">
                            <input type="text" value={task.id} disabled />
                            <br />
                            <input type="text" placeholder='Name of your task' value={task.task} />
                            <br />
                            <input type="text" placeholder='Priority' value={task.priority} />
                            <br />
                            <input type="text" value={task.status} />
                            <textarea name="" id="" cols="30" rows="5">
                                Something here
                            </textarea>
                            <br />
                            <button onClick={event => {
                                event.preventDefault()
                                console.log("Agora Preciso Atualizar a TASK!!!")
                            }}>Confirm Update</button>
                        </form>
                    </fieldset>

                </div>

                <button onClick={handleCloseModal}>Close Modal</button>

            </Modal >
        </div >

    )
}