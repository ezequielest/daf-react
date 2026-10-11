import { useState } from "react";
import ProductModal from "../ProductModal/ProductModal";
import "./Equipments.scss";

export interface EquipmentItem {
  number: string;
  name: string;
  image: string;
  category: string;
  description: string;
  capacity: string;
  power: string;
  dimensions: string;
  features: string[];
  modelConfig: ModelConfig
}

export interface ModelConfig {
  url: string;
  modelPosition: [number, number, number];
  modelRotation: [number, number, number];
  modelScale: number;
  modelPivot: [number, number, number];
  rotationSpeed: number;
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
    image: "data:image/png;base64,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",
    dimensions: "XXX × XXX × XXX mm",
    features: [
      "Diseño compacto",
      "Secado eficiente",
      "Construcción resistente",
    ],
    modelConfig: {
      url: "models/compact-b.fbx",
      modelPosition: [0, -110, 0],
      modelRotation: [0, Math.PI / 4 , 0],
      modelScale: 1,
      modelPivot: [0, 0, 0],
      rotationSpeed: 0.005
    }
   
  },
  {
    number: "02",
    name: "DAF Slim",
    category: "Secabotas",
    image: "images/slim-b.jpg",
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
    modelConfig: {
      url: "models/slim-b.fbx",
      modelPosition: [0, -110, 0],
      modelRotation: [0, Math.PI / 4 , 0],
      modelScale: 1,
      modelPivot: [0, 0, 0],
      rotationSpeed: 0.005
    }
  },
  {
    number: "03",
    name: "DAF Dual",
    image: "images/dual-b.jpg",
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
    modelConfig: {
      url: "models/secabotas.fbx",
      modelPosition: [0, -220, 0],
      modelRotation: [0, Math.PI / 4 , 0],
      modelScale: 1,
      modelPivot: [-42.6866, -1.8881, 34.6906],
      rotationSpeed: 0.005
    }
  },
  {
    number: "04",
    name: "DAF Cabinet",
    image: "images/cabinet-b.jpg",
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
    modelConfig: {
      url: "models/cabinet-b.fbx",
      modelPosition: [120, 1020, 220],
      modelRotation: [0, Math.PI / 2 , 0],
      modelScale: 0.15,
      modelPivot: [0, 0, 0],
      rotationSpeed: 0
    }
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