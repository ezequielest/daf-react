import "./Footer.scss";

const navigation = [
  {
    label: "Inicio",
    href: "#inicio",
  },
  {
    label: "Equipos",
    href: "#equipos",
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
    href: "#postventa",
  },
  {
    label: "Contacto",
    href: "#contacto",
  },
];

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer__middle">

        <div className="footer__brand">

          <span className="footer__logo">
            DAF
          </span>

          <span>
            Equipamientos
          </span>

          <p>
            Mar del Plata, Argentina
          </p>

        </div>

        <div className="footer__nav">

          <span className="footer__label">
            Navegación
          </span>

          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
            >
              {item.label}
            </a>
          ))}

        </div>

        <div className="footer__contact">

          <span className="footer__label">
            Contacto
          </span>

          <a href="mailto:info@dafequipamientos.com">
            dafequipamientos@gmail.com
          </a>

          <a target="_blank" href="https://wa.me/5492234375995?text=Me%20contacto%20desde%20la%20web.%20Quiero%20pedir%20asesoramiento">
            WhatsApp
          </a>

          {/*<a href="#">
            Instagram
          </a>*/}

        </div>

      </div>

      <div className="footer__bottom">

        <span>
          © {new Date().getFullYear()} DAF Equipamientos
        </span>

        <span>
          Mar del Plata · Argentina
        </span>

        <button
          type="button"
          onClick={scrollToTop}
        >
          Volver arriba ↑
        </button>

      </div>

    </footer>
  );
}

export default Footer;