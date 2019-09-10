
// Skapa en array med värden:
let saker = ["Räkna", "Rita", "Tänka", "Språk"];

//Skapa ett första div element i body inkluderat pargraf och text:
var element = document.getElementById("test");
var div = document.createElement("div");
var para = document.createElement("p");
var node = document.createTextNode("Tero");

element.appendChild(div);
div.appendChild(para);
para.appendChild(node);

// Skriv ut array till en ny div under den tidigare:
element.insertAdjacentHTML("beforeend", "<div>"+ saker + "</div>");
