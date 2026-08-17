import "./CTA.scss";

function CTA() {
  return (
    <section className="cta" id="contacto">

      <div className="cta__background" />

      <div className="cta__content">

        <span className="cta__label">
          10 / ASESORAMIENTO
        </span>

        <div className="cta__main">

          <h2>
            ¿Tenés un
            <br />
            proyecto?
            <br />
            <strong>Hablemos.</strong>
          </h2>

          <p>
            Contanos qué necesitás y te ayudamos
            a encontrar la solución adecuada para
            tu proyecto.
          </p>

          <a
            href="#contacto"
            className="cta__button"
          >
            <span>
              Solicitar asesoramiento
            </span>

            <span>
              →
            </span>
          </a>

        </div>

      </div>

      <div className="cta__footer">

        <span>
          DAF EQUIPAMIENTOS
        </span>

        <span>
          MAR DEL PLATA · ARGENTINA
        </span>

      </div>

    </section>
  );
}

export default CTA;