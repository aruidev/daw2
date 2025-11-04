export function CardsGrid() {
  let cards = "";
  for (let i = 0; i < 6; i++) {
    cards += `
      <div class="border border-gray-200 rounded-xl overflow-hidden transition cursor-pointer">
        <div class="bg-gray-100 aspect-video flex items-center justify-center">
          <svg class="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 16l5-5 4 4 8-8" />
          </svg>
        </div>
        <div class="p-4 flex justify-between items-center">
          <div>
            <h2 class="font-medium text-gray-800">Website</h2>
            <p class="text-gray-400 text-sm">website.com</p>
          </div>
          <div class="text-right">
            <p class="text-gray-600 text-sm">Username</p>
            <p class="text-gray-400 text-xs">Oct 15, 2025</p>
          </div>
        </div>
      </div>`;
  }

  return `
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      ${cards}
    </div>`;
}

export function Dashboard() {
    
    return `<nav class="text-gray-400 mb-4 text-sm">
    Dashboard <span class="text-gray-500">></span> Items
  </nav>

  <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
    <h1 class="text-2xl font-semibold text-gray-800">Items</h1>
    <div class="flex items-center gap-2 mt-3 sm:mt-0">
      <button class="px-3 py-1 rounded-full bg-black text-white text-sm">New</button>
      <button class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">Favorites</button>
      <button class="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">Most used</button>
    </div>
  </div>

  <div class="relative mb-8 max-w-xs">
    <input type="text" placeholder="Search" class="w-full border border-gray-300 rounded-full py-2 pl-4 pr-10 text-sm" />
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-500 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1010.5 18.5a7.5 7.5 0 006.15-1.85z" />
    </svg>
  </div>

  ${CardsGrid()}
  </div>
  <br>
  `;
}