// //Tüm Elementleri Seçmek

// const form = document.querySelector("#todoAddForm");
// const addInput = document.querySelector("#todoName");
// const todoList = document.querySelector(".list-group");
// const firstCardBody = document.querySelectorAll(".card-body")[0];
// const secondCardBody = document.querySelectorAll(".card-body")[1];
// const clearButton = document.querySelector("#clearButton");
// const filterInput = document.querySelector("#todoSearch");


// let todos = [];

// ranStar();


// function ranStar() {

//     form.addEventListener("submit",addList);
    
// };


// function addList(e) {

// const inputValue = addInput.value.trim();

// if (inputValue==null||inputValue=="") {

//     showAlert("danger","Input bos buraxilmaz!");
    
// }
// else{

// addToDoList(inputValue);
// addTodoToStorage(inputValue);
// showAlert("success",`${inputValue}`+" Elave edildi..");

// }
//     e.preventDefault();
// };


// function addToDoList(inputTxt) {

 
// let li = document.createElement("li");
// li.className="list-group-item d-flex justify-content-between";
// li.textContent=inputTxt;
// let a = document.createElement("a");
// a.className="delete-item"
// a.href="#"
// let i = document.createElement("i");
// i.className="fa fa-remove";

// todoList.appendChild(li);
// li.appendChild(a);
// a.appendChild(i);
    
// addInput.value="";
// }

// function addTodoToStorage(newTodo) {
//     checkTodosFromStorage();
//     todos.push(newTodo);
//     localStorage.setItem("todos", JSON.stringify(todos));
// }

// function checkTodosFromStorage() {
//     if (localStorage.getItem("todos") === null) {
//         todos = [];
//     } else {
//         todos = JSON.parse(localStorage.getItem("todos"));
//     }
// }

// function showAlert(type,text) {
//     let div = document.createElement("div");
//     div.className=`alert alert-${type}`;
//     div.textContent=text;

//     firstCardBody.appendChild(div);

//     setTimeout(function () {
//         div.remove();
        
//     },2500);
    
// }


   
// let users = [
//     {
//         userId:5,
//         post:"Taleh posdu 1"

//     },
//     {
//         userId:5,
//         post:"Taleh posdu 2"
//     },
//     {
//         userId:6,
//         post:"Ramil postu 1"
//     },
//     {
//         userId:7,
//         post:"Vusal postu 1"
//     }
// ]


// function getUserId(collback) {
//     setTimeout(()=>{
//         let num = 5;
//         return getUserPost(num);
//     },1000)
    
// }

// function getUserPost(userId) {
    
//     setTimeout(()=>{

//         users.forEach((user)=>{
//             if (user.userId==userId) {
//                 console.log(user.post);
//             }

//         })

//     },500)

// }

// getUserId(getUserPost);

// let users=[
//     {
//         id:1,
//         post:"Taleh post 1"
//     },
//     {
//         id:1,
//         post:"Taleh post 2"
//     },
//     {
//         id:2,
//         post:"Ramil post 1"
//     },
//     {
//         id:2,
//         post:"Ramil post 2"
//     },
//     {
//         id:3,
//         post:"Iqbal post 1"
//     },
//     {
//         id:3,
//         post:"Iqbal post 2"
//     }
// ]


// function getUserId(collback) {
//     setTimeout(()=>{
//         let num=prompt("Sayi gitin");
//        return collback(num)
//     },1000);
    
// }

// function getUserPost(userId) {

//     setTimeout(()=>{
//         users.forEach((user)=>{
//             if(userId==user.id){

//                 console.log(user.post);

//             }
//         });

//     },500);

    
// }

// getUserId(getUserPost);

// function prepareURL(url,id) {
//     if (id==null) {
//         return url
        
//     }
//     return `${url}?postId=${id}`
    
// }


// function getComment(url,id) {
    
//     let newURL = prepareURL(url,id);
//     let xml = new XMLHttpRequest();
    
//     xml.addEventListener("readystatechange",()=>{
//          if (xml.readyState===4&&xml.status===200) {

//             console.log(JSON.parse(xml.responseText));
        
//     }
//     })

//    xml.open("GET",newURL);
//    xml.send();
    
// }

// function getData(url){

//     const xmld = new XMLHttpRequest();
// console.log("object");
//     xmld.addEventListener("readystatechange",()=>{
        
//          if(xmld.readyState===4&&xmld.status==200){
//         console.log(JSON.parse(xmld.responseText));
//     }
//     })


   
//     xmld.open("GET",url);
//     xmld.send();
// }


// getData("https://jsonplaceholder.typicode.com/users");

// getComment("https://jsonplaceholder.typicode.com/comments",1)



// function getUsers(url) {

//     const xml = new XMLHttpRequest();

//     xml.addEventListener("readystatechange",()=>{
//         if(xml.readyState===4&&xml.status===200){
//             console.log(JSON.parse(xml.responseText));
//         }
//     })
    
//     xml.open("ET",url);
//     xml.send();
// }

// getUsers("https://jsonplaceholder.typicode.com/users");



//  function  start(){
//      fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(async data=>{
//         const result = await data.json()
//         console.log(result)
//         for (let index = 0; index < result.length; index++) {
//             const element = result[index];
//             // console.log(element)
//             console.log(element.id,element.title);

//         }
//     }).catch(err=>{
//         console.log(err,'err')
//     });
// }

// function start () {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//        .then(async data=>{
//            const result = await data.json()
//            console.log(result)
//            for (let index = 0; index < result.length; index++) {
//                const element = result[index];
//                // console.log(element)
//                console.log(element.id,element.title);
   
//            }
//        }).catch(err=>{
//            console.log(err,'err')
//        });
// }


// start();



// function UserIdandComments(id) {

//        fetch('https://jsonplaceholder.typicode.com/posts')
//        .then((response)=>response.json())
//        .then((data)=>{
//         data.forEach(element => {
//             if (id==element.userId) {
//                 console.log(element.userId,":",element.id,":",element.body);
//             }
//         });
//        })



    
// }

// UserIdandComments(2);



// document.querySelector("#todoAddButton").addEventListener("click",async ()=>{
//     const post = await (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json()
//     const comments = await(await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)).json()
//     console.log(comments);
// })


const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imagelistWrapper = document.querySelector(".imagelist-wrapper");


runEventListeners();


function runEventListeners() {
   

    form.addEventListener("submit",search);
    clearButton.addEventListener("click",clear);
    
}

function clear() {


   searchInput.value="";
//    Array.from(imagelistWrapper.children).forEach((child)=>child.remove())
    imagelistWrapper.innerHTML="";
}


function search(e) {
    const value = searchInput.value.trim();

    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method: "GET",
        headers: {
            Authorization: "Client-ID bLBo_xY7HaTG43wB-l9pjkQoGWguzZu1p6wNG3KYDyY"
        }
    })
    .then((res)=>res.json())
    .then((data)=>{
       data.results.forEach((img)=>{
        // console.log(img.urls.small);
        addImageToUI(img.urls.small);
        })
    })
    .catch((err)=> console.log(err))


    e.preventDefault();
    
}

function addImageToUI(url){

    const div = document.createElement("div");
    div.className="card";


    const img = document.createElement("img");
    img.setAttribute("src",url);
    img.height='400';
    img.width='400';


    div.appendChild(img);
    imagelistWrapper.appendChild(div);
    
}