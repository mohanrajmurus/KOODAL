interface KoodalLockupProps {
  /** Pixel height of the mark; the wordmark scales proportionally (wordRatio). */
  size?: number;
  ink?: string;
  accent?: string;
  showWord?: boolean;
  wordRatio?: number;
  className?: string;
}

/**
 * KOODAL's "Converge" mark (four wedges arriving from four directions,
 * stopping just short of each other) + wordmark, where the double-O is
 * drawn as two overlapping rings instead of letterforms. Ported from the
 * "Koodal Lockup" design project (mark variant "a" — the recommended one;
 * the design also explored "Node K" and "Kondu" variants, unused here).
 */
export function KoodalLockup({
  size = 72,
  ink = "#15191a",
  accent = "#d4e031",
  showWord = true,
  wordRatio = 0.62,
  className = "",
}: KoodalLockupProps) {
  const wordSize = size * wordRatio;

  return (
    <div
      className={`flex items-center ${className}`}
      style={{ gap: Math.round(size * 0.22) }}
    >
      <svg
        viewBox="0 0 100 100"
        width={size}
        height={size}
        className="block shrink-0"
        role="img"
        aria-label="KOODAL symbol"
      >
        <path d="M12 8 H88 L54 42 H46 Z" fill={ink} />
        <path d="M12 8 H88 L54 42 H46 Z" fill={accent} transform="rotate(90 50 50)" />
        <path d="M12 8 H88 L54 42 H46 Z" fill={ink} transform="rotate(180 50 50)" />
        <path d="M12 8 H88 L54 42 H46 Z" fill={accent} transform="rotate(270 50 50)" />
      </svg>

      {showWord && (
        <div
          className="font-heading flex items-center font-extrabold"
          style={{
            fontSize: Math.round(wordSize),
            letterSpacing: "-0.045em",
            lineHeight: 1,
            color: ink,
            gap: Math.max(1, Math.round(wordSize * 0.04)),
          }}
        >
          <span>K</span>
          <svg
            viewBox="0.5 0.5 57 33"
            aria-hidden="true"
            style={{
              height: Math.round(wordSize * 0.72),
              width: "auto",
              display: "block",
              margin: `0 ${(-wordSize * 0.03).toFixed(2)}px`,
            }}
          >
            <circle cx="17" cy="17" r="13" fill="none" stroke={ink} strokeWidth="7" />
            <circle cx="41" cy="17" r="13" fill="none" stroke={accent} strokeWidth="7" />
          </svg>
          <span>DAL</span>
        </div>
      )}
    </div>
  );
}
