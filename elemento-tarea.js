class ElementoTarea extends HTMLElement {	
    constructor(){	
      super();	
      cargarTemplate("#elemento-tarea", this);

      this.completada = this.getAttribute("completada") === "true";
    }
    
    connectedCallback() {
      this.tarea = this.shadowRoot.querySelector(".tarea");
      this.checkbox = this.shadowRoot.querySelector(".checkbox"); 
      this.configurarCheckbox();
      if(this.completada) {
        this.marcarCompleta();
      }
    }
    
    marcarCompleta() {     
      this.tarea.style.color = "grey";
      this.checkbox.innerText = "✔";
    }

    marcarIncompleta() {
      this.tarea.style.color = "black";
      this.checkbox.innerHTML = "⚪";
    }

    configurarCheckbox() {
      
      this.checkbox.addEventListener('click', () => {  

        this.completada = !this.completada;
        if(this.completada) {
          this.marcarCompleta();
        } else {
          this.marcarIncompleta();
        }
      });
    }
   
}	
customElements.define("elemento-tarea", ElementoTarea);