// ClaimLens — Dashboard Page

export function renderDashboard() {
  return `
    <div style="display:flex;flex-direction:column;width:100%;padding-bottom:var(--space-xl);">
      <!-- Top Banner / Header -->
      <div class="dashboard-banner animate-fade-in-up">
        <div class="dashboard-banner-top">
          <div>
            <div class="dashboard-breadcrumb">
              <span class="material-symbols-outlined">verified</span>
              <span>Enterprise Risk & Claim Intelligence</span>
              <span>/</span>
              <span class="active">Dashboard</span>
            </div>
            <h1 class="text-headline-xl color-on-surface tracking-tight">Good morning, Alex</h1>
            <p class="text-body-lg color-on-surface-variant" style="margin-top:var(--space-xs);">Understand your claim before you make your next decision.</p>
          </div>
          <div>
            <a href="#/new-claim" class="btn-primary" id="dashboard-new-claim">
              <span class="material-symbols-outlined" style="font-size:20px;">add_box</span>
              <span>+ Start New Claim</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Summary Metrics Grid -->
      <div class="metrics-grid stagger-children">
        <!-- Metric 1: Active Claims -->
        <div class="metric-card">
          <div class="metric-card-bg" style="background:rgba(0,74,198,0.05);"></div>
          <div class="metric-card-header">
            <span class="metric-card-title">Active Claims</span>
            <div class="metric-card-icon" style="background:var(--primary-fixed);color:var(--primary);">
              <span class="material-symbols-outlined">assignment</span>
            </div>
          </div>
          <div class="metric-card-value">
            <span class="metric-card-number">2</span>
            <span class="metric-card-trend" style="color:var(--secondary);">
              <span class="material-symbols-outlined">trending_up</span> On Track
            </span>
          </div>
          <div class="metric-card-footer">
            <span>Updated 10m ago</span>
            <span class="link" style="color:var(--primary);">View details</span>
          </div>
        </div>

        <!-- Metric 2: Claims Checked -->
        <div class="metric-card">
          <div class="metric-card-bg" style="background:rgba(0,106,97,0.05);"></div>
          <div class="metric-card-header">
            <span class="metric-card-title">Claims Checked</span>
            <div class="metric-card-icon" style="background:rgba(137,245,231,0.3);color:var(--secondary);">
              <span class="material-symbols-outlined">fact_check</span>
            </div>
          </div>
          <div class="metric-card-value">
            <span class="metric-card-number">8</span>
            <span class="metric-card-trend" style="color:var(--on-surface-variant);">Lifetime total</span>
          </div>
          <div class="metric-card-footer">
            <span>100% Audit rate</span>
            <span class="link" style="color:var(--secondary);">History</span>
          </div>
        </div>

        <!-- Metric 3: Documents Analyzed -->
        <div class="metric-card">
          <div class="metric-card-bg" style="background:rgba(148,55,0,0.05);"></div>
          <div class="metric-card-header">
            <span class="metric-card-title">Documents Analyzed</span>
            <div class="metric-card-icon" style="background:rgba(255,219,205,0.3);color:var(--tertiary);">
              <span class="material-symbols-outlined">description</span>
            </div>
          </div>
          <div class="metric-card-value">
            <span class="metric-card-number">24</span>
            <span class="metric-card-trend" style="color:var(--secondary);">
              <span class="material-symbols-outlined">auto_awesome</span> AI Verified
            </span>
          </div>
          <div class="metric-card-footer">
            <span>PDFs & Invoices</span>
            <span class="link" style="color:var(--tertiary);">View vault</span>
          </div>
        </div>

        <!-- Metric 4: Differences Found -->
        <div class="metric-card">
          <div class="metric-card-bg" style="background:rgba(186,26,26,0.05);"></div>
          <div class="metric-card-header">
            <span class="metric-card-title">Differences Found</span>
            <div class="metric-card-icon" style="background:var(--error-container);color:var(--error);">
              <span class="material-symbols-outlined">difference</span>
            </div>
          </div>
          <div class="metric-card-value">
            <span class="metric-card-number">17</span>
            <span class="metric-card-trend" style="color:var(--error);">
              <span class="material-symbols-outlined">warning</span> Discrepancies
            </span>
          </div>
          <div class="metric-card-footer">
            <span>Estimate vs Actual</span>
            <span class="link" style="color:var(--error);">Resolve</span>
          </div>
        </div>
      </div>

      <!-- Main Content: Claims Feed & Right Widgets -->
      <div class="dashboard-content">
        <!-- Left Column: Claims Feed -->
        <div class="claims-section">
          <!-- Section Header & Tabs -->
          <div class="claims-header">
            <div class="claims-header-left">
              <span class="material-symbols-outlined">view_list</span>
              <h2 class="text-headline-sm color-on-surface">Recent Claims</h2>
            </div>
            <div class="claims-tabs" id="claims-tabs">
              <button class="claims-tab active" data-tab="active" id="tab-active" onclick="window.__switchTab('active')">Active (2)</button>
              <button class="claims-tab" data-tab="completed" id="tab-completed" onclick="window.__switchTab('completed')">Completed (5)</button>
              <button class="claims-tab" data-tab="action" id="tab-action" onclick="window.__switchTab('action')">Needs Action (1)</button>
            </div>
          </div>

          <!-- Claims Container -->
          <div id="claims-container" class="stagger-children" style="display:flex;flex-direction:column;gap:var(--space-md);">
            ${getActiveClaimsHTML()}
          </div>
        </div>

        <!-- Right Column: Widgets -->
        <div class="dashboard-widgets">
          <!-- Portfolio Risk Index -->
          <div class="risk-widget animate-slide-in-right">
            <div class="risk-header">
              <div class="risk-header-left">
                <span class="material-symbols-outlined">security</span>
                <h3 class="text-headline-sm color-on-surface">Portfolio Risk Index</h3>
              </div>
              <span class="badge badge-secondary">Optimal</span>
            </div>
            <p class="text-body-md color-on-surface-variant">Your active claims show a low fraud probability index. 94% of submitted invoices match regional benchmark pricing.</p>

            <div class="risk-stat" style="margin-top:var(--space-sm);">
              <div class="risk-stat-header">
                <span class="color-on-surface-variant">Benchmark Alignment</span>
                <span class="font-medium color-on-surface">94.8%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill primary" style="width:94.8%;"></div>
              </div>
            </div>

            <div class="risk-stat" style="margin-top:var(--space-xs);">
              <div class="risk-stat-header">
                <span class="color-on-surface-variant">Document Verification Rate</span>
                <span class="font-medium color-on-surface">98.2%</span>
              </div>
              <div class="progress-bar">
                <div class="progress-bar-fill secondary" style="width:98.2%;"></div>
              </div>
            </div>

            <div class="risk-footer">
              <span class="color-outline">Need deep audit?</span>
              <a href="#/my-claims" class="link">Run diagnostic <span class="material-symbols-outlined">arrow_forward</span></a>
            </div>
          </div>

          <!-- Instant Document Analyzer Dropzone -->
          <div class="dropzone-widget animate-slide-in-right" style="animation-delay:0.1s;">
            <div class="dropzone-icon">
              <span class="material-symbols-outlined">cloud_upload</span>
            </div>
            <div>
              <h4 class="text-headline-sm color-on-surface">Instant Document Analyzer</h4>
              <p class="text-body-sm color-on-surface-variant" style="margin-top:4px;">Drop repair estimates or medical bills here for instant OCR & anomaly checking.</p>
            </div>
            <button class="dropzone-btn" id="browse-files-btn">Browse Files</button>
          </div>

          <!-- Activity Log -->
          <div class="activity-widget animate-slide-in-right" style="animation-delay:0.2s;">
            <div class="activity-header">
              <h3 class="text-headline-sm color-on-surface">Activity Log</h3>
              <span class="text-label-sm color-outline">Real-time</span>
            </div>
            <div style="display:flex;flex-direction:column;gap:var(--space-md);">
              <div class="activity-item">
                <div class="activity-icon" style="background:var(--primary-fixed);color:var(--primary);">
                  <span class="material-symbols-outlined">check</span>
                </div>
                <div style="display:flex;flex-direction:column;">
                  <span class="activity-title">Estimate Verified for CLM-10482</span>
                  <span class="activity-desc">AI checked 14 line items against OEM parts catalog</span>
                  <span class="activity-time">12 mins ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon" style="background:var(--tertiary-fixed);color:var(--tertiary);">
                  <span class="material-symbols-outlined">receipt</span>
                </div>
                <div style="display:flex;flex-direction:column;">
                  <span class="activity-title">New Invoice Uploaded</span>
                  <span class="activity-desc">Repair shop invoice #8832 added to CLM-10391</span>
                  <span class="activity-time">1 hour ago</span>
                </div>
              </div>
              <div class="activity-item">
                <div class="activity-icon" style="background:var(--surface-container-high);color:var(--on-surface-variant);">
                  <span class="material-symbols-outlined">lock</span>
                </div>
                <div style="display:flex;flex-direction:column;">
                  <span class="activity-title">Policy Renewed Successfully</span>
                  <span class="activity-desc">Comprehensive Auto Fleet Policy #POL-9921</span>
                  <span class="activity-time">5 hours ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function getActiveClaimsHTML() {
  let geminiCardHtml = '';
  
  try {
    const stored = localStorage.getItem('claimlens_latest_analysis');
    if (stored) {
      const { claim, analysis } = JSON.parse(stored);
      if (analysis) {
        const approvedFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(analysis.approvedAmount || 4200);
        const totalFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(analysis.totalEstimatedCost || 4850);
        const outOfPocketFormatted = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(analysis.outOfPocket || 650);

        const breakdownRows = (analysis.coverageBreakdown || []).map(row => `
          <tr style="border-bottom: 1px solid var(--outline-variant);">
            <td style="padding: 0.6rem 0.75rem; font-weight: 500; font-size: 0.85rem; color: var(--on-surface);">${row.category}</td>
            <td style="padding: 0.6rem 0.75rem; color: var(--secondary); font-weight: 600; font-size: 0.85rem;">$${row.covered}</td>
            <td style="padding: 0.6rem 0.75rem; color: var(--error); font-weight: 600; font-size: 0.85rem;">$${row.uncovered}</td>
            <td style="padding: 0.6rem 0.75rem; color: var(--on-surface-variant); font-size: 0.8rem;">${row.notes}</td>
          </tr>
        `).join('');

        const discrepanciesHtml = (analysis.discrepancies || []).map(item => `
          <li style="display: flex; align-items: center; gap: 0.4rem; color: var(--on-surface-variant); font-size: 0.85rem; margin-bottom: 0.25rem;">
            <span class="material-symbols-outlined" style="color: var(--error); font-size: 16px;">warning</span>
            <span>${item}</span>
          </li>
        `).join('');

        geminiCardHtml = `
          <!-- Gemini LLM Analysis Result Card -->
          <div class="claim-card" style="border: 2px solid var(--primary); background: linear-gradient(180deg, rgba(235, 243, 255, 0.4) 0%, #ffffff 100%); margin-bottom: 1.5rem;">
            <div class="claim-card-top">
              <div class="claim-card-left">
                <div class="claim-avatar" style="background: var(--primary); color: #fff;">
                  <span class="material-symbols-outlined">auto_awesome</span>
                </div>
                <div>
                  <div style="display:flex;align-items:center;gap:var(--space-sm);">
                    <span class="claim-id" style="color:var(--primary); font-weight:700;">${claim?.id ? claim.id.substring(0, 8).toUpperCase() : 'CLM-GEMINI'}</span>
                    <span class="badge badge-success" style="background: #e3f2fd; color: #0d47a1; font-weight: 600;">
                      <span class="material-symbols-outlined" style="font-size:14px;">auto_awesome</span> Gemini 2.5 Flash LLM Verified
                    </span>
                  </div>
                  <h3 class="claim-title">${claim?.year || '2023'} ${claim?.make || 'Tesla'} ${claim?.model || 'Model Y'} Analysis</h3>
                </div>
              </div>
              <div class="text-right">
                <span class="text-headline-sm color-on-surface" style="color: var(--primary); font-weight: 700;">${approvedFormatted}</span>
                <p class="text-body-sm color-outline">Approved Payout (${totalFormatted} total)</p>
              </div>
            </div>

            <div style="margin-top: 1rem; padding: 1rem; background: rgba(255,255,255,0.9); border-radius: 0.75rem; border: 1px solid var(--outline-variant);">
              <h4 style="font-size: 0.9rem; font-weight: 600; color: var(--on-surface); margin-bottom: 0.35rem; display: flex; align-items: center; gap: 0.4rem;">
                <span class="material-symbols-outlined" style="color: var(--primary); font-size: 18px;">psychology</span>
                Gemini LLM Plain-Language Explanation
              </h4>
              <p style="font-size: 0.85rem; color: var(--on-surface-variant); line-height: 1.5; margin: 0;">
                ${analysis.plainLanguageExplanation || analysis.summary}
              </p>
            </div>

            ${discrepanciesHtml ? `
              <div style="margin-top: 0.75rem;">
                <h5 style="font-size: 0.8rem; font-weight: 600; color: var(--error); margin-bottom: 0.35rem;">Discrepancies & Exclusions Flagged by Gemini:</h5>
                <ul style="list-style: none; padding: 0; margin: 0;">
                  ${discrepanciesHtml}
                </ul>
              </div>
            ` : ''}

            ${breakdownRows ? `
              <div style="margin-top: 1rem; overflow-x: auto;">
                <h5 style="font-size: 0.8rem; font-weight: 600; color: var(--on-surface); margin-bottom: 0.4rem;">Gemini Coverage Breakdown:</h5>
                <table style="width: 100%; border-collapse: collapse; background: #fff; border-radius: 0.5rem; overflow: hidden; border: 1px solid var(--outline-variant);">
                  <thead>
                    <tr style="background: var(--surface-container-low); text-align: left; font-size: 0.75rem; color: var(--outline);">
                      <th style="padding: 0.5rem 0.75rem;">Category</th>
                      <th style="padding: 0.5rem 0.75rem;">Covered</th>
                      <th style="padding: 0.5rem 0.75rem;">Out of Pocket</th>
                      <th style="padding: 0.5rem 0.75rem;">Policy Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${breakdownRows}
                  </tbody>
                </table>
              </div>
            ` : ''}

            <div class="claim-card-actions" style="margin-top: 1.25rem;">
              <div class="claim-docs-count">
                <span class="material-symbols-outlined" style="color: var(--primary);">verified</span>
                <span>Policyholder out-of-pocket: <strong>${outOfPocketFormatted}</strong></span>
              </div>
              <div class="claim-action-buttons">
                <button class="btn-primary btn-small" onclick="alert('Claim payout authorized with Gemini LLM confirmation.')">
                  <span class="material-symbols-outlined" style="font-size: 16px;">check_circle</span>
                  Authorize Payout
                </button>
              </div>
            </div>
          </div>
        `;
      }
    }
  } catch (e) {
    console.warn('Error reading latest Gemini analysis:', e);
  }

  return `
    ${geminiCardHtml}

    <!-- Claim Card 1 -->
    <div class="claim-card">
      <div class="claim-card-top">
        <div class="claim-card-left">
          <div class="claim-avatar" style="background:var(--primary-fixed);color:var(--primary);">HY</div>
          <div>
            <div style="display:flex;align-items:center;gap:var(--space-sm);">
              <span class="claim-id" style="color:var(--primary);">CLM-10482</span>
              <span class="badge badge-success">
                <span class="material-symbols-outlined" style="font-size:12px;font-variation-settings:'FILL' 1;">check_circle</span> Analysis Complete
              </span>
            </div>
            <h3 class="claim-title">Hyundai i20 Front & Rear Damage</h3>
          </div>
        </div>
        <div class="text-right">
          <span class="text-headline-sm color-on-surface">$4,250.00</span>
          <p class="text-body-sm color-outline">Estimated Payout</p>
        </div>
      </div>
      <div class="claim-details-grid">
        <div>
          <span class="claim-detail-label">Incident Date</span>
          <span class="claim-detail-value color-on-surface font-medium">Oct 14, 2023</span>
        </div>
        <div>
          <span class="claim-detail-label">Discrepancies Flagged</span>
          <span class="claim-detail-value color-error font-medium">
            <span class="material-symbols-outlined">warning</span> 3 parts mispriced
          </span>
        </div>
        <div>
          <span class="claim-detail-label">AI Confidence Score</span>
          <span class="claim-detail-value color-secondary font-medium">
            <span class="material-symbols-outlined">verified</span> 94.2% High Trust
          </span>
        </div>
      </div>
      <div class="claim-card-actions">
        <div class="claim-docs-count">
          <span class="material-symbols-outlined">folder</span>
          <span>6 documents attached</span>
        </div>
        <div class="claim-action-buttons">
          <button class="btn-ghost btn-small">View Audit Log</button>
          <a href="#/my-claims" class="claim-view-btn">
            <span>View Claim</span>
            <span class="material-symbols-outlined">arrow_forward</span>
          </a>
        </div>
      </div>
    </div>
  `;
}

function getCompletedClaimsHTML() {
  return `
    <div class="claim-card-compact">
      <div style="display:flex;align-items:center;gap:var(--space-md);">
        <div class="claim-avatar" style="background:var(--surface-container-high);color:var(--primary);">BM</div>
        <div>
          <div style="display:flex;align-items:center;gap:var(--space-sm);">
            <span class="claim-id color-outline">CLM-09924</span>
            <span class="badge badge-secondary">Settled & Paid</span>
          </div>
          <h3 class="claim-title" style="font-size:24px;">BMW X5 Windshield Replacement</h3>
        </div>
      </div>
      <div class="text-right">
        <span class="text-headline-sm color-on-surface">$1,150.00</span>
        <button class="btn-ghost btn-small" style="display:block;margin-top:4px;">Receipt</button>
      </div>
    </div>
    <div class="claim-card-compact">
      <div style="display:flex;align-items:center;gap:var(--space-md);">
        <div class="claim-avatar" style="background:var(--surface-container-high);color:var(--primary);">FD</div>
        <div>
          <div style="display:flex;align-items:center;gap:var(--space-sm);">
            <span class="claim-id color-outline">CLM-09812</span>
            <span class="badge badge-secondary">Settled & Paid</span>
          </div>
          <h3 class="claim-title" style="font-size:24px;">Ford Focus Rear Bumper Minor Scuff</h3>
        </div>
      </div>
      <div class="text-right">
        <span class="text-headline-sm color-on-surface">$890.00</span>
        <button class="btn-ghost btn-small" style="display:block;margin-top:4px;">Receipt</button>
      </div>
    </div>
  `;
}

function getNeedsActionClaimsHTML() {
  return `
    <div class="claim-card-action">
      <div style="display:flex;align-items:center;gap:var(--space-md);">
        <div class="claim-avatar" style="background:var(--error-container);color:var(--error);">
          <span class="material-symbols-outlined">priority_high</span>
        </div>
        <div>
          <div style="display:flex;align-items:center;gap:var(--space-sm);">
            <span class="claim-id" style="color:var(--error);">CLM-10391</span>
            <span class="badge badge-error">Action Required</span>
          </div>
          <h3 class="claim-title" style="font-size:24px;">Tesla Model 3 Side Pillar Collision</h3>
        </div>
      </div>
      <div class="text-right">
        <a href="#/my-claims" class="btn-primary" style="background:var(--error);padding:var(--space-sm) var(--space-md);">Resolve Now</a>
      </div>
    </div>
  `;
}

// Tab switching logic — exported for global use
export function initDashboardTabs() {
  window.__switchTab = function(tabName) {
    const tabs = document.querySelectorAll('.claims-tab');
    tabs.forEach(tab => {
      tab.classList.remove('active');
      if (tab.dataset.tab === tabName) {
        tab.classList.add('active');
      }
    });

    const container = document.getElementById('claims-container');
    if (!container) return;

    if (tabName === 'active') {
      container.innerHTML = getActiveClaimsHTML();
    } else if (tabName === 'completed') {
      container.innerHTML = getCompletedClaimsHTML();
    } else {
      container.innerHTML = getNeedsActionClaimsHTML();
    }
  };
}
