(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const EMAIL = 'paximadakis.antonios@gmail.com';

  /* ---------- Copy (English) ---------- */
  const EN = {
    skip: 'Skip to content', navLabel: 'Main',
    nav1: 'Sessions', nav2: 'About', nav3: 'Fees', nav4: 'Questions', navCta: 'Book',
    lede: 'Psychologist in Heraklion. Individual, couples and family therapy, at the office or online, in Greek and in English.',
    pickLegend: 'Who is the session for?',
    who1: 'For me', who2: 'For the two of us', who3: 'For our family', who4: 'Online',
    coverCta: 'Request a first session', orCall: 'or call',
    portraitAlt: 'Psychologist Antonis Paximadakis, portrait',
    portraitCap: 'MSc Applied Developmental Psychology · Licensed to practise, Region of Crete',
    aboutH: 'A little about me',
    aboutText: '<p><b>I’m Antonis Paximadakis,</b> a psychologist licensed by the Directorate of Public Health of the <b>Region of Crete</b>. I studied psychology at <b>Neapolis University Pafos</b> and hold a master’s in <b>Applied Developmental Psychology</b> from the Hellenic Open University. I have worked at the <b>Heraklion Mental Health Centre</b>, in hospitals and in private practice, with adults, teenagers, couples and families. I believe everyone deserves a place where they can speak freely, without being judged. I work with <b>evidence-based methods</b>, shaped around you and your goals, and keep learning through supervision. Sessions are held <b>in Greek or in English</b>, at the office or online.</p><p class="close"><a href="#book"><mark class="m-red">Let’s meet for a first session.</mark></a></p>',
    tlLabel: 'Education and experience',
    tl1: 'MSc Applied Developmental Psychology, Hellenic Open University',
    tl2: 'Heraklion Mental Health Centre',
    tl3: 'Private practice: individual, couples and family therapy, and teenagers with internet addiction',
    tl4: 'BSc Psychology, Neapolis University Pafos',
    plateAlt: '19th-century engraving: Heraklion harbour with the fortress, ships and people on the shore',
    plateCap: 'Heraklion harbour, engraving from a British Admiralty chart, 1897.',
    sessH1: 'Four ways', sessH2: 'to work together',
    sessP: 'Every session lasts 50–60 minutes. The first is 60 minutes: we get to know each other and set goals together.',
    sessCta: 'Book a session',
    s1h: 'Individual therapy', s1p: 'We explore the thoughts, feelings and habits that hold you back, to close the gap between the life you have and the one you want.', s1t: 'Adults · Teenagers · Greek or English',
    s2h: 'Couples therapy', s2p: 'We work on communication and rebuild trust and closeness with your partner, in a neutral and safe setting.', s2t: 'Communication · Trust · Closeness',
    s3h: 'Family therapy', s3p: 'We change the patterns of communication that make things hard, strengthen the bonds and build a home with mutual respect.', s3t: 'Parents · Children · Teenagers',
    s4h: 'Online sessions', s4p: 'By secure video call, for people short on time, living far away or finding it hard to travel.', s4t: 'Webex · A quiet room · Headphones',
    howH: 'How we begin', howP: 'You don’t need to know where to start. A message or a phone call is enough; we work out the rest together.',
    st1h: 'We talk', st1p: 'You send a request or call me. I reply so we can find a day and time.',
    st2h: 'We meet', st2p: 'The first session, 60 minutes: I listen to what brings you and we set goals together.',
    st3h: 'We continue', st3p: 'Sessions of 50–60 minutes, at a pace that suits you and what you are living through.',
    voicesH: 'What people say',
    v1r: 'Therapy in English',
    v2n: 'Eirini', v2r: 'Individual therapy · translated from Greek', v2q: '“At a very difficult point in my life, Antonis helped me get past feelings that kept me from making peace with myself.”',
    v3n: 'Giannis', v3r: 'Individual therapy · translated from Greek', v3q: '“My experience of therapy was very good. It helped me out of a period of depression and to bring back into my life the things that give me joy. I feel I have found a better balance in my everyday life.”',
    feesH: 'Fees', feesP: 'Individual, couples, family or online session, 50–60 minutes.',
    feesIncl: 'You receive a psychologist’s receipt for your insurance fund. Cancellations within 24 hours may be charged.',
    from: 'from', perSession: 'per session', feesCta: 'Book a session',
    reducedH: 'Students and large families', reducedP: 'Reduced fees for students and large families. Please don’t hesitate to ask.',
    reducedPrice: 'Special rate', reducedCta: 'Ask',
    faqH: 'Questions',
    q1: 'How long is the first session?', a1: '60 minutes. It is for getting to know each other, understanding what concerns you and setting therapy goals together.',
    q2: 'How much does a session cost?', a2: 'An individual session costs from 30€. There are special rates for students and large families.',
    q3: 'Is it covered by insurance?', a3: 'Some insurance funds cover part of the cost of psychotherapy. I give you a psychologist’s receipt to submit to your insurer.',
    q4: 'How do online sessions work?', a4: 'Through a secure video-call platform (Webex). All you need is a quiet room, an internet connection and headphones. They are as effective as sessions in person.',
    q5: 'Are sessions confidential?', a5: 'Completely. I follow the Code of Ethics of the Association of Greek Psychologists and the GDPR. Nothing you say is shared with anyone.',
    q6: 'Can we talk in English?', a6: 'Yes. Sessions are held in Greek or in English, at the office or online.',
    q7: 'What if I need to cancel?', a7: 'Let me know as early as you can. Cancellations within 24 hours of the appointment may be charged.',
    placeH: '154 Megalou Alexandrou',
    openStatic: 'Monday to Friday, 09:00–21:00',
    d1: 'Monday – Friday', d2: 'Saturday', d2v: 'By arrangement', d3: 'Sunday', d3v: 'Closed',
    bus: '71305 Heraklion, Crete. By bus: Mesampelies stop, on Megalou Alexandrou.',
    mapLink: 'Open in maps',
    bookH: 'Book a session',
    bookP: 'Fill in the coupon. It opens a ready-made email to me; send it and I will reply to confirm the day and time.',
    urgent: 'For anything urgent, call <a href="tel:+302814029611">2814 029611</a> or <a href="tel:+306941535883">6941 535883</a>. If you are in immediate danger, call <a href="tel:112">112</a>.',
    stA: 'Who it’s for', stB: 'When suits you', stC: 'Your details',
    dayL: 'Day', dayPh: 'Day…', mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday', fri: 'Friday', sat: 'Saturday (by arrangement)',
    timeL: 'Time', timePh: 'Time…',
    nameL: 'Full name', phoneL: 'Phone', emailPh: 'Email (optional)', msgL: 'A few words (optional)', msgPh: 'A few words about what brings you (optional)',
    consent: 'I accept the <a href="https://inner-balance.gr/%CE%A0%CE%BF%CE%BB%CE%B9%CF%84%CE%B9%CE%BA%CE%AE-%CE%91%CF%80%CE%BF%CF%81%CF%81%CE%AE%CF%84%CE%BF%CF%85">Privacy Policy</a>.',
    submit: 'Prepare the email',
    fAddr: 'Office', fAddrV: '154 Megalou Alexandrou<br>71305 Heraklion, Crete',
    fContact: 'Contact', fHours: 'Hours', fHoursV: 'Monday – Friday 09:00–21:00<br>Saturday by arrangement',
    fPage: 'Page', privacy: 'Privacy policy',
    legal: '© 2026 Antonis Paximadakis, psychologist. Confidentiality and data protection under the GDPR.',
    photos: 'Images, printed in one ink:'
  };

  const SESS = {
    individual: { tone: 'green', el: ['Ατομική θεραπεία', '50–60 λεπτά · από 30€ · στο γραφείο ή online'], en: ['Individual therapy', '50–60 minutes · from 30€ · at the office or online'] },
    couple:     { tone: 'red',   el: ['Θεραπεία ζεύγους', '50–60 λεπτά · ουδέτερο, ασφαλές πλαίσιο για δύο'], en: ['Couples therapy', '50–60 minutes · a neutral, safe setting for two'] },
    family:     { tone: 'blue',  el: ['Οικογενειακή θεραπεία', '50–60 λεπτά · γονείς, παιδιά, έφηβοι'], en: ['Family therapy', '50–60 minutes · parents, children, teenagers'] },
    online:     { tone: 'night', el: ['Online συνεδρία', '50–60 λεπτά · μέσω Webex, όπου κι αν είστε'], en: ['Online session', '50–60 minutes · via Webex, wherever you are'] }
  };
  const TONE_HEX = { green: '#1F4A3A', red: '#8E2F2A', blue: '#1D4E89', night: '#151515' };
  const NAME = { el: ['Αντώνης', 'Παξιμαδάκης'], en: ['Antonis', 'Paximadakis'] };

  let lang = 'el';
  let who = 'individual';

  /* ---------- Language ---------- */
  function setLang(next) {
    lang = next;
    document.documentElement.lang = next;
    $$('[data-i18n]').forEach(el => {
      if (el.dataset.el === undefined) el.dataset.el = el.innerHTML;
      const v = next === 'en' ? EN[el.dataset.i18n] : el.dataset.el;
      if (v !== undefined) el.innerHTML = v;
    });
    $$('[data-i18n-attr]').forEach(el => {
      const [attr, key] = el.dataset.i18nAttr.split(':');
      const store = 'el' + attr.replace(/\W/g, '');
      if (el.dataset[store] === undefined) el.dataset[store] = el.getAttribute(attr) || '';
      el.setAttribute(attr, next === 'en' ? (EN[key] ?? el.dataset[store]) : el.dataset[store]);
    });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === next)));
    document.title = next === 'en' ? 'Antonis Paximadakis · Psychologist in Heraklion' : 'Αντώνης Παξιμαδάκης · Ψυχολόγος στο Ηράκλειο';
    const [first, last] = NAME[next];
    $('#h-name').innerHTML = `<span>${first}</span> <span>${last}</span>`;
    renderPick();
    updateFadeCap();
    updateOpen();
    try { localStorage.setItem('ib-lang', next); } catch (e) {}
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));

  /* ---------- Who is it for (cover colour is state) ---------- */
  const cover = $('#cover');
  const coupon = $('#coupon');
  const bar = $('.bar');
  function renderPick() {
    const s = SESS[who];
    const [t, m] = s[lang];
    $('#pick-title').textContent = t;
    $('#pick-meta').textContent = m;
    cover.dataset.tone = s.tone;
    coupon.dataset.tone = s.tone;
    bar.dataset.tone = s.tone;
    $('meta[name="theme-color"]').setAttribute('content', TONE_HEX[s.tone]);
    $$('.sess-rows .row').forEach(r => r.classList.toggle('is-picked', r.dataset.who === who));
  }
  function choose(value, from) {
    who = value;
    $$(`input[name="who"][value="${value}"], input[name="bwho"][value="${value}"]`).forEach(i => { if (i !== from) i.checked = true; });
    renderPick();
  }
  $$('input[name="who"], input[name="bwho"]').forEach(i => i.addEventListener('change', () => i.checked && choose(i.value, i)));
  $$('.sess-rows .row').forEach(r => r.addEventListener('click', () => choose(r.dataset.who)));

  /* Bar follows the cover, then turns to paper */
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => bar.classList.toggle('on-paper', !e.isIntersecting), { rootMargin: '-68px 0px 0px 0px' }).observe(cover);
  }

  /* ---------- Reveal with stagger per section ---------- */
  if ('IntersectionObserver' in window && !reduce) {
    $$('section, figure.plate, figure.engraving').forEach(sec => {
      $$('.reveal', sec).forEach((el, i) => el.style.setProperty('--d', `${Math.min(i, 6) * 80}ms`));
    });
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    $$('.reveal').forEach(el => io.observe(el));
  } else {
    $$('.reveal').forEach(el => el.classList.add('in'));
  }

  /* ---------- Plate drift ---------- */
  const plate = $('.plate-img img');
  if (plate && !reduce) {
    let ticking = false;
    const drift = () => {
      const r = plate.parentElement.getBoundingClientRect();
      const p = Math.max(-1, Math.min(1, (r.top + r.height / 2 - innerHeight / 2) / innerHeight));
      plate.style.transform = `translate3d(0, ${(-7 + p * 7).toFixed(2)}%, 0)`;
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(drift); } }, { passive: true });
    drift();
  }

  /* ---------- Slow crossfade of Heraklion ---------- */
  const fadeImgs = $$('.fade-stack img');
  const fadeCap = $('.fade-cap');
  let fi = 0, fadeTimer = null, fadeVisible = false;
  function updateFadeCap() {
    const img = fadeImgs[fi];
    if (img && fadeCap) fadeCap.textContent = lang === 'en' ? img.dataset.capEn : img.dataset.cap;
  }
  function step() {
    fadeImgs[fi].classList.remove('on');
    fi = (fi + 1) % fadeImgs.length;
    fadeImgs[fi].classList.add('on');
    updateFadeCap();
  }
  function runFade() {
    clearInterval(fadeTimer);
    if (!reduce && fadeVisible && !document.hidden) fadeTimer = setInterval(step, 5600);
  }
  if (fadeImgs.length && 'IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { fadeVisible = e.isIntersecting; runFade(); }).observe($('.fade-stack'));
    document.addEventListener('visibilitychange', runFade);
  }

  /* ---------- Open now (Athens time) ---------- */
  function athensNow() {
    const parts = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Athens', weekday: 'short', hour: '2-digit', hour12: false }).formatToParts(new Date());
    const get = t => parts.find(p => p.type === t).value;
    const days = { Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6, Sun: 0 };
    return { day: days[get('weekday')], h: parseInt(get('hour'), 10) % 24 };
  }
  function updateOpen() {
    const el = $('#open-now');
    if (!el) return;
    const { day, h } = athensNow();
    const weekday = day >= 1 && day <= 5;
    const open = weekday && h >= 9 && h < 21;
    let text;
    if (open) {
      text = lang === 'en' ? 'Open now, until 21:00' : 'Ανοιχτά τώρα, ως τις 21:00';
    } else {
      const beforeOpen = weekday && h < 9;
      const nextIsTomorrow = day >= 0 && day <= 4 && !beforeOpen;
      const when = beforeOpen ? (lang === 'en' ? 'today' : 'σήμερα')
        : nextIsTomorrow ? (lang === 'en' ? 'tomorrow' : 'αύριο')
        : (lang === 'en' ? 'on Monday' : 'τη Δευτέρα');
      text = lang === 'en' ? `Closed now · opens ${when} at 09:00` : `Κλειστά τώρα · ανοίγει ${when} στις 09:00`;
    }
    el.textContent = text;
    el.classList.toggle('is-open', open);
  }
  setInterval(updateOpen, 60000);

  /* ---------- Many into one: the diagram ---------- */
  function rng(seed) { return () => (seed = (seed * 16807) % 2147483647) / 2147483647; }
  const NS = 'http://www.w3.org/2000/svg';
  function sq(svg, x, y, s, fill, op, delay, from) {
    const r = document.createElementNS(NS, 'rect');
    r.setAttribute('x', x.toFixed(1)); r.setAttribute('y', y.toFixed(1));
    r.setAttribute('width', s); r.setAttribute('height', s);
    r.setAttribute('fill', fill); r.setAttribute('opacity', op);
    r.style.transitionDelay = `${delay}ms`;
    r.dataset.from = from;
    svg.appendChild(r);
  }
  function drawH(svg) {
    const R = rng(7); const s = 12;
    for (let i = 0; i < 46; i++) sq(svg, 10 + R() * 360, 14 + R() * 230, s, '#F1F1EF', i % 2 ? 0.35 : 0.7, i * 10, `${(R() - .5) * 120}px,${(R() - .5) * 120}px`);
    for (let c = 0; c < 20; c++) for (let rI = 0; rI < 3; rI++) sq(svg, 420 + c * 18, 112 + rI * 16, s, '#F1F1EF', 0.9, 300 + c * 12, `${(R() - .5) * 160 - 120}px,${(R() - .5) * 200}px`);
    for (let rI = 0; rI < 5; rI++) for (let c = 0; c < 9; c++) sq(svg, 828 + c * 41, 34 + rI * 46, s + 6, '#F1F1EF', 1, 560 + (rI * 9 + c) * 8, `${(R() - .5) * 120 - 200}px,${(R() - .5) * 160}px`);
  }
  function drawV(svg) {
    const R = rng(11); const s = 10;
    for (let i = 0; i < 34; i++) sq(svg, 14 + R() * 270, 6 + R() * 110, s, '#F1F1EF', i % 2 ? 0.35 : 0.7, i * 10, `${(R() - .5) * 80}px,${(R() - .5) * 80}px`);
    for (let rI = 0; rI < 9; rI++) for (let c = 0; c < 3; c++) sq(svg, 130 + c * 14, 140 + rI * 14, s, '#F1F1EF', 0.9, 260 + rI * 18, `${(R() - .5) * 120}px,${(R() - .5) * 60 - 80}px`);
    for (let rI = 0; rI < 4; rI++) for (let c = 0; c < 7; c++) sq(svg, 26 + c * 40, 290 + rI * 28, s + 4, '#F1F1EF', 1, 440 + (rI * 7 + c) * 10, `${(R() - .5) * 100}px,${-90 - R() * 60}px`);
  }
  const dgH = $('.dg-h'), dgV = $('.dg-v');
  if (dgH) drawH(dgH);
  if (dgV) drawV(dgV);
  const diagram = $('.how-diagram');
  if (diagram && !reduce && 'IntersectionObserver' in window) {
    $$('rect', diagram).forEach(r => { r.style.transform = `translate(${r.dataset.from})`; r.style.opacity = '0'; });
    const dio = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        requestAnimationFrame(() => $$('rect', diagram).forEach(r => { r.style.transform = ''; r.style.opacity = ''; }));
        dio.disconnect();
      }
    }, { threshold: 0.15 });
    dio.observe(diagram);
  }

  /* ---------- The coupon: compose the email ---------- */
  const err = $('#form-error');
  const submitBtn = $('.submit');
  coupon.addEventListener('submit', ev => {
    ev.preventDefault();
    const f = coupon.elements;
    const en = lang === 'en';
    const need = [['name', en ? 'your name' : 'το όνομά σας'], ['phone', en ? 'a phone number' : 'ένα τηλέφωνο'], ['day', en ? 'a day' : 'μια μέρα'], ['time', en ? 'a time' : 'μια ώρα']];
    const missing = need.filter(([n]) => !String(f[n].value).trim());
    need.forEach(([n]) => f[n].setAttribute('aria-invalid', String(missing.some(([m]) => m === n))));
    if (missing.length || !f.consent.checked) {
      const parts = [];
      if (missing.length) parts.push((en ? 'Please add ' : 'Συμπληρώστε ') + missing.map(([, l]) => l).join(', '));
      if (!f.consent.checked) parts.push(en ? 'tick the privacy policy box' : 'τσεκάρετε την Πολιτική Απορρήτου');
      err.textContent = parts.join(en ? ' and ' : ' και ') + '.';
      err.hidden = false;
      (missing.length ? f[missing[0][0]] : f.consent).focus();
      return;
    }
    err.hidden = true;
    const type = SESS[who][lang][0];
    const day = f.day.options[f.day.selectedIndex].text;
    const time = f.time.value;
    const subject = en ? `Appointment request: ${type}, ${day} ${time}` : `Αίτημα ραντεβού: ${type}, ${day} ${time}`;
    const lines = en
      ? [`Session: ${type}`, `Preferred: ${day}, ${time}`, `Name: ${f.name.value}`, `Phone: ${f.phone.value}`, f.email.value && `Email: ${f.email.value}`, f.msg.value && `\n${f.msg.value}`]
      : [`Συνεδρία: ${type}`, `Προτίμηση: ${day}, ${time}`, `Όνομα: ${f.name.value}`, `Τηλέφωνο: ${f.phone.value}`, f.email.value && `Email: ${f.email.value}`, f.msg.value && `\n${f.msg.value}`];
    location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.filter(Boolean).join('\n'))}`;
    submitBtn.textContent = en ? 'Your email app should open now' : 'Ανοίγει το email σας';
    setTimeout(() => { submitBtn.textContent = en ? EN.submit : 'Ετοιμάστε το email'; }, 4000);
  });
  $$('input, select, textarea', coupon).forEach(el => el.addEventListener('input', () => el.removeAttribute('aria-invalid')));

  /* ---------- Start ---------- */
  let saved = 'el';
  try { saved = localStorage.getItem('ib-lang') || 'el'; } catch (e) {}
  if (/^en/i.test(new URLSearchParams(location.search).get('lang') || '')) saved = 'en';
  setLang(saved);
})();
