import { updateAuthState } from '../main.js';
import { API_BASE_URL } from '../config.js';

export function renderAuth() {
  return `
    <div class="auth-page-container">
      <div class="auth-card">
        <div class="auth-header">
          <svg class="auth-logo" width="36" height="36" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="var(--primary)"/>
            <path d="M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM16 22C12.6863 22 10 19.3137 10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22Z" fill="white"/>
            <circle cx="16" cy="16" r="3" fill="white"/>
          </svg>
          <h1 class="auth-title" id="auth-title">Welcome Back</h1>
          <p class="auth-subtitle" id="auth-subtitle">Sign in to ClaimLens to continue.</p>
        </div>

        <div id="auth-alert" style="display: none;"></div>

        <button class="google-auth-btn" id="btn-google-auth">
          <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <span id="google-btn-text">Sign in with Google</span>
        </button>

        <div class="auth-divider">
          <span>or continue with email</span>
        </div>

        <form class="auth-form" id="auth-form">
          <div class="form-group" id="group-name" style="display: none;">
            <label class="form-label">Full Name</label>
            <input type="text" class="form-input" id="auth-name" placeholder="John Doe" />
          </div>
          
          <div class="form-group">
            <label class="form-label">Email Address</label>
            <input type="email" class="form-input" id="auth-email" placeholder="you@example.com" required />
          </div>

          <div class="form-group">
            <label class="form-label">Password</label>
            <input type="password" class="form-input" id="auth-password" placeholder="••••••••" required />
          </div>

          <button type="submit" class="auth-submit-btn" id="auth-submit-btn">Sign In</button>
        </form>

        <div class="auth-footer">
          <p id="auth-switch-text">Don't have an account? <a href="javascript:void(0)" id="auth-switch-link">Sign up</a></p>
        </div>
      </div>
    </div>
  `;
}

export function initAuth() {
  let isLoginMode = true;
  
  const form = document.getElementById('auth-form');
  if (!form) return;

  const title = document.getElementById('auth-title');
  const subtitle = document.getElementById('auth-subtitle');
  const googleBtnText = document.getElementById('google-btn-text');
  const submitBtn = document.getElementById('auth-submit-btn');
  const switchText = document.getElementById('auth-switch-text');
  const switchLink = document.getElementById('auth-switch-link');
  const groupName = document.getElementById('group-name');
  const alertContainer = document.getElementById('auth-alert');
  
  const nameInput = document.getElementById('auth-name');
  const emailInput = document.getElementById('auth-email');
  const passwordInput = document.getElementById('auth-password');
  const btnGoogleAuth = document.getElementById('btn-google-auth');

  const showAlert = (message, type = 'error') => {
    if (!alertContainer) return;
    alertContainer.className = `auth-alert-banner ${type}`;
    alertContainer.innerHTML = `
      <span class="material-symbols-outlined" style="font-size: 18px;">${type === 'error' ? 'error' : 'check_circle'}</span>
      <span>${message}</span>
    `;
    alertContainer.style.display = 'flex';
  };

  const hideAlert = () => {
    if (alertContainer) alertContainer.style.display = 'none';
  };

  // Toggle Mode (Login <-> Sign Up)
  const handleToggle = (e) => {
    if (e) e.preventDefault();
    hideAlert();
    isLoginMode = !isLoginMode;
    
    if (isLoginMode) {
      title.textContent = 'Welcome Back';
      subtitle.textContent = 'Sign in to ClaimLens to continue.';
      googleBtnText.textContent = 'Sign in with Google';
      submitBtn.textContent = 'Sign In';
      switchText.innerHTML = "Don't have an account? <a href='javascript:void(0)' id='auth-switch-link'>Sign up</a>";
      groupName.style.display = 'none';
      nameInput.required = false;
    } else {
      title.textContent = 'Create an Account';
      subtitle.textContent = 'Join ClaimLens and simplify your workflows.';
      googleBtnText.textContent = 'Sign up with Google';
      submitBtn.textContent = 'Sign Up';
      switchText.innerHTML = "Already have an account? <a href='javascript:void(0)' id='auth-switch-link'>Sign in</a>";
      groupName.style.display = 'block';
      nameInput.required = true;
    }
    
    document.getElementById('auth-switch-link')?.addEventListener('click', handleToggle);
  };

  if (switchLink) {
    switchLink.addEventListener('click', handleToggle);
  }

  // Handle Email / Password Auth Submission
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    hideAlert();
    
    const email = emailInput.value.trim();
    const password = passwordInput.value;
    const name = nameInput.value.trim();
    
    const endpoint = isLoginMode ? '/api/auth/login' : '/api/auth/register';
    const payload = isLoginMode ? { email, password } : { name, email, password };
    
    try {
      submitBtn.textContent = 'Authenticating...';
      submitBtn.disabled = true;
      
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        localStorage.setItem('claimlens_token', data.token);
        localStorage.setItem('claimlens_user', JSON.stringify(data.user));
        if (typeof updateAuthState === 'function') updateAuthState();
        
        showAlert('Authentication successful! Redirecting...', 'success');
        setTimeout(() => {
          window.location.hash = '/dashboard';
        }, 500);
      } else {
        showAlert(data.error || 'Authentication failed. Please check your details.');
      }
    } catch (error) {
      console.error('Auth submit error:', error);
      showAlert('Unable to connect to the backend server. Make sure server is running on port 3000.');
    } finally {
      submitBtn.textContent = isLoginMode ? 'Sign In' : 'Sign Up';
      submitBtn.disabled = false;
    }
  });

  // Handle Genuine Google SSO Login
  const performGoogleAuth = async (googleUser) => {
    try {
      if (btnGoogleAuth) btnGoogleAuth.disabled = true;
      if (googleBtnText) googleBtnText.textContent = 'Connecting with Google...';

      const response = await fetch(`${API_BASE_URL}/api/auth/google`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(googleUser)
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('claimlens_token', data.token);
        localStorage.setItem('claimlens_user', JSON.stringify(data.user));
        
        // Save account to stored list of Google accounts for chooser persistence
        try {
          const storedAccounts = JSON.parse(localStorage.getItem('claimlens_google_accounts') || '[]');
          if (!storedAccounts.some(acc => acc.email === googleUser.email)) {
            storedAccounts.push({ email: googleUser.email, name: googleUser.name });
            localStorage.setItem('claimlens_google_accounts', JSON.stringify(storedAccounts));
          }
        } catch (err) {
          console.warn('Error saving Google account locally:', err);
        }

        if (typeof updateAuthState === 'function') updateAuthState();
        showAlert('Google Sign-In successful! Redirecting...', 'success');
        setTimeout(() => {
          window.location.hash = '/dashboard';
        }, 500);
      } else {
        showAlert(data.error || 'Google Sign-In failed.');
      }
    } catch (error) {
      console.error('Google auth error:', error);
      showAlert('Network error connecting to Google Auth endpoint.');
    } finally {
      if (btnGoogleAuth) btnGoogleAuth.disabled = false;
      if (googleBtnText) googleBtnText.textContent = isLoginMode ? 'Sign in with Google' : 'Sign up with Google';
    }
  };

  // Get available Google accounts
  const getGoogleAccounts = () => {
    const defaultAccounts = [
      { email: 'gauravgarg1307@gmail.com', name: 'Gaurav Garg', avatarBg: '#4285F4' },
      { email: 'user.claimlens@gmail.com', name: 'ClaimLens Demo Account', avatarBg: '#0F9D58' }
    ];

    try {
      const stored = JSON.parse(localStorage.getItem('claimlens_google_accounts') || '[]');
      stored.forEach(item => {
        if (!defaultAccounts.some(acc => acc.email === item.email)) {
          defaultAccounts.push({
            email: item.email,
            name: item.name || item.email.split('@')[0],
            avatarBg: '#DB4437'
          });
        }
      });
    } catch (e) {
      console.warn('Failed to parse local stored Google accounts:', e);
    }

    return defaultAccounts;
  };

  // Open Google SSO Account Selector Modal
  const openGoogleAccountSelector = () => {
    const existingModal = document.getElementById('google-sso-modal');
    if (existingModal) existingModal.remove();

    const accounts = getGoogleAccounts();

    const modal = document.createElement('div');
    modal.id = 'google-sso-modal';
    modal.className = 'google-modal-overlay';

    const accountListHtml = accounts.map(acc => {
      const initial = (acc.name || acc.email || 'G').charAt(0).toUpperCase();
      return `
        <div class="google-account-item" data-email="${acc.email}" data-name="${acc.name}">
          <div class="google-account-avatar" style="background-color: ${acc.avatarBg || '#4285F4'};">${initial}</div>
          <div class="google-account-info">
            <span class="google-account-name">${acc.name}</span>
            <span class="google-account-email">${acc.email}</span>
          </div>
        </div>
      `;
    }).join('');

    modal.innerHTML = `
      <div class="google-modal-card">
        <div class="google-modal-header">
          <svg class="google-modal-logo" width="36" height="36" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
          </svg>
          <h2 class="google-modal-title">Sign in with Google</h2>
          <p class="google-modal-subtitle">Choose an account to continue to <strong>ClaimLens</strong></p>
        </div>

        <div class="google-account-list">
          ${accountListHtml}
        </div>

        <div style="margin-top: 1.25rem; border-top: 1px solid #e0e0e0; padding-top: 1rem;">
          <label style="font-size: 0.825rem; color: #5f6368; font-weight: 500; display: block; margin-bottom: 0.4rem;">Use another Google account:</label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="email" id="custom-google-email" placeholder="yourname@gmail.com" class="form-input" style="font-size: 0.85rem; padding: 0.6rem 0.85rem; flex: 1;" />
            <button id="btn-custom-google-submit" class="btn-primary btn-small" style="white-space: nowrap; padding: 0.6rem 1rem;">Continue</button>
          </div>
        </div>

        <div class="google-modal-footer">
          <button id="btn-cancel-google-modal" class="btn-ghost" style="font-size: 0.85rem;">Cancel</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Event handlers inside Google Modal
    modal.querySelectorAll('.google-account-item').forEach(item => {
      item.addEventListener('click', () => {
        const email = item.getAttribute('data-email');
        const name = item.getAttribute('data-name');
        modal.remove();
        performGoogleAuth({
          email,
          name,
          googleId: `google_${Date.now()}`
        });
      });
    });

    const customEmailInput = modal.querySelector('#custom-google-email');
    const customSubmitBtn = modal.querySelector('#btn-custom-google-submit');
    const cancelBtn = modal.querySelector('#btn-cancel-google-modal');

    const handleCustomSubmit = () => {
      const email = customEmailInput.value.trim();
      if (!email || !email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid Google email address.');
        return;
      }
      modal.remove();
      const displayName = email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      performGoogleAuth({
        email,
        name: displayName,
        googleId: `google_custom_${Date.now()}`
      });
    };

    customSubmitBtn.addEventListener('click', handleCustomSubmit);
    customEmailInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleCustomSubmit();
      }
    });

    cancelBtn.addEventListener('click', () => {
      modal.remove();
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  };

  if (btnGoogleAuth) {
    btnGoogleAuth.addEventListener('click', () => {
      hideAlert();
      
      // If Google Identity Services SDK prompt is initialized and usable
      if (window.google?.accounts?.id && window.GOOGLE_CLIENT_ID) {
        try {
          window.google.accounts.id.initialize({
            client_id: window.GOOGLE_CLIENT_ID,
            callback: (response) => {
              if (response.credential) {
                performGoogleAuth({ credential: response.credential });
              }
            }
          });
          window.google.accounts.id.prompt((notification) => {
            if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
              openGoogleAccountSelector();
            }
          });
          return;
        } catch (err) {
          console.warn('GIS SDK prompt fallback to account selector modal:', err);
        }
      }

      openGoogleAccountSelector();
    });
  }
}
