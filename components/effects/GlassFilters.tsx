/**
 * SVG filters globais usados pelos elementos "glass" (hero card, navbar).
 * Renderiza um <svg> invisível com defs. Inclua uma vez na raiz da landing page.
 */
export default function GlassFilters() {
  return (
    <svg
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      aria-hidden
    >
      <defs>
        <filter
          id="glass-refraction"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.005 0.009"
            numOctaves="1"
            seed="6"
            result="rawNoise"
          />
          <feGaussianBlur in="rawNoise" stdDeviation="2.5" result="noise" />

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="22"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispR"
          />
          <feColorMatrix
            in="dispR"
            type="matrix"
            values="1 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="rChan"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="17"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispG"
          />
          <feColorMatrix
            in="dispG"
            type="matrix"
            values="0 0 0 0 0
                    0 1 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
            result="gChan"
          />

          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="12"
            xChannelSelector="R"
            yChannelSelector="G"
            result="dispB"
          />
          <feColorMatrix
            in="dispB"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 1 0 0
                    0 0 0 1 0"
            result="bChan"
          />

          <feBlend mode="screen" in="rChan" in2="gChan" result="rg" />
          <feBlend mode="screen" in="rg" in2="bChan" result="rgb" />

          <feGaussianBlur in="rgb" stdDeviation="0.4" />
        </filter>
      </defs>
    </svg>
  );
}
