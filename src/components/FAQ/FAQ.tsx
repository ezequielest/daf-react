import { useState } from "react";
import "./FAQ.scss";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "¿Qué tipo de equipos fabrica DAF?",
    answer:
      "Fabricamos diferentes soluciones de secado diseñadas para adaptarse a las necesidades de cada industria, espacio de trabajo y cantidad de usuarios.",
  },
  {
    question: "¿Para qué industrias están pensados los equipos?",
    answer:
      "Nuestros equipos son utilizados en diferentes industrias y actividades, entre ellas minería, petróleo y gas, esquí, industria alimenticia, pesca y otros sectores que requieren soluciones de secado e higiene.",
  },
  {
    question: "¿Los equipos se pueden fabricar a medida?",
    answer:
      "Sí. Desarrollamos soluciones a medida teniendo en cuenta el espacio disponible, cantidad de usuarios, tipo de calzado y necesidades específicas de cada instalación.",
  },
  {
    question: "¿Qué tipo de calzado se puede secar?",
    answer:
      "Los equipos están diseñados principalmente para el secado de botas y calzado de trabajo. La configuración puede adaptarse según el tipo de calzado y las necesidades del cliente.",
  },
  {
    question: "¿Cómo funciona el sistema de secado?",
    answer:
      "El sistema utiliza circulación de aire para acelerar el proceso de secado y mantener el calzado disponible para su próximo uso.",
  },
  {
    question: "¿Realizan instalación y puesta en marcha?",
    answer:
      "Sí. DAF brinda asesoramiento técnico y acompañamiento para la correcta instalación y puesta en funcionamiento de los equipos.",
  },
  {
    question: "¿Qué servicio de postventa ofrecen?",
    answer:
      "Contamos con asesoramiento técnico, mantenimiento, reparaciones, repuestos, soporte remoto y garantía.",
  },
  {
    question: "¿Dónde se pueden adquirir los equipos?",
    answer:
      "Realizamos proyectos y ventas en diferentes puntos de Argentina. Contactanos para analizar tu necesidad y encontrar la solución adecuada.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) =>
      current === index ? null : index
    );
  };

  return (
    <section className="faq" id="faq">
        <span className="faq__number">09 / FAQ</span>
      <div className="faq__header">


        <h2>
          Preguntas
          <br />
          frecuentes.
        </h2>

        <p>
          Algunas de las consultas más frecuentes
          sobre nuestros equipos y soluciones.
        </p>

      </div>

      <div className="faq__list">

        {faqItems.map((item, index) => {

          const isOpen = openIndex === index;

          return (
            <div
              className={`faq__item ${
                isOpen ? "faq__item--open" : ""
              }`}
              key={item.question}
            >

              <button
                className="faq__question"
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >

                <span className="faq__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="faq__title">
                  {item.question}
                </span>

                <span className="faq__icon">
                  {isOpen ? "−" : "+"}
                </span>

              </button>

              <div className="faq__answer">

                <div>
                  <p>{item.answer}</p>
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}

export default FAQ;