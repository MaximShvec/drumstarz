import type { Locale } from "../i18n/locales";

type Step = { time: string; title: string; text: string };
type Why = { title: string; text: string; tag: string | null };

export type EventsCopy = {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  cta: string;
  showcaseTitle: string;
  showcaseLead: string;
  videoTitle: string;
  bandTitle: string;
  bandLead: string;
  book: string;
  timelineKicker: string;
  timelineTitle: string;
  timelineClose: string;
  timeline: readonly [Step, Step, Step, Step];
  priceTitle: string;
  priceLabel: string;
  perPerson: string;
  priceLead: string;
  min: string;
  guests: string;
  guestsValue: string;
  duration: string;
  durationValue: string;
  includedKicker: string;
  included: readonly [string, string, string, string];
  whyTitle: string;
  why: readonly [Why, Why, Why, Why, Why];
  galleryTitle: string;
  alts: string[];
  formTitle: string;
};

const lv: EventsCopy = {
  metaTitle: "Bungu pasākumi — DRUMSTARZ bungu skola Rīgā",
  metaDescription:
    "Ballīte vai korporatīvais pie bungu komplekta Rīgā — draivīgs notikums ar DRUMSTARZ. Viesi spēlē īstas bungas kopā ar profesionāliem mūziķiem. Programma, cena un datuma rezervācija.",
  heroKicker: "Draivs · Stils · Mūzika",
  heroTitle: "Ballīte vai korporatīvais pie bungu komplekta",
  heroLead:
    "Superdraivīgs jaunā formāta notikums Rīgā! Kļūstiet par roka zvaigznēm uz vienu vakaru. Viesi paši sēžas pie īstām bungām, spēlē spēcīgus ritmus un uzstājas skatuvē kopā ar profesionāliem mūziķiem.",
  cta: "Pierakstīties uz pasākumu",
  showcaseTitle: "Katrs nospēlēs savu pirmo roka hitu",
  showcaseLead:
    "Aizmirstiet garlaicīgas svinības. Mūsu komanda atvedīs un noskaņos profesionālus bungu komplektus tieši uz vietas. Pieredzējuša draiva bundzinieka vadībā viesi un draugi apgūs pamata ritmus no nulles, sajutīs spēku un enerģiju un nospēlēs pilnvērtīgu setu zālei. Sagatavotības līmenim nav nozīmes — sanāk absolūti visiem!",
  videoTitle: "Skatīties bungu pasākuma video",
  bandTitle: "Roka hits 2,5 stundās",
  bandLead: "Viesi spēlē, uzstājas un aizbrauc ar enerģiju — bez garlaicīgām formalitātēm un bez saistībām.",
  book: "Rezervēt datumu",
  timelineKicker: "2,5 stundas",
  timelineTitle: "Pasākuma plāns",
  timelineClose: "Mums ir ērta virtuve un istaba ar lielu galdu jūsu viesu fursšetam!",
  timeline: [
    { time: "15 min", title: "Ierašanās", text: "Viesu sagaidīšana, viegls sveiciens, iepazīšanās ar atmosfēru un gatavošanās galvenajai daļai." },
    { time: "1,5 st.", title: "Šova programma", text: "Aktīva programma ar pro bundzinieku. Pamata ritmu apguve, spēle pie komplektiem un fināla koncerts." },
    { time: "30 min", title: "Bankets / fursšets", text: "Iepriekš sagatavots fursšets viesiem. Emociju pārrunas, sarunas brīvā rokenrola atmosfērā." },
    { time: "15 min", title: "Izbraukšana", text: "Mierīgs vakara noslēgums, kopīgas atmiņu fotogrāfijas pie komplektiem skatuvē un viesu izklīšana." },
  ],
  priceTitle: "Pasākuma cena",
  priceLabel: "Dalības cena",
  perPerson: "/ par pers.",
  priceLead: "Minimālā pasākuma cena ir 300 €. Studija un programma ir paredzētas ērtam izvietojumam līdz 20 viesiem vienlaikus.",
  min: "Minimums",
  guests: "Viesi",
  guestsValue: "līdz 20",
  duration: "Ilgums",
  durationValue: "2,5 st.",
  includedKicker: "Kas iekļauts cenā",
  included: [
    "Roka telpas un visu zāļu noma",
    "Akustisko bungu piegāde, montāža un pilna noskaņošana",
    "Programma ar profesionālu bundzinieku",
    "Piekļuve banketa zonai, virtuvei un lielajam galdam",
  ],
  whyTitle: "Kāpēc tieši bungas",
  why: [
    { title: "Stresa noņemšana", text: "Bungu spēle palīdz izlaist stresu un agresiju, uzlabo noskaņojumu", tag: "Relaksācija" },
    { title: "Ritms no visa", text: "Ritma instruments var kļūt jebkurš priekšmets jums apkārt", tag: null },
    { title: "Bez elektrības", text: "Bundzinieks var mēģināt praktiski jebkur — bez rozetes", tag: null },
    { title: "Gribas kustēties", text: "Bungu ritms liek ķermenim kustēties un dejot", tag: null },
    { title: "Koordinācija un smadzenes", text: "Spēle attīsta koordināciju un aktivizē smadzenes, jo strādā visas četras ekstremitātes vienlaikus", tag: null },
  ],
  galleryTitle: "Mūsu pasākumu atmosfēra",
  alts: [
    "Korporatīvā bungu programma — viesi spēlē djembe",
    "Viesi spēlē djembe aplī",
    "Roka koncerts ar gaismu un zāli",
    "Divi bundzinieki spēlē skatuvē zem konfeti",
    "Grupas bungu uzstāšanās zāles priekšā",
  ],
  formTitle: "Rezervēt datumu",
};

const ru: EventsCopy = {
  metaTitle: "Барабанные мероприятия — DRUMSTARZ школа барабанов в Риге",
  metaDescription:
    "Тусовка или корпоратив за барабанной установкой в Риге — драйвовое событие с DRUMSTARZ. Гости играют на настоящих барабанах вместе с профессиональными музыкантами. Программа, стоимость и запись на дату.",
  heroKicker: "Драйв · Стиль · Музыка",
  heroTitle: "Тусовка или корпоратив за барабанной установкой",
  heroLead:
    "Супердрайвовое событие нового формата в Риге! Станьте рок-звездами на один вечер. Гости лично садятся за настоящие барабаны, играют мощные ритмы и выступают на сцене вместе с профессиональными музыкантами.",
  cta: "Записаться на событие",
  showcaseTitle: "Каждый сыграет свой первый рок-хит",
  showcaseLead:
    "Забудьте про скучные застолья. Наша команда доставит и настроит профессиональные барабанные установки прямо на площадке. Под руководством опытного драйв-барабанщика ваши гости и друзья освоят базовые ритмы с нуля, почувствуют мощь и энергию и сыграют полноценный сет для зала. Уровень подготовки значения не имеет — получается абсолютно у всех!",
  videoTitle: "Смотреть видео барабанного мероприятия",
  bandTitle: "Рок-хит за 2.5 часа",
  bandLead: "Гости играют, выступают и уезжают с энергией — без скучных формальностей и без обязательств.",
  book: "Забронировать дату",
  timelineKicker: "2.5 часа",
  timelineTitle: "План мероприятия",
  timelineClose: "У нас есть удобная кухня и комната с большим столом для фуршета ваших гостей!",
  timeline: [
    { time: "15 мин", title: "Прибытие", text: "Встреча гостей, лёгкий приветственный велком, знакомство с атмосферой и подготовка к главному действию." },
    { time: "1.5 часа", title: "Шоу-программа", text: "Активная программа с профи барабанщиком. Освоение базовых ритмов, игра на установках и финальный концерт." },
    { time: "30 мин", title: "Банкет / фуршет", text: "Заранее подготовленный фуршет для гостей. Обсуждение эмоций, общение в свободной рок-н-ролл атмосфере." },
    { time: "15 мин", title: "Отбытие", text: "Плавное завершение вечера, памятные совместные фотографии за установками на сцене и разъезд гостей." },
  ],
  priceTitle: "Стоимость мероприятия",
  priceLabel: "Стоимость участия",
  perPerson: "/ за чел",
  priceLead: "Минимальная стоимость мероприятия — 300 €. Студия и программа рассчитаны на комфортное размещение до 20 гостей одновременно.",
  min: "Минимум",
  guests: "Гости",
  guestsValue: "до 20",
  duration: "Длительность",
  durationValue: "2.5 ч",
  includedKicker: "Что входит в стоимость",
  included: [
    "Аренда рок-пространства и всех залов",
    "Доставка, сборка и полная настройка акустических барабанов",
    "Программа с профессиональным барабанщиком",
    "Доступ к банкетной зоне, кухне и большому столу",
  ],
  whyTitle: "Почему именно барабаны",
  why: [
    { title: "Снятие стресса", text: "Игра на барабанах помогает выплеснуть стресс и агрессию, улучшает настроение", tag: "Релаксация" },
    { title: "Ритм из всего", text: "Ритм-инструментом может стать любой предмет вокруг вас", tag: null },
    { title: "Без электричества", text: "Барабанщик может репетировать практически где угодно без розетки", tag: null },
    { title: "Хочется двигаться", text: "Барабанный ритм заставляет тело двигаться и танцевать", tag: null },
    { title: "Координация и мозг", text: "Игра развивает координацию и активирует мозг, ведь работают все четыре конечности одновременно", tag: null },
  ],
  galleryTitle: "Атмосфера наших событий",
  alts: [
    "Корпоративная барабанная программа — гости играют на джембе",
    "Гости играют на джембе в кругу",
    "Рок-концерт со светом и залом",
    "Два барабанщика играют на сцене под конфетти",
    "Групповое барабанное выступление перед залом",
  ],
  formTitle: "Забронировать дату",
};

const en: EventsCopy = {
  metaTitle: "Drum events — DRUMSTARZ drum school in Riga",
  metaDescription:
    "A party or corporate at the drum kit in Riga — a high-drive event with DRUMSTARZ. Guests play real drums with professional musicians. Programme, price and date booking.",
  heroKicker: "Drive · Style · Music",
  heroTitle: "A party or corporate at the drum kit",
  heroLead:
    "A high-drive new-format event in Riga! Be rock stars for one evening. Guests sit at real kits, play powerful grooves and perform on stage with professional musicians.",
  cta: "Book the event",
  showcaseTitle: "Everyone plays their first rock hit",
  showcaseLead:
    "Forget dull dinners. Our team delivers and sets up professional drum kits right on site. With an experienced drive-drummer, your guests and friends learn basic grooves from scratch, feel the power and play a full set for the room. Skill level doesn’t matter — it works for absolutely everyone!",
  videoTitle: "Watch a drum event video",
  bandTitle: "A rock hit in 2.5 hours",
  bandLead: "Guests play, perform and leave charged — no dull formalities and no commitment.",
  book: "Book a date",
  timelineKicker: "2.5 hours",
  timelineTitle: "Event plan",
  timelineClose: "We have a handy kitchen and a room with a big table for your guests’ buffet!",
  timeline: [
    { time: "15 min", title: "Arrival", text: "Guest welcome, a light hello, a feel of the room and prep for the main act." },
    { time: "1.5 hrs", title: "Show programme", text: "An active programme with a pro drummer. Basic grooves, playing the kits and a final concert." },
    { time: "30 min", title: "Banquet / buffet", text: "A prepared buffet for guests. Talking through the emotions in a free rock-and-roll atmosphere." },
    { time: "15 min", title: "Departure", text: "A calm close, memorable photos at the kits on stage, and guests head out." },
  ],
  priceTitle: "Event price",
  priceLabel: "Participation price",
  perPerson: "/ per person",
  priceLead: "The minimum event price is 300 €. The studio and programme comfortably fit up to 20 guests at once.",
  min: "Minimum",
  guests: "Guests",
  guestsValue: "up to 20",
  duration: "Duration",
  durationValue: "2.5 h",
  includedKicker: "What’s included",
  included: [
    "Hire of the rock space and all rooms",
    "Delivery, assembly and full setup of acoustic drums",
    "A programme with a professional drummer",
    "Access to the banquet area, kitchen and big table",
  ],
  whyTitle: "Why drums",
  why: [
    { title: "Stress release", text: "Playing drums helps drop stress and aggression and lifts the mood", tag: "Relaxation" },
    { title: "Rhythm from anything", text: "Any object around you can become a rhythm instrument", tag: null },
    { title: "No electricity", text: "A drummer can practise almost anywhere — no socket needed", tag: null },
    { title: "You want to move", text: "A drum groove makes the body move and dance", tag: null },
    { title: "Coordination and the brain", text: "Playing builds coordination and wakes the brain — all four limbs work at once", tag: null },
  ],
  galleryTitle: "The atmosphere of our events",
  alts: [
    "A corporate drum programme — guests playing djembe",
    "Guests playing djembe in a circle",
    "A rock concert with lights and a hall",
    "Two drummers on stage under confetti",
    "A group drum performance in front of the room",
  ],
  formTitle: "Book a date",
};

export const EVENTS: Record<Locale, EventsCopy> = { lv, ru, en };
