// ClaimLens — Main Entry Point

import './index.css';
import { renderSidebar } from './components/sidebar.js';
import { renderHeader } from './components/header.js';
import { registerRoute, initRouter } from './router.js';
import { renderLanding } from './pages/landing.js';
import { renderDashboard, initDashboardTabs } from './pages/dashboard.js';
import { renderNewClaim, initNewClaim } from './pages/new-claim.js';
import { renderMyClaims, initMyClaims } from './pages/my-claims.js';
import { renderAuth, initAuth } from './pages/auth.js';

// Render shared layout components
renderSidebar();
renderHeader();

// Register routes
registerRoute('/', renderLanding);
registerRoute('/dashboard', renderDashboard);
registerRoute('/my-claims', renderMyClaims);
registerRoute('/new-claim', renderNewClaim);
registerRoute('/login', renderAuth);

// Listen for route changes to init page-specific JS
window.addEventListener('routeChanged', (e) => {
  updateAuthState();
  const route = e.detail.route;

  if (route === '/dashboard') {
    initDashboardTabs();
  } else if (route === '/new-claim') {
    initNewClaim();
  } else if (route === '/login') {
    initAuth();
  } else if (route === '/my-claims') {
    initMyClaims();
  }
});

// Initialize router
initRouter();

// Initialize Profile Avatar Dropdown Click Toggle
function initHeaderDropdown() {
  const container = document.getElementById('header-avatar-container');
  const dropdown = document.getElementById('avatar-dropdown');
  if (!container || !dropdown) return;

  // Toggle dropdown on avatar click
  container.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('active');
  });

  // Close dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });

  // Close dropdown when item inside is clicked
  dropdown.addEventListener('click', (e) => {
    if (e.target.closest('.avatar-dropdown-item')) {
      dropdown.classList.remove('active');
    }
  });
}

// Update Auth State UI dynamically
export function updateAuthState() {
  const token = localStorage.getItem('claimlens_token');
  const userJson = localStorage.getItem('claimlens_user');
  const dropdown = document.getElementById('avatar-dropdown');
  const avatar = document.getElementById('header-avatar');
  
  if (!dropdown) return;
  
  let user = null;
  try {
    if (userJson) user = JSON.parse(userJson);
  } catch (e) {
    console.error('Error parsing stored user state:', e);
  }

  if (token && user) {
    const initial = (user.name || user.email || 'U').charAt(0).toUpperCase();
    if (avatar) {
      avatar.innerHTML = `<span style="font-weight: 700; color: #fff; font-size: 0.95rem;">${initial}</span>`;
      avatar.style.backgroundColor = 'var(--primary)';
    }

    dropdown.innerHTML = `
      <div style="padding: 0.75rem 1rem; border-bottom: 1px solid var(--outline-variant); background: var(--surface-container-low);">
        <div style="font-weight: 600; font-size: 0.9rem; color: var(--on-surface); text-transform: capitalize;">${user.name || 'User'}</div>
        <div style="font-size: 0.8rem; color: var(--outline); overflow: hidden; text-overflow: ellipsis;">${user.email}</div>
      </div>
      <a href="#/dashboard" class="avatar-dropdown-item" style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="material-symbols-outlined" style="font-size: 18px;">dashboard</span>
        Dashboard
      </a>
      <a href="#/my-claims" class="avatar-dropdown-item" style="display: flex; align-items: center; gap: 0.5rem;">
        <span class="material-symbols-outlined" style="font-size: 18px;">folder</span>
        My Claims
      </a>
      <button class="avatar-dropdown-item" id="logout-btn" style="display: flex; align-items: center; gap: 0.5rem; color: var(--error); border-top: 1px solid var(--outline-variant);">
        <span class="material-symbols-outlined" style="font-size: 18px;">logout</span>
        Log Out
      </button>
    `;

    document.getElementById('logout-btn')?.addEventListener('click', () => {
      localStorage.removeItem('claimlens_token');
      localStorage.removeItem('claimlens_user');
      window.location.hash = '/login';
      updateAuthState();
    });
  } else {
    if (avatar) {
      avatar.innerHTML = `<span class="material-symbols-outlined">person</span>`;
      avatar.style.backgroundColor = 'var(--primary)';
    }
    dropdown.innerHTML = `
      <a href="#/login" class="avatar-dropdown-item" style="display: flex; align-items: center; gap: 0.5rem; font-weight: 600; color: var(--primary);">
        <span class="material-symbols-outlined" style="font-size: 18px;">login</span>
        Log In / Sign Up
      </a>
    `;
  }
}

// Initial dropdown & auth state check
initHeaderDropdown();
updateAuthState();

