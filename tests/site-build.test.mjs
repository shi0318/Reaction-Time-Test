import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';

const root = process.cwd();
const readBuilt = (route) => {
  const output = route === '/' ? join(root, 'dist', 'index.html') : join(root, 'dist', route, 'index.html');
  assert.ok(existsSync(output), `Expected built route: /${route}`);
  return readFileSync(output, 'utf8');
};

test('homepage is fully rendered with reaction time test and its supported search intents', () => {
  const html = readBuilt('/');
  const bodyText = html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  assert.match(html, /<title>Reaction Time Test: Free Reaction Speed Test Online<\/title>/);
  assert.match(html, /<h1[^>]*>Reaction Time Test: How Fast Is Your Reaction Speed\?<\/h1>/);
  assert.ok(html.includes('<link rel="canonical" href="https://reactiontimetest.fun/">'));
  assert.ok(html.includes('hreflang="x-default" href="https://reactiontimetest.fun/"'));
  assert.doesNotMatch(html, /reactiontimegame\.com/);
  assert.ok(html.includes('<a href="/" hreflang="en" lang="en" aria-current="page">English</a>'));
  assert.match(html, /"@type":"WebApplication"/);
  assert.match(html, /"@type":"FAQPage"/);
  assert.match(html, /href="\/reaction-time-test\/"/);
  assert.match(html, /href="\/average-reaction-time\/"/);
  assert.match(bodyText, /how to increase reaction time/i);
  assert.match(bodyText, /reaction speed test/i);
  assert.match(bodyText, /milisecond game/i);
  assert.match(bodyText, /reaction time test Human Benchmark/i);
  assert.match(bodyText, /what is the average reaction time/i);
  assert.match(bodyText, /what is reaction time/i);
  assert.match(bodyText, /Is this a reaction speed test\?/i);
  assert.match(html, /<h2>How to increase reaction time<\/h2>/);
  assert.match(bodyText, /A browser test cannot prove a permanent physiological improvement/i);
  assert.doesNotMatch(html, /What a browser reaction score can and cannot tell you/);
  assert.match(html, /<nav class="shell link-list link-list--standalone" aria-label="Related reaction time guides">/);
  assert.match(html, /href="\/reaction-time-test\/"[^>]*><strong>Five-round reaction test<\/strong>/);
  assert.match(html, /href="\/average-reaction-time\/"[^>]*><strong>Understanding reaction scores<\/strong>/);
  assert.match(html, /href="\/how-it-works\/"[^>]*><strong>How the timing works<\/strong>/);
  assert.ok(bodyText.split(' ').length >= 700, 'Homepage needs substantive server-rendered text without redundant copy.');
});

test('every localized homepage uses the decorative local signal field without blocking the tool', () => {
  const styles = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8');

  for (const route of ['/', 'zh', 'ko', 'hi', 'fr']) {
    assert.match(
      readBuilt(route),
      /<img class="hero-signal-field" src="\/images\/reaction-signal-lines\.png" alt="" aria-hidden="true" width="2560" height="960" loading="eager" decoding="async">/,
    );
  }

  assert.ok(existsSync(join(root, 'dist', 'images', 'reaction-signal-lines.png')), 'Expected the local hero background in the static output.');
  assert.match(styles, /\.home-intro\s*\{[\s\S]*?isolation:\s*isolate/);
  assert.match(styles, /\.hero-signal-field\s*\{[\s\S]*?pointer-events:\s*none/);
  assert.match(styles, /\.home-intro\s*>\s*\.shell\s*\{[\s\S]*?z-index:\s*1/);
});

test('the game surface uses restrained green edge glows for its three primary panels', () => {
  const styles = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8');

  for (const selector of ['.game-section', '.reaction-panel', '.score-guide']) {
    assert.match(
      styles,
      new RegExp(`${selector.replace('.', '\\.') }\\s*\\{[\\s\\S]*?box-shadow:\\s*0 0 0 1px rgb\\(80 227 194 / 14%\\), 0 0 24px rgb\\(80 227 194 / 10%\\)`),
      `Expected a restrained green edge glow on ${selector}.`,
    );
  }
});

test('the English homepage keeps its hero title within three readable desktop lines', () => {
  const styles = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8');

  assert.match(styles, /html\[lang="en"\]\s+\.home-intro h1\s*\{\s*max-width:\s*19ch;/);
  assert.doesNotMatch(styles, /\.home-intro h1,\s*\.article-hero h1\s*\{\s*max-width:\s*19ch;/);
});

test('the supporting SEO pages and crawler files are generated', () => {
  for (const route of [
    'reaction-time-test',
    'average-reaction-time',
    'how-it-works',
    'about',
    'contact',
    'privacy-policy',
    'sitemap',
  ]) {
    readBuilt(route);
  }

  const localizedPages = [
    ['zh', 'zh-CN', 'zh_CN', '反应时间测试 - 免费在线反应速度测试', '反应时间测试：你的反应速度有多快？', '反应速度测试', '这是反应速度测试吗？'],
    ['ko', 'ko', 'ko_KR', '반응 시간 테스트 - 무료 온라인 반응 속도 테스트', '반응 시간 테스트: 당신의 반응 속도는 얼마나 빠른가요?', '반응 속도 테스트', '이것은 반응 속도 테스트인가요?'],
    ['hi', 'hi', 'hi_IN', 'प्रतिक्रिया समय परीक्षण - निःशुल्क ऑनलाइन प्रतिक्रिया गति परीक्षण', 'प्रतिक्रिया समय परीक्षण: आपकी प्रतिक्रिया गति कितनी तेज़ है?', 'प्रतिक्रिया गति परीक्षण', 'क्या यह प्रतिक्रिया गति परीक्षण है?'],
    ['fr', 'fr', 'fr_FR', 'Test de temps de réaction - Test de vitesse de réaction gratuit', 'Test de temps de réaction : quelle est votre vitesse de réaction ?', 'test de vitesse de réaction', 'Est-ce un test de vitesse de réaction ?'],
  ];
  for (const [route, language, ogLocale, localizedTitle, localizedH1, localizedPhrase, localizedFaq] of localizedPages) {
    const html = readBuilt(route);
    assert.ok(html.includes('<title>' + localizedTitle + '</title>'), 'Expected a localized homepage title.');
    assert.ok(html.includes('<h1>' + localizedH1 + '</h1>'), 'Expected a localized homepage H1.');
    assert.ok(html.includes(localizedPhrase), 'Expected the translated reaction speed test phrase in the homepage content.');
    assert.ok(html.includes(localizedFaq), 'Expected a localized reaction speed test FAQ.');
    assert.doesNotMatch(html, /<h1[^>]*>Reaction Time Test: Free Reaction Speed Test Online<\/h1>/);
    assert.match(html, new RegExp(`<html lang="${language}">`));
    assert.match(html, new RegExp(`<link rel="canonical" href="https://reactiontimetest\\.fun/${route}/">`));
    assert.match(html, new RegExp(`<meta property="og:locale" content="${ogLocale}">`));
    assert.match(html, new RegExp(`"url":"https://reactiontimetest\\.fun/${route}/"`));
    assert.doesNotMatch(html, /reactiontimegame\.com/);
    assert.match(html, /hreflang="zh-CN"/);
    assert.match(html, /hreflang="x-default"/);
  }

  const sitemap = join(root, 'dist', 'sitemap-0.xml');
  assert.ok(existsSync(sitemap), 'Expected generated XML sitemap.');
  const sitemapXml = readFileSync(sitemap, 'utf8');
  assert.match(sitemapXml, /https:\/\/reactiontimetest\.fun\/reaction-time-test\//);
  assert.match(sitemapXml, /https:\/\/reactiontimetest\.fun\//);
  assert.doesNotMatch(sitemapXml, /https:\/\/reactiontimetest\.fun\/en\//);
  assert.doesNotMatch(sitemapXml, /reactiontimegame\.com/);
  assert.ok(!existsSync(join(root, 'dist', 'en', 'index.html')), 'English must be served only from the root path.');
  assert.ok(existsSync(join(root, 'dist', 'robots.txt')), 'Expected robots.txt in production output.');
  assert.match(readFileSync(join(root, 'dist', 'robots.txt'), 'utf8'), /Sitemap: https:\/\/reactiontimetest\.fun\/sitemap-index\.xml/);
});

test('homepage provides score-by-score feedback and full-page non-interactive cyan and green particles', () => {
  const html = readBuilt('/');
  const styles = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8');
  const particles = readFileSync(join(root, 'src', 'components', 'AmbientParticles.astro'), 'utf8');

  assert.match(html, /id="practice-mode"/);
  assert.match(html, /id="standard-mode"/);
  assert.match(html, /id="practice-readout"/);
  assert.match(html, /id="round-results"/);
  assert.match(html, /id="score-interpretation"/);
  assert.match(html, /data-round="1"/);
  assert.match(html, /<canvas id="ambient-particles" aria-hidden="true"><\/canvas>/);
  assert.match(styles, /pointer-events:\s*none/);
  assert.match(styles, /#ambient-particles\s*\{[\s\S]*?position:\s*fixed/);
  assert.match(styles, /\.site-header\s*\{[\s\S]*?z-index:\s*10/);
  assert.match(styles, /\.reaction-panel\s*\{[\s\S]*?z-index:\s*1/);
  assert.match(particles, /#50e3c2/);
  assert.match(particles, /#38c8e8/);
  assert.doesNotMatch(particles, /255, 196, 61/);
  assert.match(styles, /prefers-reduced-motion/);
  assert.match(styles, /\.reaction-panel\[data-state="ready"\]\s*\{[\s\S]*?transition:\s*none/);
});

test('reaction timing starts in the frame that presents the green signal', () => {
  const game = readFileSync(join(root, 'src', 'components', 'ReactionGame.astro'), 'utf8');

  assert.match(game, /let signalStartedAt: number \| null = null/);
  assert.match(game, /updatePanel\('ready', labels\.readyPrompt, labels\.readyHelp\);\s*status\.textContent = labels\.readyStatus;\s*signalFrame = window\.requestAnimationFrame\(\(\) => \{\s*signalStartedAt = performance\.now\(\);/);
  assert.doesNotMatch(game, /signalStartedAt = performance\.now\(\);\s*updatePanel\('ready'/);
  assert.match(game, /if \(state === 'ready'\) \{\s*if \(signalStartedAt !== null\) \{\s*recordClick\(\);\s*\}\s*return;/);
});

test('each localized homepage renders a visible nine-band score guide around the reaction tool', () => {
  const expectedGuides = [
    ['/', 'How to interpret the result', 'Excellent', 'How to increase reaction time'],
    ['zh', '如何解读结果', '优秀', '如何提高反应时间'],
    ['ko', '결과 해석 방법', '탁월함', '반응 시간을 향상시키는 방법'],
    ['hi', 'परिणाम को कैसे समझें', 'उत्कृष्ट', 'प्रतिक्रिया समय कैसे बेहतर करें'],
    ['fr', 'Comment interpréter le résultat', 'Excellent', 'Comment améliorer son temps de réaction'],
  ];
  const styles = readFileSync(join(root, 'src', 'styles', 'global.css'), 'utf8');

  for (const [route, heading, firstBand, improvementHeading] of expectedGuides) {
    const html = readBuilt(route);
    assert.ok(html.includes('<h2>' + improvementHeading + '</h2>'), 'Expected localized improvement heading.');
    assert.ok(html.includes('300–350 ms'), 'Expected the average browser-test band.');
    assert.match(html, /class="score-guide"/);
    assert.match(html, /data-score-band="veryFast"/);
    assert.match(html, /data-score-band="repeat"/);
    assert.equal((html.match(/data-score-band=/g) || []).length, 9, `Expected nine score bands for /${route}/.`);
    assert.ok(html.includes(heading), `Expected localized score-guide heading for /${route}/.`);
    assert.ok(html.includes(firstBand), `Expected localized first score band for /${route}/.`);
  }

  assert.match(styles, /\.game-play-grid\s*\{[\s\S]*?grid-template-columns:\s*minmax\(0,\s*1\.65fr\)\s+minmax\(17rem,\s*\.85fr\)/);
  assert.match(styles, /@media\s*\(max-width:\s*960px\)[\s\S]*?\.score-guide-list\s*\{[\s\S]*?grid-template-columns:\s*repeat\(3,\s*minmax\(0,\s*1fr\)\)/);
});

test('primary navigation sends each localized homepage to its common questions', () => {
  const expectedLabels = [
    ['/', 'FAQ'],
    ['zh', '常见问题'],
    ['ko', '자주 묻는 질문'],
    ['hi', 'सामान्य प्रश्न'],
    ['fr', 'Questions fréquentes'],
  ];

  for (const [route, label] of expectedLabels) {
    const html = readBuilt(route);

    assert.match(html, /href="(?:\/|\/(?:zh|ko|hi|fr)\/)#faq"/);
    assert.match(html, new RegExp(`>${label}<\\/a>`));
    assert.match(html, /<section class="faq-section" id="faq" aria-labelledby="faq-heading">/);
    assert.doesNotMatch(html, /href="(?:\/|\/(?:zh|ko|hi|fr)\/)#score-guide"/);
  }
});

test('localized homepages leave source links to the supporting method articles', () => {
  for (const route of ['/', 'zh', 'ko', 'hi', 'fr']) {
    assert.doesNotMatch(readBuilt(route), /class="source-section"/);
  }
});
