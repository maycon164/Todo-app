type TodoFormType = {
    handleSubmit: Function
}

export const TodoForm = (props: TodoFormType) => {
    const { handleSubmit } = props;
    return (
        <div>

            <form onSubmit={(event) => { handleSubmit(event) }}>

                <label htmlFor="">Name of your Task: </label>
                <br />
                <input type="text" name="task" className="input-text" />
                <br />
                <select name="priority" id="" placeholder="choose a priority">
                    <option value="high">HIGH</option>
                    <option value="medium">MEDIUM</option>
                    <option value="low">LOW</option>
                </select>
                <br />
                <button className="btn">SEND</button>

            </form>

        </div>

    )
}