class miFooter2 extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/components/footer2/footer.css";
    </style>
    

  `;
     }
}
customElements.define("mi-footer2", miFooter2);

