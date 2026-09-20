// ClaimLens — Sidebar Component

export function renderSidebar() {
  const sidebar = document.getElementById('sidebar');
  if (!sidebar) return;

  sidebar.innerHTML = `
    <div class="sidebar-brand">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#2563eb"/>
            <stop offset="100%" style="stop-color:#004ac6"/>
          </linearGradient>
        </defs>
        <path d="M16 2 L28 8 L28 18 C28 24 22 29 16 30 C10 29 4 24 4 18 L4 8 Z" fill="url(#shield-grad)"/>
        <circle cx="16" cy="15" r="5.5" fill="none" stroke="white" stroke-width="1.3"/>
        <path d="M12.5 15 L15 17.5 L20.5 12" fill="none" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>ClaimLens</span>
    </div>
    <nav class="sidebar-nav">
      <a href="#/" data-route="/">
        <span class="material-symbols-outlined">home</span>Home
      </a>
      <a href="#/dashboard" data-route="/dashboard">
        <span class="material-symbols-outlined">dashboard</span>Dashboard
      </a>
      <a href="#/my-claims" data-route="/my-claims">
        <span class="material-symbols-outlined">assignment</span>My Claims
      </a>
      <a href="#/new-claim" data-route="/new-claim">
        <span class="material-symbols-outlined">add_box</span>New Claim
      </a>
    </nav>
    <div class="sidebar-footer">
      <a href="#/help" data-route="/help">
        <span class="material-symbols-outlined">help</span>Help
      </a>
      <a href="#/profile" data-route="/profile">
        <span class="material-symbols-outlined">person</span>Profile
      </a>
    </div>
  `;

  // Close mobile drawer when any link is clicked
  sidebar.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      sidebar.classList.remove('mobile-open');
      const backdrop = document.getElementById('sidebar-backdrop');
      if (backdrop) backdrop.classList.remove('active');
    });
  });
}
