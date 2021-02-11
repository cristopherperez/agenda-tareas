class FechaAgenda extends HTMLElement {	
    constructor(){	
      super();	
      cargarTemplate("#fecha-agenda", this);	
      
      this.fecha = new Date(this.getAttribute("fecha"));
      this.diaSemana = this.fecha.getDay();
      this.diaMes = this.fecha.getDate();
      this.mes = this.fecha.getMonth();
      this.anio= this.fecha.getFullYear();
    }	
  
    connectedCallback() {
      const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const nombreDia = dias[this.diaSemana];
      this.shadowRoot.querySelector("h1").innerHTML = nombreDia;
      const meses = ["Enero", "Febrero", "Marzo", "Abril" ,"Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
      const nombreMes = meses[this.mes];
      this.shadowRoot.querySelector("div").innerHTML = nombreMes + " " +  this.diaMes + ", " + this.anio; 
    }    
  }	
  customElements.define("fecha-agenda", FechaAgenda);