export function Footer() {
    const year = new Date().getFullYear();
    return `
    <footer class="footer">
        <ul class="social-links">
            <li>X</li>
            <li>Instagram</li>
            <li>Youtube</li>
            <li>LinkedIn</li>
        </ul>
        <ul class="legal-links">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Cookie Policy</li>
        </ul>
    </footer>
    `;
}
