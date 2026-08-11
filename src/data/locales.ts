export const LOCALE_CODES = ['en', 'zh', 'ko', 'hi', 'fr'] as const;

export type Locale = typeof LOCALE_CODES[number];

export interface HomeContent {
  locale: Locale;
  htmlLang: string;
  path: string;
  languageName: string;
  shortName: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  overview: { eyebrow: string; heading: string; paragraphs: string[] };
  steps: Array<{ title: string; text: string }>;
  guide: { eyebrow: string; heading: string; paragraphs: string[] };
  faqEyebrow: string;
  faqHeading: string;
  faqs: Array<{ question: string; answer: string }>;
  nav: { play: string; method: string; faq: string; language: string };
  footer: { note: string; play: string; learn: string; site: string; languages: string };
}

export const HOME_CONTENT: Record<Locale, HomeContent> = {
  en: {
    locale: 'en', htmlLang: 'en', path: '/', languageName: 'English', shortName: 'EN',
    title: 'Reaction Time Test: Free Reaction Speed Test Online',
    description: 'Take a free reaction time test and reaction speed test online. Click when the signal turns green and review five browser-based results in milliseconds.',
    eyebrow: 'Free browser reflex tool', h1: 'Reaction Time Test: How Fast Is Your Reaction Speed?',
    lede: 'Use this free reaction speed test to measure how quickly you respond to a simple visual signal. This five-round reaction time test runs in your browser and gives each valid result in milliseconds.',
    overview: {
      eyebrow: 'A simple, repeatable test', heading: 'What this reaction time test measures',
      paragraphs: [
        'Reaction time is the interval between a signal and a response. Here, the signal is the panel turning green and the response is a click, tap, Enter, or Space input. The browser reports that interval in milliseconds.',
        'The task deliberately stays narrow: no aiming, moving target, hidden score modifier, or multiple-choice decision. Five valid rounds provide more context than a single click, with best, median, and average values for one session.',
        'A browser result also includes device conditions. Display processing, input hardware, operating-system work, and the method you use can affect a score. Use this page to compare your own repeatable setup, not as a medical assessment or universal ranking.',
      ],
    },
    steps: [
      { title: '1. Start', text: 'Click or tap the test area to arm a round. The delay before the signal is random.' },
      { title: '2. Wait', text: 'Do not respond while the panel is waiting. An early click is excluded and the round can be retried.' },
      { title: '3. Review', text: 'Each valid round appears below the tool, followed by a five-round summary.' },
    ],
    guide: {
      eyebrow: 'Use the score carefully', heading: 'How to increase reaction time',
      paragraphs: [
        'How to increase reaction time begins with measuring it consistently. Use the same device, browser, display, and input method when you compare sessions, because a phone tap, mouse click, and keyboard press do not travel through the same input path. Close distractions and use full five-round sessions so one unusually quick or slow click does not define the result.',
        'Do not try to predict the green signal. The random delay is designed to discourage anticipation, and early responses are excluded instead of being treated as fast scores. Focus on responding after you see the change, then use the median alongside the average and best result to understand whether a session was consistent.',
        'A browser test cannot prove a permanent physiological improvement or predict performance in every real-world task. It can help you create a clearer personal baseline: repeat the same test at different times, keep the setup stable, and look for a pattern across complete sessions rather than chasing a single number.',
      ],
    },
    faqEyebrow: 'Common questions', faqHeading: 'Reaction time test FAQ',
    faqs: [
      { question: 'What is reaction time?', answer: 'Reaction time is the interval between a signal and a response. This test measures the interval between the green visual signal and a valid browser input.' },
      { question: 'Is this a reaction speed test?', answer: 'Yes. This free reaction speed test measures how quickly you respond to the green visual signal in your browser. It reports five valid results in milliseconds, with best, median, and average session values.' },
      { question: 'What is the average reaction time?', answer: 'There is no single average that applies to every person, task, or device. Browser measurements include device latency, so compare repeatable sessions under similar conditions.' },
      { question: 'How to increase reaction time?', answer: 'A browser test cannot guarantee an increase. For a more consistent personal result, use the same setup, remove distractions, avoid anticipating the signal, and compare several complete sessions.' },
      { question: 'Is this a milisecond game?', answer: 'People sometimes search for a milisecond game; the standard spelling is millisecond. This is a millisecond-based reaction time test that records the interval between the green signal and a valid browser input.' },
      { question: 'Is this a reaction time test Human Benchmark alternative?', answer: 'People searching for a reaction time test Human Benchmark comparison are comparing browser tools. This independent site is not affiliated with Human Benchmark. It reports five valid browser-based results with best, median, and average session values.' },
      { question: 'Does this test store my results?', answer: 'No. Scores remain in page memory while the current tab is open unless you choose to copy the final text result.' },
    ],
    nav: { play: 'Play', method: 'How it works', faq: 'FAQ', language: 'Language' },
    footer: { note: 'A free browser-based reflex tool. Results stay in the current browser session unless you choose to copy them.', play: 'Play', learn: 'Learn', site: 'Site', languages: 'Languages' },
  },
  zh: {
    locale: 'zh', htmlLang: 'zh-CN', path: '/zh/', languageName: '中文', shortName: 'ZH',
    title: '反应时间测试 - 免费在线反应速度测试',
    description: '免费在线反应时间测试。等待绿色信号后点击，查看五轮浏览器测试结果、最佳值、中位数和平均值。',
    eyebrow: '免费浏览器反应工具', h1: '反应时间测试：你的反应速度有多快？',
    lede: '使用这款免费的反应速度测试，测量你对简单视觉信号的反应速度。这项五轮反应时间测试在浏览器中运行，并以毫秒显示每次有效结果。',
    overview: {
      eyebrow: '简单且可重复的测试', heading: '这项反应时间测试测量什么',
      paragraphs: [
        '反应时间是信号出现到作出反应之间的间隔。在本测试中，信号是面板变为绿色，反应是点击、轻触、按 Enter 或空格键。浏览器会以毫秒显示该间隔。',
        '测试刻意保持简单：没有瞄准目标、移动目标、隐藏加分或多选判断。五次有效测试比单次点击更有参考性，并显示本次会话的最佳值、中位数和平均值。',
        '浏览器结果也会受到设备条件影响。显示处理、输入设备、操作系统和输入方式都可能改变分数。请用于比较自己在相同条件下的测试，不作为医疗评估或通用排名。',
      ],
    },
    steps: [
      { title: '1. 开始', text: '点击或轻触测试区域以启动一轮。信号出现前的等待时间是随机的。' },
      { title: '2. 等待', text: '面板等待时不要操作。过早点击不会计入，可重新进行这一轮。' },
      { title: '3. 查看', text: '每次有效测试会显示在工具下方，完成五轮后可查看汇总。' },
    ],
    guide: {
      eyebrow: '提高反应时间的方法', heading: '如何提高反应时间',
      paragraphs: [
        '如何提高反应时间，第一步是让测试结果保持可比较。多次测试请使用相同的设备、浏览器、屏幕和输入方式，因为手机轻触、鼠标点击和键盘按键经过的输入链路不同。关闭通知和其他干扰，完成完整的五轮测试，不要让一次特别快或特别慢的点击代表全部表现。',
        '不要试图预测绿色信号。随机等待会减少抢先点击的意义，过早反应不会计入有效成绩。看到颜色变化后再响应，并结合中位数、平均值和最佳成绩判断一次会话是否稳定。',
        '浏览器测试不能证明永久的生理改善，也不能预测你在所有现实任务中的表现。你可以在相同设置下于不同时间重复测试，观察完整会话的趋势，而不是追逐单个低分。',
      ],
    },
    faqEyebrow: '常见问题', faqHeading: '反应时间测试常见问题',
    faqs: [
      { question: '什么是反应时间？', answer: '反应时间是信号出现到作出反应之间的时间。本测试记录绿色信号出现到浏览器收到有效输入之间的间隔。' },
      { question: '这是反应速度测试吗？', answer: '是。这款免费的反应速度测试记录绿色信号出现后的浏览器输入。它会给出五次有效测试的毫秒结果，以及本次会话的最佳值、中位数和平均值。' },
      { question: '平均反应时间是多少？', answer: '没有适用于所有人、所有任务和所有设备的单一平均值。浏览器测试包含设备延迟，因此应在相似条件下比较自己的多次会话。' },
      { question: '如何提高反应时间？', answer: '网页测试不能保证提高反应能力。要得到更稳定的个人结果，请使用相同设置、减少干扰、不要预测信号，并比较多次完整测试。' },
      { question: '网站会保存我的成绩吗？', answer: '不会。成绩仅保留在当前打开的页面内，除非你主动复制最终的文本结果。' },
    ],
    nav: { play: '开始测试', method: '测试说明', faq: '常见问题', language: '语言' },
    footer: { note: '免费的浏览器反应工具。除非你主动复制，结果仅保留在当前浏览器会话。', play: '测试', learn: '了解', site: '网站', languages: '语言' },
  },
  ko: {
    locale: 'ko', htmlLang: 'ko', path: '/ko/', languageName: '한국어', shortName: 'KO',
    title: '반응 시간 테스트 - 무료 온라인 반응 속도 테스트',
    description: '무료 온라인 반응 시간 테스트입니다. 초록색 신호를 클릭하고 5회 브라우저 측정 결과를 밀리초 단위로 확인하세요.',
    eyebrow: '무료 브라우저 반사 신경 도구', h1: '반응 시간 테스트: 당신의 반응 속도는 얼마나 빠른가요?',
    lede: '이 무료 반응 속도 테스트로 간단한 시각 신호에 얼마나 빨리 반응하는지 확인하세요. 이 5회 반응 시간 테스트는 브라우저에서 실행되며 유효한 결과를 밀리초로 표시합니다.',
    overview: {
      eyebrow: '간단하고 반복 가능한 테스트', heading: '이 반응 시간 테스트가 측정하는 것',
      paragraphs: [
        '반응 시간은 신호와 반응 사이의 간격입니다. 이 테스트에서는 패널이 초록색으로 바뀌는 것이 신호이고 클릭, 탭, Enter 또는 Space 입력이 반응입니다.',
        '조준, 움직이는 목표, 숨은 점수, 선택 문제가 없도록 과제를 단순하게 유지했습니다. 5회의 유효한 결과는 한 번의 클릭보다 더 많은 맥락을 제공하며 최고값, 중앙값, 평균을 보여 줍니다.',
        '브라우저 결과에는 기기 조건도 포함됩니다. 화면 처리, 입력 장치, 운영 체제와 입력 방식이 점수에 영향을 줄 수 있습니다. 의료 평가나 보편적인 순위가 아니라 같은 환경에서의 개인 비교에 사용하세요.',
      ],
    },
    steps: [
      { title: '1. 시작', text: '테스트 영역을 클릭하거나 탭해 한 라운드를 준비합니다. 신호 전 지연은 무작위입니다.' },
      { title: '2. 대기', text: '패널이 대기 중일 때는 반응하지 마세요. 너무 이른 클릭은 기록되지 않고 다시 시도할 수 있습니다.' },
      { title: '3. 확인', text: '유효한 각 라운드는 도구 아래에 표시되며 5회 뒤에는 요약이 표시됩니다.' },
    ],
    guide: {
      eyebrow: '반응 시간 개선 방법', heading: '반응 시간을 향상시키는 방법',
      paragraphs: [
        '반응 시간을 향상시키는 방법을 찾고 있다면 먼저 측정 조건을 일정하게 유지하세요. 세션을 비교할 때 같은 기기, 브라우저, 화면과 입력 방식을 사용하세요. 휴대폰 탭, 마우스 클릭, 키보드 입력은 서로 다른 입력 경로를 거치므로 알림과 방해 요소를 줄이고 5회 세션을 끝까지 진행하는 것이 좋습니다.',
        '초록색 신호를 미리 예측하지 마세요. 무작위 지연은 예상 클릭의 의미를 줄이며 너무 이른 반응은 유효한 점수로 기록되지 않습니다. 색이 바뀐 뒤 반응하고 최고 기록 하나보다 중앙값, 평균, 최고값을 함께 살펴 세션의 일관성을 확인하세요.',
        '브라우저 테스트만으로 영구적인 생리적 향상을 증명하거나 모든 실제 과제의 수행을 예측할 수는 없습니다. 같은 설정으로 여러 시간대에 완전한 세션을 반복하고 하나의 낮은 숫자보다 전체적인 경향을 비교하세요.',
      ],
    },
    faqEyebrow: '자주 묻는 질문', faqHeading: '반응 시간 테스트 FAQ',
    faqs: [
      { question: '반응 시간이란 무엇인가요?', answer: '반응 시간은 신호와 반응 사이의 간격입니다. 이 테스트는 초록색 신호와 유효한 브라우저 입력 사이의 시간을 기록합니다.' },
      { question: '이것은 반응 속도 테스트인가요?', answer: '네. 이 무료 반응 속도 테스트는 초록색 신호가 나타난 뒤의 브라우저 입력을 기록합니다. 5회의 유효한 결과를 밀리초로 표시하고, 세션의 최고값, 중앙값, 평균을 함께 보여 줍니다.' },
      { question: '평균 반응 시간은 얼마인가요?', answer: '모든 사람, 과제, 기기에 적용되는 하나의 평균은 없습니다. 브라우저 측정에는 기기 지연이 포함되므로 비슷한 조건의 세션을 비교하세요.' },
      { question: '반응 시간을 높이려면 어떻게 하나요?', answer: '브라우저 테스트는 향상을 보장할 수 없습니다. 같은 설정을 사용하고 방해를 줄이며 신호를 예측하지 말고 여러 번의 완전한 세션을 비교하세요.' },
      { question: '결과가 저장되나요?', answer: '아니요. 최종 텍스트를 직접 복사하지 않는 한 점수는 현재 탭의 메모리에만 남습니다.' },
    ],
    nav: { play: '테스트', method: '작동 방식', faq: '자주 묻는 질문', language: '언어' },
    footer: { note: '무료 브라우저 반사 신경 도구입니다. 복사하지 않으면 결과는 현재 브라우저 세션에만 남습니다.', play: '테스트', learn: '알아보기', site: '사이트', languages: '언어' },
  },
  hi: {
    locale: 'hi', htmlLang: 'hi', path: '/hi/', languageName: 'हिन्दी', shortName: 'HI',
    title: 'प्रतिक्रिया समय परीक्षण - निःशुल्क ऑनलाइन प्रतिक्रिया गति परीक्षण',
    description: 'मुफ्त ऑनलाइन प्रतिक्रिया समय परीक्षण। हरे संकेत पर क्लिक करें और पांच ब्राउज़र-आधारित परिणाम मिलीसेकंड में देखें।',
    eyebrow: 'मुफ्त ब्राउज़र रिफ्लेक्स टूल', h1: 'प्रतिक्रिया समय परीक्षण: आपकी प्रतिक्रिया गति कितनी तेज़ है?',
    lede: 'इस निःशुल्क प्रतिक्रिया गति परीक्षण से मापें कि आप सरल दृश्य संकेत पर कितनी जल्दी प्रतिक्रिया देते हैं। यह पांच-राउंड परीक्षण ब्राउज़र में चलता है और हर वैध परिणाम को मिलीसेकंड में दिखाता है।',
    overview: {
      eyebrow: 'सरल और दोहराने योग्य परीक्षण', heading: 'यह प्रतिक्रिया समय परीक्षण क्या मापता है',
      paragraphs: [
        'प्रतिक्रिया समय संकेत और प्रतिक्रिया के बीच का अंतर है। यहां पैनल का हरा होना संकेत है और क्लिक, टैप, Enter या Space दबाना प्रतिक्रिया है। ब्राउज़र इस अंतर को मिलीसेकंड में बताता है।',
        'काम को जानबूझकर सरल रखा गया है: निशाना लगाना, चलता लक्ष्य, छिपा स्कोर या बहुविकल्प निर्णय नहीं है। पांच वैध राउंड एक क्लिक से अधिक संदर्भ देते हैं और सर्वोत्तम, माध्यिका तथा औसत दिखाते हैं।',
        'ब्राउज़र परिणाम में उपकरण की स्थितियां भी शामिल होती हैं। डिस्प्ले, इनपुट हार्डवेयर, ऑपरेटिंग सिस्टम और आपकी इनपुट विधि स्कोर बदल सकते हैं। इसे समान सेटअप में अपने परिणामों की तुलना के लिए उपयोग करें, चिकित्सा आकलन के लिए नहीं।',
      ],
    },
    steps: [
      { title: '1. शुरू करें', text: 'राउंड तैयार करने के लिए परीक्षण क्षेत्र पर क्लिक या टैप करें। संकेत से पहले की देरी यादृच्छिक है।' },
      { title: '2. प्रतीक्षा करें', text: 'पैनल के प्रतीक्षा में रहने पर प्रतिक्रिया न दें। जल्दी क्लिक दर्ज नहीं होगा और राउंड फिर से किया जा सकता है।' },
      { title: '3. देखें', text: 'हर वैध राउंड टूल के नीचे दिखेगा और पांच राउंड के बाद सारांश मिलेगा।' },
    ],
    guide: {
      eyebrow: 'प्रतिक्रिया समय बेहतर करने के तरीके', heading: 'प्रतिक्रिया समय कैसे बेहतर करें',
      paragraphs: [
        'प्रतिक्रिया समय कैसे बेहतर करें, यह समझने के लिए पहले मापने की स्थितियों को एक जैसा रखें। सेशन की तुलना करते समय वही उपकरण, ब्राउज़र, स्क्रीन और इनपुट विधि उपयोग करें, क्योंकि फोन टैप, माउस क्लिक और कीबोर्ड दबाना एक जैसे इनपुट मार्ग नहीं हैं। सूचनाएं और ध्यान भटकाने वाली चीजें बंद करें और पूरे पांच-राउंड सेशन को पूरा करें।',
        'हरे संकेत का अनुमान लगाने की कोशिश न करें। यादृच्छिक देरी पहले से क्लिक करने को कम उपयोगी बनाती है और जल्दी प्रतिक्रिया दर्ज नहीं होती। रंग बदलने के बाद प्रतिक्रिया दें, फिर यह समझने के लिए माध्यिका, औसत और सर्वोत्तम परिणाम को साथ देखें कि सेशन कितना स्थिर था।',
        'ब्राउज़र परीक्षण स्थायी शारीरिक सुधार साबित नहीं कर सकता और न ही हर वास्तविक कार्य में प्रदर्शन की भविष्यवाणी कर सकता है। समान सेटअप में अलग-अलग समय पर पूरे सेशन दोहराएं और किसी एक कम स्कोर के बजाय परिणामों की प्रवृत्ति देखें।',
      ],
    },
    faqEyebrow: 'सामान्य प्रश्न', faqHeading: 'प्रतिक्रिया समय परीक्षण FAQ',
    faqs: [
      { question: 'प्रतिक्रिया समय क्या है?', answer: 'प्रतिक्रिया समय संकेत और प्रतिक्रिया के बीच का अंतर है। यह परीक्षण हरे संकेत और वैध ब्राउज़र इनपुट के बीच का समय दर्ज करता है।' },
      { question: 'क्या यह प्रतिक्रिया गति परीक्षण है?', answer: 'हां। यह निःशुल्क प्रतिक्रिया गति परीक्षण हरे संकेत के बाद ब्राउज़र इनपुट को दर्ज करता है। यह पांच वैध परिणाम मिलीसेकंड में दिखाता है, साथ ही सेशन का सर्वोत्तम, माध्यिका और औसत परिणाम भी देता है।' },
      { question: 'औसत प्रतिक्रिया समय क्या है?', answer: 'हर व्यक्ति, कार्य और उपकरण के लिए एक ही औसत लागू नहीं होता। ब्राउज़र माप में उपकरण की देरी शामिल होती है, इसलिए समान परिस्थितियों के सेशन की तुलना करें।' },
      { question: 'प्रतिक्रिया समय कैसे बढ़ाएं?', answer: 'ब्राउज़र टेस्ट सुधार की गारंटी नहीं दे सकता। अधिक स्थिर व्यक्तिगत परिणाम के लिए समान सेटअप रखें, ध्यान भटकाने वाली चीजें हटाएं और कई पूरे सेशन की तुलना करें।' },
      { question: 'क्या परिणाम सहेजे जाते हैं?', answer: 'नहीं। जब तक आप अंतिम टेक्स्ट को कॉपी नहीं करते, स्कोर केवल खुले टैब की मेमोरी में रहता है।' },
    ],
    nav: { play: 'टेस्ट', method: 'कैसे काम करता है', faq: 'सामान्य प्रश्न', language: 'भाषा' },
    footer: { note: 'मुफ्त ब्राउज़र रिफ्लेक्स टूल। कॉपी करने तक परिणाम वर्तमान ब्राउज़र सेशन में रहते हैं।', play: 'टेस्ट', learn: 'जानें', site: 'साइट', languages: 'भाषाएं' },
  },
  fr: {
    locale: 'fr', htmlLang: 'fr', path: '/fr/', languageName: 'Français', shortName: 'FR',
    title: 'Test de temps de réaction - Test de vitesse de réaction gratuit',
    description: 'Test de temps de réaction gratuit en ligne. Cliquez au signal vert et consultez cinq résultats de navigateur en millisecondes.',
    eyebrow: 'Outil de réflexes gratuit dans le navigateur', h1: 'Test de temps de réaction : quelle est votre vitesse de réaction ?',
    lede: 'Utilisez ce test de vitesse de réaction gratuit pour mesurer la rapidité de votre réponse à un signal visuel simple. Ce test de cinq tours fonctionne dans le navigateur et affiche chaque résultat valide en millisecondes.',
    overview: {
      eyebrow: 'Un test simple et répétable', heading: 'Ce que mesure ce test de temps de réaction',
      paragraphs: [
        'Le temps de réaction est l’intervalle entre un signal et une réponse. Ici, le signal est le passage du panneau au vert et la réponse est un clic, un tap, Enter ou Espace. Le navigateur affiche cet intervalle en millisecondes.',
        'La tâche reste volontairement simple : pas de cible à viser, de mouvement, de modificateur caché ou de choix multiple. Cinq tours valides donnent plus de contexte qu’un seul clic, avec meilleur score, médiane et moyenne.',
        'Un résultat de navigateur dépend aussi de l’appareil. L’affichage, le matériel de saisie, le système et la méthode d’entrée peuvent modifier le score. Utilisez-le pour comparer vos propres séances comparables, pas comme évaluation médicale ou classement universel.',
      ],
    },
    steps: [
      { title: '1. Démarrer', text: 'Cliquez ou touchez la zone de test pour armer un tour. Le délai avant le signal est aléatoire.' },
      { title: '2. Attendre', text: 'Ne réagissez pas lorsque le panneau attend. Un clic trop tôt est exclu et le tour peut être recommencé.' },
      { title: '3. Consulter', text: 'Chaque tour valide apparaît sous l’outil, puis un résumé est affiché après cinq tours.' },
    ],
    guide: {
      eyebrow: 'Comment améliorer son temps de réaction', heading: 'Comment améliorer son temps de réaction',
      paragraphs: [
        'Comment améliorer son temps de réaction commence par des mesures comparables. Utilisez le même appareil, navigateur, écran et mode de saisie pour comparer les séances, car un toucher sur téléphone, un clic de souris et une touche ne suivent pas le même parcours. Fermez les distractions et terminez les cinq tours au lieu de juger une seule réponse.',
        'N’essayez pas d’anticiper le signal vert. Le délai aléatoire rend le clic anticipé moins utile et les réponses trop précoces ne sont pas enregistrées. Réagissez après le changement de couleur, puis comparez la médiane, la moyenne et le meilleur score pour voir si la séance est régulière.',
        'Un test dans le navigateur ne peut pas prouver une amélioration physiologique permanente ni prédire votre performance dans toutes les tâches réelles. Répétez plusieurs séances complètes avec la même configuration et observez la tendance plutôt que de poursuivre un seul score très bas.',
      ],
    },
    faqEyebrow: 'Questions fréquentes', faqHeading: 'FAQ sur le test de temps de réaction',
    faqs: [
      { question: 'Qu’est-ce que le temps de réaction ?', answer: 'C’est l’intervalle entre un signal et une réponse. Ce test mesure le temps entre le signal vert et une saisie valide reçue par le navigateur.' },
      { question: 'Est-ce un test de vitesse de réaction ?', answer: 'Oui. Ce test de vitesse de réaction gratuit mesure la saisie reçue par le navigateur après le signal vert. Il affiche cinq résultats valides en millisecondes, ainsi que le meilleur score, la médiane et la moyenne de la séance.' },
      { question: 'Quel est le temps de réaction moyen ?', answer: 'Il n’existe pas de moyenne unique pour toutes les personnes, tâches et appareils. Les mesures du navigateur incluent la latence de l’appareil ; comparez des séances dans des conditions similaires.' },
      { question: 'Comment améliorer son temps de réaction ?', answer: 'Un test de navigateur ne peut pas garantir une amélioration. Pour un résultat personnel plus régulier, gardez la même configuration, réduisez les distractions et comparez plusieurs séances complètes.' },
      { question: 'Les résultats sont-ils enregistrés ?', answer: 'Non. Les scores restent dans la mémoire de l’onglet ouvert, sauf si vous choisissez de copier le résultat final.' },
    ],
    nav: { play: 'Tester', method: 'Fonctionnement', faq: 'Questions fréquentes', language: 'Langue' },
    footer: { note: 'Outil de réflexes gratuit dans le navigateur. Les résultats restent dans la session en cours sauf si vous les copiez.', play: 'Tester', learn: 'Comprendre', site: 'Site', languages: 'Langues' },
  },
};

export const LANGUAGE_ENTRIES = LOCALE_CODES.map((locale) => HOME_CONTENT[locale]);

export function getHomeContent(locale: Locale = 'en') {
  return HOME_CONTENT[locale];
}
