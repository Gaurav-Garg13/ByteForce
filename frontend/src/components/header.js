// ClaimLens — Header Component with Mobile Menu Support

export function renderHeader() {
  const header = document.getElementById('top-header');
  if (!header) return;

  header.innerHTML = `
    <div style="display: flex; align-items: center; gap: 0.75rem;">
      <button class="mobile-menu-btn" id="mobile-menu-btn" aria-label="Toggle Navigation">
        <span class="material-symbols-outlined">menu</span>
      </button>
      <div class="header-search">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="Search claims, policies, documents..." />
      </div>
    </div>
    <div class="header-actions">
      <button class="notif-btn" id="notif-btn" aria-label="Notifications">
        <span class="material-symbols-outlined">notifications</span>
      </button>
      <div class="header-avatar-container" id="header-avatar-container">
        <div class="header-avatar" id="header-avatar">
          <span class="material-symbols-outlined">person</span>
        </div>
        <div class="avatar-dropdown" id="avatar-dropdown">
          <!-- Populated dynamically by auth state -->
        </div>
      </div>
    </div>
  `;

  // Mobile drawer toggle handler
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const sidebar = document.getElementById('sidebar');
      if (!sidebar) return;

      sidebar.classList.toggle('mobile-open');

      let backdrop = document.getElementById('sidebar-backdrop');
      if (!backdrop) {
        backdrop = document.createElement('div');
        backdrop.id = 'sidebar-backdrop';
        backdrop.className = 'sidebar-backdrop';
        document.body.appendChild(backdrop);
        backdrop.addEventListener('click', () => {
          sidebar.classList.remove('mobile-open');
          backdrop.classList.remove('active');
        });
      }

      if (sidebar.classList.contains('mobile-open')) {
        backdrop.classList.add('active');
      } else {
        backdrop.classList.remove('active');
      }
    });
  }
}
