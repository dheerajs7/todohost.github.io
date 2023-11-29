 // Get DOM elements
const inputBox  = document.querySelector("#input-box");
const taskBox = document.querySelector("#list-container");
const taskCounter= document.querySelector("#tasks-counter");
const clearall =document.querySelector("#clear-all");
const completeall =document.querySelector("#complete-all")
const complete =document.querySelector(".com");
const incomplete = document.querySelector(".rem");
const all = document.querySelector(".all");

//variable to count tasks
var listlength =0;

//  Function to add a task to the DOM
function addTask(){
    if(inputBox.value ===''){
        alert("Please enter your task!!");
    
    }
    else{
        let li =document.createElement("li");
        li.innerHTML =inputBox.value;
        taskBox.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
        taskBox.appendChild(li);
        listlength=listlength+1;
        taskCounter.textContent=`${listlength}`;    
 }
    inputBox.value ="";
    saveData();
}

// adding event to check and remove the task from list
taskBox.addEventListener('click', function (e) {
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        listlength =listlength-1;
        if(listlength!=-1){
        taskCounter.textContent =`${listlength}`;
        }
        saveData();
    }
},false);

// To check all the task from list
const tasks =taskBox.getElementsByTagName("LI");
completeall.addEventListener("click",function(){
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].classList.toggle("checked");
        saveData();
    }
});

// To remove all the task from list
clearall.onclick = () => {
    taskBox.innerHTML='';
    listlength=0;
    taskCounter.textContent =`${listlength}`;
    saveData();
}

//To view all task in list
all.addEventListener("click",function(){
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display="block";
        saveData();
}});

//To view completed tasks
complete.addEventListener("click",function(){
    for (let i = 0; i < tasks.length; i++) {
         tasks[i].style.display="none";
       if (tasks[i].classList.contains("checked")) {
        tasks[i].style.display ="block";
       }
       saveData();}});

 //To view incomplete tasks      
incomplete.addEventListener("click",function(){
    for (let i = 0; i < tasks.length; i++) {
        tasks[i].style.display="none";
       if (!tasks[i].classList.contains("checked")) {
        tasks[i].style.display ="block";
       }
       saveData();}});

// Funtion to save the data in the local storage
function saveData(){
    localStorage.setItem("data", taskBox.innerHTML);
    localStorage.setItem("count",taskCounter.innerHTML);
}
function showTask(){
     taskBox.innerHTML = localStorage.getItem("data");
     taskCounter.innerHTML = localStorage.getItem("count");
     
}
showTask();