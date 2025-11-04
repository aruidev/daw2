export function Faq() {
    return `<div class="faq-container flex flex-col gap-4 my-8">
    <div class="mb-4">
    <h2 class="text-2xl font-semibold">FAQ</h2>
    <p class="text-lg text-gray-500">Frequently Asked Questions</p>
    </div>


<div class="collapse collapse-arrow border border-gray-300">
  <input type="radio" name="my-accordion-2" checked="checked" />
  <div class="collapse-title font-semibold">What is LinkHub?</div>
  <div class="collapse-content text-sm">LinkHub is a platform that allows users to create, share, and manage links efficiently.</div>
</div>

<div class="collapse collapse-arrow border border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">How do I create an account?</div>
  <div class="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
</div>

<div class="collapse collapse-arrow border border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">I forgot my password. What should I do?</div>
  <div class="collapse-content text-sm">Click on "Forgot Password" on the login page and follow the instructions sent to your email.</div>
</div>

<div class="collapse collapse-arrow border border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">How do I update my profile information?</div>
  <div class="collapse-content text-sm">Go to "My Account" settings and select "Edit Profile" to make changes.</div>
</div>

<div class="collapse collapse-arrow border border-gray-300">
  <input type="radio" name="my-accordion-2" />
  <div class="collapse-title font-semibold">How do I create an item?</div>
  <div class="collapse-content text-sm">Click on "Create Item" in the dashboard and fill out the necessary details.</div>
</div>
    </div>`;
}