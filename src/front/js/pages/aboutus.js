import React from "react";

export const AboutUs = () => {
    return (
        <div className="footer-view mt-4 ms-4">
            <div className="mb-4">
                <h2 className="text-success">Sobre Nosotros:</h2>
                <p className="fs-4">
                    Somos un equipo apasionado por los coches. Nuestra misión es poder brindarte el mejor servicio de alquiler de coches propios.<br></br>
                    Con 10 años de experiencia, hemos logrado ser la empresa mas confiable del mercado. <br></br>
                    En Friendly Wheels nos esforzamos por brindarle a nuestros clientes productos y servicios de calidad. <br></br>
                    El compromiso de nuestro equipo es satisfacer las necesidades y superar las expectativas de los clientes en cada interacción.
                </p>
            </div>
            <div className="mb-4">
                <h2 className="text-success">Contáctanos:</h2>
                <p className="fs-4"> Email address: terms@friendlywheels.com</p>
                <p className="fs-4">Teléfono: +34 555-123-4567</p>    
            </div>
            <div className="mb-5">
                <h2 className="text-success">Nuestra ubicación:</h2>
                <p className="fs-4">Calle de Alcalá, 7, Madrid, España</p>
                <div>
                    <iframe className="about-us-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.6120661481364!2d-3.7062251553515724!3d40.41744398219789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422880c8b4ab29%3A0x6c7774ca745f425c!2sC.%20de%20Alcal%C3%A1%2C%207%2C%20Centro%2C%2028014%20Madrid!5e0!3m2!1ses!2ses!4v1716198130459!5m2!1ses!2ses" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
 };