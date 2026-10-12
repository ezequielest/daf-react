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
    image: "images/1.png",
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
      rotationSpeed: 0
    }
   
  },
  {
    number: "02",
    name: "DAF Slim",
    category: "Secabotas",
    image: "images/2.png",
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
      rotationSpeed: 0
    }
  },
  {
    number: "03",
    name: "DAF Dual",
    image: "images/3.png",
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
      rotationSpeed: 0
    }
  },
  {
    number: "04",
    name: "DAF Cabinet",
    image: "images/4.png",
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