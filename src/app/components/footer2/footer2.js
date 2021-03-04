class miFooter2 extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    <style>
      @import "/src/app/components/footer2/footer.css";
    </style>
    

    <footer>
        <div class="footerContainer">
            <div class="primeraFila">

                <div class="footerContact">

                    <div class="contactoInfo">
                        <div class="icono">
                            <i class="fas fa-phone"></i>
                        </div>
                        <div class="texto">
                            <h4>Teléfono</h4>
                            <p>34 653 25 19 83</p>
                        </div>
                    </div>

                    <div class="contactoInfo">
                        <div class="icono">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div class="texto">
                            <h4>Dirección</h4>
                            <p>Valencia - España</p>
                        </div>
                    </div>

                    <div class="contactoInfo">
                        <div class="icono">
                            <i class="far fa-envelope-open"></i>
                        </div>
                        <div class="texto">
                            <h4>Email</h4>
                            <p>info@microdeveloper.es</p>
                        </div>
                    </div>
                </div>
                <hr>
            </div>


            <div class="segundaFila">

            <div class="presentacion">
            <div class="titulo">
                <h3>Suscribete</h3>
            </div>
            <div class="texto">
                <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
            </div>
            <div class="suscripcion">
                <form action="#">
                    <input type="text" placeholder="&#xf003; Email Address">
                    <button><i class="fab fa-telegram-plane"></i></button>
                </form>
            </div>
        </div>
                <div class="presentacion">
                    <div class="logo">
                        <a href="index.html"><img src="/src/assets/images/logoEmpresa/micro.png" class="img-fluid"
                                alt="logo" /></a>
                    </div>
                    <div class="texto">
                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor
                            incididuntut consec tetur adipisicing
                            elit,Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="socialMedia">
                        <h4>Sigueme</h4>
                        <a href="#"><i class="fab fa-facebook-f facebook-bg"></i></a>
                        <a href="#"><i class="fab fa-twitter twitter-bg"></i></a>
                        <a href="#"><i class="fab fa-google-plus-g google-bg"></i></a>
                    </div>
                </div>

                <div class="presentacion">
                    <div class="titulo">
                        <h3>Enlaces de interés</h3>
                    </div>
                    <div class="menuFooter">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">services</a></li>
                            <li><a href="#">portfolio</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Expert Team</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Latest News</a></li>
                        </ul>
                    </div>
                </div>


                
            </div>
        </div>


        <div class="terceraFila">
            <div class="copyright">
                <div class="texto">
                    <p>Copyright &copy; 2021, All Right Reserved <a href="https://microdeveloper.es/">Micro</a></p>
                </div>
                <div class="textosLegales">                   
                        <p>
                            <a href="#"> Home </a>
                            <a href="#"> Terms </a>
                            <a href="#"> Privacy </a>
                            <a href="#"> Policy </a>
                            <a href="#"> Contact </a>
                        </p>                   
                </div>
             </div>
        </div>
    </footer>
  `;
     }
}
customElements.define("mi-footer2", miFooter2);

