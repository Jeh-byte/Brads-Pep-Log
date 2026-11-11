// Brad's starting peptides and schedules (11 Nov 2026). Loaded once on first run; editable in the app.
// vialAmount is the total peptide per vial. Sizes and doses copied from Jeh's app as a starting point.
window.SEED_PEPTIDES = [
  { name: 'GHK-Cu', vialAmount: 100, vialUnit: 'mg', vialCount: 1, bacWaterMl: 3 },
  { name: 'BPC-157', vialAmount: 10, vialUnit: 'mg', vialCount: 1, bacWaterMl: 3 },
  { name: 'TB-500', vialAmount: 10, vialUnit: 'mg', vialCount: 1, bacWaterMl: 3 },
  { name: 'KPV', vialAmount: 10, vialUnit: 'mg', vialCount: 1, bacWaterMl: 3 },
  { name: 'Retatrutide', vialAmount: 20, vialUnit: 'mg', vialCount: 1, bacWaterMl: 3 }
];
window.SEED_SUPPLIES = [
  { name: 'Bacteriostatic water', amount: 10, unit: 'mL', count: 1 }
];
// Bac water per vial (mL) for new peptides and new mixes.
window.SEED_MIX_DEFAULT = 3;
window.SEED_MIX = {};
// Glow stack every night; Retatrutide 2 mg every Wednesday from 11 Nov 2026. No units are set:
// the app works them out from the mix (3 mL bac water each, Reta 20 mg vial), e.g. 500 mcg = 15 units.
window.SEED_SCHEDULES = [
  { name: 'Glow stack', rule: 'daily', startDate: '2026-11-11', items: [
    { peptide: 'GHK-Cu', dose: 2.5, doseUnit: 'mg', time: '21:00' },
    { peptide: 'BPC-157', dose: 500, doseUnit: 'mcg', time: '21:00' },
    { peptide: 'TB-500', dose: 500, doseUnit: 'mcg', time: '21:00' },
    { peptide: 'KPV', dose: 500, doseUnit: 'mcg', time: '21:00' }
  ] },
  { name: 'Retatrutide Wednesdays', rule: 'every', every: 7, startDate: '2026-11-11', items: [
    { peptide: 'Retatrutide', dose: 2, doseUnit: 'mg', time: '10:00' }
  ] }
];
// From Jeh (11 Nov 2026): every vial is mixed with 3 mL bac water, Reta is a 20 mg vial at 2 mg.
// Applied once to installs that already had the 2 mL starting setup.
window.SEED_MIX3 = { ml: 3, names: ['GHK-Cu', 'BPC-157', 'TB-500', 'KPV', 'Retatrutide'], reta: { peptide: 'Retatrutide', vialAmount: 20, dose: 2, doseUnit: 'mg' } };
