import "./ValueProposition.scss";

function ValueProposition() {
  return (
    <section className="value-proposition">

      <div className="value-proposition__header">
        <span className="value-proposition__number">
          02 / Cuidamos tu inversion.
        </span>
      </div>

      <div className="value-proposition__content">

        <h2>
          <span>Secos.</span>
          <span>Higienizados.</span>
          <span>Listos.</span>
        </h2>

        <div className="value-proposition__description">
          <p>
            Soluciones profesionales de secado
            diseñadas para mejorar procesos,
            optimizar tiempos y prolongar la vida
            útil del equipamiento.
          </p>
        </div>

      </div>

      <div className="value-proposition__features">

        <div className="value-proposition__feature">
          <span>01</span>
          <h3>Secado</h3>
          <p>
            Eliminación eficiente de humedad.
          </p>
        </div>

        <div className="value-proposition__feature">
          <span>02</span>
          <h3>Higiene</h3>
          <p>
            Un ambiente más limpio y controlado.
          </p>
        </div>

        <div className="value-proposition__feature">
          <span>03</span>
          <h3>Disponibilidad</h3>
          <p>
            Equipamiento listo cuando lo necesitás.
          </p>
        </div>

      </div>

    </section>
  );
}

export default ValueProposition;