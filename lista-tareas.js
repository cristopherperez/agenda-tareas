class ListaTareas extends HTMLElement {
    constructor(){
      super();
      cargarTemplate("#lista-tareas", this);
    } 
  }
  customElements.define("lista-tareas", ListaTareas);

  function tacharTarea(){
    let listaDesordenada = document.querySelectorAll("#lista-desordenada").checked;
    let tarea = document.querySelectorAll("#lista").checked;
  
    if (tarea.hover.text-decoration === "line-through;") {
      tarea.hover.innerHTML = "line-through"
    }
  
    tarea.addEventListener("click", this.tacharTarea);
  }