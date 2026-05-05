/**
 * Subtle horizontal rule that fades blue → white → blue across the page width.
 * On the cream body the contrast is gentler — we use the canonical gradient
 * but at lower opacity so it does not steal attention from editorial content.
 */
export default function FinnishDivider() {
  return (
    <div className="relative py-0 overflow-hidden" style={{ lineHeight: 0 }}>
      <div
        style={{
          height: '2px',
          background:
            'linear-gradient(to right, transparent 0%, rgba(0,47,108,0.55) 18%, rgba(0,47,108,0.15) 50%, rgba(0,47,108,0.55) 82%, transparent 100%)',
        }}
      />
    </div>
  );
}
