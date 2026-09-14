import type { Locale } from "../i18n/locales";

type Step = { time: string; title: string; text: string };
type Block = { title: string; text: string };

export type KidsCopy = {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  cardAria: string;
  cardKicker: string;
  durationNote: string;
  perGuest: string;
  minimum: string;
  guests: string;
  guestsValue: string;
  tags: readonly [string, string, string];
  book: string;
  conceptKicker: string;
  conceptTitle: string;
  conceptP1: string;
  conceptP2: string;
  conceptPunch: string;
  conceptAlt: string;
  programKicker: string;
  programTitle: string;
  programClose: string;
  program: readonly [Step, Step, Step, Step];
  priceKicker: string;
  priceTitle: string;
  priceLead: string;
  perGuestShort: string;
  chips: readonly [string, string];
  pickDate: string;
  includedKicker: string;
  included: readonly [Block, Block, Block];
  includedMeta: string;
  whyKicker: string;
  whyTitle: string;
  whyMeta: string;
  why: readonly [Block, Block, Block, Block, Block];
  whyAlt: string;
  galleryKicker: string;
  galleryTitle: string;
  galleryLead: string;
  alts: string[];
  form: {
    kicker: string;
    title: string;
    lead: string;
    reply: string;
    steps: readonly [Block, Block, Block];
    meta: string;
    formTitle: string;
    formLead: string;
    hint: string;
  };
};

const lv: KidsCopy = {
  metaTitle: "Bērnu ballīte pie bungu komplekta — DRUMSTARZ",
  metaDescription:
    "Bērnu dzimšanas diena īstā DRUMSTARZ skatuvē Rīgā: 2,5 stundas ar profesionālu bundzinieku, skatuve, instrumenti un cienasts iekļauti. Pieraksts uz bezmaksas konsultāciju.",
  heroKicker: "Drum Kids · Dzimšanas diena",
  heroTitle: "Bērnu ballīte pie bungu komplekta",
  heroLead: "Pirmo reizi pilsētā: īsts andergraunds bērniem un svētki profesionālā skatuvē.",
  cardAria: "Ballītes nosacījumi",
  cardKicker: "Ballīte zem atslēgas",
  durationNote: "No viesu sagaidīšanas līdz tortei un noslēguma foto.",
  perGuest: "/ Viesis",
  minimum: "Minimums",
  guests: "Viesi",
  guestsValue: "Līdz 20",
  tags: ["Skatuve", "Ritms", "Draugi"],
  book: "Rezervēt datumu",
  conceptKicker: "Īsta muzikāla pieredze",
  conceptTitle: "Bērns — galvenā zvaigzne",
  conceptP1: "Īstā skatuvē bērns kļūst par bundzinieku un veido ritma pavadījumu iemīļotajai dziesmai.",
  conceptP2:
    "Svētkus vada profesionāli mūziķi-bundzinieki. Īpaša sagatavotība nav vajadzīga: bungas atsaucas uzreiz, un pirmais pārliecinātais ritms sanāk jau programmas sākumā.",
  conceptPunch: "Iemīļotā dziesma + īstas bungas",
  conceptAlt: "Bērni spēlē bungas DRUMSTARZ skatuvē",
  programKicker: "2,5 stundas vienā ritmā",
  programTitle: "Kā norit ballīte",
  programClose: "Var atnākt bez pieredzes — instrumenti un programma jau ir gatavi.",
  program: [
    { time: "15 min", title: "Viesu sagaidīšana", text: "Tiekamies, iepazīstam studiju un noskaņojamies uz kopīgu ritmu." },
    { time: "90 min", title: "Bungu programma", text: "Profesionāls bundzinieks vada programmu īstā skatuvē." },
    { time: "30 min", title: "Torte un cienasts", text: "Pārtraukums pie lielā galda. Blakus ir virtuve cienasta sagatavošanai." },
    { time: "15 min", title: "Fināls un izeja", text: "Kopīgas fotogrāfijas, pēdējie akcenti un mierīgs noslēgums." },
  ],
  priceKicker: "Vienkārša un caurspīdīga cena",
  priceTitle: "Viss ballītei",
  priceLead: "Viena saprotama cena — bez slēptām piemaksām par skatuvi, instrumentiem vai mūziķa darbu.",
  perGuestShort: "/ Viesis",
  chips: ["2,5 stundas zem atslēgas", "Bez piemaksām"],
  pickDate: "Jums paliek izvēlēties datumu un savākt draugus.",
  includedKicker: "Ballītē jau iekļauts",
  included: [
    { title: "Skatuve un instrumenti", text: "Īsts komplekts un studijas skaņa." },
    { title: "90 minūtes ar mūziķi", text: "Vadītājs tur tempu un iesaista viesus." },
    { title: "Virtuve + liels galds", text: "Tortei, dzērieniem un cienastam." },
  ],
  includedMeta: "Minimums 300 € · Līdz 20 viesiem · Ērta atrašanās vieta · Bezmaksas stāvvieta",
  whyKicker: "Ne tikai skaļi — patiesi noderīgi",
  whyTitle: "Kāpēc bērniem tas patīk",
  whyMeta: "05 iemesli · viens kopīgs ritms",
  why: [
    { title: "Izlādē enerģiju", text: "Bungas palīdz noņemt spriedzi, izlaist emocijas un ātri uzlabot noskaņojumu." },
    { title: "Dzird mūziku visā", text: "Pat parasti priekšmeti kļūst par ritma avotu un jaunām idejām." },
    { title: "Gribas kustēties", text: "Dzīvs ritms savāc kompāniju un dabiski liek visiem dejot." },
    { title: "Spēlē gandrīz visur", text: "Nav vajadzīgas rozetes un sarežģīta tehnika — pietiek ar paliktņiem, virsmu un iztēli." },
    { title: "Rokas, kājas un smadzenes", text: "Komplekts iesaista četras ekstremitātes un palīdz ieslēgt abas smadzeņu puslodes." },
  ],
  whyAlt: "Bērni ar bungu paliktņiem gatavojas uzstāšanās",
  galleryKicker: "Kā tas izskatās",
  galleryTitle: "Īsta skatuve. Īstas emocijas.",
  galleryLead: "Bez iestudētām dekorācijām — bērni, mūzika un mirklis, ko gribās pārskatīt.",
  alts: [
    "Trīs bērni ar mazajām bungām DRUMSTARZ skatuvē",
    "Bērni un vadītājs kopā spēlē pie bungu komplekta",
    "Vadītājs palīdz meitenei pie bungu komplekta",
    "Zēns spēlē bungu komplektu",
    "Zēns pie bungu komplekta studijā",
  ],
  form: {
    kicker: "Atlicis viens solis",
    title: "Jūs izvēlaties datumu — mēs saliekam ballīti",
    lead: "Atstājiet kontaktus — pārbaudīsim brīvo laiku, precizēsim detaļas un palīdzēsim sagatavoties bez liekas steigas.",
    reply: "Parasti atbildam un apstiprinām detaļas personīgi.",
    steps: [
      { title: "Atstājiet kontaktus", text: "Vārds un ērts saziņas veids." },
      { title: "Mēs pārbaudīsim datumu", text: "Un uzreiz precizēsim visas detaļas." },
      { title: "Nāciet svinēt", text: "Skatuve un programma jau gatavas." },
    ],
    meta: "30 € / viesis · Līdz 20 viesiem · 2,5 stundas",
    formTitle: "Pieteikums ballītei",
    formLead: "Izvēlieties datumu — pārējās detaļas precizēsim kopā.",
    hint: "Sazināsimies, pārbaudīsim datumu un apstiprināsim rezervāciju.",
  },
};

const ru: KidsCopy = {
  metaTitle: "Детский праздник у барабанной установки — DRUMSTARZ",
  metaDescription:
    "Детский день рождения на настоящей сцене DRUMSTARZ в Риге: 2,5 часа с профессиональным барабанщиком, сцена, инструменты и угощения включены. Запись на бесплатную консультацию.",
  heroKicker: "Drum Kids · День рождения",
  heroTitle: "Детский праздник за барабанной установкой",
  heroLead: "Впервые в городе: настоящий андерграунд для детей и праздник на профессиональной сцене.",
  cardAria: "Условия праздника",
  cardKicker: "Праздник под ключ",
  durationNote: "От встречи гостей до торта и финальных фото.",
  perGuest: "/ Гость",
  minimum: "Минимум",
  guests: "Гостей",
  guestsValue: "До 20",
  tags: ["Сцена", "Ритм", "Друзья"],
  book: "Забронировать дату",
  conceptKicker: "Настоящий музыкальный опыт",
  conceptTitle: "Ребёнок — главная звезда",
  conceptP1: "На настоящей сцене ребёнок становится барабанщиком и создаёт ритмическое сопровождение к любимой песне.",
  conceptP2:
    "Праздник ведут профессиональные музыканты-барабанщики. Специальная подготовка не нужна: барабаны откликаются сразу, а первый уверенный ритм получается уже в начале программы.",
  conceptPunch: "Любимая песня + настоящие барабаны",
  conceptAlt: "Дети играют на барабанной установке на сцене DRUMSTARZ",
  programKicker: "2,5 часа в одном ритме",
  programTitle: "Как проходит праздник",
  programClose: "Можно прийти без опыта — инструменты и программа уже готовы.",
  program: [
    { time: "15 мин", title: "Сбор гостей", text: "Встречаемся, знакомимся со студией и настраиваемся на общий ритм." },
    { time: "90 мин", title: "Барабанная программа", text: "Профессиональный барабанщик ведёт программу на настоящей сцене." },
    { time: "30 мин", title: "Торт и угощения", text: "Перерыв за большим столом. Рядом есть кухня для подготовки угощений." },
    { time: "15 мин", title: "Финал и выход", text: "Общие фото, последние акценты и спокойное завершение праздника." },
  ],
  priceKicker: "Простая и прозрачная цена",
  priceTitle: "Всё для праздника",
  priceLead: "Одна понятная стоимость — без скрытых доплат за сцену, инструменты или работу музыканта.",
  perGuestShort: "/ Гость",
  chips: ["2,5 часа под ключ", "Без доплат"],
  pickDate: "Вам остаётся выбрать дату и собрать друзей.",
  includedKicker: "В праздник уже включено",
  included: [
    { title: "Сцена и инструменты", text: "Настоящая установка и студийный звук." },
    { title: "90 минут с музыкантом", text: "Ведущий держит темп и вовлекает гостей." },
    { title: "Кухня + большой стол", text: "Для торта, напитков и угощений." },
  ],
  includedMeta: "Минимум 300 € · До 20 гостей · Удобное расположение · Бесплатная парковка",
  whyKicker: "Не просто громко — по-настоящему полезно",
  whyTitle: "Почему детям это нравится",
  whyMeta: "05 причин · один общий ритм",
  why: [
    { title: "Выпускают энергию", text: "Барабаны помогают снять напряжение, выплеснуть эмоции и быстро улучшить настроение." },
    { title: "Слышат музыку во всём", text: "Даже обычные предметы превращаются в источник ритма и новых идей." },
    { title: "Хочется двигаться", text: "Живой ритм собирает компанию и естественно заставляет всех танцевать." },
    { title: "Играют почти везде", text: "Не нужны розетки и сложная техника — достаточно палочек, поверхности и фантазии." },
    { title: "Руки, ноги и мозг", text: "Установка задействует четыре конечности и помогает включать оба полушария мозга." },
  ],
  whyAlt: "Дети с барабанными палочками готовятся к выступлению",
  galleryKicker: "Как это выглядит",
  galleryTitle: "Настоящая сцена. Настоящие эмоции.",
  galleryLead: "Без постановочных декораций — дети, музыка и момент, который хочется пересматривать.",
  alts: [
    "Трое детей с малыми барабанами на сцене DRUMSTARZ",
    "Дети и ведущий играют вместе на барабанной установке",
    "Ведущий помогает девочке за барабанной установкой",
    "Мальчик играет на барабанной установке",
    "Мальчик за барабанной установкой в студии",
  ],
  form: {
    kicker: "Остался один шаг",
    title: "Вы выбираете дату — мы собираем праздник",
    lead: "Оставьте контакты — мы проверим свободное время, уточним детали и поможем подготовиться без лишней суеты.",
    reply: "Обычно отвечаем и подтверждаем детали лично.",
    steps: [
      { title: "Оставьте контакты", text: "Имя и удобный способ связи." },
      { title: "Мы проверим дату", text: "И сразу уточним все детали." },
      { title: "Приходите праздновать", text: "Сцена и программа уже готовы." },
    ],
    meta: "30 € / гость · До 20 гостей · 2,5 часа",
    formTitle: "Заявка на праздник",
    formLead: "Выберите дату — остальные детали мы уточним вместе.",
    hint: "Мы свяжемся, проверим дату и подтвердим бронирование.",
  },
};

const en: KidsCopy = {
  metaTitle: "Kids party at the drum kit — DRUMSTARZ",
  metaDescription:
    "A kids birthday on a real DRUMSTARZ stage in Riga: 2.5 hours with a professional drummer, stage, instruments and treats included. Book a free consultation.",
  heroKicker: "Drum Kids · Birthday",
  heroTitle: "A kids party at the drum kit",
  heroLead: "A first in the city: real underground energy for kids and a party on a professional stage.",
  cardAria: "Party details",
  cardKicker: "A turnkey party",
  durationNote: "From meeting the guests to the cake and final photos.",
  perGuest: "/ Guest",
  minimum: "Minimum",
  guests: "Guests",
  guestsValue: "Up to 20",
  tags: ["Stage", "Rhythm", "Friends"],
  book: "Book a date",
  conceptKicker: "A real musical experience",
  conceptTitle: "The child is the star",
  conceptP1: "On a real stage the child becomes a drummer and builds a groove for their favourite song.",
  conceptP2:
    "Professional drummer-musicians host the party. No special prep needed: the drums answer at once, and the first confident groove arrives early in the programme.",
  conceptPunch: "A favourite song + real drums",
  conceptAlt: "Kids playing drums on the DRUMSTARZ stage",
  programKicker: "2.5 hours in one groove",
  programTitle: "How the party goes",
  programClose: "You can come with no experience — the instruments and programme are ready.",
  program: [
    { time: "15 min", title: "Guest arrival", text: "We meet, get to know the studio and lock into a shared groove." },
    { time: "90 min", title: "Drum programme", text: "A professional drummer runs the show on a real stage." },
    { time: "30 min", title: "Cake and treats", text: "A break at the big table. There’s a kitchen nearby for the treats." },
    { time: "15 min", title: "Finale and goodbye", text: "Group photos, last accents and a calm ending." },
  ],
  priceKicker: "A simple, transparent price",
  priceTitle: "Everything for the party",
  priceLead: "One clear cost — no hidden extras for the stage, instruments or the musician.",
  perGuestShort: "/ Guest",
  chips: ["2.5 hours turnkey", "No extras"],
  pickDate: "You pick the date and gather the friends.",
  includedKicker: "Already included",
  included: [
    { title: "Stage and instruments", text: "A real kit and studio sound." },
    { title: "90 minutes with a musician", text: "The host keeps the pace and pulls guests in." },
    { title: "Kitchen + a big table", text: "For cake, drinks and treats." },
  ],
  includedMeta: "Minimum 300 € · Up to 20 guests · Convenient location · Free parking",
  whyKicker: "Not just loud — actually good for them",
  whyTitle: "Why kids love it",
  whyMeta: "05 reasons · one shared groove",
  why: [
    { title: "They release energy", text: "Drums help drop tension, let emotions out and lift the mood fast." },
    { title: "They hear music everywhere", text: "Even ordinary objects become a source of rhythm and new ideas." },
    { title: "They want to move", text: "A live groove gathers the group and naturally makes everyone dance." },
    { title: "They can play almost anywhere", text: "No sockets or complex gear — sticks, a surface and imagination are enough." },
    { title: "Hands, feet and brain", text: "The kit uses all four limbs and helps both sides of the brain work together." },
  ],
  whyAlt: "Kids with drumsticks getting ready to perform",
  galleryKicker: "How it looks",
  galleryTitle: "A real stage. Real emotions.",
  galleryLead: "No staged décor — kids, music and a moment you’ll want to rewatch.",
  alts: [
    "Three kids with small drums on the DRUMSTARZ stage",
    "Kids and the host playing together at the drum kit",
    "The host helping a girl at the drum kit",
    "A boy playing a drum kit",
    "A boy at the drum kit in the studio",
  ],
  form: {
    kicker: "One step left",
    title: "You pick the date — we build the party",
    lead: "Leave your contacts — we’ll check availability, confirm the details and help you get ready without the fuss.",
    reply: "We usually reply and confirm the details in person.",
    steps: [
      { title: "Leave your contacts", text: "A name and a convenient way to reach you." },
      { title: "We’ll check the date", text: "And confirm every detail right away." },
      { title: "Come celebrate", text: "The stage and programme are ready." },
    ],
    meta: "30 € / guest · Up to 20 guests · 2.5 hours",
    formTitle: "Party request",
    formLead: "Pick a date — we’ll confirm the rest together.",
    hint: "We’ll get in touch, check the date and confirm the booking.",
  },
};

export const KIDS: Record<Locale, KidsCopy> = { lv, ru, en };
