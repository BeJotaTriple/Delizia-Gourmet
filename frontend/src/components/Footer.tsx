import LogoFacebook from '../img/facebook_icon-icons.com_53612.ico'
import Logowhasapp from '../img/whatsapp_icon-icons.com_62756.ico'
import Logoyoutube from '../img/1491580651-yumminkysocialmedia28_83061.ico'
import Logoinstagram from '../img/3721672-instagram_108066.ico'
import Logogithub from '../assets/github.png'

function Footer (){
    return (
        <footer>
        <div className="footer-content">
            <div className="footer-info">
                <h2>Contáctanos</h2>
                <p>Teléfono: (321) 618-1930</p>
                <p>Email: deliziaGourmet@hotmail.com</p>
                <p>Dirección: Calle 11B # 17-48, Cali, Colombia</p>
            </div>
            <div className="social-media">
                <a href="https://es-la.facebook.com/"><img src={LogoFacebook} alt="Facebook"/></a>
                <a href="https://web.whatsapp.com/"><img src={Logowhasapp} alt="WhatsApp"/></a>
                <a href="https://www.youtube.com/"><img src= {Logoyoutube} alt="YouTube"/></a>
                <a href="https://www.youtube.com/"><img src= {Logoinstagram} alt="Instagram"/></a>
                <a href="https://github.com/BeJotaTriple/Delizia-Gourmet.git/"><img src= {Logogithub} alt="Delizia-Gourmet"/></a>
            </div>
        </div>
        <p>&copy; 2024 Delizia-Gourmet. Todos los derechos reservados.</p>
    </footer>
    )
}

export default Footer
