// Brad's starting peptides and schedules (11 Nov 2026). Loaded once on first run; editable in the app.
// vialAmount is the total peptide per vial. Sizes and doses copied from Jeh's app as a starting point.
window.SEED_PEPTIDES = [
  { name: 'GHK-Cu', vialAmount: 100, vialUnit: 'mg', vialCount: 1 },
  { name: 'BPC-157', vialAmount: 10, vialUnit: 'mg', vialCount: 1 },
  { name: 'TB-500', vialAmount: 10, vialUnit: 'mg', vialCount: 1 },
  { name: 'KPV', vialAmount: 10, vialUnit: 'mg', vialCount: 1 },
  { name: 'Retatrutide', vialAmount: 10, vialUnit: 'mg', vialCount: 1 }
];
window.SEED_SUPPLIES = [
  { name: 'Bacteriostatic water', amount: 10, unit: 'mL', count: 1 }
];
// Bac water per vial (mL) for new peptides and new mixes.
window.SEED_MIX_DEFAULT = 2;
window.SEED_MIX = {};
// Glow stack every night; Retatrutide every Wednesday from 11 Nov 2026. Reta has no dose yet:
// tapping it opens the log form, and the first logged dose becomes the usual one.
window.SEED_SCHEDULES = [
  { name: 'Glow stack', rule: 'daily', startDate: '2026-11-11', items: [
    { peptide: 'GHK-Cu', dose: 2.5, doseUnit: 'mg', volume: 5, volumeUnit: 'units', time: '21:00' },
    { peptide: 'BPC-157', dose: 500, doseUnit: 'mcg', volume: 10, volumeUnit: 'units', time: '21:00' },
    { peptide: 'TB-500', dose: 500, doseUnit: 'mcg', volume: 10, volumeUnit: 'units', time: '21:00' },
    { peptide: 'KPV', dose: 500, doseUnit: 'mcg', volume: 10, volumeUnit: 'units', time: '21:00' }
  ] },
  { name: 'Retatrutide Wednesdays', rule: 'every', every: 7, startDate: '2026-11-11', items: [
    { peptide: 'Retatrutide', time: '10:00' }
  ] }
];
