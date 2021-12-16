import React from "react";

const AddToDo = props => {
    return(
        <div className="panel panel-default">
            <div className="panel-heading">Add New Todo</div>
            <div className="panel-body">
            <textarea 
                className="create-todo-text"
                value={props.value} 
                onChange={props.onChange}>
            </textarea>
            <div className="form-group">
                <label className="label-move">&nbsp;How much of a priority is this?:&nbsp;</label>
                <select 
                className="create-todo-priority form-control" 
                style={{'width':'100%'}} 
                ist="priority" 
                onChange={props.changePriority}>
                <option selected>Select a Priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                </select> 
            </div>
            </div>
            <div 
                className="panel-footer" 
                style={{'width':'100%'}}>
                <button 
                className="btn-gradient green block create-todo move-btn" 
                onClick={props.onSubmit}>&nbsp;Add</button>
            </div>
        </div>
        )  
    }

export default AddToDo;