//pehle se saved notes ko load karo jab page load ho
window.load=function(){
  showNotesOnScreen();
}
//add note jab user kuch likhe aur button dabaye 
function addNote(){
  const inputbox=document.getElementById("user-input");
  const noteText=inputbox.value.trim();
  if(noteText === " "){
    alert("the note cannot be empty!");
    return;
  }

  //pehle se saved notes uthao ya khali array banao
  let notes=JSON.parse(localStorage.getItem("notes"))||[];

  //naya note add karo
  notes.push(noteText)

  //localstorage me update karunga
  localStorage.setItem("notes",JSON.stringify(notes));

  //input box clear karo and screen update karo 
  inputbox.value="";
  showNotesOnScreen();
}
//screen pe sab notes dikahne ka kaam
function showNotesOnScreen(){
  const container=document.getElementById("notes-container");
  container.innerHTML=""; //purane display ko clear karo

  const notes=JSON.parse(localStorage.getItem("notes")) || [];

  notes.forEach((note,Index) => {
        const noteDiv = document.createElement("div");
    noteDiv.className = "note";

    noteDiv.innerHTML = `
      <p>${note}</p>
      <button onclick="deleteNote(${index})">❌</button>
    `;

    container.appendChild(noteDiv);
    
  });
}