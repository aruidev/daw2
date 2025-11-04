export function Header() {
    return `<header class="header">
    <a class="text-xl font-bold" href="/index.html">LinkHub</a>
    <nav class="nav-bar">
        <ul class="nav-links">
            <li><a class="nav-link" href="/index.html">Home</a></li>
            <li><a class="nav-link" href="/app/pages/dashboard.html">Dashboard</a></li>
            <li><a class="nav-link" href="">Explore</a></li>
            <li><a class="nav-link" href="/app/pages/about.html">About</a></li>
        </ul>
        <ul class="auth-buttons">
            <li><a class="btn btn-secondary" href="/app/pages/login.html">Sign in</a></li>
            <li><a class="btn btn-primary" href="/app/pages/login.html">Register</a></li>
        </ul>
    </nav>
</header>`;
}