const todo=document.querySelector("#todo");
const progress=document.querySelector("#progress");
const done=document.querySelector("#done");
// const addBtn=document.querySelector(".add-btn");
// const input=document.querySelector(".input");

const tasks= document.querySelectorAll(".task");
tasks.forEach(task=>{
    task.addEventListener("drag",(e)=>{
        console.log("dragging",e);
    })
})