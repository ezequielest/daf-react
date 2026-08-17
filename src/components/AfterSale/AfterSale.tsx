import "./AfterSale.scss";

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
    title: "Mantenimiento",
    description:
      "Mantenemos los equipos en condiciones óptimas para garantizar su funcionamiento y prolongar su vida útil.",
  },
  {
    number: "03",
    title: "Reparaciones",
    description:
      "Servicio técnico para resolver fallas y recuperar rápidamente el funcionamiento del equipo.",
  },
  {
    number: "04",
    title: "Repuestos",
    description:
      "Disponibilidad de repuestos para mantener los equipos operativos y extender su vida útil.",
  },
  {
    number: "05",
    title: "Soporte remoto",
    description:
      "Asistencia a distancia para resolver consultas técnicas y acompañar el funcionamiento de los equipos.",
  },
  {
    number: "06",
    title: "Garantía",
    description:
      "Respaldamos nuestros equipos y acompañamos al cliente durante todo el período de garantía.",
  },
];

function AfterSales() {
  return (
    <section className="after-sales" id="post-venta">

      <div className="after-sales__header">

        <span>08 / POSTVENTA</span>

        <h2>
          El equipo
          <br />
          sigue funcionando.
        </h2>

        <p>
          Nuestro trabajo no termina con la entrega.
          Acompañamos a cada cliente para que sus
          equipos sigan funcionando correctamente.
        </p>

      </div>

      <div className="after-sales__content">

        <div className="after-sales__intro">

          <span className="after-sales__label">
            SERVICIO DAF
          </span>

          <h3>
            Seguimos
            <br />
            acompañando.
          </h3>

          <p>
            Desde el asesoramiento técnico hasta el
            soporte y mantenimiento, contamos con
            soluciones para acompañar cada etapa.
          </p>

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

              <span className="after-sales__arrow">
                ↗
              </span>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default AfterSales;