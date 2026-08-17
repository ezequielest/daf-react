import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import "./Equipments.scss";

export interface EquipmentItem {
  number: string;
  name: string;
  category: string;
  description: string;
  capacity: string;
  power: string;
  dimensions: string;
  features: string[];
  modelUrl: string;
}

const equipment: EquipmentItem[] = [
  {
    number: "01",
    name: "Compact",
    category: "Secabotas",
    description:
      "Una solución compacta y eficiente para el secado individual.",
    capacity: "XX pares",
    power: "XXX W",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Diseño compacto",
      "Secado eficiente",
      "Construcción resistente",
    ],
    modelUrl: "models/compact-b.fbx",
  },
  {
    number: "02",
    name: "Slim",
    category: "Secabotas",
    description:
      "Diseñado para optimizar el espacio sin resignar capacidad.",
    capacity: "XX pares",
    power: "XXX W",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Formato vertical",
      "Optimización del espacio",
      "Secado eficiente",
    ],
    modelUrl: "models/slim-b.fbx",
  },
  {
    number: "03",
    name: "Dual",
    category: "Secabotas",
    description:
      "Mayor capacidad para espacios de trabajo con alta demanda.",
    capacity: "XX pares",
    power: "XXX W",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Alta capacidad",
      "Funcionamiento simultáneo",
      "Construcción industrial",
    ],
    modelUrl: "models/secabotas.fbx",
  },
  {
    number: "04",
    name: "Cabinet",
    category: "Secado industrial",
    description:
      "Una solución integral para el secado de múltiples equipos.",
    capacity: "XX unidades",
    power: "XXX W",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Gran capacidad",
      "Secado integral",
      "Diseño industrial",
    ],
    modelUrl: "models/cabinet.fbx",
  },
];

function Equipment() {
  const [selectedProduct, setSelectedProduct] =
    useState<EquipmentItem | null>(null);

  const handleOpenModal = (product: EquipmentItem) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="equipment" id="equipamientos">
        <div className="equipment__header">
          <span className="equipment__number">
            03 / EQUIPOS
          </span>

          <h2>
            Equipamiento
            <br />
            para cada
            <br />
            necesidad.
          </h2>

          <p>
            Soluciones de secado desarrolladas para
            adaptarse a diferentes espacios, capacidades
            y necesidades operativas.
          </p>
        </div>

        <div className="equipment__list">
          {equipment.map((item) => (
            <article
              className="equipment__item"
              key={item.number}
              onClick={() => handleOpenModal(item)}
            >
              <div className="equipment__item-number">
                {item.number}
              </div>

              <div className="equipment__item-info">
                <span>{item.category}</span>

                <h3>{item.name}</h3>

                <p>{item.description}</p>
              </div>

              <button
                className="equipment__item-action"
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  handleOpenModal(item);
                }}
              >
                <span>Ver ficha</span>

                <span className="equipment__arrow">
                  ↗
                </span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <ProductModal
        product={selectedProduct}
        onClose={handleCloseModal}
      />
    </>
  );
}

export default Equipment;