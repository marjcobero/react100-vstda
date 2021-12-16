import React from "react";

const ViewToDo= props => (
    <div className="panel panel-default">
        <div className="panel-heading">View Todos</div>
        {props.id === 0 ? (<div className="alert-success panel-body">
        <strong>Welcome to the Very Simple Todo App!</strong>
        <div>Get started now by adding a new todo on the left.</div></div>) : (<div className="panel-body"></div>)}
        
        <ul className= "list-group">
        {props.todosArray.map(todo => {
        return <li className={
            todo.completed ? "alert alert-success" : 
            (todo.priority === 1 ? "alert alert-info" : 
            todo.priority === 2 ? "alert alert-warning" : "alert alert-danger")}
            role="alert" key={todo.id}>

            <input 
                className="form-check-input" 
                type="checkbox" 
                onChange={() => props.onDone(todo)} /> {todo.text}
            <a className="delete-todo glyphicon glyphicon-trash pull-right" onClick={() => props.onDelete(todo)}
            href="#"></a>
            <a className="edit-todo glyphicon glyphicon-edit pull-right" onClick={() => props.onEdit(todo)} href="#"></a>
                </li>
            })}
        </ul>
    </div>
)

export default ViewToDo;