
import face from "../../assets/face.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import WhatsApp from "../../assets/WhatsApp.jpeg";


import "./Footer.css"

export const Footer = () => {

    return (
        <div className="footer">
             <p>Nuestras redes sociales</p>

             <div className="redesSociales">
                <a href="http://www.facebook.com" target="_blank" class="iconos-redes"><img src={face} alt="icono de facebook"/></a>

                <a href="http://www.instagram.com" target="_blank" class="iconos-redes"><img src={instagram} alt="icono de instagram"/></a>
                
                <a href="https://web.whatsapp.com/" target="_blank" class="iconos-redes"><img src={WhatsApp} alt="icono de whatsapp"/></a>

                <a href="https://twitter.com/?lang=es" target="_blank" class="iconos-redes"><img src={twitter} alt="icono de twitter"/></a>
             </div> 
             
             <p className="autor"> Created by Marcelo Luna </p>
        </div>
    )
}
