import type { Locale } from "../i18n/locales";
import { TRAINERS } from "../data/trainers";

export type TrainersCopy = {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  titleLine2: string;
  lead: string;
  introKicker: string;
  introTitle: string;
  introTitleLine2: string;
  introBody: string;
  introAlt: string;
  listTitle: string;
  ctaTitle: string;
  ctaTitleLine2: string;
  ctaLead: string;
  cta: string;
  role: string;
  bios: Record<(typeof TRAINERS)[number]["id"], string>;
};

const lv: TrainersCopy = {
  metaTitle: "Pasniedzēji — DRUMSTARZ bungu skola Rīgā",
  metaDescription:
    "Deviņi aktīvi bundzinieki-mūziķi DRUMSTARZ Rīgā: Andrejs, Arturs, Edgars, Fjodors, Patriks, Rudolfs, Valerijs, Vladislavs, Alberts. Foto, video un pieraksts uz bezmaksas izmēģinājuma nodarbību.",
  kicker: "Mūsu pasniedzēji",
  title: "Iepazīstieties",
  titleLine2: "ar pasniedzējiem",
  lead: "Ne tikai pasniedzēji — aktīvi mūziķi, kas katru dienu kāpj uz skatuves.",
  introKicker: "DRUMSTARZ sirds",
  introTitle: "Skolas",
  introTitleLine2: "pasniedzēji",
  introBody:
    "Mūsu pasniedzēji nav tikai skolotāji, bet aktīvi mūziķi, kas katru dienu kāpj uz skatuves, spēlē dažādos sastāvos un turpina attīstīties. Viņi prot savienot akadēmisku sagatavotību ar dzīvu praksi, dalīties pieredzē un uzlādēt skolēnus ar mūzikas enerģiju.",
  introAlt: "DRUMSTARZ pasniedzējs pie bungu komplekta",
  listTitle: "Visi DRUMSTARZ pasniedzēji",
  ctaTitle: "Gatavi pamēģināt",
  ctaTitleLine2: "bez riska?",
  ctaLead: "Aizpildiet formu — piezvanīsim 1 darba stundas laikā, bez saistībām.",
  cta: "Nosūtīt pieteikumu",
  role: "DRUMSTARZ pasniedzējs",
  bios: {
    andrejs: "Mierīgi izkārto sarežģītu ritmu pa plauktiņiem — un pēkšņi rokas sāk saprast galvu.",
    arturs: "Par precizitāti bez garlaicības: palīdzēs savaldīt metronomu un atstāt spēlē dzīvu draivu.",
    edgars: "Meklē raksturu katrā partijā — no klusa groova līdz lielam skatuves sitienam.",
    fjodors: "Uzlādē ar enerģiju tā, ka pat koordinācijas vingrinājums skan kā koncerta sākums.",
    patriks: "Saliek tehniku, spēku un labu gaumi vienā pārliecinātā groovā — bez liekas steigas.",
    rudolfs: "Parādīs, kā spēlēt brīvāk, drosmīgāk un ar raksturu — un kāpēc pauze arī ir mūzikas daļa.",
    valerijs: "Pieredze, miers un precīza dzirde: prot sarežģīto izstāstīt vienkārši un atbalstīt īstajā brīdī.",
    vladislavs: "Uzmanīgs pret detaļām un mīl stingru pamatu — lai ritms turētos pārliecinoši jebkurā dziesmā.",
    alberts:
      "Alberts prot pārvērst sarežģītu ritmu saprotamā secībā un mierīgi noved to līdz pārliecinātai spēlei. Nodarbībās — uzmanība tehnikai, muzikalitātei un prieks par katru jauno rezultātu.",
  },
};

const ru: TrainersCopy = {
  metaTitle: "Преподаватели — DRUMSTARZ школа барабанов в Риге",
  metaDescription:
    "Девять действующих музыкантов-барабанщиков DRUMSTARZ в Риге: Andrejs, Arturs, Edgars, Fjodors, Patriks, Rudolfs, Valerijs, Vladislavs, Alberts. Фото, видео и запись на бесплатный пробный урок.",
  kicker: "Наши преподаватели",
  title: "Познакомьтесь",
  titleLine2: "с преподавателями",
  lead: "Не просто преподаватели — действующие музыканты, которые каждый день выходят на сцену.",
  introKicker: "Сердце DRUMSTARZ",
  introTitle: "Преподаватели",
  introTitleLine2: "школы",
  introBody:
    "Наши преподаватели — это не просто учителя, а действующие музыканты, которые ежедневно выходят на сцену, работают в разных коллективах и продолжают развиваться. Они умеют соединять академическую подготовку с живой практикой, делиться опытом и заряжать учеников энергией музыки.",
  introAlt: "Преподаватель DRUMSTARZ за барабанной установкой",
  listTitle: "Все преподаватели DRUMSTARZ",
  ctaTitle: "Готовы попробовать",
  ctaTitleLine2: "без риска?",
  ctaLead: "Заполните форму — перезвоним в течение 1 рабочего часа, без обязательств.",
  cta: "Отправить заявку",
  role: "Преподаватель DRUMSTARZ",
  bios: {
    andrejs: "Спокойно раскладывает сложный ритм по полочкам — и внезапно руки начинают понимать голову.",
    arturs: "За точность без скуки: поможет приручить метроном и оставить в игре живой драйв.",
    edgars: "Любит искать характер в каждой партии — от тихого грува до большого сценического удара.",
    fjodors: "Заряжает энергией так, что даже упражнение на координацию звучит как начало концерта.",
    patriks: "Собирает технику, мощь и хороший вкус в один уверенный грув — без лишней суеты.",
    rudolfs: "Покажет, как играть свободнее, смелее и с характером — и почему пауза тоже часть музыки.",
    valerijs: "Опыт, спокойствие и точный слух: умеет объяснить сложное просто и поддержать в нужный момент.",
    vladislavs: "Внимателен к деталям и любит крепкий фундамент — чтобы ритм держался уверенно в любой песне.",
    alberts:
      "Альберт умеет превратить сложный ритм в понятную последовательность и спокойно довести её до уверенной игры. На занятиях — внимание к технике, музыкальности и удовольствие от каждого нового результата.",
  },
};

const en: TrainersCopy = {
  metaTitle: "Teachers — DRUMSTARZ drum school in Riga",
  metaDescription:
    "Nine working drummer-musicians at DRUMSTARZ in Riga: Andrejs, Arturs, Edgars, Fjodors, Patriks, Rudolfs, Valerijs, Vladislavs, Alberts. Photos, videos and a free trial lesson.",
  kicker: "Our teachers",
  title: "Meet",
  titleLine2: "the teachers",
  lead: "Not just teachers — working musicians who step on stage every day.",
  introKicker: "The heart of DRUMSTARZ",
  introTitle: "School",
  introTitleLine2: "teachers",
  introBody:
    "Our teachers aren’t just instructors — they’re working musicians who play on stage every day, in different bands, and keep growing. They combine solid technique with live practice, share experience and charge students with the energy of music.",
  introAlt: "A DRUMSTARZ teacher at the drum kit",
  listTitle: "All DRUMSTARZ teachers",
  ctaTitle: "Ready to try",
  ctaTitleLine2: "with no risk?",
  ctaLead: "Fill in the form — we’ll call back within 1 working hour, no strings attached.",
  cta: "Send request",
  role: "DRUMSTARZ teacher",
  bios: {
    andrejs: "Calmly unpacks a complex groove — and suddenly the hands start catching up with the head.",
    arturs: "Precision without boredom: he’ll tame the metronome and keep the live drive in your playing.",
    edgars: "Looks for character in every part — from a quiet groove to a big stage hit.",
    fjodors: "Charges the room so even a coordination exercise sounds like the start of a concert.",
    patriks: "Puts technique, power and good taste into one confident groove — no fuss.",
    rudolfs: "Shows how to play freer, bolder and with character — and why silence is part of the music too.",
    valerijs: "Experience, calm and a sharp ear: he explains the hard stuff simply and backs you at the right moment.",
    vladislavs: "Detail-minded and fond of a solid foundation — so the groove holds in any song.",
    alberts:
      "Alberts can turn a complex rhythm into a clear sequence and walk it calmly to confident playing. Lessons focus on technique, musicality and the joy of every new result.",
  },
};

export const TRAINERS_COPY: Record<Locale, TrainersCopy> = { lv, ru, en };
