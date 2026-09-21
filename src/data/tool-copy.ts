import type { Locale } from './locales';

export interface VariantCopy {
  title: string;
  description: string;
  kicker: string;
  h1: string;
  lede: string;
  heading: string;
  count: (n: number) => string;
  begin: string;
  beginHelp: string;
  ready: string;
  aboutTitle: string;
  aboutBody: string[];
  callout: string;
  faqHeading: string;
  faqs: { question: string; answer: string }[];
}

const prefix = (locale: Locale) => (locale === 'en' ? '' : `/${locale}`);

export const HUB: Record<Locale, { title: string; description: string; kicker: string; h1: string; lede: string; items: { href: string; label: string; note: string }[] }> = {
  en: {
    title: 'Reaction Tests – Visual, Choice and Color',
    description: 'Browse the reaction time tests on this site: the homepage visual test, a choice reaction time test, and a color reaction test.',
    kicker: 'Test set', h1: 'Reaction Tests', lede: 'The live visual test stays on the homepage. These extra tests are narrower variants, not a second copy of the main tool.',
    items: [
      { href: '/', label: 'Visual reaction time test', note: 'The five-round green-signal test on the homepage.' },
      { href: '/choice-reaction-time-test/', label: 'Choice reaction time test', note: 'Wait for the matching color, then click. Wrong colors are ignored.' },
      { href: '/color-reaction-test/', label: 'Color reaction test', note: 'Click only when the panel turns the named color.' },
      { href: '/average-reaction-time/', label: 'Average reaction time', note: 'How to read best, median and average.' },
    ],
  },
  zh: {
    title: '反应测试 – 视觉、选择与颜色',
    description: '浏览本站反应时间测试：首页视觉测试、选择反应时间测试和颜色反应测试。',
    kicker: '测试集', h1: '反应测试', lede: '五轮视觉测试仍在各语言首页。这里的额外测试是更窄的变体，不是第二份主工具。',
    items: [
      { href: '/zh/', label: '视觉反应时间测试', note: '中文首页的五轮绿色信号测试。' },
      { href: '/zh/choice-reaction-time-test/', label: '选择反应时间测试', note: '只在目标颜色出现时点击，点错颜色不计分。' },
      { href: '/zh/color-reaction-test/', label: '颜色反应测试', note: '面板变成指定颜色时再点击。' },
      { href: '/average-reaction-time/', label: '平均反应时间', note: '如何阅读最佳值、中位数和平均值。' },
    ],
  },
  ko: {
    title: '반응 테스트 – 시각, 선택, 색상',
    description: '이 사이트의 반응 시간 테스트: 홈 시각 테스트, 선택 반응 시간 테스트, 색상 반응 테스트.',
    kicker: '테스트 모음', h1: '반응 테스트', lede: '5라운드 시각 테스트는 각 언어 홈에 그대로 둡니다. 여기 도구는 더 좁은 변형입니다.',
    items: [
      { href: '/ko/', label: '시각 반응 시간 테스트', note: '한국어 홈의 5라운드 초록 신호 테스트.' },
      { href: '/ko/choice-reaction-time-test/', label: '선택 반응 시간 테스트', note: '목표 색만 클릭합니다. 다른 색은 기록되지 않습니다.' },
      { href: '/ko/color-reaction-test/', label: '색상 반응 테스트', note: '지정한 색이 나타나면 클릭하세요.' },
      { href: '/average-reaction-time/', label: '평균 반응 시간', note: '최고, 중앙값, 평균을 읽는 방법.' },
    ],
  },
  hi: {
    title: 'प्रतिक्रिया परीक्षण – दृश्य, चयन और रंग',
    description: 'इस साइट के प्रतिक्रिया समय परीक्षण: होम दृश्य परीक्षण, चयन प्रतिक्रिया परीक्षण और रंग प्रतिक्रिया परीक्षण।',
    kicker: 'परीक्षण समूह', h1: 'प्रतिक्रिया परीक्षण', lede: 'पाँच राउंड वाला दृश्य परीक्षण भाषा होमपेज पर ही रहता है। ये अतिरिक्त परीक्षण संकीर्ण रूप हैं।',
    items: [
      { href: '/hi/', label: 'दृश्य प्रतिक्रिया समय परीक्षण', note: 'हिन्दी होम पर पाँच राउंड का हरा संकेत परीक्षण।' },
      { href: '/hi/choice-reaction-time-test/', label: 'चयन प्रतिक्रिया समय परीक्षण', note: 'केवल लक्ष्य रंग पर क्लिक करें। गलत रंग नहीं गिने जाते।' },
      { href: '/hi/color-reaction-test/', label: 'रंग प्रतिक्रिया परीक्षण', note: 'पैनल बताए गए रंग पर आए तब क्लिक करें।' },
      { href: '/average-reaction-time/', label: 'औसत प्रतिक्रिया समय', note: 'सर्वश्रेष्ठ, माध्यिका और औसत कैसे पढ़ें।' },
    ],
  },
  fr: {
    title: 'Tests de réaction – visuel, choix et couleur',
    description: 'Parcourir les tests de temps de réaction : test visuel d’accueil, test de choix et test de couleur.',
    kicker: 'Série de tests', h1: 'Tests de réaction', lede: 'Le test visuel en cinq tours reste sur chaque page d’accueil. Les tests ici sont des variantes plus étroites.',
    items: [
      { href: '/fr/', label: 'Test visuel de temps de réaction', note: 'Le test vert en cinq tours de la page d’accueil française.' },
      { href: '/fr/choice-reaction-time-test/', label: 'Test de temps de réaction de choix', note: 'Cliquez seulement sur la couleur cible. Les autres ne comptent pas.' },
      { href: '/fr/color-reaction-test/', label: 'Test de réaction aux couleurs', note: 'Cliquez lorsque le panneau devient la couleur indiquée.' },
      { href: '/average-reaction-time/', label: 'Temps de réaction moyen', note: 'Lire le meilleur score, la médiane et la moyenne.' },
    ],
  },
};

export const CHOICE: Record<Locale, VariantCopy> = {
  en: {
    title: 'Choice Reaction Time Test – Click Only the Matching Color',
    description: 'Free choice reaction time test. Wait for the matching color, then click. Wrong colors do not count. Run five valid rounds in your browser.',
    kicker: 'Choice test', h1: 'Choice Reaction Time Test', lede: 'One color is the target. Click only when the panel matches it. Early clicks and wrong colors are ignored.',
    heading: 'Click only the target color', count: (n) => `${n} of 5 recorded`, begin: 'Click to begin', beginHelp: 'You will be asked to respond only to one color.', ready: 'Choice reaction time test ready.',
    aboutTitle: 'How this choice reaction time test works',
    aboutBody: [
      'Each round names a target color, then shows either that color or a decoy after a random delay. A click on the decoy does not record a time. Five valid matching clicks produce best, median and average values.',
      'Keep this score on this page. The simple visual test stays on the language homepage.',
    ],
    callout: 'This is an extra entrance, not the main tool. Most visitors should start on the homepage.',
    faqHeading: 'Questions about this test',
    faqs: [
      { question: 'What is a choice reaction time test?', answer: 'You wait for one of two possible signals and respond only to the matching one. A click on the wrong color is ignored.' },
      { question: 'Is this the same as the homepage reaction time test?', answer: 'No. The homepage is a simple visual reaction time test. This page adds a choice. Do not mix the two scores.' },
    ],
  },
  zh: {
    title: '选择反应时间测试 – 只点击目标颜色',
    description: '免费选择反应时间测试。等到目标颜色再点击，点错颜色不计分。在浏览器中完成五轮有效测试。',
    kicker: '选择测试', h1: '选择反应时间测试', lede: '每轮指定一种目标颜色。只有面板变成该颜色时才点击。过早点击和点错颜色都不计分。',
    heading: '只点击目标颜色', count: (n) => `已记录 ${n} / 5`, begin: '点击开始', beginHelp: '你只需要对一种颜色做出反应。', ready: '选择反应时间测试已就绪。',
    aboutTitle: '这个选择反应时间测试如何进行',
    aboutBody: [
      '每轮会指定目标颜色，随机等待后出现目标色或干扰色。点到干扰色不会记录成绩。五次有效点击后给出最佳值、中位数和平均值。',
      '这个分数只属于本页。简单的视觉测试仍在中文首页。',
    ],
    callout: '这是额外入口，不是主工具。大多数人应从语言首页开始。',
    faqHeading: '关于本测试',
    faqs: [
      { question: '什么是选择反应时间测试？', answer: '你会等到两种可能信号中的一种，并且只对匹配的颜色做出反应。点错颜色不计分。' },
      { question: '这和首页反应时间测试一样吗？', answer: '不一样。首页是简单视觉反应测试。本页增加了选择，两套分数不要混在一起比较。' },
    ],
  },
  ko: {
    title: '선택 반응 시간 테스트 – 목표 색만 클릭',
    description: '무료 선택 반응 시간 테스트. 목표 색이 나오면 클릭하세요. 다른 색은 기록되지 않습니다.',
    kicker: '선택 테스트', h1: '선택 반응 시간 테스트', lede: '매 라운드에 목표 색이 있습니다. 패널이 그 색일 때만 클릭하세요. 너무 이른 클릭과 잘못된 색은 무시됩니다.',
    heading: '목표 색만 클릭하세요', count: (n) => `${n} / 5 기록됨`, begin: '클릭하여 시작', beginHelp: '한 가지 색에만 반응하면 됩니다.', ready: '선택 반응 시간 테스트 준비 완료.',
    aboutTitle: '이 선택 반응 시간 테스트의 방식',
    aboutBody: [
      '각 라운드는 목표 색을 정한 뒤, 무작위 대기 후 목표 색 또는 다른 색을 보여 줍니다. 다른 색을 클릭하면 시간이 기록되지 않습니다.',
      '이 점수는 이 페이지에만 해당합니다. 단순 시각 테스트는 한국어 홈에 있습니다.',
    ],
    callout: '추가 입구이지 메인 도구가 아닙니다. 대부분은 언어 홈에서 시작하세요.',
    faqHeading: '이 테스트에 대해',
    faqs: [
      { question: '선택 반응 시간 테스트란?', answer: '두 신호 중 목표 신호에만 반응합니다. 잘못된 색 클릭은 무시됩니다.' },
      { question: '홈 반응 시간 테스트와 같나요?', answer: '아닙니다. 홈은 단순 시각 테스트입니다. 점수를 섞어 비교하지 마세요.' },
    ],
  },
  hi: {
    title: 'चयन प्रतिक्रिया समय परीक्षण – केवल लक्ष्य रंग पर क्लिक करें',
    description: 'निःशुल्क चयन प्रतिक्रिया समय परीक्षण। लक्ष्य रंग आने पर क्लिक करें। गलत रंग नहीं गिने जाते।',
    kicker: 'चयन परीक्षण', h1: 'चयन प्रतिक्रिया समय परीक्षण', lede: 'हर राउंड में एक लक्ष्य रंग होता है। पैनल उसी रंग का हो तभी क्लिक करें। जल्दी क्लिक और गलत रंग नहीं गिने जाते।',
    heading: 'केवल लक्ष्य रंग पर क्लिक करें', count: (n) => `${n} / 5 दर्ज`, begin: 'शुरू करने के लिए क्लिक करें', beginHelp: 'आपको केवल एक रंग पर प्रतिक्रिया देनी है।', ready: 'चयन प्रतिक्रिया समय परीक्षण तैयार है।',
    aboutTitle: 'यह चयन प्रतिक्रिया समय परीक्षण कैसे चलता है',
    aboutBody: [
      'हर राउंड लक्ष्य रंग बताता है, फिर यादृच्छिक प्रतीक्षा के बाद लक्ष्य या दूसरा रंग दिखाता है। दूसरे रंग पर क्लिक समय नहीं जोड़ता।',
      'यह स्कोर इसी पृष्ठ का है। सरल दृश्य परीक्षण हिन्दी होम पर है।',
    ],
    callout: 'यह अतिरिक्त प्रवेश है, मुख्य उपकरण नहीं। अधिकतर लोग भाषा होम से शुरू करें।',
    faqHeading: 'इस परीक्षण के बारे में',
    faqs: [
      { question: 'चयन प्रतिक्रिया समय परीक्षण क्या है?', answer: 'आप दो संकेतों में से लक्ष्य संकेत पर ही प्रतिक्रिया देते हैं। गलत रंग नहीं गिना जाता।' },
      { question: 'क्या यह होम परीक्षण जैसा है?', answer: 'नहीं। होम सरल दृश्य परीक्षण है। दोनों स्कोर मिलाकर न देखें।' },
    ],
  },
  fr: {
    title: 'Test de temps de réaction de choix – cliquez seulement sur la couleur cible',
    description: 'Test gratuit de temps de réaction de choix. Attendez la couleur cible, puis cliquez. Les autres couleurs ne comptent pas.',
    kicker: 'Test de choix', h1: 'Test de temps de réaction de choix', lede: 'Chaque tour a une couleur cible. Cliquez seulement lorsque le panneau correspond. Les clics trop tôt et les mauvaises couleurs sont ignorés.',
    heading: 'Cliquez seulement sur la couleur cible', count: (n) => `${n} sur 5 enregistrés`, begin: 'Cliquez pour commencer', beginHelp: 'Vous ne devez répondre qu’à une couleur.', ready: 'Test de choix prêt.',
    aboutTitle: 'Comment fonctionne ce test de choix',
    aboutBody: [
      'Chaque tour nomme une couleur cible, puis affiche cette couleur ou un leurre après un délai aléatoire. Un clic sur le leurre n’enregistre pas de temps.',
      'Ce score reste sur cette page. Le test visuel simple est sur la page d’accueil française.',
    ],
    callout: 'Ceci est une entrée supplémentaire, pas l’outil principal. La plupart des visiteurs doivent commencer sur la page d’accueil.',
    faqHeading: 'Questions sur ce test',
    faqs: [
      { question: 'Qu’est-ce qu’un test de temps de réaction de choix ?', answer: 'Vous attendez l’un de deux signaux possibles et ne répondez qu’à celui qui correspond. Un clic sur la mauvaise couleur est ignoré.' },
      { question: 'Est-ce le même test que la page d’accueil ?', answer: 'Non. La page d’accueil est un test visuel simple. Ne mélangez pas les deux scores.' },
    ],
  },
};

export const COLOR: Record<Locale, VariantCopy> = {
  en: {
    title: 'Color Reaction Test – Click When the Named Color Appears',
    description: 'Free color reaction test online. Wait for the named color, then click. Five valid rounds stay in this browser tab.',
    kicker: 'Color test', h1: 'Color Reaction Test', lede: 'The page names a color. Click when the panel matches it. Early clicks do not count.',
    heading: 'Click when the named color appears', count: (n) => `${n} of 5 recorded`, begin: 'Click to begin', beginHelp: 'Wait for the named color, then respond.', ready: 'Color reaction test ready.',
    aboutTitle: 'How this color reaction test works',
    aboutBody: [
      'Each round names one color and then presents it after a random delay. There is no decoy panel. If you need a wrong-color rejection task, use the choice reaction time test.',
      'The main visual test remains on the language homepage.',
    ],
    callout: 'Browse the set from the reaction tests list.',
    faqHeading: 'Questions about this test',
    faqs: [
      { question: 'What is a color reaction test?', answer: 'The page names a color, then waits. Click when the panel turns that color. It is still a simple reaction to one signal.' },
      { question: 'How is this different from the homepage?', answer: 'The homepage always uses green. This test rotates the named color.' },
    ],
  },
  zh: {
    title: '颜色反应测试 – 指定颜色出现时点击',
    description: '免费颜色反应测试。等到指定颜色再点击。五轮有效成绩保留在当前标签页。',
    kicker: '颜色测试', h1: '颜色反应测试', lede: '页面会指定一种颜色。面板变成该颜色时再点击。过早点击不计分。',
    heading: '指定颜色出现时点击', count: (n) => `已记录 ${n} / 5`, begin: '点击开始', beginHelp: '等到指定颜色再反应。', ready: '颜色反应测试已就绪。',
    aboutTitle: '这个颜色反应测试如何进行',
    aboutBody: [
      '每轮指定一种颜色，随机等待后出现该颜色。没有干扰色。若需要点错不计分，请用选择反应时间测试。',
      '主视觉测试仍在中文首页。',
    ],
    callout: '可从反应测试目录浏览全部测试。',
    faqHeading: '关于本测试',
    faqs: [
      { question: '什么是颜色反应测试？', answer: '页面指定一种颜色，面板变成该颜色时点击。这仍是对单一信号的简单反应。' },
      { question: '和首页有什么不同？', answer: '首页固定使用绿色。本测试会轮换指定颜色。' },
    ],
  },
  ko: {
    title: '색상 반응 테스트 – 지정한 색이 나타나면 클릭',
    description: '무료 색상 반응 테스트. 지정한 색이 나오면 클릭하세요. 유효한 5라운드는 이 탭에 남습니다.',
    kicker: '색상 테스트', h1: '색상 반응 테스트', lede: '페이지가 색을 지정합니다. 패널이 그 색이 되면 클릭하세요. 너무 이른 클릭은 기록되지 않습니다.',
    heading: '지정한 색이 나타나면 클릭하세요', count: (n) => `${n} / 5 기록됨`, begin: '클릭하여 시작', beginHelp: '지정한 색을 기다린 뒤 반응하세요.', ready: '색상 반응 테스트 준비 완료.',
    aboutTitle: '이 색상 반응 테스트의 방식',
    aboutBody: [
      '각 라운드는 한 가지 색을 정한 뒤 무작위 대기 후 그 색을 보여 줍니다. 다른 색 방해는 없습니다. 잘못된 색을 걸러야 하면 선택 반응 시간 테스트를 쓰세요.',
      '메인 시각 테스트는 한국어 홈에 있습니다.',
    ],
    callout: '반응 테스트 목록에서 전체를 볼 수 있습니다.',
    faqHeading: '이 테스트에 대해',
    faqs: [
      { question: '색상 반응 테스트란?', answer: '색을 지정한 뒤 패널이 그 색이 되면 클릭합니다. 한 신호에 대한 단순 반응입니다.' },
      { question: '홈과 무엇이 다른가요?', answer: '홈은 항상 초록색입니다. 이 테스트는 지정 색을 바꿉니다.' },
    ],
  },
  hi: {
    title: 'रंग प्रतिक्रिया परीक्षण – बताए गए रंग पर क्लिक करें',
    description: 'निःशुल्क रंग प्रतिक्रिया परीक्षण। बताए गए रंग आने पर क्लिक करें। पाँच वैध राउंड इसी टैब में रहते हैं।',
    kicker: 'रंग परीक्षण', h1: 'रंग प्रतिक्रिया परीक्षण', lede: 'पृष्ठ एक रंग बताता है। पैनल उसी रंग का हो तब क्लिक करें। जल्दी क्लिक नहीं गिना जाता।',
    heading: 'बताए गए रंग पर क्लिक करें', count: (n) => `${n} / 5 दर्ज`, begin: 'शुरू करने के लिए क्लिक करें', beginHelp: 'बताए गए रंग की प्रतीक्षा करें, फिर प्रतिक्रिया दें।', ready: 'रंग प्रतिक्रिया परीक्षण तैयार है।',
    aboutTitle: 'यह रंग प्रतिक्रिया परीक्षण कैसे चलता है',
    aboutBody: [
      'हर राउंड एक रंग बताता है और यादृच्छिक प्रतीक्षा के बाद वही रंग दिखाता है। गलत रंग वाला कार्य चाहिए तो चयन परीक्षण खोलें।',
      'मुख्य दृश्य परीक्षण हिन्दी होम पर है।',
    ],
    callout: 'सभी परीक्षण प्रतिक्रिया परीक्षण सूची में हैं।',
    faqHeading: 'इस परीक्षण के बारे में',
    faqs: [
      { question: 'रंग प्रतिक्रिया परीक्षण क्या है?', answer: 'पृष्ठ रंग बताता है। पैनल उस रंग का हो तब क्लिक करें। यह एक संकेत की सरल प्रतिक्रिया है।' },
      { question: 'होम से यह कैसे अलग है?', answer: 'होम हमेशा हरा रंग इस्तेमाल करता है। यह परीक्षण बताए गए रंग को बदलता है।' },
    ],
  },
  fr: {
    title: 'Test de réaction aux couleurs – cliquez quand la couleur indiquée apparaît',
    description: 'Test gratuit de réaction aux couleurs. Attendez la couleur indiquée, puis cliquez. Cinq tours valides restent dans cet onglet.',
    kicker: 'Test de couleur', h1: 'Test de réaction aux couleurs', lede: 'La page nomme une couleur. Cliquez lorsque le panneau correspond. Les clics trop tôt ne comptent pas.',
    heading: 'Cliquez lorsque la couleur indiquée apparaît', count: (n) => `${n} sur 5 enregistrés`, begin: 'Cliquez pour commencer', beginHelp: 'Attendez la couleur indiquée, puis répondez.', ready: 'Test de couleur prêt.',
    aboutTitle: 'Comment fonctionne ce test de couleur',
    aboutBody: [
      'Chaque tour nomme une couleur, puis l’affiche après un délai aléatoire. Il n’y a pas de leurre. Pour refuser une mauvaise couleur, utilisez le test de choix.',
      'Le test visuel principal reste sur la page d’accueil française.',
    ],
    callout: 'Parcourez l’ensemble depuis la liste des tests de réaction.',
    faqHeading: 'Questions sur ce test',
    faqs: [
      { question: 'Qu’est-ce qu’un test de réaction aux couleurs ?', answer: 'La page nomme une couleur. Cliquez lorsque le panneau devient cette couleur. C’est encore une réaction simple à un signal.' },
      { question: 'En quoi est-ce différent de la page d’accueil ?', answer: 'La page d’accueil utilise toujours le vert. Ce test fait tourner la couleur nommée.' },
    ],
  },
};

export const UI: Record<Locale, {
  target: (color: string) => string;
  wait: string;
  click: (color: string) => string;
  decoy: string;
  matchHelp: string;
  decoyHelp: string;
  earlyHelp: string;
  earlyStatus: string;
  wrongHelp: string;
  wrongStatus: string;
  recorded: (ms: number) => string;
  nextHelp: string;
  completeHelp: string;
  completeStatus: string;
  armed: (round: number, color: string) => string;
}> = {
  en: {
    target: (color) => `Target: ${color}`, wait: 'Wait. Do not click yet.', click: (color) => `Click ${color}`, decoy: 'Wrong color — do not click',
    matchHelp: 'Record this matching signal.', decoyHelp: 'A click now is ignored.', earlyHelp: 'Too early. Wait for the color, then retry.', earlyStatus: 'Early click ignored.',
    wrongHelp: 'That was the decoy. Wait for the next round.', wrongStatus: 'Wrong color ignored.', recorded: (ms) => `${ms} ms`,
    nextHelp: 'Click to arm the next round.', completeHelp: 'Session complete.', completeStatus: 'Five valid rounds complete. Refresh the page to run again.',
    armed: (round, color) => `Round ${round} of 5. Respond only to ${color}.`,
  },
  zh: {
    target: (color) => `目标：${color}`, wait: '请等待，先不要点击。', click: (color) => `点击${color}`, decoy: '干扰色 — 不要点击',
    matchHelp: '记录这次匹配信号。', decoyHelp: '现在点击不计分。', earlyHelp: '太早了。等到颜色出现后再试。', earlyStatus: '过早点击已忽略。',
    wrongHelp: '这是干扰色。等待下一轮。', wrongStatus: '错误颜色已忽略。', recorded: (ms) => `${ms} 毫秒`,
    nextHelp: '点击开始下一轮。', completeHelp: '本轮会话完成。', completeStatus: '五轮有效测试完成。刷新页面可再测一次。',
    armed: (round, color) => `第 ${round} / 5 轮。只对${color}做出反应。`,
  },
  ko: {
    target: (color) => `목표: ${color}`, wait: '기다리세요. 아직 클릭하지 마세요.', click: (color) => `${color} 클릭`, decoy: '다른 색 — 클릭하지 마세요',
    matchHelp: '일치하는 신호를 기록합니다.', decoyHelp: '지금 클릭은 무시됩니다.', earlyHelp: '너무 이릅니다. 색이 나온 뒤 다시 시도하세요.', earlyStatus: '이른 클릭은 무시되었습니다.',
    wrongHelp: '방해 색이었습니다. 다음 라운드를 기다리세요.', wrongStatus: '잘못된 색은 무시되었습니다.', recorded: (ms) => `${ms} ms`,
    nextHelp: '클릭하여 다음 라운드를 준비하세요.', completeHelp: '세션 완료.', completeStatus: '유효한 5라운드가 끝났습니다. 다시 하려면 페이지를 새로고침하세요.',
    armed: (round, color) => `${round} / 5라운드. ${color}에만 반응하세요.`,
  },
  hi: {
    target: (color) => `लक्ष्य: ${color}`, wait: 'प्रतीक्षा करें। अभी क्लिक न करें।', click: (color) => `${color} पर क्लिक करें`, decoy: 'गलत रंग — क्लिक न करें',
    matchHelp: 'यह मेल खाता संकेत दर्ज करें।', decoyHelp: 'अब क्लिक नहीं गिना जाएगा।', earlyHelp: 'बहुत जल्दी। रंग आने के बाद फिर कोशिश करें।', earlyStatus: 'जल्दी क्लिक अनदेखा किया गया।',
    wrongHelp: 'यह भ्रामक रंग था। अगले राउंड की प्रतीक्षा करें।', wrongStatus: 'गलत रंग अनदेखा किया गया।', recorded: (ms) => `${ms} ms`,
    nextHelp: 'अगला राउंड शुरू करने के लिए क्लिक करें।', completeHelp: 'सत्र पूरा।', completeStatus: 'पाँच वैध राउंड पूरे। फिर से करने के लिए पृष्ठ रीफ़्रेश करें।',
    armed: (round, color) => `राउंड ${round} / 5. केवल ${color} पर प्रतिक्रिया दें।`,
  },
  fr: {
    target: (color) => `Cible : ${color}`, wait: 'Attendez. Ne cliquez pas encore.', click: (color) => `Cliquez ${color}`, decoy: 'Mauvaise couleur — ne cliquez pas',
    matchHelp: 'Enregistrez ce signal correspondant.', decoyHelp: 'Un clic maintenant est ignoré.', earlyHelp: 'Trop tôt. Attendez la couleur, puis réessayez.', earlyStatus: 'Clic trop tôt ignoré.',
    wrongHelp: 'C’était le leurre. Attendez le tour suivant.', wrongStatus: 'Mauvaise couleur ignorée.', recorded: (ms) => `${ms} ms`,
    nextHelp: 'Cliquez pour préparer le tour suivant.', completeHelp: 'Séance terminée.', completeStatus: 'Cinq tours valides terminés. Actualisez la page pour recommencer.',
    armed: (round, color) => `Tour ${round} sur 5. Répondez seulement à ${color}.`,
  },
};

export const COLOR_NAMES: Record<Locale, Record<'green' | 'blue' | 'orange', string>> = {
  en: { green: 'green', blue: 'blue', orange: 'orange' },
  zh: { green: '绿色', blue: '蓝色', orange: '橙色' },
  ko: { green: '초록', blue: '파랑', orange: '주황' },
  hi: { green: 'हरा', blue: 'नीला', orange: 'नारंगी' },
  fr: { green: 'vert', blue: 'bleu', orange: 'orange' },
};

export const RELATED: Record<Locale, { href: string; label: string; note: string }[]> = {
  en: [
    { href: '/reaction-tests/', label: 'All reaction tests', note: 'Visual, choice and color tests in one list.' },
    { href: '/choice-reaction-time-test/', label: 'Choice reaction time test', note: 'Click only the matching color.' },
    { href: '/color-reaction-test/', label: 'Color reaction test', note: 'Click when the named color appears.' },
    { href: '/reaction-time-test/', label: 'Five-round method', note: 'Review the round flow and false-start rule. The live test stays on this homepage.' },
    { href: '/average-reaction-time/', label: 'Average reaction time', note: 'Read typical browser ranges and why one number is not a ranking.' },
    { href: '/how-it-works/', label: 'How the timing works', note: 'See what the browser timer records and why latency matters.' },
  ],
  zh: [
    { href: '/zh/reaction-tests/', label: '全部反应测试', note: '视觉、选择和颜色测试目录。' },
    { href: '/zh/choice-reaction-time-test/', label: '选择反应时间测试', note: '只点击目标颜色。' },
    { href: '/zh/color-reaction-test/', label: '颜色反应测试', note: '指定颜色出现时点击。' },
    { href: '/reaction-time-test/', label: '五轮规则说明', note: '查看轮次流程和抢跑规则。实际测试仍在本首页。' },
    { href: '/average-reaction-time/', label: '平均反应时间', note: '如何阅读浏览器测试中的平均值。' },
    { href: '/how-it-works/', label: '计时原理', note: '浏览器计时记录什么，以及延迟为何重要。' },
  ],
  ko: [
    { href: '/ko/reaction-tests/', label: '모든 반응 테스트', note: '시각, 선택, 색상 테스트 목록.' },
    { href: '/ko/choice-reaction-time-test/', label: '선택 반응 시간 테스트', note: '목표 색만 클릭하세요.' },
    { href: '/ko/color-reaction-test/', label: '색상 반응 테스트', note: '지정한 색이 나타나면 클릭하세요.' },
    { href: '/reaction-time-test/', label: '5라운드 방법', note: '라운드 흐름과 부정출발 규칙. 실제 테스트는 이 홈에 있습니다.' },
    { href: '/average-reaction-time/', label: '평균 반응 시간', note: '브라우저 평균을 어떻게 읽는지.' },
    { href: '/how-it-works/', label: '시간 측정 원리', note: '브라우저 타이머가 무엇을 기록하는지.' },
  ],
  hi: [
    { href: '/hi/reaction-tests/', label: 'सभी प्रतिक्रिया परीक्षण', note: 'दृश्य, चयन और रंग परीक्षण सूची.' },
    { href: '/hi/choice-reaction-time-test/', label: 'चयन प्रतिक्रिया समय परीक्षण', note: 'केवल लक्ष्य रंग पर क्लिक करें.' },
    { href: '/hi/color-reaction-test/', label: 'रंग प्रतिक्रिया परीक्षण', note: 'बताए गए रंग पर क्लिक करें.' },
    { href: '/reaction-time-test/', label: 'पाँच राउंड विधि', note: 'राउंड प्रवाह और गलत शुरुआत नियम. लाइव परीक्षण इसी होम पर है.' },
    { href: '/average-reaction-time/', label: 'औसत प्रतिक्रिया समय', note: 'ब्राउज़र औसत कैसे पढ़ें.' },
    { href: '/how-it-works/', label: 'समय कैसे मापा जाता है', note: 'ब्राउज़र टाइमर क्या दर्ज करता है.' },
  ],
  fr: [
    { href: '/fr/reaction-tests/', label: 'Tous les tests de réaction', note: 'Liste des tests visuel, de choix et de couleur.' },
    { href: '/fr/choice-reaction-time-test/', label: 'Test de temps de réaction de choix', note: 'Cliquez seulement sur la couleur cible.' },
    { href: '/fr/color-reaction-test/', label: 'Test de réaction aux couleurs', note: 'Cliquez quand la couleur indiquée apparaît.' },
    { href: '/reaction-time-test/', label: 'Méthode en cinq tours', note: 'Déroulement et faux départ. Le test en direct reste sur cette page d’accueil.' },
    { href: '/average-reaction-time/', label: 'Temps de réaction moyen', note: 'Lire la moyenne d’un test navigateur.' },
    { href: '/how-it-works/', label: 'Fonctionnement du chronomètre', note: 'Ce que le navigateur enregistre vraiment.' },
  ],
};

export const localePath = (locale: Locale, path: string) => `${prefix(locale)}${path}`;
