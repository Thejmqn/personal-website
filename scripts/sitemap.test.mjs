import test from 'node:test';
import assert from 'node:assert/strict';
import { createSitemap, publicationDate, readPageList } from './sitemap.mjs';

test('news window, XML escaping, and canonical note URLs', () => {
  const note = { hasPage: true, link: 'example', title: 'A & B < C', date: 'September 17th, 2026' };
  const options = { origin: 'https://www.josephmoran.org', notes: [note], work: [], misc: [] };
  const recent = createSitemap({ ...options, now: new Date('2026-09-18T23:59:59Z') });
  assert.match(recent, /<news:title>A &amp; B &lt; C<\/news:title>/);
  assert.match(recent, /<news:publication_date>2026-09-17<\/news:publication_date>/);
  for (const time of ['2026-09-19T00:00:00Z', '2026-09-16T23:59:59Z']) {
    const result = createSitemap({ ...options, now: new Date(time) });
    assert.doesNotMatch(result, /<news:news>/);
    assert.match(result, /https:\/\/www.josephmoran.org\/notes\/example/);
  }
  assert.doesNotMatch(recent, /\/notes\/(0|latest)</);
  assert.equal(publicationDate('June 1st, 2025'), '2025-06-01');
  assert.throws(() => publicationDate('not a date'));
});

test('site lists supply all rendered pages and exclude empty misc routes', async () => {
  const [notes, work, misc] = await Promise.all(['notes', 'work', 'misc'].map(readPageList));
  const result = createSitemap({ origin: 'https://www.josephmoran.org', notes, work, misc });
  for (const note of notes) assert.ok(result.includes(`/notes/${note.link}</loc>`));
  for (const page of work) assert.ok(result.includes(`/work/${page.link}</loc>`));
  assert.match(result, /\/misc\/quotes<\/loc>/);
  assert.doesNotMatch(result, /\/misc\/codes<\/loc>/);
  assert.equal((result.match(/<url>/g) || []).length, 5 + notes.length + work.length + 1);
});
