import perfil from "../assets/images/perfil.jpg";

export default function About() {
  return (
    <section className="about">

      <img 
        src={perfil} 
        alt="Laura profesora de yoga guiando una práctica"
      />

      <div>

        <h2>Sobre mí</h2>

        <p>
          Soy Laura, profesora de yoga y acompaño
          a personas que buscan mejorar su bienestar
          a través del movimiento, la respiración
          y una práctica consciente.
        </p>

        <p>
          Mi objetivo es crear un espacio donde puedas
          conectar con tu cuerpo, reducir el estrés
          y avanzar a tu propio ritmo.
        </p>

      </div>

    </section>
  );
}