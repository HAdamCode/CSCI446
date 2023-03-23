import './NewTodo.css';
export default function CreateTodo({}) {
    var description;
    const descChange = (event) => {
        description = event.target.value;
    };
    var completed;
    const completedChange = (event) => {
        completed = event.target.value;
    };
    return (
        <div>
            <link rel="stylesheet" href="NewTodo.css"/>
            <form id="todoForm" onSubmit={() => createTodoCall({description, completed})}>
              <div class="description-wrapper">
                Description: <input type="text" name="description" onChange={descChange}></input>
                </div>
                <div class="completed-wrapper">
                Completed: <input type="checkbox" name="completed" onChange={completedChange}></input>
                </div>
                <div class="add-wrapper">
                <button type="submit">Add</button>
                </div>
            </form>
        </div>
      );
}




export async function createTodoCall({description="sample text", completed=false}) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if (completed == "on") {
        completed = true
    }


    var raw = JSON.stringify({
        "description": description,
        "completed": completed
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:3001/todo", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}