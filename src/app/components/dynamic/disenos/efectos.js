class miEfectos extends HTMLElement {
    constructor() {
        //  puedes poner argumentos
        super();
        myFunction();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <style>
      @import "/src/app/components/dynamic/disenos/efectos.css";
    </style>
        <div id='c'>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
            <div class='s'></div>
        </div>
     `;
    }
}
customElements.define('mi-efectos', miEfectos);