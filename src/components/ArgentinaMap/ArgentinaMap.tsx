import "./ArgentinaMap.scss";
import argentinaMap from "./argentina.svg";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Asesoramiento técnico",
    description:
      "Acompañamos cada proyecto para encontrar la solución más adecuada según las necesidades de cada instalación.",
  },
  {
    number: "02",
    title: "Repuestos",
    description:
      "Disponibilidad de repuestos para mantener los equipos operativos y extender su vida útil.",
  },
  {
    number: "03",
    title: "Soporte remoto",
    description:
      "Asistencia a distancia para resolver consultas técnicas y acompañar el funcionamiento de los equipos.",
  }
];

interface Location {
  name: string;
  province: string;
  x: number;
  y: number;
}

const locations: Location[] = [
  {
    name: "Ushuaia",
    province: "Tierra del Fuego",
    x: 48,
    y: 94,
  },
  {
    name: "El Calafate",
    province: "Santa Cruz",
    x: 39,
    y: 79,
  },
  {
    name: "Puerto San Julián",
    province: "Santa Cruz",
    x: 45,
    y: 74,
  },
  {
    name: "Cerro Moro",
    province: "Santa Cruz",
    x: 43,
    y: 70,
  },
  {
    name: "Comodoro Rivadavia",
    province: "Chubut",
    x: 47,
    y: 63,
  },
  {
    name: "Esquel",
    province: "Chubut",
    x: 38,
    y: 62,
  },
  {
    name: "Bariloche",
    province: "Río Negro",
    x: 42,
    y: 55,
  },
  {
    name: "Cerro Catedral",
    province: "Río Negro",
    x: 41,
    y: 54,
  },
  {
    name: "Villa La Angostura",
    province: "Neuquén",
    x: 38,
    y: 51,
  },
  {
    name: "San Martín de los Andes",
    province: "Neuquén",
    x: 39,
    y: 49,
  },
  {
    name: "San José",
    province: "Entre Ríos",
    x: 61,
    y: 37,
  },
  {
    name: "San Juan",
    province: "San Juan",
    x: 42,
    y: 30,
  },
];

function ArgentinaMap() {
  return (
    <section className="argentina-map">
      <span className="argentina-map__number">06 / DAF EN ARGENTINA</span>
      <div className="argentina-map__header">

        <h2>
          DAF, presente en todo el país. 
        </h2>

      </div>

      <div className="argentina-map__content">

        <div className="argentina-map__visual">

          <img
            src={argentinaMap}
            alt="Mapa de Argentina"
          />

          {locations.map((location) => (
            <button
              key={location.name}
              className="argentina-map__point"
              style={{
                left: `${location.x}%`,
                top: `${location.y}%`,
              }}
              type="button"
              aria-label={location.name}
            >
              <span className="argentina-map__pulse" />

              <span className="argentina-map__tooltip">
                <strong>{location.name}</strong>
                <small>{location.province}</small>
              </span>
            </button>
          ))}

        </div>

        <div className="after-sales__services">

          {services.map((service) => (
            <article
              className="after-sales__service"
              key={service.number}
            >

              <span className="after-sales__number">
                {service.number}
              </span>

              <div className="after-sales__service-content">

                <h4>{service.title}</h4>

                <p>{service.description}</p>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default ArgentinaMap;