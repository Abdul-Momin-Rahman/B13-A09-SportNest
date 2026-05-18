// components/Logo.jsx
export function LogoIcon({ size = 40 }) {
    const s = size / 52;
    return (
        <svg width={size} height={size} viewBox="0 0 52 52" fill="none">
            <rect width="52" height="52" rx="14" fill="#C8F04B" />
            <path d="M14 40 Q26 24 38 40" stroke="#0B0D0A" strokeWidth="3" strokeLinecap="round" />
            <path d="M8 33 Q26 10 44 33" stroke="#0B0D0A" strokeWidth="3" strokeLinecap="round" />
            <path d="M3 26 Q26 0 49 26" stroke="#0B0D0A" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="26" cy="43" r="3.5" fill="#0B0D0A" />
        </svg>
    );
}

export function Logo({ size = 40 }) {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <LogoIcon size={size} />
            <span style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: size * 0.6,
                letterSpacing: 1,
                color: "#E8EDE3",
                lineHeight: 1,
            }}>
                SPORT<span style={{ color: "#C8F04B" }}>NEST</span>
            </span>
        </div>
    );
}