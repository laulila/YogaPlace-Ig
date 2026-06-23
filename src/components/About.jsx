import perfil from "../assets/images/perfil.jpg";

export default function About() {
  return (
    <section className="about">

      <img src={perfil} alt="Laura profesora de yoga" />

      <div>
        <h2>Sobre mí</h2>

        <p>
          Soy profesora de yoga y acompaño
          procesos de bienestar físico y mental
          a través de la práctica consciente.
        </p>
      </div>

    </section>
  );
}