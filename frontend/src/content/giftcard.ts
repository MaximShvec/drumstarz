import type { Locale } from "../i18n/locales";
import type { GiftcardPlanId } from "../data/giftcard";

type Block = { title: string; text: string };
type Faq = { q: string; a: string };
type Plan = { title: string; meta: string; copy: string; ribbon: string | null };

export type GiftcardCopy = {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  choose: string;
  pricesLine: string;
  noExperience: string;
  certAlt: string;
  emotionKicker: string;
  emotionTitle: string;
  emotionLead: string;
  emotionPunch: string;
  emotionAlt: string;
  lessonBadge: string;
  lessonNote: string;
  pricingKicker: string;
  pricingTitle: string;
  pricingLead: string;
  order: string;
  plans: Record<GiftcardPlanId, Plan>;
  expKicker: string;
  expTitle: string;
  expLead: string;
  expPunch: string;
  expAlt: string;
  experience: readonly [Block, Block, Block, Block];
  stepsKicker: string;
  stepsTitle: string;
  stepsLead: string;
  stepsFor: string;
  steps: readonly [Block, Block, Block];
  faqKicker: string;
  faqTitle: string;
  faqLead: string;
  faq: readonly [Faq, Faq, Faq, Faq, Faq, Faq];
  cardKicker: string;
  cardTitle: string;
  cardLead: string;
  lesson1: string;
  lesson4: string;
  noExpChip: string;
  form: {
    kicker: string;
    title: string;
    lead: string;
    bullets: readonly [string, string, string];
    formKicker: string;
    formTitle: string;
    formLead: string;
    planAria: string;
    submit: string;
    hint: string;
  };
};

const lv: GiftcardCopy = {
  metaTitle: "DRUMSTARZ dāvanu karte — bungu nodarbības dāvanā",
  metaDescription:
    "DRUMSTARZ dāvanu karte: individuālas bungu nodarbības dāvanā. 1 nodarbība — 35 €, 4 nodarbības — 115 €. Pieredze un savs komplekts nav vajadzīgi.",
  heroKicker: "Dāvanu karte · Drumstarz",
  heroTitle: "Dari ne lietu. Dari ritmu.",
  heroLead: "Neparasta dāvana draugam, radiniekam vai kolēģim — individuālas bungu nodarbības.",
  choose: "Izvēlēties karti",
  pricesLine: "1 nodarbība · 35 € / 4 nodarbības · 115 €",
  noExperience: "Pieredze un savs komplekts nav vajadzīgi",
  certAlt: "Īsta DRUMSTARZ dāvanu karte vienai nodarbībai",
  emotionKicker: "Ne tikai sertifikāts",
  emotionTitle: "Dāvana, kas skan",
  emotionLead:
    "Saņēmējs sēžas pie īsta bungu komplekta, iepazīst pamatus un jau pirmajā nodarbībā saliek savu pirmo ritmu.",
  emotionPunch: "Emocijas + jauna prasme vietā, lai vēl viena lieta",
  emotionAlt: "DRUMSTARZ bundzinieks dzīvā uzstāšanās laikā",
  lessonBadge: "50 min",
  lessonNote: "Individuāla nodarbība",
  pricingKicker: "Dāvanu kartes cenas",
  pricingTitle: "Izvēlieties dāvanas ritmu",
  pricingLead: "Viens spilgts piedzīvojums vai četras nodarbības, lai ieietu ritmā pārliecinošāk.",
  order: "Pasūtīt karti",
  plans: {
    "1-lesson": {
      title: "Pirmais ritms",
      meta: "1 nodarbība · 50 minūtes",
      copy: "Individuāla nodarbība: ritma pamati, īsts komplekts un mūzika.",
      ribbon: null,
    },
    "4-lessons": {
      title: "Četri soļi ritmā",
      meta: "4 nodarbības · 50 minūtes",
      copy: "Četras individuālas nodarbības drošākam sākumam un prasmes nostiprināšanai.",
      ribbon: "Pārdošanas hits",
    },
  },
  expKicker: "Ko saņēmējs redzēs un sajutīs",
  expTitle: "Pirmā nodarbība — jau mūzika",
  expLead: "Profesionāls pasniedzējs palīdz sajust ritmu un pārliecību no pirmā sitiena.",
  expPunch: "Jau pirmajā nodarbībā — pamata ritms un dzīva emocija",
  expAlt: "DRUMSTARZ bundzinieks īstā skatuvē",
  experience: [
    { title: "Iepazīšanās ar komplektu", text: "Pasniedzējs pielāgo nodarbību cilvēkam." },
    { title: "Ritma pamati", text: "Pirmās kustības un vienkāršs pamata zīmējums." },
    { title: "Spēle zem mūzikas", text: "Ritms savienojas ar iemīļoto skaņdarbu." },
    { title: "Pirmais rezultāts", text: "No nodarbības cilvēks aiziet ar jaunu sajūtu par sevi." },
  ],
  stepsKicker: "Kā nopirkt dāvanu karti",
  stepsTitle: "Trīs soļi — un dāvana gatava",
  stepsLead: "Bez sarežģītas izvēles: izlemiet par nodarbību skaitu, pārējo precizēsim kopā.",
  stepsFor: "Draugam · Radiniekam · Kolēģim · Tam, kam jau viss ir",
  steps: [
    { title: "Izvēlieties karti", text: "1 nodarbība — 35 € vai 4 nodarbības — 115 €." },
    { title: "Atstājiet kontaktus", text: "Vārds, tālrunis un ērts saziņas veids." },
    { title: "Mēs visu precizēsim", text: "Sazināsimies un noformēsim dāvanu." },
  ],
  faqKicker: "BUJ",
  faqTitle: "Pirms dāvināt",
  faqLead: "Īsi atbildam uz to, kas parasti ir svarīgi pirms pirkuma.",
  faq: [
    { q: "Vai vajadzīga muzikāla pieredze?", a: "Nē. Nodarbība pielāgojas cilvēka līmenim, un pamata ritmu var pamēģināt jau pirmajā reizē." },
    { q: "Vai jānes savs instruments?", a: "Nē — savu komplektu nest nevajag. DRUMSTARZ RIGA nodarbībā viss jau ir gatavs." },
    { q: "Cik ilga ir viena nodarbība?", a: "Viena nodarbība ilgst 50 minūtes un notiek individuāli, viens pret vienu ar pasniedzēju." },
    { q: "Kam der dāvanu karte?", a: "Draugam, radiniekam, kolēģim — vai tam, kam jau viss ir un parastās dāvanas vairs nepārsteidz." },
    { q: "Kādi kartes varianti ir pieejami?", a: "Divi varianti: karte uz 1 nodarbību par 35 € vai uz 4 nodarbībām par 115 €." },
    { q: "Kā nopirkt karti?", a: "Izvēlieties variantu, atstājiet kontaktus formā zemāk — sazināsimies un noformēsim dāvanu." },
  ],
  cardKicker: "Dāvanu karte",
  cardTitle: "Ritms, kas paliek",
  cardLead: "Individuālas nodarbības DRUMSTARZ RIGA. Der iesācējiem — viss vajadzīgais ir studijā.",
  lesson1: "1 nodarbība",
  lesson4: "4 nodarbības",
  noExpChip: "Bez pieredzes",
  form: {
    kicker: "Dāvana jau gandrīz gatava",
    title: "Izvēlieties karti — mēs sazināsimies",
    lead: "Atstājiet kontaktus. Precizēsim detaļas un palīdzēsim noformēt dāvanu bez liekiem soļiem.",
    bullets: ["Individuāls formāts", "50 minūtes katra nodarbība", "Var bez pieredzes"],
    formKicker: "Pirkuma pieteikums",
    formTitle: "Kuru karti dāvinām?",
    formLead: "Izvēlieties variantu un atstājiet kontaktus.",
    planAria: "Dāvanu kartes variants",
    submit: "Nopirkt dāvanu karti",
    hint: "Sazināsimies, lai apstiprinātu variantu un precizētu noformējuma detaļas.",
  },
};

const ru: GiftcardCopy = {
  metaTitle: "Подарочная карта DRUMSTARZ — уроки игры на барабанах в подарок",
  metaDescription:
    "Подарочная карта DRUMSTARZ: индивидуальные уроки игры на барабанах в подарок. 1 урок — 35 €, 4 урока — 115 €. Опыт и своя установка не нужны.",
  heroKicker: "Подарочная карта · Drumstarz",
  heroTitle: "Дари не вещь. Дари ритм.",
  heroLead: "Необычный подарок для друга, родственника или коллеги — индивидуальные уроки игры на барабанах.",
  choose: "Выбрать карту",
  pricesLine: "1 урок · 35 € / 4 урока · 115 €",
  noExperience: "Опыт и своя установка не нужны",
  certAlt: "Настоящая подарочная карта DRUMSTARZ на одно занятие",
  emotionKicker: "Не просто сертификат",
  emotionTitle: "Подарок, который звучит",
  emotionLead:
    "Получатель садится за настоящую барабанную установку, знакомится с основами и уже на первом занятии собирает свой первый ритм.",
  emotionPunch: "Эмоции + новый навык вместо ещё одной вещи",
  emotionAlt: "Барабанщик DRUMSTARZ во время живого выступления",
  lessonBadge: "50 мин",
  lessonNote: "Индивидуальный урок",
  pricingKicker: "Цены на подарочную карту",
  pricingTitle: "Выберите ритм подарка",
  pricingLead: "Один яркий опыт или четыре занятия, чтобы войти в ритм увереннее.",
  order: "Заказать карту",
  plans: {
    "1-lesson": {
      title: "Первый ритм",
      meta: "1 урок · 50 минут",
      copy: "Индивидуальный урок: основы ритма, настоящая установка и музыка.",
      ribbon: null,
    },
    "4-lessons": {
      title: "Четыре шага в ритм",
      meta: "4 урока · 50 минут",
      copy: "Четыре индивидуальных занятия для более уверенного старта и закрепления навыка.",
      ribbon: "Хит продаж",
    },
  },
  expKicker: "Что получатель увидит и почувствует",
  expTitle: "Первый урок — уже музыка",
  expLead: "Профессиональный преподаватель помогает почувствовать ритм и уверенность с первого удара.",
  expPunch: "Уже на первом занятии — базовый ритм и живая эмоция",
  expAlt: "Барабанщик DRUMSTARZ на настоящей сцене",
  experience: [
    { title: "Знакомство с установкой", text: "Преподаватель настраивает занятие под человека." },
    { title: "Основы ритма", text: "Первые движения и простой базовый рисунок." },
    { title: "Игра под музыку", text: "Ритм соединяется с любимым музыкальным треком." },
    { title: "Первый результат", text: "С занятия человек уходит с новым ощущением себя." },
  ],
  stepsKicker: "Как купить подарочную карту",
  stepsTitle: "Три шага — и подарок готов",
  stepsLead: "Без сложного выбора: определитесь с количеством уроков, остальное уточним вместе.",
  stepsFor: "Другу · Родственнику · Коллеге · Тому, у кого уже всё есть",
  steps: [
    { title: "Выберите карту", text: "1 урок — 35 € или 4 урока — 115 €." },
    { title: "Оставьте контакты", text: "Имя, телефон и удобный способ связи." },
    { title: "Мы всё уточним", text: "Свяжемся с вами и оформим подарок." },
  ],
  faqKicker: "Чаво",
  faqTitle: "Перед тем, как подарить",
  faqLead: "Коротко отвечаем на то, что обычно важно перед покупкой.",
  faq: [
    { q: "Нужен ли музыкальный опыт?", a: "Нет. Занятие подстраивается под уровень человека, а базовый ритм можно попробовать уже на первом уроке." },
    { q: "Нужно ли приносить свой инструмент?", a: "Нет, свою установку приносить не нужно — на уроке в DRUMSTARZ RIGA всё уже готово." },
    { q: "Сколько длится один урок?", a: "Одно занятие длится 50 минут и проходит индивидуально, один на один с преподавателем." },
    { q: "Для кого подходит подарочная карта?", a: "Подойдёт другу, родственнику, коллеге — или тому, у кого уже всё есть и обычные подарки не удивляют." },
    { q: "Какие варианты карты доступны?", a: "Два варианта: карта на 1 урок за 35 € или на 4 урока за 115 €." },
    { q: "Как купить карту?", a: "Выберите вариант карты, оставьте контакты в форме ниже — мы свяжемся и оформим подарок." },
  ],
  cardKicker: "Подарочная карта",
  cardTitle: "Ритм, который остаётся",
  cardLead: "Индивидуальные занятия в DRUMSTARZ RIGA. Подходит новичкам — всё необходимое есть в студии.",
  lesson1: "1 урок",
  lesson4: "4 урока",
  noExpChip: "Без опыта",
  form: {
    kicker: "Подарок уже почти готов",
    title: "Выберите карту — мы свяжемся",
    lead: "Оставьте контакты. Уточним детали и поможем оформить подарок без лишних шагов.",
    bullets: ["Индивидуальный формат", "50 минут каждый урок", "Можно без опыта"],
    formKicker: "Заявка на покупку",
    formTitle: "Какую карту дарим?",
    formLead: "Выберите вариант и оставьте контакты.",
    planAria: "Вариант подарочной карты",
    submit: "Купить подарочную карту",
    hint: "Мы свяжемся, чтобы подтвердить вариант и уточнить детали оформления.",
  },
};

const en: GiftcardCopy = {
  metaTitle: "DRUMSTARZ gift card — drum lessons as a gift",
  metaDescription:
    "A DRUMSTARZ gift card: private drum lessons as a present. 1 lesson — 35 €, 4 lessons — 115 €. No experience or own kit needed.",
  heroKicker: "Gift card · Drumstarz",
  heroTitle: "Don’t gift a thing. Gift a groove.",
  heroLead: "An unusual gift for a friend, relative or colleague — private drum lessons.",
  choose: "Choose a card",
  pricesLine: "1 lesson · 35 € / 4 lessons · 115 €",
  noExperience: "No experience or own kit needed",
  certAlt: "A real DRUMSTARZ gift card for one lesson",
  emotionKicker: "Not just a certificate",
  emotionTitle: "A gift that sounds",
  emotionLead:
    "The recipient sits at a real drum kit, learns the basics and already on the first lesson builds their first groove.",
  emotionPunch: "Emotion + a new skill instead of yet another thing",
  emotionAlt: "A DRUMSTARZ drummer during a live performance",
  lessonBadge: "50 min",
  lessonNote: "Private lesson",
  pricingKicker: "Gift card prices",
  pricingTitle: "Pick the gift’s groove",
  pricingLead: "One bright experience or four lessons to settle into the rhythm with more confidence.",
  order: "Order a card",
  plans: {
    "1-lesson": {
      title: "First groove",
      meta: "1 lesson · 50 minutes",
      copy: "A private lesson: rhythm basics, a real kit and music.",
      ribbon: null,
    },
    "4-lessons": {
      title: "Four steps into rhythm",
      meta: "4 lessons · 50 minutes",
      copy: "Four private lessons for a more confident start and to lock the skill in.",
      ribbon: "Best seller",
    },
  },
  expKicker: "What the recipient will see and feel",
  expTitle: "The first lesson is already music",
  expLead: "A professional teacher helps them feel the groove and the confidence from the first hit.",
  expPunch: "Already on the first lesson — a basic groove and a live emotion",
  expAlt: "A DRUMSTARZ drummer on a real stage",
  experience: [
    { title: "Meeting the kit", text: "The teacher shapes the lesson around the person." },
    { title: "Rhythm basics", text: "First movements and a simple core pattern." },
    { title: "Playing to music", text: "The groove locks to a favourite track." },
    { title: "A first result", text: "They leave the lesson with a new sense of themselves." },
  ],
  stepsKicker: "How to buy a gift card",
  stepsTitle: "Three steps — and the gift is ready",
  stepsLead: "No complicated choice: pick the number of lessons, we’ll confirm the rest together.",
  stepsFor: "A friend · A relative · A colleague · Someone who already has everything",
  steps: [
    { title: "Choose a card", text: "1 lesson — 35 € or 4 lessons — 115 €." },
    { title: "Leave your contacts", text: "Name, phone and a convenient way to reach you." },
    { title: "We’ll confirm everything", text: "We’ll get in touch and arrange the gift." },
  ],
  faqKicker: "FAQ",
  faqTitle: "Before you gift it",
  faqLead: "Short answers to what usually matters before buying.",
  faq: [
    { q: "Do they need musical experience?", a: "No. The lesson adapts to their level, and a basic groove can be tried on the first lesson." },
    { q: "Do they need to bring an instrument?", a: "No — they don’t need their own kit. At a DRUMSTARZ RIGA lesson everything is ready." },
    { q: "How long is one lesson?", a: "One lesson is 50 minutes and is private, one-to-one with a teacher." },
    { q: "Who is the gift card for?", a: "A friend, relative, colleague — or someone who already has everything and ordinary gifts don’t surprise." },
    { q: "Which card options are available?", a: "Two options: a card for 1 lesson at 35 € or for 4 lessons at 115 €." },
    { q: "How do I buy a card?", a: "Pick an option, leave your contacts in the form below — we’ll get in touch and arrange the gift." },
  ],
  cardKicker: "Gift card",
  cardTitle: "A groove that stays",
  cardLead: "Private lessons at DRUMSTARZ RIGA. Works for beginners — everything you need is in the studio.",
  lesson1: "1 lesson",
  lesson4: "4 lessons",
  noExpChip: "No experience needed",
  form: {
    kicker: "The gift is almost ready",
    title: "Pick a card — we’ll get in touch",
    lead: "Leave your contacts. We’ll confirm the details and help arrange the gift without extra steps.",
    bullets: ["Private format", "50 minutes each lesson", "No experience needed"],
    formKicker: "Purchase request",
    formTitle: "Which card are we gifting?",
    formLead: "Pick an option and leave your contacts.",
    planAria: "Gift card option",
    submit: "Buy a gift card",
    hint: "We’ll get in touch to confirm the option and the details.",
  },
};

export const GIFTCARD: Record<Locale, GiftcardCopy> = { lv, ru, en };
