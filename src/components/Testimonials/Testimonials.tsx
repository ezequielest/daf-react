import { useState } from "react";
import "./Testimonials.scss";

interface Testimonial {
  quote: string;
  name: string;
  company: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "El equipo se adaptó perfectamente a nuestras necesidades y nos permitió mejorar considerablemente el proceso de secado.",
    name: "Nombre del cliente",
    company: "Empresa / Organización",
    location: "Bariloche, Río Negro",
  },
  {
    quote:
      "Destacamos la calidad del equipo y el acompañamiento durante todo el proceso de instalación.",
    name: "Nombre del cliente",
    company: "Empresa / Organización",
    location: "Ushuaia, Tierra del Fuego",
  },
  {
    quote:
      "La solución fue desarrollada específicamente para nuestro espacio y cumplió con lo que necesitábamos.",
    name: "Nombre del cliente",
    company: "Empresa / Organización",
    location: "San Martín de los Andes, Neuquén",
  },
  {
    quote:
      "Un equipo robusto, práctico y pensado para las condiciones de trabajo que tenemos.",
    name: "Nombre del cliente",
    company: "Empresa / Organización",
    location: "El Calafate, Santa Cruz",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  const next = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const previous = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="testimonials" id="testominios">
      <div className="testimonials__header">
        <span>07 / CLIENTES</span>

        <h2>
          Lo que dicen
          <br />
          quienes
          <br />
          trabajan
          <br />
          con DAF.
        </h2>

        <p>
          La experiencia de quienes ya incorporaron
          nuestras soluciones.
        </p>
      </div>

      <div className="testimonials__carousel">

        <div className="testimonials__counter">
          <span>
            {String(current + 1).padStart(2, "0")}
          </span>

          <span>/</span>

          <span>
            {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        <div className="testimonial">

          <div className="testimonial__quote">
            “
          </div>

          <blockquote>
            {testimonial.quote}
          </blockquote>

          <div className="testimonial__author">
            <strong>{testimonial.name}</strong>

            <span>{testimonial.company}</span>

            <small>{testimonial.location}</small>
          </div>

        </div>

        <div className="testimonials__controls">

          <button
            type="button"
            onClick={previous}
            aria-label="Reseña anterior"
          >
            ←
          </button>

          <button
            type="button"
            onClick={next}
            aria-label="Siguiente reseña"
          >
            →
          </button>

        </div>

      </div>
    </section>
  );
}

export default Testimonials;