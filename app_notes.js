console.log('hello');
showNotes();
let addbtn = document.getElementById("addbtn");
addbtn.addEventListener('click', function(e){

let addtxt = document.getElementById("addtxt");
let addTitle = document.getElementById("name");

let notes = localStorage.getItem("notes");
if(notes==null){
 notesobj = [];
}else{
    notesobj = JSON.parse(notes);
}

let Myobj ={
title:addTitle.value,
text:addtxt.value
}

notesobj.push(Myobj);
 

localStorage.setItem("notes", JSON.stringify(notesobj));
addtxt.value = '';
addTitle.value = '';
console.log(notesobj)
showNotes();

    





})




function showNotes(){
let notes = localStorage.getItem("notes");
if(notes==null){
    notesobj = [];
}else{
    notesobj = JSON.parse(notes);
}
let html='';

notesobj.forEach(function(element , index){

console.log(element[0])
    html += `
    <div class="card my-2 mx-2 notecard" style="width: 18rem;">
   
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.text}</p>
              <button id=${index} onclick=deleteNote(this.id) class="btn btn-primary">Delete Notes</button>
            </div>
          </div>
    `;

 


})

let notElm = document.getElementById("notes");
if(notesobj.lenght!=0){
    notElm.innerHTML = html;
}else{
    notElm.innerHTML = `Nothing to show! Use "Add a Note" section above to add notes.`;
}

}

function deleteNote(index){


let notes = localStorage.getItem("notes");
if(notes== null){
    notesobj = [];
}else{
    notesobj = JSON.parse(notes);
}

notesobj.splice(index,1)
localStorage.setItem("notes", JSON.stringify(notesobj));
showNotes();




}



let search= document.getElementById('search'); 
search.addEventListener("input", function(e){

let inputVal = search.value.toLowerCase();

let notecard= document.getElementsByClassName("notecard");

Array.from(notecard).forEach(function(element){

let cardTxt = element.getElementsByTagName("p")[0].innerText;
if(cardTxt.includes(inputVal)){

element.style.display="block";

}else{

    element.style.display = "none";
}





})




})