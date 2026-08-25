const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = (file) => fs.readFileSync(path.join(root, file), "utf8");

test("Vocabulary UI is English and supports save, highlight, and removal", () => {
  const html = read("sidepanel.html");
  const js = read("sidepanel.js");

  assert.match(html, /data-tab="vocabulary">Vocabulary</);
  assert.match(js, /data-save-learning-index/);
  assert.match(js, /ytd_vocabulary/);
  assert.match(js, /vocabulary-highlight/);
  assert.match(js, /deleteVocabularyEntry/);
  assert.match(js, /ondblclick/);
  assert.match(js, /Double-click to explain/);
  assert.match(js, /formatVocabularyDate/);
  assert.match(js, /learningCard/);
  assert.match(js, /data-save-learning-index/);
  assert.match(js, /groupVocabularyByMonth/);
  assert.match(js, /scrollIntoView/);
  assert.match(js, /Full details/);
  assert.match(js, /speakVocabularyTerm/);
  assert.match(js, /SpeechSynthesisUtterance/);
  assert.match(js, /selectNaturalEnglishVoice/);
  assert.match(js, /Samantha/);
  assert.match(js, /noveltyVoicePattern/);
});

test("Explain prompt returns a structured beginner learning card", () => {
  const prompt = read("prompts/explain.md");
  assert.match(prompt, /"learningItems"/);
  assert.match(prompt, /"wordParts"/);
  assert.match(prompt, /"collocations"/);
  assert.match(prompt, /"context"/);
  assert.match(prompt, /below CET-4/);
});
