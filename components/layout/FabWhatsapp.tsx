import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHITE = "#f8fafc";

export default function FabWhatsapp() {
  return (
    <a
      href="https://wa.me/5564984043097"
      target="_blank"
      rel="noopener noreferrer"
      className="fab"
      aria-label="WhatsApp"
      style={{ textDecoration: "none" }}
    >
      <div className="state-layer12">
        <div className="icon17">
          <div className="arrowright">
            <WhatsappLogo
              className="vector-icon42"
              weight="fill"
              style={{ color: WHITE }}
            />
          </div>
        </div>
      </div>
    </a>
  );
}
