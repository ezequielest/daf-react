import { useEffect } from "react";
import type { EquipmentItem } from "../Equipments/Equipments";
import "./ProductModal.scss";
import TresDDisplayFBX from "../TresDDisplayFBX/TresDDisplayFBX";

interface ProductModalProps {
  product: EquipmentItem | null;
  onClose: () => void;
}

function ProductModal({
  product,
  onClose,
}: ProductModalProps) {
  useEffect(() => {
    if (!product) return;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [onClose]);

  if (!product) return null;

  return (
    <div
      className="product-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="product-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="product-modal__content">
        <button
          className="product-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="product-modal__visual">
          <div className="product-modal__placeholder">
              <TresDDisplayFBX 
                url={product.modelConfig.url}
                modelPosition={product.modelConfig.modelPosition}
                modelRotation={product.modelConfig.modelRotation}
                modelScale={product.modelConfig.modelScale}
                modelPivot={product.modelConfig.modelPivot}
                rotationSpeed={product.modelConfig.rotationSpeed}/>
          </div>
        </div>

        <div className="product-modal__info">
          <span className="product-modal__category">
            {product.category}
          </span>

          <span className="product-modal__title">
            {product.name}
          </span>

          <span className="product-modal__image">
            <img src={product.image} alt={product.name} />
          </span>

          <p className="product-modal__description">
            {product.description}
          </p>

          <div className="product-modal__specs">
            <div>
              <span>Capacidad</span>
              <strong>{product.capacity}</strong>
            </div>

            <div>
              <span>Potencia</span>
              <strong>{product.power}</strong>
            </div>

            <div>
              <span>Dimensiones</span>
              <strong>{product.dimensions}</strong>
            </div>
          </div>

          <div className="product-modal__features">
            <span>Características</span>

            <ul>
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <button
            className="product-modal__cta"
            type="button"
          >
            Solicitar asesoramiento
            <span>↗</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductModal;