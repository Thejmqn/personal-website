import "./Footer.css";

export default function Footer() {
    return (
    <footer className="footer">
        <p>© {new Date().getFullYear()} Joe Moran. All rights reserved.</p>
    </footer>
    );
};
