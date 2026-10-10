import "./Industries.scss";
import { Icon } from "@iconify/react";

interface Industry {
  number: string;
  title: string;
  description: string;
  icon: string;
}

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
  }
];

const industries: Industry[] = [
  {
    number: "01",
    title: "Minería",
    description:
      "Soluciones de secado para entornos de trabajo exigentes y condiciones extremas.",
    icon: "bitcoin-icons:mining-filled",
  },
  {
    number: "02",
    title: "Petróleo & Gas",
    description:
      "Equipamiento preparado para operaciones de alta exigencia y uso continuo.",
    icon: "temaki:oil-well",
  },
  {
    number: "03",
    title: "Esquí",
    description:
      "Más equipos disponibles, mayor rotación y rentabilidad.",
    icon: "fluent-mdl2:ski-resorts",
  },
  {
    number: "04",
    title: "Alimenticia",
    description:
      "Higiene y disponibilidad en entornos donde los procesos no pueden detenerse.",
    icon: "game-icons:meal",
  },
  {
    number: "05",
    title: "Pesca",
    description:
      "Soluciones adaptadas a ambientes de alta humedad y trabajo intensivo.",
    icon: "mdi:fish",
  },
  {
    number: "06",
    title: "A tu medida",
    description:
      "Diseñamos la solución que necesitas. ¡Consultanos!",
    icon: "mdi:plus",
  },
];

function Industries() {
  return (
    <section className="industries" id="industrias">
        <span className="industries__number">
          04 / INDUSTRIAS
        </span>
      <div className="industries__header">

        <div>
          <h2>
            Equipamiento para<br></br>cada industria.
          </h2>
        </div>

        <p>
          <b>DAF responde en entornos exigentes.</b><br></br>
          Nuestros equipos se adaptan a diferentes sectores, espacios y condiciones de trabajo, ofreciendo soluciones de secado confiables para cada operación.
        </p>
      </div>

      <div className="industries__grid">
        {industries.map((industry) => (
          <article
            className="industry-card"
            key={industry.number}
          >
            <div className="industry-card__top">
              <div className="industry-card__icon">
                <Icon icon={industry.icon} />
              </div>

              <span>{industry.number}</span>
            </div>

            <div className="industry-card__body">
              <h3>{industry.title}</h3>

              <p>{industry.description}</p>
            </div>

            {/* <span className="industry-card__arrow">
              ↗
            </span> */}
          </article>
        ))}
      </div>
      <div className="solutions__header">
        <h3>
        Cuando un equipo estándar no alcanza, desarrollamos una solución adaptada a las necesidades de cada proyecto. 
        </h3>
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

    </section>
  );
}

export default Industries;