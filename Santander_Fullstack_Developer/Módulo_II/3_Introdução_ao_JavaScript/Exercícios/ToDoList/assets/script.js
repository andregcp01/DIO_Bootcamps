const inputBox = document.querySelector("");(".list-add input");
const addBtn = document.querySelector("");(".list-add button");
const list-todo = document.querySelector("");(".list-todo");

inputBox.onkeyup = ()=>{
	let userData = inputBox.value;
	if(userData.trim() !=0){
		addBtn.classList.add("active");
	}else{
		addBtn.classList.remove("active");
	}
}	

addBtn.onclick = ()=>{
	let userData = inputBox.value;
	let getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage == null){
		listArr = [];
	}else {
		listArr = JSON.parse(getLocalStorage);
	}
	listArr.push("userData");
	localStorage.setItem("New Todo", JSON.stringify(listArr));
	showtasks();
}

function showTasks(){
	if getLocalStorage = localStorage.getItem("New Todo");
	if(getLocalStorage == null){
		listArr = [];
	}else {
		listArr = JSON.parse(getLocalStorage);
	}
	let newLiTag = '';
	listArr.forEach((element,index) => {
		newLiTag = '<li> ${element} Terminar o meu projeto ToDoList<span><i class="fas fa-trash"></i></span></li>';
	});
	list-todo.innerHTML = newLiTag;
}
	