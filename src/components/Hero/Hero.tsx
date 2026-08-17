import TresDDisplayFBX from "../TresDDisplayFBX/TresDDisplayFBX";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero" id="inicio">

      <div className="hero__background">
        <div className="hero__grid" />
      </div>

      <div className="hero__container container">

        <div className="hero__content">

          <span className="hero__eyebrow">
            FABRICACIÓN DE EQUIPOS DE SECADO
          </span>

          <h1>
            Secado
            <span> eficiente.</span>
            <br />
            Equipamiento
            <br />
            profesional.
          </h1>

          <p>
            Diseñamos y fabricamos soluciones de secado para
            empresas, industrias y espacios de trabajo.
          </p>

          <div className="hero__actions">
            <a href="#productos" className="hero__button hero__button--primary">
              Ver productos
              <span>↓</span>
            </a>

            <a href="#nosotros" className="hero__button hero__button--secondary">
              Conocé DAF
            </a>
          </div>

        </div>

        <div className="hero__product">

          <div className="hero__product-label">
            <span>01</span>
            SECABOTAS
          </div>

          <div className="hero__product-placeholder">
            <TresDDisplayFBX url="models/secabotas.fbx" 
                modelPosition={[0, -220, 0]}
                modelRotation={[0, Math.PI / 4 , 0]}
                modelScale={1}
                modelPivot={[-42.6866, -1.8881, 34.6906]}
                rotationSpeed={0.005}/>
          </div>

        </div>

      </div>

      <div className="hero__bottom">
        <span>MAR DEL PLATA · ARGENTINA</span>

        <span>
          SCROLL
          <strong>↓</strong>
        </span>
      </div>

    </section>
  );
};

export default Hero;