import type { Locale } from "../i18n/locales";

type Card = { title: string; text: string };
type Faq = { q: string; a: string };

export type HomeCopy = {
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  hero: {
    leadStrong: string;
    leadBefore: string;
    concert: string;
    start: string;
    ctaBefore: string;
    ctaStrong: string;
    scroll: string;
  };
  marquee: string[];
  stereotypes: {
    kicker: string;
    title: string;
    titleLine2: string;
    claim: string;
    body: string;
    levelAria: string;
    newbie: string;
    experienced: string;
    newCards: readonly [Card, Card, Card];
    expCards: readonly [Card, Card, Card];
  };
  why: {
    kicker: string;
    title: string;
    titleLine2: string;
    lead: string;
    items: readonly [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  };
  pricing: {
    kicker: string;
    title: string;
    audienceBefore: string;
    audienceAccent: string;
    audienceAfter: string;
    trialTitle: string;
    trialDurationBefore: string;
    trialDuration: string;
    cards: readonly [
      { name: string; kind: string; lessons: string; note: string; ribbon: string | null },
      { name: string; kind: string; lessons: string; note: string; ribbon: string | null },
      { name: string; kind: string; lessons: string; note: string; ribbon: string | null },
      { name: string; kind: string; lessons: string; note: string; ribbon: string | null },
    ];
  };
  trial: {
    kicker: string;
    title: string;
    titleLine2: string;
    leadBefore: string;
    leadAfter: string;
    ctaTitle: string;
    ctaTitleLine2: string;
    ctaLead: string;
    cta: string;
    steps: readonly [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  };
  teachers: {
    kicker: string;
    title: string;
    titleLine2: string;
    lead: string;
  };
  students: {
    aria: string;
    title: string;
    titleLine2: string;
    lead: string;
  };
  concerts: {
    kicker: string;
    title: string;
    videoTitle: string;
    badge: string;
  };
  faq: {
    title: string;
    intro: string;
    cardTitle: string;
    cardLead: string;
    items: readonly [Faq, Faq, Faq, Faq, Faq, Faq];
  };
  contacts: {
    kicker: string;
    title: string;
    lead: string;
    branchAria: string;
    routeAria: string;
    phoneLabel: string;
    emailLabel: string;
  };
};

const lv: HomeCopy = {
  metaTitle: "DRUMSTARZ — bungu skola Nr. 1 Rīgā",
  metaDescription: "DRUMSTARZ — bungu skola Nr. 1 Rīgā. Iemācieties spēlēt bungas no nulles trīs mēnešos.",
  tagline: "Bungu skola Nr. 1 Rīgā!",
  hero: {
    leadBefore: "Iemācieties spēlēt iemīļoto skaņdarbu ",
    leadStrong: "bungās no nulles trīs mēnešos",
    concert: "Ir vēlme — uzstājieties mūsu koncertā.",
    start: "Vienmēr gribējāt spēlēt bungas? Sāciet šodien",
    ctaBefore: "Pierakstīties uz",
    ctaStrong: "bezmaksas nodarbību",
    scroll: "Ritiniet ↓",
  },
  marquee: ["Dzīva skaņa", "Īsta skatuve", "Kopš 2013", "Rīga", "Bezmaksas nodarbība", "Divas filiāles"],
  stereotypes: {
    kicker: "Tagad mācīties mūziku — nav garlaicīgi!",
    title: "Laužam",
    titleLine2: "stereotipus",
    claim: "DRUMSTARZ — jaunas paaudzes skola.",
    body: "Pie mums nav garlaicīgu vingrinājumu un formālu rituālu — tikai dzīva saruna, atbalsts un īsta muzikāla prakse. Palīdzam katram atklāt savu potenciālu, sajust ritmu un noticēt, ka mūzika var būt patiesi aizraujoša!",
    levelAria: "Jūsu sagatavotības līmenis",
    newbie: "Esmu iesācējs",
    experienced: "Man ir pieredze",
    newCards: [
      { title: "Apgūsti", text: "bungu spēles pamatus" },
      { title: "Iemācieties", text: "nospelēt vienu no saviem iemīļotajiem skaņdarbiem" },
      { title: "Uzstājieties", text: "īstā koncertā" },
    ],
    expCards: [
      { title: "Attīstiet", text: "savu līmeni" },
      { title: "Noņemiet", text: "video kaveru" },
      { title: "Nospēlējiet", text: "īstā koncertā" },
    ],
  },
  why: {
    kicker: "Nekad neesat turējis paliktņus?",
    title: "Visi sāk no nulles.",
    titleLine2: "Sāksiet arī jūs.",
    lead: "Nav jāprot lasīt notis, jābūt ritma izjūtai vai savam instrumentam. Pietiek ar vēlmi pamēģināt — par pārējo parūpēsies pasniedzējs.",
    items: [
      { title: "Pieredze nav vajadzīga", text: "Neviens neatnāk, jau protēdams spēlēt. Viss sākas ar vienkāršu ritmu — pasniedzēja vadībā." },
      { title: "Instruments nav jānes", text: "Visa aparatūra jau ir studijā — bungas, šķīvji, paliktņi." },
      { title: "Pievienoties var jebkurā brīdī", text: "Nav jāgaida mēneša sākums vai grupas uzņemšana — grafiks pielāgojas jums." },
      { title: "Bez saistībām", text: "Izmēģinājuma nodarbība ir bez maksas. Lēmums — turpināt vai nē — paliek pie jums." },
    ],
  },
  pricing: {
    kicker: "Tarifi",
    title: "Bungu skolas kursi un cenas",
    audienceBefore: "Bērniem no 10 gadiem un pieaugušajiem ",
    audienceAccent: "jebkurā",
    audienceAfter: " vecumā",
    trialTitle: "Pirmā izmēģinājuma nodarbība",
    trialDurationBefore: "Ilgums ",
    trialDuration: "30 minūtes",
    cards: [
      { name: "Vienreizēja", kind: "Apmeklējums", lessons: "1 nodarbība", note: "Tiem, kas nav gatavi nākt katru nedēļu", ribbon: null },
      { name: "Starta", kind: "Abonements", lessons: "4 nodarbības", note: "Obligāts apmeklējums reizi nedēļā", ribbon: null },
      { name: "Eksperts", kind: "Abonements", lessons: "12 nodarbības", note: "Obligāts apmeklējums reizi nedēļā", ribbon: "Pārdošanas hits" },
      { name: "Premium", kind: "Abonements", lessons: "24 nodarbības", note: "Obligāts apmeklējums reizi nedēļā", ribbon: "Labākā cena" },
    ],
  },
  trial: {
    kicker: "Kā norit izmēģinājuma nodarbība",
    title: "No studijas durvīm",
    titleLine2: "līdz pirmajam ritmam",
    leadBefore: "30 minūtes",
    leadAfter: ", seši vienkārši soļi — bez spiediena un bez saistībām.",
    ctaTitle: "Gatavi pamēģināt",
    ctaTitleLine2: "bez riska?",
    ctaLead: "Aizpildiet formu — piezvanīsim 1 darba stundas laikā, bez saistībām.",
    cta: "Nosūtīt pieteikumu",
    steps: [
      { title: "Atnāciet uz studiju", text: "Vienkārši atnāciet norunātajā laikā — iepriekš nekas nav jāsagatavo." },
      { title: "Iepazīstieties ar pasniedzēju", text: "Pastāstiet par sevi, pasniedzējs pielāgos nodarbības tempu." },
      { title: "Sajūtat atmosfēru", text: "Dzīva skaņa, īsta studija — ne video nodarbība un ne online." },
      { title: "Nospēlējat savu pirmo ritmu", text: "Jau stundas laikā nospēlēsiet vienkāršu ritmu paši." },
      { title: "Saņemat ieteikumus", text: "Pasniedzējs pastāstīs, kas izdevās un pie kā vērts strādāt." },
      { title: "Izlemjat, vai turpināt", text: "Nekādu saistību — lēmums paliek pie jums." },
    ],
  },
  teachers: {
    kicker: "Mūsu pasniedzēji",
    title: "Labākie",
    titleLine2: "Latvijas bundzinieki",
    lead: "Ne tikai pasniedzēji — aktīvi mūziķi, kas katru dienu kāpj uz skatuves.",
  },
  students: {
    aria: "Mūsu skolēni",
    title: "Mūsu",
    titleLine2: "skolēni",
    lead: "Mūsu skolēni ir bērni un pieaugušie, kas reiz paņēma paliktņus rokās un atklāja ritma pasauli.",
  },
  concerts: {
    kicker: "Skolēnu rezultāti",
    title: "Paskatieties, kā notiek atskaites koncerti",
    videoTitle: "Skatīties atskaites koncerta video",
    badge: "Skolēna video",
  },
  faq: {
    title: "Iesācēja jautājumi",
    intro: "Iespējams, tos jau ir jautājuši:",
    cardTitle: "Vai vienkārši atstājiet pieteikumu — pastāstīsim visu paši!",
    cardLead: "Atstājiet pieteikumu — palīdzēsim spert pirmo soli mūzikā!",
    items: [
      { q: "Cik ilgā laikā var iemācīties spēlēt bungas?", a: "Pirmajos trīs mēnešos jūs noteikti spēsiet nospelēt dziesmu, ko iemācīsieties ar pasniedzēju, ja apmeklēsiet visas nodarbības un aktīvi strādāsiet mājās." },
      { q: "Kāds ir nodarbību grafiks? Vai varēšu savienot mācības ar darbu vai studijām?", a: "Skolā nav fiksēta nodarbību laika — visu vienojamies individuāli." },
      { q: "Man jau par vēlu", a: "Vecuma ierobežojumu nav. Mūsu vecākajam skolēnam ir 64 gadi." },
      { q: "Nekad neesmu mācījies mūziku. Vai bungām vajadzīga sākuma sagatavotība?", a: "Nē. Pirmajos 3 mēnešos jūs precīzi sapratīsiet, vai vēlaties turpināt un augt šajā virzienā." },
      { q: "Kas jāņem līdzi uz pirmo nodarbību?", a: "Nekas nav jāņem. Skola nodrošina visu." },
      { q: "Es nezinu notis", a: "Notis iemācīsim. Bungu partiju pieraksts un lasīšana ir daudz vienkāršāka nekā, piemēram, stīgu instrumentiem. Notis apgūsiet ļoti ātri." },
    ],
  },
  contacts: {
    kicker: "Kontakti",
    title: "Kā mūs atrast",
    lead: "Divas filiāles Rīgas centrā. Ērti aizbraukt gan ar mašīnu, gan ar sabiedrisko transportu.",
    branchAria: "Filiāles izvēle",
    routeAria: "Maršruts līdz izvēlētajai filiālei",
    phoneLabel: "Tālrunis un WhatsApp",
    emailLabel: "E-pasts",
  },
};

const ru: HomeCopy = {
  metaTitle: "DRUMSTARZ — школа барабанов №1 в Риге",
  metaDescription: "DRUMSTARZ — школа барабанов №1 в Риге. Научись играть на барабанах с нуля за три месяца.",
  tagline: "Школа барабанов №1 в Риге!",
  hero: {
    leadBefore: "Научись играть любимый трек ",
    leadStrong: "на барабанах с нуля за три месяца",
    concert: "Есть желание — выступи на нашем концерте.",
    start: "Всегда хотел играть на барабанах? Начни сегодня",
    ctaBefore: "Записаться на",
    ctaStrong: "бесплатный урок",
    scroll: "Листай ↓",
  },
  marquee: ["Живой звук", "Настоящая сцена", "С 2013", "Рига", "Бесплатный урок", "Два филиала"],
  stereotypes: {
    kicker: "Теперь заниматься музыкой — не скучно!",
    title: "Ломаем",
    titleLine2: "стереотипы",
    claim: "DRUMSTARZ — это школа нового поколения.",
    body: "У нас нет скучных упражнений и формальностей — только живое общение, поддержка и настоящая музыкальная практика. Мы помогаем каждому раскрыть свой потенциал, почувствовать ритм и поверить, что заниматься музыкой может быть по-настоящему увлекательно!",
    levelAria: "Ваш уровень подготовки",
    newbie: "Я новичок",
    experienced: "Я с опытом",
    newCards: [
      { title: "Изучи", text: "основы игры на барабанах" },
      { title: "Научись", text: "играть один из твоих любимых треков" },
      { title: "Выступи", text: "на настоящем концерте" },
    ],
    expCards: [
      { title: "Прокачивай", text: "свой уровень" },
      { title: "Сними", text: "видео кавер" },
      { title: "Отыграй", text: "на настоящем концерте" },
    ],
  },
  why: {
    kicker: "Никогда не держал палочки?",
    title: "Все начинают с нуля.",
    titleLine2: "И ты начнёшь.",
    lead: "Не нужно уметь читать ноты, иметь чувство ритма или свой инструмент. Достаточно желания попробовать — обо всём остальном позаботится преподаватель.",
    items: [
      { title: "Опыт не нужен", text: "Никто не приходит, умея играть. Всё начинается с простого ритма — под руководством преподавателя." },
      { title: "Инструмент не требуется", text: "Всё оборудование уже есть в студии — барабаны, тарелки, палочки." },
      { title: "Присоединиться можно в любой момент", text: "Не нужно ждать начала месяца или набора группы — расписание подстраивается под вас." },
      { title: "Без обязательств", text: "Пробное занятие бесплатное. Решение — продолжать или нет — только за вами." },
    ],
  },
  pricing: {
    kicker: "Тарифы",
    title: "Курсы и цены школы барабанов",
    audienceBefore: "Детям от 10 лет и взрослым ",
    audienceAccent: "любого",
    audienceAfter: " возраста",
    trialTitle: "Первое пробное занятие",
    trialDurationBefore: "Длительность ",
    trialDuration: "30 минут",
    cards: [
      { name: "Разовое", kind: "Посещение", lessons: "1 занятие", note: "Для тех, кто не готов ходить каждую неделю", ribbon: null },
      { name: "Стартовый", kind: "Абонемент", lessons: "4 занятия", note: "Обязательное посещение один раз в неделю", ribbon: null },
      { name: "Эксперт", kind: "Абонемент", lessons: "12 занятий", note: "Обязательное посещение один раз в неделю", ribbon: "Хит продаж" },
      { name: "Премиум", kind: "Абонемент", lessons: "24 занятия", note: "Обязательное посещение один раз в неделю", ribbon: "Лучшая цена" },
    ],
  },
  trial: {
    kicker: "Как проходит пробное занятие",
    title: "От двери студии",
    titleLine2: "до первого ритма",
    leadBefore: "30 минут",
    leadAfter: ", шесть простых шагов — без давления и без обязательств.",
    ctaTitle: "Готовы попробовать",
    ctaTitleLine2: "без риска?",
    ctaLead: "Заполните форму — перезвоним в течение 1 рабочего часа, без обязательств.",
    cta: "Отправить заявку",
    steps: [
      { title: "Приходите в студию", text: "Просто приходите в назначенное время — ничего готовить заранее не нужно." },
      { title: "Знакомитесь с преподавателем", text: "Расскажите о себе, преподаватель подберёт темп занятия под вас." },
      { title: "Чувствуете атмосферу", text: "Живой звук, настоящая студия — не видео-урок и не онлайн." },
      { title: "Играете свой первый ритм", text: "Уже в течение часа вы сыграете простой ритм самостоятельно." },
      { title: "Получаете рекомендации", text: "Преподаватель расскажет, что получилось и над чем стоит поработать." },
      { title: "Решаете, продолжать ли", text: "Никаких обязательств — решение только за вами." },
    ],
  },
  teachers: {
    kicker: "Наши преподаватели",
    title: "Лучшие",
    titleLine2: "барабанщики Латвии",
    lead: "Не просто преподаватели — действующие музыканты, которые каждый день выходят на сцену.",
  },
  students: {
    aria: "Наши ученики",
    title: "Наши",
    titleLine2: "ученики",
    lead: "Наши ученики — это дети и взрослые, которые однажды взяли в руки палочки и открыли для себя мир ритма.",
  },
  concerts: {
    kicker: "Результаты учеников",
    title: "Посмотри, как проходят отчётные концерты",
    videoTitle: "Смотреть видео отчётного концерта",
    badge: "Видео ученика",
  },
  faq: {
    title: "Вопросы новичка",
    intro: "Возможно, их уже задавали:",
    cardTitle: "Или просто оставьте заявку и мы всё расскажем!",
    cardLead: "Оставьте заявку — и мы поможем вам сделать первый шаг в мир музыки!",
    items: [
      { q: "За какое время можно научиться играть на барабанах?", a: "За первые три месяца вы гарантированно сможете сыграть песню, которую разучите с преподавателем, при условии посещения всех занятий и активной работы дома." },
      { q: "Каков график занятий? Смогу ли я совмещать обучение с работой или учебой?", a: "В школе нет определенного времени занятий, все оговаривается индивидуально." },
      { q: "Мне уже поздно", a: "Ограничений по возрасту нет. Наш самый старший ученик - 64 года." },
      { q: "Я никогда не занимался/ не занималась музыкой. Требуется ли начальная подготовка для того, чтобы учиться игре на барабанах?", a: "Нет, не требуется. За первые 3 месяца вы точно поймете, хотите ли вы продолжать заниматься и расти в этом направлении или нет." },
      { q: "Что нужно принести на первое занятие?", a: "Ничего приносить не требуется. Школа все предоставляет." },
      { q: "Я не знаю нот", a: "Нотам мы обучим. Для записи и чтения барабанных партий ноты гораздо проще, чем, например, для струнных инструментов. Вы освоите ноты очень быстро." },
    ],
  },
  contacts: {
    kicker: "Контакты",
    title: "Как нас найти",
    lead: "Два филиала в центре Риги. Удобно добраться и на машине, и на общественном транспорте.",
    branchAria: "Выбор филиала",
    routeAria: "Маршрут до выбранного филиала",
    phoneLabel: "Телефон и Whatsapp",
    emailLabel: "Email",
  },
};

const en: HomeCopy = {
  metaTitle: "DRUMSTARZ — drum school No. 1 in Riga",
  metaDescription: "DRUMSTARZ — drum school No. 1 in Riga. Learn to play drums from scratch in three months.",
  tagline: "Drum school No. 1 in Riga!",
  hero: {
    leadBefore: "Learn to play your favourite track ",
    leadStrong: "on drums from scratch in three months",
    concert: "If you want — perform at our concert.",
    start: "Always wanted to play drums? Start today",
    ctaBefore: "Book a",
    ctaStrong: "free lesson",
    scroll: "Scroll ↓",
  },
  marquee: ["Live sound", "A real stage", "Since 2013", "Riga", "Free lesson", "Two studios"],
  stereotypes: {
    kicker: "Learning music doesn’t have to be boring!",
    title: "Breaking",
    titleLine2: "stereotypes",
    claim: "DRUMSTARZ is a new-generation school.",
    body: "No dull drills or formalities — just real conversation, support and genuine musical practice. We help everyone find their potential, feel the groove and believe that music can actually be exciting!",
    levelAria: "Your experience level",
    newbie: "I’m a beginner",
    experienced: "I have experience",
    newCards: [
      { title: "Learn", text: "the basics of playing drums" },
      { title: "Play", text: "one of your favourite tracks" },
      { title: "Perform", text: "at a real concert" },
    ],
    expCards: [
      { title: "Level up", text: "your playing" },
      { title: "Film", text: "a video cover" },
      { title: "Play", text: "a real concert" },
    ],
  },
  why: {
    kicker: "Never held drumsticks?",
    title: "Everyone starts from zero.",
    titleLine2: "So will you.",
    lead: "You don’t need to read music, have a sense of rhythm or own a kit. Wanting to try is enough — the teacher takes care of the rest.",
    items: [
      { title: "No experience needed", text: "Nobody arrives already knowing how to play. It all starts with a simple groove — with a teacher beside you." },
      { title: "No instrument required", text: "Everything is already in the studio — drums, cymbals, sticks." },
      { title: "Join at any time", text: "No waiting for a new month or a group intake — the schedule fits around you." },
      { title: "No commitment", text: "The trial lesson is free. Whether you continue is entirely up to you." },
    ],
  },
  pricing: {
    kicker: "Plans",
    title: "Courses and prices",
    audienceBefore: "For kids from 10 and adults of ",
    audienceAccent: "any",
    audienceAfter: " age",
    trialTitle: "First trial lesson",
    trialDurationBefore: "Duration ",
    trialDuration: "30 minutes",
    cards: [
      { name: "Drop-in", kind: "Visit", lessons: "1 lesson", note: "For those who can’t come every week", ribbon: null },
      { name: "Starter", kind: "Pass", lessons: "4 lessons", note: "Weekly attendance required", ribbon: null },
      { name: "Expert", kind: "Pass", lessons: "12 lessons", note: "Weekly attendance required", ribbon: "Best seller" },
      { name: "Premium", kind: "Pass", lessons: "24 lessons", note: "Weekly attendance required", ribbon: "Best value" },
    ],
  },
  trial: {
    kicker: "How the trial lesson works",
    title: "From the studio door",
    titleLine2: "to your first groove",
    leadBefore: "30 minutes",
    leadAfter: ", six simple steps — no pressure and no commitment.",
    ctaTitle: "Ready to try",
    ctaTitleLine2: "with no risk?",
    ctaLead: "Fill in the form — we’ll call back within 1 working hour, no strings attached.",
    cta: "Send request",
    steps: [
      { title: "Come to the studio", text: "Just arrive at the agreed time — nothing to prepare in advance." },
      { title: "Meet the teacher", text: "Tell a bit about yourself; the teacher will match the lesson pace to you." },
      { title: "Feel the room", text: "Live sound, a real studio — not a video lesson and not online." },
      { title: "Play your first groove", text: "Within the hour you’ll play a simple rhythm on your own." },
      { title: "Get feedback", text: "The teacher will tell you what worked and what to work on next." },
      { title: "Decide if you continue", text: "No obligations — the decision is yours." },
    ],
  },
  teachers: {
    kicker: "Our teachers",
    title: "Latvia’s",
    titleLine2: "best drummers",
    lead: "Not just teachers — working musicians who step on stage every day.",
  },
  students: {
    aria: "Our students",
    title: "Our",
    titleLine2: "students",
    lead: "Our students are kids and adults who once picked up sticks and discovered the world of rhythm.",
  },
  concerts: {
    kicker: "Student results",
    title: "See how the recitals go",
    videoTitle: "Watch a recital concert video",
    badge: "Student video",
  },
  faq: {
    title: "Beginner questions",
    intro: "Someone has probably asked these already:",
    cardTitle: "Or just leave a request and we’ll tell you everything!",
    cardLead: "Leave a request — we’ll help you take the first step into music!",
    items: [
      { q: "How long does it take to learn drums?", a: "In the first three months you will be able to play a song you learn with your teacher — if you attend every lesson and practise at home." },
      { q: "What’s the schedule? Can I combine it with work or studies?", a: "There’s no fixed timetable — everything is agreed individually." },
      { q: "I’m too old", a: "There is no age limit. Our oldest student is 64." },
      { q: "I’ve never studied music. Do I need any background to learn drums?", a: "No. In the first 3 months you’ll know clearly whether you want to keep going." },
      { q: "What should I bring to the first lesson?", a: "Nothing. The school provides everything." },
      { q: "I can’t read music", a: "We’ll teach you. Drum notation is much simpler than, say, strings. You’ll pick it up quickly." },
    ],
  },
  contacts: {
    kicker: "Contacts",
    title: "How to find us",
    lead: "Two studios in the centre of Riga. Easy to reach by car or public transport.",
    branchAria: "Choose a studio",
    routeAria: "Route to the selected studio",
    phoneLabel: "Phone and WhatsApp",
    emailLabel: "Email",
  },
};

export const HOME: Record<Locale, HomeCopy> = { lv, ru, en };
