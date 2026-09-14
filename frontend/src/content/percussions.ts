import type { Locale } from "../i18n/locales";

type Block = { title: string; text: string };
type Faq = { q: string; a: string };
type Plan = { meta: string; ribbon: string | null };

export type PercussionsCopy = {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  ctaFree: string;
  plansTitle: string;
  plansLead: string;
  perLesson: string;
  book: string;
  introKicker: string;
  introTitle: string;
  introLead: string;
  introAlt: string;
  firstFree: string;
  firstFreeLead: string;
  instrumentsKicker: string;
  instrumentsTitle: string;
  instrumentsLead: string;
  instruments: readonly [string, string, string, string, string];
  ensembleAlt: string;
  galleryTitle: string;
  whyTitle: string;
  why: readonly [Block, Block, Block, Block, Block, Block];
  scheduleKicker: string;
  scheduleTitle: string;
  duration: string;
  durationValue: string;
  address: string;
  parking: string;
  mapCta: string;
  switchOff: string;
  faqTitle: string;
  faq: readonly [Faq, Faq, Faq, Faq, Faq, Faq];
  cardTitle: string;
  cardLines: readonly [string, string, string];
  ctaFreeShort: string;
  alts: string[];
  formTitle: string;
  dayLabel: string;
  dayPlaceholder: string;
  experience: string;
  submit: string;
  days: readonly [{ value: string; label: string }, { value: string; label: string }, { value: string; label: string }, { value: string; label: string }, { value: string; label: string }];
  plans: readonly [Plan, Plan, Plan, Plan];
};

const lv: PercussionsCopy = {
  metaTitle: "Grupu nodarbības perkusijā — DRUMSTARZ bungu skola Rīgā",
  metaDescription:
    "Grupu nodarbības perkusijā Rīgā — 90 minūtes, spēlēt djembe, kongas, kahonu un šekerus kopā, bez muzikālas pieredzes. Pirmā nodarbība bez maksas.",
  heroKicker: "Grupu nodarbības · 90 minūtes",
  heroTitle: "Jaunais trends! Grupu nodarbības perkusijā",
  heroLead: "Jau pirmajā nodarbībā visi dalībnieki kopā spēlē vienkāršu ritmu. Pat bez muzikālas pieredzes.",
  ctaFree: "Pierakstīties uz bezmaksas nodarbību",
  plansTitle: "Abonementi",
  plansLead: "Nodarbības pa 90 minūtēm · pirmā nodarbība bez maksas",
  perLesson: "/ nodarbība",
  book: "Pierakstīties",
  introKicker: "Perkusija — no nulles",
  introTitle: "Viens ritms — vesela grupa",
  introLead:
    "Djembe, kongas, kahons un šekeri — četri dažādi instrumenti, viens kopīgs ritms. Grupa mācās klausīties vienam otru un turēt tempu kopā, tāpēc rezultāts jūtams jau pirmajā nodarbībā: vienkāršs ritma zīmējums savācas no katra dalībnieka ieguldījuma, neatkarīgi no tā, vai viņš kādreiz ir turējis kaut vienu perkusijas instrumentu.",
  introAlt: "Grupa spēlē djembe aplī",
  firstFree: "Pirmā nodarbība — bez maksas",
  firstFreeLead: "Īpaša sagatavotība un savs instruments nav vajadzīgi — viss nepieciešamais jau ir studijā.",
  instrumentsKicker: "Nodarbībā",
  instrumentsTitle: "Izmēģiniet 5+ instrumentus",
  instrumentsLead:
    "Vienā nodarbībā grupa paspēj iziet cauri vairākiem dažādiem perkusijas instrumentiem — no basa djembe līdz skanīgiem šekeriem. Katrs atrod skanējumu, kas atsaucas tieši viņam, un instruktor palīdz ar pamatiem spēles gaitā.",
  instruments: ["Djembe", "Kongas", "Kahons", "Šekeri", "Citas perkusijas"],
  ensembleAlt: "Ansamblis spēlē djembe un kongas",
  galleryTitle: "No nodarbībām",
  whyTitle: "Kāpēc vērts pamēģināt",
  why: [
    { title: "90 minūtes", text: "Vienas nodarbības ilgums — pietiek, lai iesildītos, izjauktu ritmu un nospēlētu to kopā ar grupu." },
    { title: "Bez pieredzes", text: "Muzikāla sagatavotība nav vajadzīga — jau pirmajā nodarbībā visa grupa spēlē vienkāršu ritmu kopā." },
    { title: "Jebkurā brīdī", text: "Grupai var pievienoties jebkurā laikā, negaidot jauna plūsmas sākumu." },
    { title: "Viss uz vietas", text: "Djembe, kongas, kahons un šekeri jau gaida studijā — savu instrumentu nest nevajag." },
    { title: "Grupas enerģija", text: "Kopīga spēle uzlādē stiprāk nekā nodarbība vienatnē — ritmu tur visa grupa." },
    { title: "Rīgas centrs", text: "Studija Tērbatas ielā 76 — viegli aizbraukt pēc darba vai mācībām." },
  ],
  scheduleKicker: "Grafiks",
  scheduleTitle: "Darbadienas · 20:00",
  duration: "Ilgums",
  durationValue: "90 minūtes",
  address: "Adrese",
  parking: "Blakus studijai ir bezmaksas stāvvieta — C zona.",
  mapCta: "Skatīt kartē",
  switchOff: "Lielisks veids, kā pārslēgties pēc darba vai mācībām",
  faqTitle: "Biežākie jautājumi",
  faq: [
    { q: "Vai vajadzīga muzikāla pieredze?", a: "Nē. Jau pirmajā nodarbībā visa grupa kopā spēlē vienkāršu ritmu — īpaša muzikāla sagatavotība nav vajadzīga." },
    { q: "Vai vajadzīgs savs instruments?", a: "Nē, instrumentu līdzi ņemt nevajag — djembe, kongas, kahons un šekeri jau ir studijā." },
    { q: "Cik ilga ir nodarbība?", a: "Viena nodarbība ilgst 90 minūtes." },
    { q: "Vai var pievienoties vēlāk?", a: "Jā, grupai var pievienoties jebkurā brīdī, negaidot jauna plūsmas sākumu." },
    { q: "Kur un kad notiek nodarbības?", a: "Darbadienās plkst. 20:00, Rīga, Tērbatas iela 76." },
    { q: "Vai pirmā nodarbība ir bez maksas?", a: "Jā, pirmo nodarbību var pamēģināt bez maksas." },
  ],
  cardTitle: "Pirmā nodarbība — bez maksas",
  cardLines: ["90 minūtes grupā", "Instruments nav vajadzīgs", "Darbadienas, 20:00 · Tērbatas iela 76"],
  ctaFreeShort: "Pierakstīties bez maksas",
  alts: [
    "Dalībnieks ar tamburīnu perkusijas nodarbībā",
    "Instruktors vada grupas nodarbību",
    "Rokas uz djembe",
    "Perkusijas nodarbības dalībniece",
    "Šekeris nodarbībā",
  ],
  formTitle: "Pierakstīties uz bezmaksas nodarbību",
  dayLabel: "Ērta diena",
  dayPlaceholder: "Ērta diena",
  experience: "Pieredze un vēlmes",
  submit: "Pierakstīties bez maksas",
  days: [
    { value: "monday", label: "Pirmdiena" },
    { value: "tuesday", label: "Otrdiena" },
    { value: "wednesday", label: "Trešdiena" },
    { value: "thursday", label: "Ceturtdiena" },
    { value: "friday", label: "Piektdiena" },
  ],
  plans: [
    { meta: "1 nodarbība", ribbon: null },
    { meta: "95 € / 4 nodarbības", ribbon: null },
    { meta: "245 € / 12 nodarbības", ribbon: "Pārdošanas hits" },
    { meta: "450 € / 24 nodarbības", ribbon: "Labākā cena" },
  ],
};

const ru: PercussionsCopy = {
  metaTitle: "Групповые занятия по перкуссии — DRUMSTARZ школа барабанов в Риге",
  metaDescription:
    "Групповые занятия по перкуссии в Риге — 90 минут, играть на джембе, конгах, кахоне и шейкерах вместе, без музыкального опыта. Первое занятие бесплатно.",
  heroKicker: "Групповые занятия · 90 минут",
  heroTitle: "Новый тренд! Групповые занятия по перкуссии",
  heroLead: "Уже на первом занятии все участники играют вместе простой ритм. Даже без музыкального опыта.",
  ctaFree: "Записаться на бесплатный урок",
  plansTitle: "Абонементы",
  plansLead: "Занятия по 90 минут · первый урок бесплатно",
  perLesson: "/ урок",
  book: "Записаться",
  introKicker: "Перкуссия — с нуля",
  introTitle: "Один ритм — целая группа",
  introLead:
    "Джембе, конги, кахон и шейкеры — четыре разных инструмента, один общий ритм. Группа учится слушать друг друга и держать темп вместе, поэтому результат чувствуется уже на первом занятии: простой ритм-рисунок собирается из вклада каждого участника, независимо от того, держал ли он раньше в руках хоть один перкуссионный инструмент.",
  introAlt: "Группа играет на джембе в кругу",
  firstFree: "Первый урок — бесплатно",
  firstFreeLead: "Специальная подготовка и свой инструмент не нужны — всё необходимое уже есть в студии.",
  instrumentsKicker: "На занятии",
  instrumentsTitle: "Попробуйте 5+ инструментов",
  instrumentsLead:
    "За одно занятие группа успевает пройти через несколько разных перкуссионных инструментов — от басового джембе до звонких шейкеров. Каждый находит звук, который отзывается лично ему, а инструктор подсказывает основы по ходу игры.",
  instruments: ["Джембе", "Конги", "Кахон", "Шейкеры", "Другие перкуссионные"],
  ensembleAlt: "Ансамбль играет на джембе и конгах",
  galleryTitle: "С занятий",
  whyTitle: "Почему стоит попробовать",
  why: [
    { title: "90 минут", text: "Длительность одного занятия — достаточно, чтобы разогреться, разобрать ритм и сыграть его вместе с группой." },
    { title: "Без опыта", text: "Музыкальная подготовка не нужна — уже на первом занятии вся группа играет простой ритм вместе." },
    { title: "В любой момент", text: "Можно присоединиться к группе в любое время, не дожидаясь начала нового потока." },
    { title: "Всё на месте", text: "Джембе, конги, кахон и шейкеры уже ждут в студии — свой инструмент приносить не нужно." },
    { title: "Энергия группы", text: "Совместная игра заряжает энергией сильнее, чем занятие в одиночку — ритм держит вся группа." },
    { title: "Центр Риги", text: "Студия на Tērbatas iela 76 — легко добраться после работы или учёбы." },
  ],
  scheduleKicker: "Расписание",
  scheduleTitle: "Будни · 20:00",
  duration: "Длительность",
  durationValue: "90 минут",
  address: "Адрес",
  parking: "Рядом со студией есть бесплатная парковка — зона C.",
  mapCta: "Посмотреть на карте",
  switchOff: "Отличный способ переключиться после работы или учёбы",
  faqTitle: "Частые вопросы",
  faq: [
    { q: "Нужен ли музыкальный опыт?", a: "Нет. Уже на первом занятии вся группа играет вместе простой ритм — специальная музыкальная подготовка не нужна." },
    { q: "Нужен ли свой инструмент?", a: "Нет, брать инструмент с собой не нужно — джембе, конги, кахон и шейкеры уже есть в студии." },
    { q: "Сколько длится занятие?", a: "Одно занятие длится 90 минут." },
    { q: "Можно ли присоединиться позже?", a: "Да, к группе можно присоединиться в любой момент, не дожидаясь начала нового потока." },
    { q: "Где и когда проходят занятия?", a: "По будням в 20:00, по адресу Rīga, Tērbatas iela 76." },
    { q: "Первое занятие бесплатно?", a: "Да, первое занятие можно попробовать бесплатно." },
  ],
  cardTitle: "Первое занятие — бесплатно",
  cardLines: ["90 минут в группе", "Инструмент не нужен", "Будни, 20:00 · Tērbatas iela 76"],
  ctaFreeShort: "Записаться бесплатно",
  alts: [
    "Участник с бубном на занятии перкуссии",
    "Инструктор ведёт групповое занятие",
    "Руки на джембе",
    "Участница занятия по перкуссии",
    "Шейкер на занятии",
  ],
  formTitle: "Записаться на бесплатное занятие",
  dayLabel: "Удобный день",
  dayPlaceholder: "Удобный день",
  experience: "Опыт и пожелания",
  submit: "Записаться бесплатно",
  days: [
    { value: "monday", label: "Понедельник" },
    { value: "tuesday", label: "Вторник" },
    { value: "wednesday", label: "Среда" },
    { value: "thursday", label: "Четверг" },
    { value: "friday", label: "Пятница" },
  ],
  plans: [
    { meta: "1 урок", ribbon: null },
    { meta: "95 € / 4 урока", ribbon: null },
    { meta: "245 € / 12 уроков", ribbon: "Хит продаж" },
    { meta: "450 € / 24 урока", ribbon: "Лучшая цена" },
  ],
};

const en: PercussionsCopy = {
  metaTitle: "Group percussion classes — DRUMSTARZ drum school in Riga",
  metaDescription:
    "Group percussion classes in Riga — 90 minutes, play djembe, congas, cajon and shakers together, no musical experience needed. First lesson free.",
  heroKicker: "Group classes · 90 minutes",
  heroTitle: "New trend! Group percussion classes",
  heroLead: "Already on the first lesson the whole group plays a simple groove together. Even with no musical experience.",
  ctaFree: "Book a free lesson",
  plansTitle: "Passes",
  plansLead: "90-minute classes · first lesson free",
  perLesson: "/ lesson",
  book: "Book",
  introKicker: "Percussion — from scratch",
  introTitle: "One groove — a whole group",
  introLead:
    "Djembe, congas, cajon and shakers — four different instruments, one shared groove. The group learns to listen to each other and hold the tempo together, so the result is felt on the first lesson: a simple pattern is built from every person’s part, whether or not they’ve ever held a percussion instrument.",
  introAlt: "A group playing djembe in a circle",
  firstFree: "First lesson — free",
  firstFreeLead: "No special prep and no own instrument needed — everything is already in the studio.",
  instrumentsKicker: "In class",
  instrumentsTitle: "Try 5+ instruments",
  instrumentsLead:
    "In one lesson the group moves through several percussion instruments — from a bass djembe to bright shakers. Everyone finds a sound that answers them, and the instructor drops in the basics as you play.",
  instruments: ["Djembe", "Congas", "Cajon", "Shakers", "Other percussion"],
  ensembleAlt: "An ensemble playing djembe and congas",
  galleryTitle: "From the classes",
  whyTitle: "Why it’s worth trying",
  why: [
    { title: "90 minutes", text: "One lesson is long enough to warm up, unpack a groove and play it with the group." },
    { title: "No experience", text: "No musical background needed — already on the first lesson the whole group plays a simple groove together." },
    { title: "Anytime", text: "You can join the group at any moment, without waiting for a new intake." },
    { title: "Everything’s here", text: "Djembe, congas, cajon and shakers are already waiting — no need to bring your own." },
    { title: "Group energy", text: "Playing together charges more than practising alone — the whole group holds the groove." },
    { title: "Central Riga", text: "The studio at Tērbatas iela 76 — easy to reach after work or studies." },
  ],
  scheduleKicker: "Schedule",
  scheduleTitle: "Weekdays · 20:00",
  duration: "Duration",
  durationValue: "90 minutes",
  address: "Address",
  parking: "There’s free parking next to the studio — zone C.",
  mapCta: "View on map",
  switchOff: "A great way to switch off after work or studies",
  faqTitle: "Common questions",
  faq: [
    { q: "Do I need musical experience?", a: "No. Already on the first lesson the whole group plays a simple groove together — no special background needed." },
    { q: "Do I need my own instrument?", a: "No — don’t bring one. Djembe, congas, cajon and shakers are already in the studio." },
    { q: "How long is a class?", a: "One class is 90 minutes." },
    { q: "Can I join later?", a: "Yes — you can join the group at any time, without waiting for a new intake." },
    { q: "Where and when are the classes?", a: "Weekdays at 20:00, Rīga, Tērbatas iela 76." },
    { q: "Is the first lesson free?", a: "Yes — you can try the first lesson for free." },
  ],
  cardTitle: "First lesson — free",
  cardLines: ["90 minutes in a group", "No instrument needed", "Weekdays, 20:00 · Tērbatas iela 76"],
  ctaFreeShort: "Book for free",
  alts: [
    "A participant with a tambourine in a percussion class",
    "An instructor leading a group class",
    "Hands on a djembe",
    "A percussion class participant",
    "A shaker in class",
  ],
  formTitle: "Book a free lesson",
  dayLabel: "Convenient day",
  dayPlaceholder: "Convenient day",
  experience: "Experience and notes",
  submit: "Book for free",
  days: [
    { value: "monday", label: "Monday" },
    { value: "tuesday", label: "Tuesday" },
    { value: "wednesday", label: "Wednesday" },
    { value: "thursday", label: "Thursday" },
    { value: "friday", label: "Friday" },
  ],
  plans: [
    { meta: "1 lesson", ribbon: null },
    { meta: "95 € / 4 lessons", ribbon: null },
    { meta: "245 € / 12 lessons", ribbon: "Best seller" },
    { meta: "450 € / 24 lessons", ribbon: "Best value" },
  ],
};

export const PERCUSSIONS: Record<Locale, PercussionsCopy> = { lv, ru, en };
