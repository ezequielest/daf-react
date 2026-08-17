import { useEffect, useState } from "react";
import "./Navbar.scss";

const navItems = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Equipos",
    href: "#equipamientos",
  },
  {
    label: "Industrias",
    href: "#industrias",
  },
  {
    label: "Soluciones",
    href: "#soluciones",
  },
  {
    label: "Postventa",
    href: "#post-venta",
  },
  {
    label: "Preguntas frecuentes",
    href: "#faq",
  },
];

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("inicio");

    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFixed(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    observer.observe(hero);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav
      className={`navbar ${
        isFixed ? "navbar--fixed" : ""
      }`}
    >
      <a
        href="#inicio"
        className="navbar__logo"
      >
        DAF
      </a>

      <div className="navbar__links">

        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
          >
            {item.label}
          </a>
        ))}

      </div>

      <a
      target="_blank"
        href="https://wa.me/5492234375995?text=Me%20contacto%20desde%20la%20web.%20Quiero%20pedir%20asesoramiento"
        className="navbar__cta"
      >
        Solicitar asesoramiento
      </a>
    </nav>
  );
}

export default Navbar;