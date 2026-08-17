import "./Industries.scss";
import { Icon } from "@iconify/react";

interface Industry {
  number: string;
  title: string;
  description: string;
  icon: string;
}

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
      "Secado eficiente para equipamiento utilizado durante toda la jornada.",
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
    title: "Otros sectores",
    description:
      "Desarrollamos soluciones específicas para diferentes necesidades.",
    icon: "+",
  },
];

function Industries() {
  return (
    <section className="industries" id="industrias">
      <div className="industries__header">
        <span className="industries__number">
          04 / INDUSTRIAS
        </span>

        <div>
          <h2>
            Soluciones
            <br />
            para cada
            <br />
            industria.
          </h2>
        </div>

        <p>
          Nuestros equipos se adaptan a diferentes
          industrias, espacios y condiciones de trabajo.
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

            <span className="industry-card__arrow">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Industries;