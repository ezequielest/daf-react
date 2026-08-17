import "./ArgentinaMap.scss";
import argentinaMap from "./argentina.svg";

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
      <div className="argentina-map__header">
        <span>06 / DAF EN ARGENTINA</span>

        <h2>
          DAF
          <br />
          llega
          <br />
          más lejos.
        </h2>

        <p>
          Nuestros equipos ya están trabajando en
          diferentes puntos del país.
        </p>
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

        <div className="argentina-map__locations">

          <div className="argentina-map__stats">
            <div>
              <strong>12</strong>
              <span>destinos</span>
            </div>

            <div>
              <strong>7</strong>
              <span>provincias</span>
            </div>
          </div>

          <div className="argentina-map__list">

            {locations.map((location, index) => (
              <div
                className="argentina-map__location"
                key={location.name}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <strong>{location.name}</strong>
                  <small>{location.province}</small>
                </div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default ArgentinaMap;