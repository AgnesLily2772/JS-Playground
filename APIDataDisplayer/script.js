const content = document.createElement("div")
content.className = "content"
content.id = "content"
console.log(content)

const avatars = {1:'\u{1F604}',2:"\u{1F603}",3:"\u{1F602}"	,4:"\u{1F601}",5:"\u{1F605}",6:"\u{1F606}",7:"\u{1F607}",8:"\u{1F610}",9:"\u{1F609}",10:"\u{1F600}"
}

function createTodo (element){
    const newTodo = document.createElement("div")
    newTodo.className = "todo-item"
    const todoItem = document.createElement("p")
    todoItem.className = "todo-title"
    todoItem.textContent = element.title
    const avatarUser = document.createElement("span")
    avatarUser.className = "avatar"
    avatarUser.textContent = avatars[element.userId];
    const status = document.createElement("div")
    status.className = "status"
    newTodo.style.backgroundColor = element.completed ? "#90EE90":"#FF7164"
    newTodo.append(avatarUser,todoItem)
    content.append(newTodo)
}

const request = new XMLHttpRequest()

request.onreadystatechange=function(){
    if(request.readyState === 4 && request.status === 200){
        const response = JSON.parse(this.responseText)
        const shuffledData = response.sort( ()=>Math.random()-0.5 );
        shuffledData.forEach((element) => {
            createTodo(element)
        });
    }
}
request.open("GET","https://jsonplaceholder.typicode.com/todos")
request.send()

document.body.appendChild(content)