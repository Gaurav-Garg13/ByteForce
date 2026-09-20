// ClaimLens — Client-side hash router

const routes = {};
let currentRoute = null;

export function registerRoute(path, handler) {
  routes[path] = handler;
}

export function navigateTo(path) {
  window.location.hash = path;
}

export function getCurrentRoute() {
  return currentRoute;
}

export function initRouter() {
  const handleRoute = () => {
    const hash = window.location.hash.slice(1) || '/';
    currentRoute = hash;

    const container = document.getElementById('page-content');
    const sidebar = document.getElementById('sidebar');
    const header = document.getElementById('top-header');
    const mainWrapper = document.getElementById('main-wrapper');

    if (!container) return;

    // Handle layout visibility
    if (hash === '/' || hash === '/login') {
      if (sidebar) sidebar.style.display = 'none';
      if (header) header.style.display = 'none';
      if (mainWrapper) mainWrapper.style.marginLeft = '0';
      if (container) container.style.paddingTop = '0';
    } else {
      if (sidebar) sidebar.style.display = 'flex';
      if (header) header.style.display = 'flex';
      if (mainWrapper) mainWrapper.style.marginLeft = 'var(--sidebar-width)';
      if (container) container.style.paddingTop = 'var(--header-height)';
    }

    // Find matching route
    const handler = routes[hash];
    if (handler) {
      container.innerHTML = '';
      const content = handler();
      if (typeof content === 'string') {
        container.innerHTML = content;
      } else if (content instanceof HTMLElement) {
        container.appendChild(content);
      }
    } else {
      // Default to landing page
      const defaultHandler = routes['/'];
      if (defaultHandler) {
        container.innerHTML = '';
        const content = defaultHandler();
        if (typeof content === 'string') {
          container.innerHTML = content;
        }
      }
    }

    // Update sidebar active state
    updateSidebarActive(hash);

    // Initialize any page-level JS
    window.dispatchEvent(new CustomEvent('routeChanged', { detail: { route: hash } }));
  };

  window.addEventListener('hashchange', handleRoute);
  window.addEventListener('load', handleRoute);

  // Trigger initial route
  handleRoute();
}

function updateSidebarActive(route) {
  const nav = document.querySelector('.sidebar-nav');
  if (!nav) return;

  nav.querySelectorAll('a').forEach(link => {
    link.classList.remove('active');
    const linkRoute = link.getAttribute('data-route');
    if (linkRoute === route) {
      link.classList.add('active');
    }
  });
}
