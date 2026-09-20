// ClaimLens — New Claim Upload Page

export function renderNewClaim() {
  return `
    <div style="display:flex;flex-direction:column;width:100%;padding-bottom:6rem;">
      <!-- Top Hero Header Banner -->
      <div class="new-claim-hero">
        <div class="new-claim-hero-content animate-fade-in-up">
          <div class="new-claim-step-label">
            <span class="material-symbols-outlined">verified_user</span>
            <span>Guided Claim Initiation • Step 1 of 5</span>
          </div>
          <h1 class="text-headline-xl color-on-surface">Let's understand your claim.</h1>
          <p class="text-body-lg color-on-surface-variant" style="max-width:42rem;">
            Provide your vehicle details, upload supporting documents, and share clear photos of the incident to kick off our automated AI review.
          </p>

          <!-- Progress Indicator -->
          <div class="progress-steps">
            <div class="progress-step completed">
              <div class="progress-step-header">
                <span>01 Vehicle</span>
                <span class="material-symbols-outlined">check_circle</span>
              </div>
              <div class="progress-step-bar"></div>
            </div>
            <div class="progress-step upcoming">
              <div class="progress-step-header">
                <span>02 Documents</span>
                <span class="material-symbols-outlined">radio_button_unchecked</span>
              </div>
              <div class="progress-step-bar"></div>
            </div>
            <div class="progress-step upcoming">
              <div class="progress-step-header">
                <span>03 Photos</span>
                <span class="material-symbols-outlined">radio_button_unchecked</span>
              </div>
              <div class="progress-step-bar"></div>
            </div>
            <div class="progress-step locked">
              <div class="progress-step-header">
                <span>04 Analysis</span>
                <span class="material-symbols-outlined">lock</span>
              </div>
              <div class="progress-step-bar"></div>
            </div>
            <div class="progress-step locked">
              <div class="progress-step-header">
                <span>05 Results</span>
                <span class="material-symbols-outlined">lock</span>
              </div>
              <div class="progress-step-bar"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Workflow Container -->
      <div class="new-claim-body">
        <!-- Section 1: Vehicle Information Form -->
        <section class="form-section animate-fade-in-up">
          <div class="form-section-header">
            <div class="form-section-header-left">
              <div class="form-section-icon">
                <span class="material-symbols-outlined">directions_car</span>
              </div>
              <div>
                <h2 class="form-section-title">Vehicle Information</h2>
                <p class="form-section-desc">Enter the specifications of the involved vehicle.</p>
              </div>
            </div>
            <span class="badge badge-success" style="background:var(--secondary-container);color:var(--on-secondary-container);">
              <span class="material-symbols-outlined" style="font-size:14px;">auto_awesome</span> AI Verified Lookup Available
            </span>
          </div>
          <div class="form-fields-grid">
            <div class="form-group">
              <label class="form-label">Vehicle Brand</label>
              <input type="text" class="form-input" placeholder="e.g. Tesla, BMW, Toyota" value="Tesla" id="input-make" />
            </div>
            <div class="form-group">
              <label class="form-label">Vehicle Model</label>
              <input type="text" class="form-input" placeholder="e.g. Model Y, 3 Series, Camry" value="Model Y Long Range" id="input-model" />
            </div>
            <div class="form-group">
              <label class="form-label">Year</label>
              <div class="form-select-wrapper">
                <select class="form-select" id="input-year">
                  <option>2024</option>
                  <option selected>2023</option>
                  <option>2022</option>
                  <option>2021</option>
                  <option>2020</option>
                </select>
                <span class="material-symbols-outlined">expand_more</span>
              </div>
            </div>
            <div class="form-group">
              <label class="form-label">Registration Number <span class="optional">(Optional)</span></label>
              <input type="text" class="form-input" placeholder="e.g. ABC-1234" value="CAB-8921" style="text-transform:uppercase;letter-spacing:0.05em;" id="input-reg" />
            </div>
          </div>
        </section>

        <!-- Section 2: Document Upload Cards -->
        <section class="form-section animate-fade-in-up" style="animation-delay:0.1s;">
          <div class="form-section-header">
            <div class="form-section-header-left">
              <div class="form-section-icon">
                <span class="material-symbols-outlined">folder_open</span>
              </div>
              <div>
                <h2 class="form-section-title">Supporting Documents</h2>
                <p class="form-section-desc">Upload PDF or image files for policy, estimates, surveyor reports, and settlement letters.</p>
              </div>
            </div>
            <span class="text-label-sm color-outline">PDF / Image supported</span>
          </div>
          <div class="doc-upload-grid">
            <!-- Insurance Policy -->
            <div class="doc-upload-card" id="doc-policy">
              <div class="doc-upload-card-top">
                <div class="doc-upload-status-row">
                  <span class="material-symbols-outlined" style="color:var(--primary);font-size:28px;">description</span>
                  <span class="doc-attached-badge">
                    <span class="material-symbols-outlined">check</span> Attached
                  </span>
                </div>
                <div>
                  <h3 class="text-label-lg color-on-surface">Insurance Policy</h3>
                  <p class="text-body-sm color-on-surface-variant truncate">POL-99281-AZ.pdf</p>
                </div>
              </div>
              <div class="doc-upload-footer">
                <span>Replace file</span>
                <span class="material-symbols-outlined">upload_file</span>
              </div>
            </div>

            <!-- Garage Estimate -->
            <div class="doc-upload-card" id="doc-estimate">
              <div class="doc-upload-card-top">
                <div class="doc-upload-status-row">
                  <span class="material-symbols-outlined" style="color:var(--primary);font-size:28px;">receipt_long</span>
                  <span class="doc-attached-badge">
                    <span class="material-symbols-outlined">check</span> Attached
                  </span>
                </div>
                <div>
                  <h3 class="text-label-lg color-on-surface">Garage Estimate</h3>
                  <p class="text-body-sm color-on-surface-variant truncate">Estimate_Downtown_Auto.pdf</p>
                </div>
              </div>
              <div class="doc-upload-footer">
                <span>Replace file</span>
                <span class="material-symbols-outlined">upload_file</span>
              </div>
            </div>

            <!-- Surveyor Report -->
            <div class="doc-upload-card" id="doc-surveyor">
              <div class="doc-upload-card-top">
                <div class="doc-upload-status-row">
                  <span class="material-symbols-outlined" style="color:var(--outline);font-size:28px;">assignment</span>
                  <span class="doc-optional-badge">Optional</span>
                </div>
                <div>
                  <h3 class="text-label-lg color-on-surface">Surveyor Report</h3>
                  <p class="text-body-sm color-outline truncate">Drag & drop or browse</p>
                </div>
              </div>
              <div class="doc-upload-footer">
                <span>Upload file</span>
                <span class="material-symbols-outlined">upload_file</span>
              </div>
            </div>

            <!-- Settlement Letter -->
            <div class="doc-upload-card" id="doc-settlement">
              <div class="doc-upload-card-top">
                <div class="doc-upload-status-row">
                  <span class="material-symbols-outlined" style="color:var(--outline);font-size:28px;">mail</span>
                  <span class="doc-optional-badge">Optional</span>
                </div>
                <div>
                  <h3 class="text-label-lg color-on-surface">Settlement Letter</h3>
                  <p class="text-body-sm color-outline truncate">Drag & drop or browse</p>
                </div>
              </div>
              <div class="doc-upload-footer">
                <span>Upload file</span>
                <span class="material-symbols-outlined">upload_file</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Section 3: Vehicle Photo Upload Area -->
        <section class="form-section animate-fade-in-up" style="animation-delay:0.2s;">
          <div class="form-section-header">
            <div class="form-section-header-left">
              <div class="form-section-icon">
                <span class="material-symbols-outlined">photo_camera</span>
              </div>
              <div>
                <h2 class="form-section-title">Vehicle Photos & Damage Inspection</h2>
                <p class="form-section-desc">Provide clear angles of the vehicle. Our computer vision will instantly analyze lighting and clarity.</p>
              </div>
            </div>
            <span class="inline-flex items-center gap-xs color-primary text-label-md">
              <span class="material-symbols-outlined">bolt</span> AI Instant Quality Check
            </span>
          </div>
          <div class="photo-upload-grid">
            <!-- Front View -->
            <div class="photo-card">
              <div class="photo-preview" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuAw4ce6nu85JUmYd7xV4EX6LKLCqS3rozWoZ34tSElb4pra1xsy13KkcBG6a3eq9pfdM8NA-E3aEuhS7zhDyLfOc8aPOkec9YtEGZ61pO_Vv7kIHrOJHPLQk081KEHy9JMFgdx17QtI-iQMaMweliLN63L276VMPdtX_P1kHC9CNun0gubxuu4RisnOcjrmc1IBUq7717WJ6RxQJu8Zxd1BJZ7enCFR1gqO0-Q9_A83trAzf8ZXE-K_Dw');">
                <span class="photo-quality-badge good">✓ Clear</span>
                <div class="photo-overlay">
                  <button class="photo-overlay-btn">Change photo</button>
                </div>
              </div>
              <div class="photo-info">
                <span class="photo-label">Front View</span>
                <span class="photo-status success">Validated successfully</span>
              </div>
            </div>

            <!-- Rear View -->
            <div class="photo-card">
              <div class="photo-preview" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuCrLuiU-cj2xr_cRjAbj1-fM4NvZBG7_xruRdYRLcinX5QssO4P_D8Vbbe4A5EEma7bMR534SR2wk7_F4ZRKHoSTm-K4W4kp9B53VbVLdjQZm56HzHzIxXFWgXYDgMT9IFBhwewsAXnogIBMB7YqE9jjtBsGFnuiZ00aqUEO1it5X7iBzJPYHITSm-NhW7JXoKAiBX2ZRc5rNL2NxcR0Gln35O32HyexQAHdQg8YWnB232nohemJdaqXQ');">
                <span class="photo-quality-badge good">✓ Clear</span>
                <div class="photo-overlay">
                  <button class="photo-overlay-btn">Change photo</button>
                </div>
              </div>
              <div class="photo-info">
                <span class="photo-label">Rear View</span>
                <span class="photo-status success">Validated successfully</span>
              </div>
            </div>

            <!-- Left View -->
            <div class="photo-card">
              <div class="photo-preview" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuAMbbEhfZix1tUfBbkgweyG-znvFH7MB_GKox6SepEgq0FLJqejBNWYhIZoFUjodxv8rq6IVBDgzuHVEnQ0C3H3d3rjv3T3he5FB1H3jPk9rxI0UvMPEvZddlvoaGbYYVWmO5DTTKWyIqMttyTOPq0wnvdmL5VH0rtVA_XnvUF1DLe62_o9LDJbgLmx-RsT2br056rAI48uTm0yTWFbXqxNmaChHuybZ1yNOtWn6qGJJZPm3qz53hMfjA');">
                <span class="photo-quality-badge good">✓ Clear</span>
                <div class="photo-overlay">
                  <button class="photo-overlay-btn">Change photo</button>
                </div>
              </div>
              <div class="photo-info">
                <span class="photo-label">Left View</span>
                <span class="photo-status success">Validated successfully</span>
              </div>
            </div>

            <!-- Right View -->
            <div class="photo-card">
              <div class="photo-preview" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFwz6QoiHLbwcTSfJVI39ZUh6k3zzm2li9hv0WYqlW57IjWyuV2olXIbLl_oCidGL5d4zy4ddCOWxjnsnTihnCerMnnR45ScB9gTOWqBE7YCNcly7CB2xE_kjYodDnjYaDZjxC0J2pLdPdrV4vAXVoAZhy-ULEtrFUKOIj268z6BJx8vE2ShbeXiz5s-0xDpRE1-DrpeWu1AdB5yACF_d-usM36Ub7HVs_YrfY6oEBu7mN0if6E0HAZw');">
                <span class="photo-quality-badge good">✓ Clear</span>
                <div class="photo-overlay">
                  <button class="photo-overlay-btn">Change photo</button>
                </div>
              </div>
              <div class="photo-info">
                <span class="photo-label">Right View</span>
                <span class="photo-status success">Validated successfully</span>
              </div>
            </div>

            <!-- Damage Close-up (Needs better view) -->
            <div class="photo-card warning">
              <div class="photo-preview" style="background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBJ-CdoZ21Jcx0hFb3MrN_QxhMY33f69HMVi8wYcZzO6-0HlnfIiYLZ_8ipgmjD-oeMNBPxnNmEq_NFGaFXgPyTeisqwTx5cKYcP4eI3FCpnNCUNeh7gf3_EhMD0UY7gFM-0AddpierK0IylYzqoKnOLtt5ifZW18RqTsxPeumG1W0GETe8Kd-lyuEhQptzvXMl4Nk7dQlXVWrlcw3rANwbGsO-Ju-q9FHqII6mFLxc5KwLZ8F3rbrhhw');">
                <span class="photo-quality-badge needs-attention">⚠ Needs better view</span>
                <div class="photo-overlay" style="opacity:1;">
                  <button class="photo-overlay-btn font-medium">Retake photo</button>
                </div>
              </div>
              <div class="photo-info warning-bg">
                <span class="photo-label">Damage Close-up</span>
                <span class="photo-status warn">Blur detected. Please retake in bright light.</span>
              </div>
            </div>
          </div>
        </section>

        <!-- Bottom Actions -->
        <div class="new-claim-actions">
          <button class="new-claim-back-btn" id="btn-save-draft">
            <span class="material-symbols-outlined">arrow_back</span> Save as Draft & Exit
          </button>
          <button class="new-claim-continue-btn" id="btn-continue">
            <span>Continue to Document Analysis</span>
            <span class="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function initNewClaim() {
  // Select all upload buttons in Document Uploads and Photo Uploads
  const uploadButtons = document.querySelectorAll('.doc-upload-footer, .photo-overlay-btn');

  // Create a reusable hidden file input
  const fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.style.display = 'none';
  document.body.appendChild(fileInput);

  let currentUploadTarget = null;

  uploadButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();

      // Determine what the target was (Document card or Photo card)
      currentUploadTarget = btn.closest('.doc-upload-card, .photo-card');

      // Trigger the file selection dialog
      fileInput.click();
    });
  });

  fileInput.addEventListener('change', async (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('files', file);

    try {
      // Send the file to our new Express backend
      const response = await fetch('http://localhost:3000/api/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        const uploadedFile = data.files[0];
        console.log('Uploaded successfully:', uploadedFile);

        // Update the UI based on target
        if (currentUploadTarget) {
          if (currentUploadTarget.classList.contains('doc-upload-card')) {
            // Update document card
            const titleEl = currentUploadTarget.querySelector('.text-body-sm.truncate');
            if (titleEl) {
              titleEl.textContent = uploadedFile.originalname;
              titleEl.classList.remove('color-outline');
              titleEl.classList.add('color-on-surface-variant');
            }

            const badgeEl = currentUploadTarget.querySelector('.doc-optional-badge');
            if (badgeEl) {
              badgeEl.className = 'doc-attached-badge';
              badgeEl.innerHTML = '<span class="material-symbols-outlined">check</span> Attached';
            }

            const iconEl = currentUploadTarget.querySelector('.material-symbols-outlined');
            if (iconEl && iconEl.style.color === 'var(--outline)') {
              iconEl.style.color = 'var(--primary)';
            }
          } else if (currentUploadTarget.classList.contains('photo-card')) {
            // Update photo card
            const previewEl = currentUploadTarget.querySelector('.photo-preview');
            if (previewEl) {
              // Update background image to the uploaded image if possible, or just change status
              // Note: Since this is a local server without static mapping for frontend yet, 
              // we can just use a local object URL for preview.
              previewEl.style.backgroundImage = `url(${URL.createObjectURL(file)})`;
            }

            const statusEl = currentUploadTarget.querySelector('.photo-status');
            if (statusEl) {
              statusEl.textContent = 'Uploaded successfully';
              statusEl.className = 'photo-status success';
            }

            const badgeEl = currentUploadTarget.querySelector('.photo-quality-badge');
            if (badgeEl) {
              badgeEl.textContent = '✓ Uploaded';
              badgeEl.className = 'photo-quality-badge good';
            }
          }
        }
      } else {
        console.error('Upload failed');
        alert('File upload failed.');
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Error uploading file. Make sure the backend server is running.');
    } finally {
      // Reset input
      fileInput.value = '';
      currentUploadTarget = null;
    }
  });

  // Continue to Gemini LLM Document Analysis Button
  const btnContinue = document.getElementById('btn-continue');
  if (btnContinue) {
    btnContinue.addEventListener('click', async (e) => {
      e.preventDefault();

      const make = document.getElementById('input-make')?.value || 'Tesla';
      const model = document.getElementById('input-model')?.value || 'Model Y';
      const year = document.getElementById('input-year')?.value || '2023';
      const reg = document.getElementById('input-reg')?.value || 'CAB-8921';

      try {
        btnContinue.disabled = true;
        btnContinue.innerHTML = `
          <span class="material-symbols-outlined" style="animation: spin 1s linear infinite;">auto_awesome</span>
          <span>Analyzing with Gemini LLM...</span>
        `;

        // 1. Create Claim Record in Database
        const claimRes = await fetch('http://localhost:3000/api/claims', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ make, model, year, registrationNumber: reg })
        });
        const claimData = await claimRes.json();

        // 2. Trigger Gemini LLM Claim Analysis
        const analyzeRes = await fetch('http://localhost:3000/api/claims/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            claimId: claimData.id,
            make,
            model,
            year,
            registrationNumber: reg
          })
        });
        const analyzeData = await analyzeRes.json();

        // 3. Save Gemini analysis result in localStorage for dashboard display
        localStorage.setItem('claimlens_latest_analysis', JSON.stringify({
          claim: claimData,
          analysis: analyzeData.analysis
        }));

        // 4. Redirect to Dashboard
        window.location.hash = '/dashboard';
      } catch (err) {
        console.error('Error triggering Gemini LLM analysis:', err);
        alert('Error initiating Gemini LLM analysis. Make sure backend is running.');
      } finally {
        btnContinue.disabled = false;
        btnContinue.innerHTML = `
          <span>Continue to Document Analysis</span>
          <span class="material-symbols-outlined">arrow_forward</span>
        `;
      }
    });
  }
}

