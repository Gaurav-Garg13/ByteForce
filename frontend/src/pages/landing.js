// ClaimLens — Home/Landing Page (White & Blue Design System)

export function renderLanding() {
  return `
    <div class="landing-fresh-container blue-theme">
      <!-- Hero Section -->
      <section class="fresh-hero">
        <div class="fresh-hero-grid">
          <!-- Left Column: Copy & CTAs -->
          <div class="fresh-hero-left animate-fade-in-up">
            <div class="fresh-hero-pill">
              <span class="material-symbols-outlined" style="font-size:16px;">auto_awesome</span>
              AI-Powered Vehicle Insurance
            </div>
            
            <h1 class="fresh-hero-title">
              Smarter Claims.<br/>
              <span class="fresh-hero-title-highlight">Faster Decisions.</span>
            </h1>
            
            <p class="fresh-hero-subtitle">
              Upload vehicle damage photos and let AI analyze the damage, estimate repair cost, and simplify claim settlement.
            </p>
            
            <div class="fresh-hero-actions">
              <a href="#/new-claim" class="fresh-btn-primary" id="hero-cta-check">
                Create New Claim
                <span class="material-symbols-outlined" style="font-size:18px;">arrow_forward</span>
              </a>
              <a href="#/login" class="fresh-btn-secondary" id="hero-cta-login">
                Log In / Sign Up
              </a>
            </div>
          </div>

          <!-- Right Column: Interactive Vehicle Hero Visual -->
          <div class="fresh-hero-right animate-slide-in-right">
            <div class="fresh-car-card">
              <div class="fresh-car-image-container">
                <img src="/images/hero-car-blue.png" alt="Vehicle Damage AI Analysis" class="fresh-car-img" />
              </div>
            </div>
          </div>
        </div>
      </section>


      <!-- How It Works Section -->
      <section class="fresh-section">
        <div class="fresh-section-header">
          <h2>How It Works</h2>
        </div>
        
        <div class="fresh-workflow-row">
          <div class="fresh-wf-step">
            <div class="fresh-wf-icon-box">
              <span class="material-symbols-outlined">description</span>
            </div>
            <h4>1. Create Claim</h4>
            <p>Enter basic vehicle details</p>
          </div>
          
          <div class="fresh-wf-arrow">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>

          <div class="fresh-wf-step">
            <div class="fresh-wf-icon-box">
              <span class="material-symbols-outlined">photo_camera</span>
            </div>
            <h4>2. Upload Photos</h4>
            <p>Upload clear vehicle images</p>
          </div>

          <div class="fresh-wf-arrow">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>

          <div class="fresh-wf-step">
            <div class="fresh-wf-icon-box">
              <span class="material-symbols-outlined">auto_awesome</span>
            </div>
            <h4>3. AI Analysis</h4>
            <p>Our AI detects damage</p>
          </div>

          <div class="fresh-wf-arrow">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>

          <div class="fresh-wf-step">
            <div class="fresh-wf-icon-box">
              <span class="material-symbols-outlined">request_quote</span>
            </div>
            <h4>4. Estimate Cost</h4>
            <p>Get an instant estimate</p>
          </div>

          <div class="fresh-wf-arrow">
            <span class="material-symbols-outlined">arrow_forward</span>
          </div>

          <div class="fresh-wf-step">
            <div class="fresh-wf-icon-box">
              <span class="material-symbols-outlined">verified</span>
            </div>
            <h4>5. Get Report</h4>
            <p>Download & submit claim</p>
          </div>
        </div>
      </section>

      <!-- Key Features Section -->
      <section class="fresh-section alt-bg">
        <div class="fresh-section-header">
          <h2>Key Features</h2>
        </div>

        <div class="fresh-features-grid">
          <div class="fresh-feature-card">
            <div class="fresh-feat-icon">
              <span class="material-symbols-outlined">shield</span>
            </div>
            <div>
              <h3>AI Damage Detection</h3>
              <p>Accurate damage identification using advanced AI</p>
            </div>
          </div>

          <div class="fresh-feature-card">
            <div class="fresh-feat-icon">
              <span class="material-symbols-outlined">schedule</span>
            </div>
            <div>
              <h3>Instant Repair Cost</h3>
              <p>Get estimated repair cost in seconds</p>
            </div>
          </div>

          <div class="fresh-feature-card">
            <div class="fresh-feat-icon">
              <span class="material-symbols-outlined">upload_file</span>
            </div>
            <div>
              <h3>Digital Claim Submission</h3>
              <p>Submit and track claims online</p>
            </div>
          </div>

          <div class="fresh-feature-card">
            <div class="fresh-feat-icon">
              <span class="material-symbols-outlined">lock</span>
            </div>
            <div>
              <h3>Secure & Reliable</h3>
              <p>Your data is safe with enterprise-grade security</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;
}



