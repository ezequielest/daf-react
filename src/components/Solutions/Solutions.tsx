import "./Solutions.scss";

interface SolutionStep {
  number: string;
  title: string;
  description: string;
}

const solutionSteps: SolutionStep[] = [
  {
    number: "01",
    title: "Analizamos",
    description:
      "Entendemos el espacio, la cantidad de usuarios y las condiciones de trabajo.",
  },
  {
    number: "02",
    title: "Diseñamos",
    description:
      "Definimos las características del equipo según las necesidades específicas del proyecto.",
  },
  {
    number: "03",
    title: "Fabricamos",
    description:
      "Desarrollamos el equipamiento en Argentina con foco en durabilidad y eficiencia.",
  },
  {
    number: "04",
    title: "Instalamos",
    description:
      "Acompañamos la implementación para que la solución quede lista para funcionar.",
  },
];

function Solutions() {
  return (
    <section className="solutions" id="soluciones">
      <div className="solutions__header">
        <span className="solutions__number">
          05 / SOLUCIONES A MEDIDA
        </span>

        <h2>
          Diseñamos
          <br />
          la solución
          <br />
          que necesitás.
        </h2>

        <p>
          Cuando un equipo estándar no alcanza, desarrollamos
          una solución adaptada a las necesidades de cada
          proyecto.
        </p>
      </div>

      <div className="solutions__process">
        {solutionSteps.map((step, index) => (
          <div
            className="solution-step"
            key={step.number}
          >
            <div className="solution-step__top">
              <span className="solution-step__number">
                {step.number}
              </span>

              {index < solutionSteps.length - 1 && (
                <span className="solution-step__line" />
              )}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>
          </div>
        ))}
      </div>

      <div className="solutions__bottom">
        <span>
          DESARROLLO · FABRICACIÓN · INSTALACIÓN
        </span>

        <button type="button">
          Hablar sobre mi proyecto
          <span>↗</span>
        </button>
      </div>
    </section>
  );
}

export default Solutions;