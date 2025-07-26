function loadNotes() {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  const container = document.getElementById("notes-container");
  container.innerHTML = "";
  notes.forEach((note, index) => {
    const div = document.createElement("div");
    div.className = "note";
    div.innerHTML = `
      ${note}
      <button onclick="deleteNote(${index})">×</button>
    `;
    container.appendChild(div);
  });
}

function addNote() {
  const input = document.getElementById("note-input");
  const note = input.value.trim();
  if (note !== "") {
    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(note);
    localStorage.setItem("notes", JSON.stringify(notes));
    input.value = "";
    loadNotes();
  }
}

function deleteNote(index) {
  const notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  loadNotes();
}

window.onload = loadNotes;
