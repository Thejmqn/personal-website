export const HamburgerIcon = ({ darkMode }) => (
    <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke={darkMode ? "white" : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
    >
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
);

export const CloseIcon = ({ darkMode }) => (
    <svg
        viewBox="0 0 24 24"
        width="32"
        height="32"
        stroke={darkMode ? "white" : "black"}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
    >
        <line x1="5" y1="5" x2="19" y2="19" />
        <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
);