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
    name: "DAF Compact",
    category: "Secabotas",
    description:
      "Ideal para pequeños espacios y dotaciones. Botas y guantes.",
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
    name: "DAF Slim",
    category: "Secabotas",
    description:
      "Diseño de una sola cara para instalar contra pared y aprovechar al máximo el espacio.",
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
    name: "DAF Dual",
    category: "Secabotas",
    description:
      "Diseño de doble cara para maximizar la capacidad de secado en el menor espacio.",
    capacity: "XX pares",
    power: "XXX W",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Alta capacidad",
      "Diseño de doble cara para maximizar la capacidad de secado en el menor espacio.",
    ],
    modelUrl: "models/secabotas.fbx",
  },
  {
    number: "04",
    name: "DAF Cabinet",
    category: "Secado industrial",
    description:
      "Cabina de secado para equipos completos, diseñada para un secado uniforme e higiénico.",
    capacity: "XX unidades",
    power: "XXX W",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Gran capacidad",
      "Secado integral",
      "Diseño industrial",
    ],
    modelUrl: "models/cabinet-b.fbx",
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
        <span className="equipment__number">
          03 / EQUIPAMIENTOS
        </span>
        <div className="equipment__header">

          <h2>
          Soluciones para <br></br> cada necesidad 
          </h2>

          <p>
            Desde equipos compactos hasta soluciones de alta capacidad, desarrollamos equipamiento para el secado de calzado, guantes, indumentaria y elementos de protección personal.
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