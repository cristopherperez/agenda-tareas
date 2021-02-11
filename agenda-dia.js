class AgendaDia extends HTMLElement {	
    constructor(){	
        super();	
        cargarTemplate("#agenda-dia", this);	
    }	
}	
customElements.define("agenda-dia", AgendaDia);