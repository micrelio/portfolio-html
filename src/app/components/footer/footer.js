class miFooter extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
    <style>
      @import "/src/app/components/footer/footer.css";
    </style>
    <footer>
        <div class="footerContainer">
            <div class="primeraFila">
                <div class="footerContact">
                    
                    <div class="contactoInfo">
                        <div class="icono">
                        <a href="tel:+34653251983">
                            <i class="fas fa-phone"></i>
                            </a>
                        </div>
                        <div class="texto">
                        <a href="tel:+34653251983">
                            <h4>Teléfono</h4>
                            <p>34 653 25 19 83</p>
                            </a>
                        </div>
                    </div>
                                       
                    <div class="contactoInfo">
                        <div class="icono">
                        <a href="https://goo.gl/maps/9UUDsgCz7YnERqvD6" target="_blank">
                            <i class="fas fa-map-marker-alt"></i>
                            </a>
                        </div>
                        <div class="texto">
                        <a href="https://goo.gl/maps/9UUDsgCz7YnERqvD6" target="_blank">
                            <h4>Dirección</h4>
                            <p>Valencia - España</p>
                            </a>
                        </div>
                    </div>             
                      
                    <div class="contactoInfo">
                        <div class="icono">
                        <a href="https://www.microdeveloper.es/src/app/pages/contacto/contacto.php">
                            <i class="far fa-envelope-open"></i>
                            </a>
                        </div>
                        <div class="texto">
                        <a href="https://www.microdeveloper.es/src/app/pages/contacto/contacto.php">
                            <h4>Email</h4>
                            <p>info@microdeveloper.es</p>
                        </a>
                        </div>
                    </div>
                </div>
                <hr>
            </div>

            <div class="segundaFila">
                <div class="footerPresentacion">
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
                        <div class="titulo">
                            <h3>Enlaces de interés</h3>
                        </div>
                        <div class="menuFooter">
                            
                                <p><a class="enlace irInicio" href="/"><i class="fas fa-home" aria-hidden="true"></i> Inicio</a></p>
                                <p><a class="enlace irBiografia" href="/src/app/pages/biografia/biografia.html"><i class="fab fa-leanpub" aria-hidden="true"></i> Biografía</a></p>
                                <p> <a class="enlace irWebs" href="/src/app/pages/webs/webs.html"><i class="fas fa-globe" aria-hidden="true"></i> Webs</a></p>
                                <p><a class="enlace irGaleria" href="/src/app/pages/galeria/galeria.html"><i class="far fa-images" aria-hidden="true"></i> Galería</a></p>
                                <p> <a class="enlace irCurriculum" href="/src/app/pages/curriculum/curriculum.html"><i class="far fa-id-badge" aria-hidden="true"></i> Currículum</a></p>
                                <p> <a class="enlace irContacto" target="_blank" href="/src/app/pages/contacto/contacto.php"><i class="far fa-envelope" aria-hidden="true"></i> Contacto</a></p>
                            
                        </div>
                    </div>
                    
                    <div class="presentacion">
                        <div class="logo">
                        
                            <a href="index.html"><h1>Micro</h1></a>
                                    
                                    
                        </div>
                        <div class="texto">
                            <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor
                                incididuntut consec tetur adipisicing
                                elit,Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div class="socialMedia">
                            <h4>Sígueme</h4>
                            <div class="redes">
                                <div class="iconoSocial  github-bg"><a target="blank" href="https://github.com/micrelio"><i class="fab fa-github"></i></a></div>
                                <div class="iconoSocial"><a class="linkedin-bg" target="blank" href="https://www.linkedin.com/in/jos%C3%A9-antonio-l%C3%B3pez-baena-65833016a/"><i class="fab fa-linkedin"></i></a></div>
                                <div class="iconoSocial"><a class="whatsapp-bg" target="blank" href="https://wa.me/34653251983/" target="_blank"><i class="fab fa-whatsapp"></i></a></div>
                                <div class="iconoSocial"><a class="facebook-bg" target="blank" title="Facebook" href="https://www.facebook.com/micro6"><i class="fab fa-facebook-f"></i></a></div>
                                <div class="iconoSocial"><a class="twitter-bg" target="blank" href="https://twitter.com/Micrelio"><i class="fab fa-twitter"></i></a></div>
                                <div class="iconoSocial"><a class="instagram-bg" target="blank" href="https://www.instagram.com/micrelio.dev/"><i class="fab fa-instagram"></i></a></div>
                                <div class="iconoSocial"><a class="youtube-bg" target="blank" href="https://www.youtube.com/channel/UCMEv1Jj16ypsAXmZXOkKrQA"><i class="fab fa-youtube"></i></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="terceraFila">
            <div class="copyright">
                <div class="texto">
                    <p>Copyright &copy; 2021, All Right Reserved <a href="https://microdeveloper.es/">Micro</a></p>
                    <hr>
                </div>
                <div class="textosLegales">
                
                    <a href="/src/app/pages/textosLegales/politicaDePrivacidad.html"><p> Política de privacidad</p></a>
                    <a href="/src/app/pages/textosLegales/avisoLegal.html"><p> Aviso Legal</p></a>
                    <a href="/src/app/pages/textosLegales/politicaDeCookies.html"><p> Política de Cookies</p></a>
                 
                </div>
            </div>
        </div>
    </footer>

  `;
    }
}
customElements.define("mi-footer", miFooter);