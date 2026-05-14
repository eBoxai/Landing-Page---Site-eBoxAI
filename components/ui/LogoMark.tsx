type CommonProps = { className?: string; style?: React.CSSProperties };

// Small network/molecule glyph that sits on top of the box (vector-icon40 slot)
export function LogoNetwork({ className, style }: CommonProps) {
  return (
    <svg
      viewBox="0 0 20 21"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="4.5" y1="4" x2="10" y2="11" />
        <line x1="15.5" y1="6" x2="10" y2="11" />
        <line x1="10" y1="11" x2="7" y2="18.5" />
        <line x1="10" y1="11" x2="14.5" y2="17.5" />
      </g>
      <circle cx="4.5" cy="4" r="2.1" />
      <circle cx="15.5" cy="6" r="1.9" />
      <circle cx="10" cy="11" r="2.1" />
      <circle cx="7" cy="18.5" r="1.6" />
      <circle cx="14.5" cy="17.5" r="1.8" />
    </svg>
  );
}

// Open cardboard box from a 3/4 isometric perspective (vector-icon41 slot)
export function LogoBox({ className, style }: CommonProps) {
  return (
    <svg
      viewBox="0 0 52 35"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      fill="none"
      aria-hidden="true"
    >
      {/* Left flap opened back-left */}
      <path d="M2.5 15 L19 3 L26 15 Z" fill="#EA580C" />
      {/* Right flap opened back-right */}
      <path d="M49.5 15 L33 3 L26 15 Z" fill="#F97316" />
      {/* Inner triangle (visible interior between flaps) */}
      <path d="M19 3 L33 3 L26 15 Z" fill="#C2410C" />
      {/* Front face / bottom body of the box */}
      <path
        d="M5.5 14 L26 21 L46.5 14 L46.5 27 L26 33.5 L5.5 27 Z"
        fill="#EA580C"
      />
      {/* Right side highlight on the body */}
      <path d="M26 21 L46.5 14 L46.5 27 L26 33.5 Z" fill="#F97316" opacity="0.55" />
    </svg>
  );
}
