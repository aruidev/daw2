export function Login() {
    return `
<h2 class="login-title text-4xl font-bold text-center mt-8">Sign In</h2>
    <p class="text-lg text-center">Hola de nou!</p>
    <div class="login-container flex flex-col align-center justify-center w-100 border border-gray-300 p-6 rounded-lg mx-auto mt-6 gap-4">
    <form class="login-form"></form>
        <label for="email" class="login-label">Email:</label>
        <input class="border border-gray-300 rounded-lg p-2" type="email" id="email" name="email" class="login-input" required placeholder="Enter your email">
        <label for="password" class="login-label">Password:</label>
        <input class="border border-gray-300 rounded-lg p-2" type="password" id="password" name="password" class="login-input" placeholder="********" required>
        <button type="submit" class="btn btn-primary login-button">Sign In</button>
        <div class="flex flex-col gap-2">
        <p class="text-center">Don't have an account?</p>
        <a href="" class="text-center underline text-black">Create one</a>
        </div>
    </form>
</div>
<br>`;
}