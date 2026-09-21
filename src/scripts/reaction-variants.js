const COLORS = {
  green: { label: 'green', value: '#22c55e' },
  blue: { label: 'blue', value: '#38bdf8' },
  orange: { label: 'orange', value: '#f59e0b' },
};

function median(values) {
  const ordered = [...values].sort((a, b) => a - b);
  const middle = Math.floor(ordered.length / 2);
  return ordered.length % 2 ? ordered[middle] : Math.round((ordered[middle - 1] + ordered[middle]) / 2);
}

function initVariant() {
  const root = document.querySelector('[data-reaction-variant]');
  if (!root) return;
  const kind = root.getAttribute('data-reaction-variant');
  const panel = document.getElementById('variant-panel');
  const prompt = document.getElementById('variant-prompt');
  const help = document.getElementById('variant-help');
  const status = document.getElementById('variant-status');
  const count = document.getElementById('variant-count');
  const summary = document.getElementById('variant-summary');
  const keys = Object.keys(COLORS);
  let state = 'idle';
  let target = 'green';
  let shown = 'green';
  let startedAt = 0;
  let waitTimer = 0;
  const scores = [];

  const setPanel = (next, background) => {
    state = next;
    panel.dataset.state = next === 'ready' ? 'ready' : next === 'waiting' ? 'waiting' : 'idle';
    panel.style.background = background || '';
  };

  const renderSummary = () => {
    count.textContent = `${scores.length} of 5 recorded`;
    if (scores.length < 5) {
      summary.hidden = true;
      return;
    }
    const ordered = [...scores].sort((a, b) => a - b);
    document.getElementById('variant-best').textContent = `${ordered[0]} ms`;
    document.getElementById('variant-median').textContent = `${median(scores)} ms`;
    document.getElementById('variant-average').textContent = `${Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length)} ms`;
    summary.hidden = false;
    status.textContent = 'Five valid rounds complete. Refresh the page to run again.';
  };

  const arm = () => {
    if (scores.length >= 5) return;
    window.clearTimeout(waitTimer);
    target = keys[Math.floor(Math.random() * keys.length)];
    shown = kind === 'choice' && Math.random() < 0.45 ? keys.find((key) => key !== target) : target;
    prompt.textContent = `Target: ${COLORS[target].label}`;
    help.textContent = 'Wait. Do not click yet.';
    status.textContent = `Round ${scores.length + 1} of 5. Respond only to ${COLORS[target].label}.`;
    setPanel('waiting', '#111827');
    waitTimer = window.setTimeout(() => {
      startedAt = performance.now();
      prompt.textContent = kind === 'choice' && shown !== target ? 'Wrong color — do not click' : `Click ${COLORS[shown].label}`;
      help.textContent = shown === target ? 'Record this matching signal.' : 'A click now is ignored.';
      setPanel('ready', COLORS[shown].value);
    }, 900 + Math.floor(Math.random() * 1600));
  };

  const click = () => {
    if (state === 'idle') {
      arm();
      return;
    }
    if (state === 'waiting') {
      help.textContent = 'Too early. Wait for the color, then retry.';
      status.textContent = 'Early click ignored.';
      return;
    }
    if (state !== 'ready') return;
    if (shown !== target) {
      help.textContent = 'That was the decoy. Wait for the next round.';
      status.textContent = 'Wrong color ignored.';
      arm();
      return;
    }
    const elapsed = Math.round(performance.now() - startedAt);
    scores.push(elapsed);
    prompt.textContent = `${elapsed} ms`;
    help.textContent = scores.length >= 5 ? 'Session complete.' : 'Click to arm the next round.';
    status.textContent = `Recorded ${elapsed} milliseconds.`;
    setPanel('idle', '');
    state = scores.length >= 5 ? 'done' : 'idle';
    renderSummary();
  };

  panel.addEventListener('click', click);
  renderSummary();
}

initVariant();
