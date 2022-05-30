export const EditTaskModal = (props: any) => {
    const { task } = props;

    return (
        <div className="edit-modal">
            <button className="btn-close-modal">Close</button>

            <h1>Edit This Task</h1>

            <label htmlFor="">ID</label>
            <input type="text" value={task.id} />

            <label htmlFor="">Task</label>
            <input type="text" name="task" value={task.task} />

            <label htmlFor="">Priority</label>
            <input type="text" name="task" value={task.priority} />

        </div>
    )
}