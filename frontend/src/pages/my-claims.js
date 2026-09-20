// ClaimLens — My Claims Page (Comprehensive History & Status Tracker with Cost Breakdown Modal)

const claimsData = [
  {
    id: 'CLM-10482',
    vehicle: 'Hyundai i20',
    type: 'Accidental Damage',
    date: 'Oct 14, 2023',
    garageEstimate: '₹48,000',
    insurerApproval: '₹31,000',
    gap: '₹17,000',
    status: 'Active',
    statusBadge: 'badge-info',
    statusIcon: 'auto_awesome',
    confidence: '94.2%',
    docsCount: 6,
    discrepancy: 'Depreciation on plastic bumper (50%) & headlamp bracket excluded.',
    breakdown: [
      { item: 'Front Bumper Assembly', estimate: '₹16,000', approved: '₹8,000', gap: '₹8,000', note: '50% Plastic Depreciation applied per Sec 3' },
      { item: 'Right Headlamp Bracket', estimate: '₹9,000', approved: '₹4,500', gap: '₹4,500', note: 'Depreciation applied per Clause 4B' },
      { item: 'Paint & Panel Labor', estimate: '₹15,000', approved: '₹15,000', gap: '₹0', note: 'Standard approved workshop rate' },
      { item: 'Consumables & Fasteners', estimate: '₹8,000', approved: '₹3,500', gap: '₹4,500', note: 'Policy deductible + non-standard clips' }
    ]
  },
  {
    id: 'CLM-10391',
    vehicle: 'Tesla Model Y',
    type: 'Collision Damage',
    date: 'Nov 02, 2023',
    garageEstimate: '₹1,25,000',
    insurerApproval: '₹98,000',
    gap: '₹27,000',
    status: 'Needs Action',
    statusBadge: 'badge-error',
    statusIcon: 'warning',
    confidence: '78.5%',
    docsCount: 4,
    discrepancy: 'Labor rate variance between OEM certified workshop & surveyor caps.',
    breakdown: [
      { item: 'Aluminum Side Pillar Quarter Panel', estimate: '₹65,000', approved: '₹58,000', gap: '₹7,000', note: 'Wear depreciation on outer panel' },
      { item: 'HV Safety Tech Labor (12 hrs)', estimate: '₹35,000', approved: '₹22,000', gap: '₹13,000', note: 'Surveyor capped labor rate at $95/hr' },
      { item: 'ADAS Radar & Sensor Calibration', estimate: '₹25,000', approved: '₹18,000', gap: '₹7,000', note: 'Standard calibration approved; custom wrap excluded' }
    ]
  },
  {
    id: 'CLM-09924',
    vehicle: 'BMW X5',
    type: 'Windshield Replacement',
    date: 'Aug 19, 2023',
    garageEstimate: '₹65,000',
    insurerApproval: '₹65,000',
    gap: '₹0',
    status: 'Settled & Paid',
    statusBadge: 'badge-success',
    statusIcon: 'check_circle',
    confidence: '99.1%',
    docsCount: 5,
    discrepancy: 'Full coverage under Zero Depreciation Add-on rider.',
    breakdown: [
      { item: 'OEM Acoustic Windshield Glass', estimate: '₹52,000', approved: '₹52,000', gap: '₹0', note: '100% covered under Zero Dep Add-on' },
      { item: 'Glass Sealant & Rain Sensor Kit', estimate: '₹13,000', approved: '₹13,000', gap: '₹0', note: 'Fully covered' }
    ]
  },
  {
    id: 'CLM-09812',
    vehicle: 'Ford Focus',
    type: 'Rear Bumper Scuff',
    date: 'Jul 04, 2023',
    garageEstimate: '₹18,500',
    insurerApproval: '₹18,500',
    gap: '₹0',
    status: 'Settled & Paid',
    statusBadge: 'badge-success',
    statusIcon: 'check_circle',
    confidence: '97.8%',
    docsCount: 3,
    discrepancy: 'Cashless claim settled directly with workshop.',
    breakdown: [
      { item: 'Rear Bumper Spot Refinishing', estimate: '₹12,000', approved: '₹12,000', gap: '₹0', note: 'Fully approved' },
      { item: 'Clear Coat Polish & Fitting', estimate: '₹6,500', approved: '₹6,500', gap: '₹0', note: 'Fully approved' }
    ]
  },
  {
    id: 'CLM-09540',
    vehicle: 'Honda City',
    type: 'Flood & Engine Damage',
    date: 'May 12, 2023',
    garageEstimate: '₹1,80,000',
    insurerApproval: '₹1,42,000',
    gap: '₹38,000',
    status: 'Closed',
    statusBadge: 'badge-outline',
    statusIcon: 'task_alt',
    confidence: '91.0%',
    docsCount: 8,
    discrepancy: 'Hydrostatic lock add-on applied; engine oil consumables excluded.',
    breakdown: [
      { item: 'Engine Overhaul & Piston Rods', estimate: '₹1,20,000', approved: '₹1,05,000', gap: '₹15,000', note: 'Hydrostatic cover applied; 12% part dep' },
      { item: 'Engine Oil, Coolant & Consumables', estimate: '₹25,000', approved: '₹7,000', gap: '₹18,000', note: 'Consumables rider missing from policy' },
      { item: 'Electrical Harness Flushing', estimate: '₹35,000', approved: '₹30,000', gap: '₹5,000', note: 'Standard labor rate capped' }
    ]
  }
];

export function renderMyClaims() {
  return `
    <div style="display:flex;flex-direction:column;width:100%;padding:var(--space-md) var(--space-xl) var(--space-xl);">
      <!-- Header Banner -->
      <div class="my-claims-header animate-fade-in-up" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-lg);">
        <div>
          <div class="dashboard-breadcrumb">
            <span class="material-symbols-outlined">assignment</span>
            <span>Claim Intelligence</span>
            <span>/</span>
            <span class="active">My Claims</span>
          </div>
          <h1 class="text-headline-xl color-on-surface tracking-tight">Claim History</h1>
          <p class="text-body-lg color-on-surface-variant" style="margin-top:var(--space-xs);">
            Track all past and ongoing vehicle damage claims, audit reports, and detailed cost breakdowns.
          </p>
        </div>
        <div style="display:flex;align-items:center;gap:var(--space-md);">
          <a href="#/new-claim" class="btn-primary">
            <span class="material-symbols-outlined" style="font-size:20px;">add_box</span>
            <span>+ Submit New Claim</span>
          </a>
        </div>
      </div>

      <!-- Search & Filters Toolbar -->
      <div class="my-claims-toolbar animate-fade-in-up" style="display:flex;align-items:center;justify-content:space-between;gap:var(--space-md);background:var(--surface-container-lowest);padding:var(--space-md);border-radius:var(--radius-xl);box-shadow:var(--shadow-sm);margin-bottom:var(--space-lg);">
        <div class="header-search" style="width:24rem;margin:0;background:var(--surface-container-low);">
          <span class="material-symbols-outlined">search</span>
          <input type="text" placeholder="Search claims by ID, vehicle model, or status..." id="claims-search-input" />
        </div>
        
        <div style="display:flex;align-items:center;gap:var(--space-sm);">
          <button class="btn-secondary btn-small filter-btn active" data-filter="all">All (${claimsData.length})</button>
          <button class="btn-secondary btn-small filter-btn" data-filter="Active">Active (2)</button>
          <button class="btn-secondary btn-small filter-btn" data-filter="Settled">Settled (2)</button>
          <button class="btn-secondary btn-small filter-btn" data-filter="Action">Action Needed (1)</button>
        </div>
      </div>

      <!-- Claims Table / List Card -->
      <div class="my-claims-list animate-fade-in-up" id="claims-list-container" style="display:flex;flex-direction:column;gap:var(--space-md);">
        ${claimsData.map(claim => `
          <div class="claim-history-card card" style="display:flex;flex-direction:column;gap:var(--space-md);border:1px solid var(--surface-container-high);">
            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:var(--space-md);border-bottom:1px solid var(--surface-container-high);padding-bottom:var(--space-md);">
              <div style="display:flex;align-items:center;gap:var(--space-md);">
                <div class="claim-avatar" style="background:var(--primary-fixed);color:var(--primary);font-weight:700;">
                  ${claim.vehicle.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style="display:flex;align-items:center;gap:var(--space-sm);">
                    <span class="claim-id" style="color:var(--primary);font-weight:700;">${claim.id}</span>
                    <span class="badge ${claim.statusBadge}">
                      <span class="material-symbols-outlined" style="font-size:12px;">${claim.statusIcon}</span>
                      ${claim.status}
                    </span>
                  </div>
                  <h3 class="text-headline-sm color-on-surface" style="margin-top:2px;">${claim.vehicle} — ${claim.type}</h3>
                </div>
              </div>

              <div style="display:flex;align-items:center;gap:var(--space-xl);">
                <div class="text-right">
                  <span class="text-label-sm color-outline" style="display:block;">Garage Estimate</span>
                  <span class="font-semibold color-on-surface">${claim.garageEstimate}</span>
                </div>
                <div class="text-right">
                  <span class="text-label-sm color-outline" style="display:block;">Insurer Approved</span>
                  <span class="font-semibold color-secondary">${claim.insurerApproval}</span>
                </div>
                <div class="text-right">
                  <span class="text-label-sm color-outline" style="display:block;">Uncovered Gap</span>
                  <span class="font-semibold ${claim.gap === '₹0' ? 'color-secondary' : 'color-error'}">${claim.gap}</span>
                </div>
              </div>
            </div>

            <!-- Details Row -->
            <div style="display:grid;grid-template-columns:repeat(4, 1fr);gap:var(--space-md);background:var(--surface-container-low);padding:var(--space-md);border-radius:var(--radius-xl);">
              <div>
                <span class="text-label-sm color-outline" style="display:block;">Incident Date</span>
                <span class="text-body-md font-medium color-on-surface">${claim.date}</span>
              </div>
              <div>
                <span class="text-label-sm color-outline" style="display:block;">Attached Vault Documents</span>
                <span class="text-body-md font-medium color-on-surface" style="display:flex;align-items:center;gap:4px;">
                  <span class="material-symbols-outlined" style="font-size:16px;color:var(--primary);">folder</span>
                  ${claim.docsCount} files uploaded
                </span>
              </div>
              <div>
                <span class="text-label-sm color-outline" style="display:block;">AI Confidence</span>
                <span class="text-body-md font-medium color-secondary" style="display:flex;align-items:center;gap:4px;">
                  <span class="material-symbols-outlined" style="font-size:16px;">verified</span>
                  ${claim.confidence} Accuracy
                </span>
              </div>
              <div>
                <span class="text-label-sm color-outline" style="display:block;">Audit Findings</span>
                <span class="text-body-sm color-on-surface-variant truncate" title="${claim.discrepancy}">${claim.discrepancy}</span>
              </div>
            </div>

            <!-- Actions Footer -->
            <div style="display:flex;align-items:center;justify-content:space-between;margin-top:var(--space-xs);">
              <div style="display:flex;align-items:center;gap:var(--space-xs);color:var(--outline);font-size:12px;">
                <span class="material-symbols-outlined" style="font-size:16px;">info</span>
                <span>Audit engine active comparison</span>
              </div>
              <div style="display:flex;align-items:center;gap:var(--space-sm);">
                <button class="btn-ghost btn-small" onclick="alert('Downloading audit report PDF for ${claim.id}...')">Download Audit PDF</button>
                <button class="btn-secondary btn-small btn-view-breakdown" data-id="${claim.id}">
                  <span>View Breakdown</span>
                  <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}

export function initMyClaims() {
  // Attach event listener for View Breakdown buttons
  document.querySelectorAll('.btn-view-breakdown').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const claimId = btn.getAttribute('data-id');
      openCostBreakdownModal(claimId);
    });
  });
}

function openCostBreakdownModal(claimId) {
  const claim = claimsData.find(c => c.id === claimId) || claimsData[0];

  const existingModal = document.getElementById('cost-breakdown-modal');
  if (existingModal) existingModal.remove();

  const modal = document.createElement('div');
  modal.id = 'cost-breakdown-modal';
  modal.className = 'google-modal-overlay';
  modal.style.zIndex = '2000';

  const breakdownRows = (claim.breakdown || []).map(row => `
    <tr style="border-bottom: 1px solid var(--outline-variant);">
      <td style="padding: 0.75rem 1rem; font-weight: 500; font-size: 0.875rem; color: var(--on-surface);">${row.item}</td>
      <td style="padding: 0.75rem 1rem; font-weight: 600; font-size: 0.875rem; color: var(--on-surface);">${row.estimate}</td>
      <td style="padding: 0.75rem 1rem; font-weight: 600; font-size: 0.875rem; color: var(--secondary);">${row.approved}</td>
      <td style="padding: 0.75rem 1rem; font-weight: 600; font-size: 0.875rem; color: ${row.gap === '₹0' ? 'var(--secondary)' : 'var(--error)'};">${row.gap}</td>
      <td style="padding: 0.75rem 1rem; font-size: 0.8rem; color: var(--on-surface-variant);">${row.note}</td>
    </tr>
  `).join('');

  modal.innerHTML = `
    <div class="google-modal-card" style="max-width: 680px; width: 95%;">
      <div style="display: flex; align-items: flex-start; justify-content: space-between; border-bottom: 1px solid var(--outline-variant); padding-bottom: 1rem; margin-bottom: 1rem;">
        <div>
          <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.25rem;">
            <span style="font-weight: 700; color: var(--primary); font-size: 0.9rem;">${claim.id}</span>
            <span class="badge ${claim.statusBadge}">${claim.status}</span>
          </div>
          <h2 style="font-size: 1.25rem; font-weight: 700; color: var(--on-surface); margin: 0;">${claim.vehicle} — Cost Breakdown</h2>
          <p style="font-size: 0.85rem; color: var(--on-surface-variant); margin-top: 0.2rem;">${claim.type} • Incident Date: ${claim.date}</p>
        </div>
        <button id="btn-close-breakdown" class="btn-ghost" style="padding: 0.25rem; min-width: auto; border-radius: 50%;">
          <span class="material-symbols-outlined">close</span>
        </button>
      </div>

      <!-- Financial Metrics Summary Cards -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-bottom: 1.25rem;">
        <div style="background: var(--surface-container-low); padding: 0.85rem; border-radius: 0.75rem; text-align: center;">
          <span style="font-size: 0.75rem; color: var(--outline); font-weight: 500; display: block;">Garage Estimate</span>
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--on-surface); margin-top: 0.1rem; display: block;">${claim.garageEstimate}</span>
        </div>
        <div style="background: rgba(137, 245, 231, 0.2); padding: 0.85rem; border-radius: 0.75rem; text-align: center;">
          <span style="font-size: 0.75rem; color: var(--secondary); font-weight: 500; display: block;">Approved Payout</span>
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--secondary); margin-top: 0.1rem; display: block;">${claim.insurerApproval}</span>
        </div>
        <div style="background: var(--error-container); padding: 0.85rem; border-radius: 0.75rem; text-align: center;">
          <span style="font-size: 0.75rem; color: var(--on-error-container); font-weight: 500; display: block;">Uncovered Gap</span>
          <span style="font-size: 1.15rem; font-weight: 700; color: var(--error); margin-top: 0.1rem; display: block;">${claim.gap}</span>
        </div>
      </div>

      <!-- Audit Discrepancy Note -->
      <div style="background: var(--surface-container-low); border-left: 4px solid var(--primary); padding: 0.85rem 1rem; border-radius: 0.5rem; margin-bottom: 1.25rem;">
        <span style="font-size: 0.8rem; font-weight: 700; color: var(--primary); display: flex; align-items: center; gap: 0.35rem;">
          <span class="material-symbols-outlined" style="font-size: 16px;">auto_awesome</span> Audit Findings Summary
        </span>
        <p style="font-size: 0.85rem; color: var(--on-surface-variant); margin: 0.25rem 0 0 0; line-height: 1.4;">
          ${claim.discrepancy}
        </p>
      </div>

      <!-- Detailed Itemized Table -->
      <div style="overflow-x: auto; max-height: 260px; overflow-y: auto; border: 1px solid var(--outline-variant); border-radius: 0.75rem; margin-bottom: 1.25rem;">
        <table style="width: 100%; border-collapse: collapse; background: #fff; text-align: left;">
          <thead>
            <tr style="background: var(--surface-container-low); font-size: 0.75rem; color: var(--outline); text-transform: uppercase; letter-spacing: 0.03em;">
              <th style="padding: 0.6rem 1rem;">Line Item</th>
              <th style="padding: 0.6rem 1rem;">Estimate</th>
              <th style="padding: 0.6rem 1rem;">Approved</th>
              <th style="padding: 0.6rem 1rem;">Gap</th>
              <th style="padding: 0.6rem 1rem;">Policy Rule / Note</th>
            </tr>
          </thead>
          <tbody>
            ${breakdownRows}
          </tbody>
        </table>
      </div>

      <!-- Footer Buttons -->
      <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--outline-variant); padding-top: 1rem;">
        <button class="btn-ghost btn-small" onclick="alert('Downloading detailed line-item breakdown report for ${claim.id}...')">
          <span class="material-symbols-outlined" style="font-size: 16px;">download</span> Download Report PDF
        </button>
        <button id="btn-close-breakdown-modal" class="btn-primary btn-small">
          Done
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeBtn = modal.querySelector('#btn-close-breakdown');
  const doneBtn = modal.querySelector('#btn-close-breakdown-modal');

  const closeModal = () => modal.remove();

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (doneBtn) doneBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
