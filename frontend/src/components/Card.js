import Image from "next/image";
import Link from "next/link";

export default function Card({ title, subtitle, href, image, bg = "#fff", style = {} }) {
  return (
    <Link href={href} className="group">
      <div
        className="card-wrap"
        style={{
          background: bg,
          position: "relative",
          fontFamily: "var(--bodyFont)",
          ...style,
        }}
      >
        {/* Info section */}
        <div className="info">
          {subtitle && <span>{subtitle}</span>}
          <h2>{title}</h2>
        </div>
        {/* Image en bas à droite */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "70%",
            height: "70%",
            zIndex: 1,
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "flex-end",
            pointerEvents: "none",
          }}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="card-image-anim"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              position: "absolute",
              borderRadius: "32px",
              transition: "transform 0.4s cubic-bezier(.34,1.56,.64,1)",
            }}
            sizes="(max-width: 768px) 100vw, 52vw"
            priority
          />
        </div>
      </div>
    </Link>
  );
}
