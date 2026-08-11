import assert from 'node:assert/strict';
import { test } from 'node:test';
import { classifyScore, createRun, getWaitDelay, recordResult, startRound, summarizeScores } from '../src/scripts/reaction-game.js';

test('a new run starts with no recorded scores', () => {
  assert.deepEqual(createRun(), { round: 0, scores: [] });
});

test('starting a round advances the count without fabricating a result', () => {
  const started = startRound(createRun());
  assert.equal(started.round, 1);
  assert.deepEqual(started.scores, []);
});

test('a valid result is retained and an early click is excluded', () => {
  const run = startRound(createRun());
  const afterEarlyClick = recordResult(run, null);
  const afterValidClick = recordResult(afterEarlyClick, 246.7);

  assert.deepEqual(afterEarlyClick.scores, []);
  assert.deepEqual(afterValidClick.scores, [247]);
});

test('five scores produce a rounded best, median, and average summary', () => {
  assert.deepEqual(summarizeScores([300, 240, 280, 260, 220]), {
    best: 220,
    median: 260,
    average: 260,
  });
});

test('an empty score list has no misleading summary', () => {
  assert.equal(summarizeScores([]), null);
});

test('scores receive a stable browser-test interpretation band', () => {
  assert.deepEqual(classifyScore(200), { key: 'veryFast', range: '≤ 200 ms' });
  assert.deepEqual(classifyScore(299), { key: 'typical', range: '281–299 ms' });
  assert.deepEqual(classifyScore(300), { key: 'slightlySlower', range: '300–350 ms' });
  assert.deepEqual(classifyScore(351), { key: 'slower', range: '351–400 ms' });
  assert.deepEqual(classifyScore(551), { key: 'repeat', range: '> 550 ms' });
  assert.equal(classifyScore(-1), null);
});

test('reaction rounds use a shorter randomized delay without becoming predictable', () => {
  assert.equal(getWaitDelay(0), 1500);
  assert.equal(getWaitDelay(0.5), 2700);
  assert.equal(getWaitDelay(0.9999), 3899);
});
