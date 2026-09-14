// One saved lesson per website, device and browser profile. No server is involved.
export const PROGRESS_KEY = 'silent-forest-music-lesson-progress-v1';
const isObject = value => value !== null && typeof value === 'object' && !Array.isArray(value);
const isIndex = (value, count) => Number.isInteger(value) && value >= 0 && value < count;
function cleanMap(value, accepts) {
  if (!isObject(value)) return {};
  return Object.fromEntries(Object.entries(value).filter(([key, entry]) =>
    /^[a-z][a-z0-9-]*$/.test(key) && !['constructor', 'prototype'].includes(key) && accepts(entry)));
}
function cleanSnapshot(value, stepCount, sceneCount) {
  if (!isObject(value) || value.version !== 1 || !isObject(value.drafts) ||
      !Array.isArray(value.complete) || typeof value.savedAt !== 'string' ||
      !Number.isFinite(Date.parse(value.savedAt))) throw new Error('Invalid saved lesson');
  return {
    version: 1,
    savedAt: value.savedAt,
    step: isIndex(value.step, stepCount) ? value.step : 0,
    view: value.view === 'student' ? 'student' : 'teacher',
    scene: isIndex(value.scene, sceneCount) ? value.scene : 0,
    bookChapter: Number.isInteger(value.bookChapter) && value.bookChapter >= 1 && value.bookChapter <= 16 ? value.bookChapter : 1,
    drafts: cleanMap(value.drafts, v => typeof v === 'string' || typeof v === 'boolean'),
    labels: cleanMap(value.labels, v => typeof v === 'string'),
    fieldSteps: cleanMap(value.fieldSteps, v => isIndex(v, stepCount)),
    checked: cleanMap(value.checked, v => typeof v === 'boolean'),
    complete: [...new Set(value.complete.filter(v => isIndex(v, stepCount)))]
  };
}
export function loadSavedProgress(stepCount, sceneCount) {
  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY);
    if (raw === null) return {status: 'empty'};
    return {status: 'restored', data: cleanSnapshot(JSON.parse(raw), stepCount, sceneCount)};
  } catch {
    return {status: 'unavailable'};
  }
}
export function persistProgress(state, stepCount, sceneCount) {
  try {
    const data = cleanSnapshot({...state, version: 1, savedAt: new Date().toISOString(), complete: [...state.complete]}, stepCount, sceneCount);
    window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(data));
    return {ok: true, savedAt: data.savedAt};
  } catch {
    return {ok: false};
  }
}
