export const SCORE_BANDS = [
  { key: 'veryFast', range: '≤ 200 ms', maximum: 200 },
  { key: 'fast', range: '201–240 ms', maximum: 240 },
  { key: 'good', range: '241–280 ms', maximum: 280 },
  { key: 'typical', range: '281–299 ms', maximum: 299 },
  { key: 'slightlySlower', range: '300–350 ms', maximum: 350 },
  { key: 'slower', range: '351–400 ms', maximum: 400 },
  { key: 'verySlow', range: '401–450 ms', maximum: 450 },
  { key: 'slow', range: '451–550 ms', maximum: 550 },
  { key: 'repeat', range: '> 550 ms', maximum: Infinity },
];

export function createRun() {
  return { round: 0, scores: [] };
}

export function startRound(run) {
  return { ...run, round: run.round + 1 };
}

export function getWaitDelay(randomValue = Math.random()) {
  return 1500 + Math.floor(randomValue * 2400);
}

export function recordResult(run, elapsedMs) {
  if (!Number.isFinite(elapsedMs) || elapsedMs < 0) return run;

  return {
    ...run,
    scores: [...run.scores, Math.round(elapsedMs)],
  };
}

export function summarizeScores(scores) {
  if (scores.length === 0) return null;

  const ordered = [...scores].sort((left, right) => left - right);
  const middle = Math.floor(ordered.length / 2);
  const median =
    ordered.length % 2 === 1
      ? ordered[middle]
      : Math.round((ordered[middle - 1] + ordered[middle]) / 2);
  const average = Math.round(scores.reduce((total, score) => total + score, 0) / scores.length);

  return { best: ordered[0], median, average };
}

export function classifyScore(score) {
  if (!Number.isFinite(score) || score < 0) return null;
  const band = SCORE_BANDS.find(({ maximum }) => score <= maximum);
  return band ? { key: band.key, range: band.range } : null;
}

export const TOOL_LABELS = {
  en: {
    eyebrow: 'Five-round visual test', heading: 'Click when the signal turns green', standard: '5 rounds', practice: 'Practice',
    standardCount: (count) => `${count} of 5 recorded`, practiceCount: (count) => `${count} practice attempts`,
    initialPrompt: 'Click or tap to begin', initialHelp: 'Wait for green, then respond as quickly as you can.',
    sessionNote: 'Your five scores are calculated only in this browser session.',
    waitingPrompt: 'Wait for green', waitingHelp: 'Do not click early. The signal changes after a random delay.',
    readyPrompt: 'Click now', readyHelp: 'Tap, click, Enter, or Space to record this round.',
    earlyPrompt: 'Too early', earlyHelp: 'Wait for green, then click to retry this round.',
    resultHelp: 'Click to prepare the next round.', practiceResultHelp: 'Click to practice again when you are ready.',
    armed: (round) => `Round ${round} of 5 is armed.`, practiceArmed: (round) => `Practice attempt ${round} is armed.`,
    readyStatus: 'Signal is green. Record your response.', earlyStatus: 'Early click not recorded. Retry the same round.',
    recorded: (round, score) => `Round ${round} recorded at ${score} milliseconds.`,
    practiceRecorded: (round, score) => `Practice attempt ${round} recorded at ${score} milliseconds.`,
    roundResultsEyebrow: 'Live session detail', roundResultsHeading: 'Result from every valid round', round: 'Round', awaiting: 'Waiting',
    interpretation: 'Browser-test interpretation', disclaimer: 'These bands are a simple guide for this browser test, not a medical or personal ability assessment.',
    scoreGuideHeading: 'How to interpret the result', scoreGuideNote: 'A quick reference for this browser test. Device, display, and input conditions can affect every score.',
    bands: { veryFast: 'Excellent', fast: 'Very good', good: 'Good', typical: 'Above average', slightlySlower: 'Average', slower: 'Below average', verySlow: 'Slow', slow: 'Very slow', repeat: 'Try another round' },
    summaryEyebrow: 'Five-round summary', summaryHeading: 'Your session result', best: 'Best', median: 'Median', average: 'Average',
    completePrompt: 'Five rounds complete', completeHelp: 'Use the buttons below to copy this session or run another test.',
    completeStatus: (median) => `Five rounds complete. Median result: ${median} milliseconds.`, copy: 'Copy result', restart: 'Start over',
    copied: 'Session result copied to your clipboard.', copyUnavailable: 'Copy was unavailable. You can select the results shown above.',
    standardReady: 'Five-round session ready.', practiceReady: 'Practice session ready. Scores stay in this browser tab.', latest: (score, best) => `Latest: ${score} ms. Best this practice session: ${best} ms.`,
  },
  zh: {
    eyebrow: '五轮视觉测试', heading: '信号变绿时点击', standard: '5 轮', practice: '练习',
    standardCount: (count) => `已记录 ${count} / 5`, practiceCount: (count) => `${count} 次练习`,
    initialPrompt: '点击或轻触开始', initialHelp: '等待绿色信号，然后尽快反应。', sessionNote: '五轮成绩只在当前浏览器会话中计算。',
    waitingPrompt: '等待绿色信号', waitingHelp: '不要过早点击。信号会在随机延迟后改变。', readyPrompt: '现在点击', readyHelp: '轻触、点击、按 Enter 或空格键记录本轮。',
    earlyPrompt: '太早了', earlyHelp: '等待绿色信号后点击以重试本轮。', resultHelp: '点击准备下一轮。', practiceResultHelp: '准备好后点击继续练习。',
    armed: (round) => `第 ${round} / 5 轮已准备。`, practiceArmed: (round) => `第 ${round} 次练习已准备。`, readyStatus: '信号已变绿，请记录你的反应。', earlyStatus: '过早点击未记录，请重试本轮。',
    recorded: (round, score) => `第 ${round} 轮记录为 ${score} 毫秒。`, practiceRecorded: (round, score) => `第 ${round} 次练习记录为 ${score} 毫秒。`,
    roundResultsEyebrow: '实时会话明细', roundResultsHeading: '每次有效测试结果', round: '第', awaiting: '等待中', interpretation: '浏览器测试解读', disclaimer: '这些区间仅供本浏览器测试参考，不是医疗或个人能力评估。',
    scoreGuideHeading: '如何解读结果', scoreGuideNote: '此区间仅为本浏览器测试的快速参考；设备、显示和输入条件都会影响成绩。',
    bands: { veryFast: '优秀', fast: '很好', good: '良好', typical: '高于平均', slightlySlower: '平均', slower: '低于平均', verySlow: '较慢', slow: '很慢', repeat: '建议再测一轮' },
    summaryEyebrow: '五轮汇总', summaryHeading: '本次会话结果', best: '最佳', median: '中位数', average: '平均值', completePrompt: '五轮已完成', completeHelp: '使用下方按钮复制结果或重新测试。', completeStatus: (median) => `五轮完成，中位数为 ${median} 毫秒。`, copy: '复制结果', restart: '重新开始', copied: '会话结果已复制到剪贴板。', copyUnavailable: '无法复制，你可以选择上方显示的结果。', standardReady: '五轮会话已准备。', practiceReady: '练习会话已准备，成绩保留在当前标签页。', latest: (score, best) => `最新：${score} 毫秒。本次练习最佳：${best} 毫秒。`,
  },
  ko: {
    eyebrow: '5회 시각 테스트', heading: '신호가 초록색으로 바뀌면 클릭', standard: '5회', practice: '연습',
    standardCount: (count) => `${count} / 5 기록됨`, practiceCount: (count) => `${count}회 연습`, initialPrompt: '클릭하거나 탭하여 시작', initialHelp: '초록색 신호를 기다린 뒤 최대한 빨리 반응하세요.', sessionNote: '5개 점수는 현재 브라우저 세션에서만 계산됩니다.',
    waitingPrompt: '초록색을 기다리세요', waitingHelp: '너무 일찍 클릭하지 마세요. 신호는 무작위 지연 뒤에 바뀝니다.', readyPrompt: '지금 클릭', readyHelp: '탭, 클릭, Enter 또는 Space로 기록하세요.', earlyPrompt: '너무 이릅니다', earlyHelp: '초록색을 기다린 뒤 클릭하여 다시 시도하세요.', resultHelp: '다음 라운드를 준비하려면 클릭하세요.', practiceResultHelp: '준비되면 클릭하여 계속 연습하세요.',
    armed: (round) => `${round} / 5 라운드가 준비되었습니다.`, practiceArmed: (round) => `${round}번째 연습이 준비되었습니다.`, readyStatus: '신호가 초록색입니다. 반응을 기록하세요.', earlyStatus: '너무 이른 클릭은 기록되지 않았습니다. 다시 시도하세요.', recorded: (round, score) => `${round}라운드: ${score}밀리초.`, practiceRecorded: (round, score) => `${round}번째 연습: ${score}밀리초.`,
    roundResultsEyebrow: '실시간 세션 정보', roundResultsHeading: '각 유효 라운드 결과', round: '라운드', awaiting: '대기 중', interpretation: '브라우저 테스트 해석', disclaimer: '이 구간은 이 브라우저 테스트를 위한 간단한 안내이며 의료 또는 개인 능력 평가는 아닙니다.', scoreGuideHeading: '결과 해석 방법', scoreGuideNote: '이 브라우저 테스트를 위한 빠른 참고입니다. 기기, 화면 및 입력 조건에 따라 점수가 달라질 수 있습니다.', bands: { veryFast: '탁월함', fast: '매우 좋음', good: '좋음', typical: '평균 이상', slightlySlower: '평균', slower: '평균 이하', verySlow: '느림', slow: '매우 느림', repeat: '한 번 더 테스트하세요' },
    summaryEyebrow: '5회 요약', summaryHeading: '세션 결과', best: '최고', median: '중앙값', average: '평균', completePrompt: '5회 완료', completeHelp: '아래 버튼으로 결과를 복사하거나 다시 시작하세요.', completeStatus: (median) => `5회 완료. 중앙값은 ${median}밀리초입니다.`, copy: '결과 복사', restart: '다시 시작', copied: '세션 결과를 클립보드에 복사했습니다.', copyUnavailable: '복사할 수 없습니다. 위의 결과를 선택할 수 있습니다.', standardReady: '5회 세션이 준비되었습니다.', practiceReady: '연습 세션이 준비되었습니다. 점수는 현재 탭에만 남습니다.', latest: (score, best) => `최근: ${score}ms. 이번 연습 최고: ${best}ms.`,
  },
  hi: {
    eyebrow: 'पांच-राउंड दृश्य परीक्षण', heading: 'संकेत हरा होने पर क्लिक करें', standard: '5 राउंड', practice: 'अभ्यास',
    standardCount: (count) => `${count} / 5 दर्ज`, practiceCount: (count) => `${count} अभ्यास प्रयास`, initialPrompt: 'शुरू करने के लिए क्लिक या टैप करें', initialHelp: 'हरे संकेत की प्रतीक्षा करें, फिर जितनी जल्दी हो सके प्रतिक्रिया दें।', sessionNote: 'पांचों स्कोर केवल इस ब्राउज़र सेशन में गणना होते हैं।',
    waitingPrompt: 'हरे संकेत की प्रतीक्षा करें', waitingHelp: 'जल्दी क्लिक न करें। संकेत यादृच्छिक देरी के बाद बदलेगा।', readyPrompt: 'अब क्लिक करें', readyHelp: 'इस राउंड को दर्ज करने के लिए टैप, क्लिक, Enter या Space करें।', earlyPrompt: 'बहुत जल्दी', earlyHelp: 'हरा संकेत आने पर क्लिक करके इस राउंड को दोहराएं।', resultHelp: 'अगला राउंड तैयार करने के लिए क्लिक करें।', practiceResultHelp: 'तैयार होने पर फिर अभ्यास करने के लिए क्लिक करें।',
    armed: (round) => `राउंड ${round} / 5 तैयार है।`, practiceArmed: (round) => `अभ्यास प्रयास ${round} तैयार है।`, readyStatus: 'संकेत हरा है। अपनी प्रतिक्रिया दर्ज करें।', earlyStatus: 'जल्दी क्लिक दर्ज नहीं हुआ। उसी राउंड को दोहराएं।', recorded: (round, score) => `राउंड ${round}: ${score} मिलीसेकंड।`, practiceRecorded: (round, score) => `अभ्यास प्रयास ${round}: ${score} मिलीसेकंड।`,
    roundResultsEyebrow: 'लाइव सेशन विवरण', roundResultsHeading: 'हर वैध राउंड का परिणाम', round: 'राउंड', awaiting: 'प्रतीक्षा में', interpretation: 'ब्राउज़र टेस्ट व्याख्या', disclaimer: 'ये बैंड इस ब्राउज़र टेस्ट के लिए सरल मार्गदर्शिका हैं, चिकित्सा या व्यक्तिगत क्षमता का आकलन नहीं।', scoreGuideHeading: 'परिणाम को कैसे समझें', scoreGuideNote: 'यह इस ब्राउज़र टेस्ट के लिए त्वरित संदर्भ है। उपकरण, डिस्प्ले और इनपुट की स्थितियां हर स्कोर को प्रभावित कर सकती हैं।', bands: { veryFast: 'उत्कृष्ट', fast: 'बहुत अच्छा', good: 'अच्छा', typical: 'औसत से ऊपर', slightlySlower: 'औसत', slower: 'औसत से नीचे', verySlow: 'धीमा', slow: 'बहुत धीमा', repeat: 'एक और राउंड आज़माएं' },
    summaryEyebrow: 'पांच-राउंड सारांश', summaryHeading: 'आपका सेशन परिणाम', best: 'सर्वोत्तम', median: 'माध्यिका', average: 'औसत', completePrompt: 'पांच राउंड पूरे', completeHelp: 'नीचे दिए बटन से परिणाम कॉपी करें या नया टेस्ट चलाएं।', completeStatus: (median) => `पांच राउंड पूरे। माध्यिका ${median} मिलीसेकंड है।`, copy: 'परिणाम कॉपी करें', restart: 'फिर शुरू करें', copied: 'सेशन परिणाम क्लिपबोर्ड पर कॉपी हुआ।', copyUnavailable: 'कॉपी उपलब्ध नहीं है। आप ऊपर के परिणाम चुन सकते हैं।', standardReady: 'पांच-राउंड सेशन तैयार है।', practiceReady: 'अभ्यास सेशन तैयार है। स्कोर इसी टैब में रहते हैं।', latest: (score, best) => `नवीनतम: ${score} ms. इस अभ्यास का सर्वोत्तम: ${best} ms.`,
  },
  fr: {
    eyebrow: 'Test visuel en cinq tours', heading: 'Cliquez lorsque le signal devient vert', standard: '5 tours', practice: 'Entraînement',
    standardCount: (count) => `${count} sur 5 enregistrés`, practiceCount: (count) => `${count} essais`, initialPrompt: 'Cliquez ou touchez pour commencer', initialHelp: 'Attendez le vert, puis répondez aussi vite que possible.', sessionNote: 'Vos cinq scores sont calculés uniquement dans cette session de navigateur.',
    waitingPrompt: 'Attendez le vert', waitingHelp: 'Ne cliquez pas trop tôt. Le signal change après un délai aléatoire.', readyPrompt: 'Cliquez maintenant', readyHelp: 'Touchez, cliquez, appuyez sur Entrée ou Espace pour enregistrer ce tour.', earlyPrompt: 'Trop tôt', earlyHelp: 'Attendez le vert, puis cliquez pour réessayer ce tour.', resultHelp: 'Cliquez pour préparer le tour suivant.', practiceResultHelp: 'Cliquez lorsque vous êtes prêt à vous entraîner de nouveau.',
    armed: (round) => `Le tour ${round} sur 5 est prêt.`, practiceArmed: (round) => `L’essai ${round} est prêt.`, readyStatus: 'Le signal est vert. Enregistrez votre réponse.', earlyStatus: 'Le clic trop précoce n’est pas enregistré. Réessayez le même tour.', recorded: (round, score) => `Tour ${round} enregistré à ${score} millisecondes.`, practiceRecorded: (round, score) => `Essai ${round} enregistré à ${score} millisecondes.`,
    roundResultsEyebrow: 'Détail de la session', roundResultsHeading: 'Résultat de chaque tour valide', round: 'Tour', awaiting: 'En attente', interpretation: 'Interprétation du test navigateur', disclaimer: 'Ces niveaux sont un repère simple pour ce test de navigateur, pas une évaluation médicale ou de capacité personnelle.', scoreGuideHeading: 'Comment interpréter le résultat', scoreGuideNote: 'Repère rapide pour ce test navigateur. L’appareil, l’écran et le mode de saisie peuvent modifier chaque score.', bands: { veryFast: 'Excellent', fast: 'Très bon', good: 'Bon', typical: 'Au-dessus de la moyenne', slightlySlower: 'Moyen', slower: 'Sous la moyenne', verySlow: 'Lent', slow: 'Très lent', repeat: 'Refaire un essai' },
    summaryEyebrow: 'Résumé de cinq tours', summaryHeading: 'Votre résultat de session', best: 'Meilleur', median: 'Médiane', average: 'Moyenne', completePrompt: 'Cinq tours terminés', completeHelp: 'Utilisez les boutons ci-dessous pour copier cette session ou recommencer.', completeStatus: (median) => `Cinq tours terminés. Médiane : ${median} millisecondes.`, copy: 'Copier le résultat', restart: 'Recommencer', copied: 'Le résultat de la session a été copié.', copyUnavailable: 'La copie est indisponible. Vous pouvez sélectionner les résultats ci-dessus.', standardReady: 'La session de cinq tours est prête.', practiceReady: 'La session d’entraînement est prête. Les scores restent dans cet onglet.', latest: (score, best) => `Dernier : ${score} ms. Meilleur de cet entraînement : ${best} ms.`,
  },
};

export function getToolLabels(locale = 'en') {
  return TOOL_LABELS[locale] || TOOL_LABELS.en;
}
