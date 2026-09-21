const COLORS = {
  green: { key: 'green', value: '#22c55e' },
  blue: { key: 'blue', value: '#38bdf8' },
  orange: { key: 'orange', value: '#f59e0b' },
};

const COLOR_NAMES = {
  en: { green: 'green', blue: 'blue', orange: 'orange' },
  zh: { green: '绿色', blue: '蓝色', orange: '橙色' },
  ko: { green: '초록', blue: '파랑', orange: '주황' },
  hi: { green: 'हरा', blue: 'नीला', orange: 'नारंगी' },
  fr: { green: 'vert', blue: 'bleu', orange: 'orange' },
};

const UI = {
  en: {
    target: (color) => `Target: ${color}`, wait: 'Wait. Do not click yet.', click: (color) => `Click ${color}`, decoy: 'Wrong color — do not click',
    matchHelp: 'Record this matching signal.', decoyHelp: 'A click now is ignored.', earlyHelp: 'Too early. Wait for the color, then retry.', earlyStatus: 'Early click ignored.',
    wrongHelp: 'That was the decoy. Wait for the next round.', wrongStatus: 'Wrong color ignored.', recorded: (ms) => `${ms} ms`,
    nextHelp: 'Click to arm the next round.', completeHelp: 'Session complete.', completeStatus: 'Five valid rounds complete. Refresh the page to run again.',
    armed: (round, color) => `Round ${round} of 5. Respond only to ${color}.`,
    count: (n) => `${n} of 5 recorded`,
  },
  zh: {
    target: (color) => `目标：${color}`, wait: '请等待，先不要点击。', click: (color) => `点击${color}`, decoy: '干扰色 — 不要点击',
    matchHelp: '记录这次匹配信号。', decoyHelp: '现在点击不计分。', earlyHelp: '太早了。等到颜色出现后再试。', earlyStatus: '过早点击已忽略。',
    wrongHelp: '这是干扰色。等待下一轮。', wrongStatus: '错误颜色已忽略。', recorded: (ms) => `${ms} 毫秒`,
    nextHelp: '点击开始下一轮。', completeHelp: '本轮会话完成。', completeStatus: '五轮有效测试完成。刷新页面可再测一次。',
    armed: (round, color) => `第 ${round} / 5 轮。只对${color}做出反应。`,
    count: (n) => `已记录 ${n} / 5`,
  },
  ko: {
    target: (color) => `목표: ${color}`, wait: '기다리세요. 아직 클릭하지 마세요.', click: (color) => `${color} 클릭`, decoy: '다른 색 — 클릭하지 마세요',
    matchHelp: '일치하는 신호를 기록합니다.', decoyHelp: '지금 클릭은 무시됩니다.', earlyHelp: '너무 이릅니다. 색이 나온 뒤 다시 시도하세요.', earlyStatus: '이른 클릭은 무시되었습니다.',
    wrongHelp: '방해 색이었습니다. 다음 라운드를 기다리세요.', wrongStatus: '잘못된 색은 무시되었습니다.', recorded: (ms) => `${ms} ms`,
    nextHelp: '클릭하여 다음 라운드를 준비하세요.', completeHelp: '세션 완료.', completeStatus: '유효한 5라운드가 끝났습니다. 다시 하려면 페이지를 새로고침하세요.',
    armed: (round, color) => `${round} / 5라운드. ${color}에만 반응하세요.`,
    count: (n) => `${n} / 5 기록됨`,
  },
  hi: {
    target: (color) => `लक्ष्य: ${color}`, wait: 'प्रतीक्षा करें। अभी क्लिक न करें।', click: (color) => `${color} पर क्लिक करें`, decoy: 'गलत रंग — क्लिक न करें',
    matchHelp: 'यह मेल खाता संकेत दर्ज करें।', decoyHelp: 'अब क्लिक नहीं गिना जाएगा।', earlyHelp: 'बहुत जल्दी। रंग आने के बाद फिर कोशिश करें।', earlyStatus: 'जल्दी क्लिक अनदेखा किया गया।',
    wrongHelp: 'यह भ्रामक रंग था। अगले राउंड की प्रतीक्षा करें।', wrongStatus: 'गलत रंग अनदेखा किया गया।', recorded: (ms) => `${ms} ms`,
    nextHelp: 'अगला राउंड शुरू करने के लिए क्लिक करें।', completeHelp: 'सत्र पूरा।', completeStatus: 'पाँच वैध राउंड पूरे। फिर से करने के लिए पृष्ठ रीफ़्रेश करें।',
    armed: (round, color) => `राउंड ${round} / 5. केवल ${color} पर प्रतिक्रिया दें।`,
    count: (n) => `${n} / 5 दर्ज`,
  },
  fr: {
    target: (color) => `Cible : ${color}`, wait: 'Attendez. Ne cliquez pas encore.', click: (color) => `Cliquez ${color}`, decoy: 'Mauvaise couleur — ne cliquez pas',
    matchHelp: 'Enregistrez ce signal correspondant.', decoyHelp: 'Un clic maintenant est ignoré.', earlyHelp: 'Trop tôt. Attendez la couleur, puis réessayez.', earlyStatus: 'Clic trop tôt ignoré.',
    wrongHelp: 'C’était le leurre. Attendez le tour suivant.', wrongStatus: 'Mauvaise couleur ignorée.', recorded: (ms) => `${ms} ms`,
    nextHelp: 'Cliquez pour préparer le tour suivant.', completeHelp: 'Séance terminée.', completeStatus: 'Cinq tours valides terminés. Actualisez la page pour recommencer.',
    armed: (round, color) => `Tour ${round} sur 5. Répondez seulement à ${color}.`,
    count: (n) => `${n} sur 5 enregistrés`,
  },
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
  const locale = root.getAttribute('data-locale') || 'en';
  const ui = UI[locale] || UI.en;
  const names = COLOR_NAMES[locale] || COLOR_NAMES.en;
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
    count.textContent = ui.count(scores.length);
    if (scores.length < 5) {
      summary.hidden = true;
      return;
    }
    const ordered = [...scores].sort((a, b) => a - b);
    document.getElementById('variant-best').textContent = `${ordered[0]} ms`;
    document.getElementById('variant-median').textContent = `${median(scores)} ms`;
    document.getElementById('variant-average').textContent = `${Math.round(scores.reduce((sum, value) => sum + value, 0) / scores.length)} ms`;
    summary.hidden = false;
    status.textContent = ui.completeStatus;
  };

  const arm = () => {
    if (scores.length >= 5) return;
    window.clearTimeout(waitTimer);
    target = keys[Math.floor(Math.random() * keys.length)];
    shown = Math.random() < 0.45 ? keys.find((key) => key !== target) : target;
    prompt.textContent = ui.target(names[target]);
    help.textContent = ui.wait;
    status.textContent = ui.armed(scores.length + 1, names[target]);
    setPanel('waiting', '#111827');
    waitTimer = window.setTimeout(() => {
      startedAt = performance.now();
      prompt.textContent = shown !== target ? ui.decoy : ui.click(names[shown]);
      help.textContent = shown === target ? ui.matchHelp : ui.decoyHelp;
      setPanel('ready', COLORS[shown].value);
    }, 900 + Math.floor(Math.random() * 1600));
  };

  const click = () => {
    if (state === 'idle') {
      arm();
      return;
    }
    if (state === 'waiting') {
      help.textContent = ui.earlyHelp;
      status.textContent = ui.earlyStatus;
      return;
    }
    if (state !== 'ready') return;
    if (shown !== target) {
      help.textContent = ui.wrongHelp;
      status.textContent = ui.wrongStatus;
      arm();
      return;
    }
    const elapsed = Math.round(performance.now() - startedAt);
    scores.push(elapsed);
    prompt.textContent = ui.recorded(elapsed);
    help.textContent = scores.length >= 5 ? ui.completeHelp : ui.nextHelp;
    status.textContent = ui.recorded(elapsed);
    setPanel('idle', '');
    state = scores.length >= 5 ? 'done' : 'idle';
    renderSummary();
  };

  panel.addEventListener('click', click);
  renderSummary();
}

initVariant();
