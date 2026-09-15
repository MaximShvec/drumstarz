export const LEVEL_CARDS = {
  new: [
    {
      img: "/assets/img/section2/card-1.webp",
      title: "Изучи",
      text: "основы игры на барабанах",
    },
    {
      img: "/assets/img/section2/card-2.webp",
      title: "Научись",
      text: "играть один из твоих любимых треков",
    },
    {
      img: "/assets/img/section2/card-3.webp",
      title: "Выступи",
      text: "на настоящем концерте",
    },
  ],
  experienced: [
    {
      img: "/assets/img/section2/card-4-experienced.webp",
      title: "Прокачивай",
      text: "свой уровень",
    },
    {
      img: "/assets/img/section2/card-5-experienced.webp",
      title: "Сними",
      text: "видео кавер",
    },
    {
      img: "/assets/img/section2/card-6-experienced.webp",
      title: "Отыграй",
      text: "на настоящем концерте",
    },
  ],
} as const;

export type LevelKey = keyof typeof LEVEL_CARDS;

export const WHY_ITEMS = [
  {
    num: "01",
    title: "Опыт не нужен",
    text: "Никто не приходит, умея играть. Всё начинается с простого ритма — под руководством преподавателя.",
  },
  {
    num: "02",
    title: "Инструмент не требуется",
    text: "Всё оборудование уже есть в студии — барабаны, тарелки, палочки.",
  },
  {
    num: "03",
    title: "Присоединиться можно в любой момент",
    text: "Не нужно ждать начала месяца или набора группы — расписание подстраивается под вас.",
  },
  {
    num: "04",
    title: "Без обязательств",
    text: "Пробное занятие бесплатное. Решение — продолжать или нет — только за вами.",
  },
] as const;

export const PRICING = [
  {
    name: "Разовое",
    kind: "Посещение",
    photo: "/assets/img/giftcard/card-photo-pricing2.webp",
    lessons: "1 занятие",
    discount: null,
    ribbon: null,
    unit: "35,00 €",
    note: "Для тех, кто не готов ходить каждую неделю",
    total: "35 €",
    featured: false,
  },
  {
    name: "Стартовый",
    kind: "Абонемент",
    photo: "/assets/img/kids/hero-child-drummer.webp",
    lessons: "4 занятия",
    discount: "-18%",
    ribbon: null,
    unit: "28,80 €",
    note: "Обязательное посещение один раз в неделю",
    total: "115 €",
    featured: false,
  },
  {
    name: "Эксперт",
    kind: "Абонемент",
    photo: "/assets/img/giftcard/card-photo-pricing1.webp",
    lessons: "12 занятий",
    discount: "-30%",
    ribbon: "Хит продаж",
    unit: "24,60 €",
    note: "Обязательное посещение один раз в неделю",
    total: "295 €",
    featured: true,
  },
  {
    name: "Премиум",
    kind: "Абонемент",
    photo: "/assets/img/events/showcase-crowd.webp",
    lessons: "24 занятия",
    discount: "-40%",
    ribbon: "Лучшая цена",
    unit: "21,05 €",
    note: "Обязательное посещение один раз в неделю",
    total: "505 €",
    featured: false,
  },
] as const;

export const TRIAL_STEPS = [
  {
    num: "01",
    title: "Приходите в студию",
    text: "Просто приходите в назначенное время — ничего готовить заранее не нужно.",
  },
  {
    num: "02",
    title: "Знакомитесь с преподавателем",
    text: "Расскажите о себе, преподаватель подберёт темп занятия под вас.",
  },
  {
    num: "03",
    title: "Чувствуете атмосферу",
    text: "Живой звук, настоящая студия — не видео-урок и не онлайн.",
  },
  {
    num: "04",
    title: "Играете свой первый ритм",
    text: "Уже в течение часа вы сыграете простой ритм самостоятельно.",
  },
  {
    num: "05",
    title: "Получаете рекомендации",
    text: "Преподаватель расскажет, что получилось и над чем стоит поработать.",
  },
  {
    num: "06",
    title: "Решаете, продолжать ли",
    text: "Никаких обязательств — решение только за вами.",
  },
] as const;

/** Original student portraits from `static/assets/img/section7` — small, pre-cropped tiles. */
export const STUDENT_PHOTOS = [
  { src: "/assets/img/section7/student-04.webp", w: 274, h: 272 },
  { src: "/assets/img/section7/student-09.webp", w: 274, h: 192 },
  { src: "/assets/img/section7/student-01.webp", w: 274, h: 432 },
  { src: "/assets/img/section7/student-06.webp", w: 274, h: 272 },
  { src: "/assets/img/section7/student-10.webp", w: 274, h: 192 },
  { src: "/assets/img/section7/student-03.webp", w: 273, h: 192 },
  { src: "/assets/img/section7/student-02.webp", w: 271, h: 270 },
  { src: "/assets/img/section7/student-05.webp", w: 565, h: 228 },
  { src: "/assets/img/section7/student-07.webp", w: 273, h: 272 },
  { src: "/assets/img/section7/student-08.webp", w: 271, h: 194 },
  { src: "/assets/img/section7/student-11.webp", w: 271, h: 192 },
] as const;

export const FAQ = [
  {
    q: "За какое время можно научиться играть на барабанах?",
    a: "За первые три месяца вы гарантированно сможете сыграть песню, которую разучите с преподавателем, при условии посещения всех занятий и активной работы дома.",
  },
  {
    q: "Каков график занятий? Смогу ли я совмещать обучение с работой или учебой?",
    a: "В школе нет определенного времени занятий, все оговаривается индивидуально.",
  },
  {
    q: "Мне уже поздно",
    a: "Ограничений по возрасту нет. Наш самый старший ученик - 64 года.",
  },
  {
    q: "Я никогда не занимался/ не занималась музыкой. Требуется ли начальная подготовка для того, чтобы учиться игре на барабанах?",
    a: "Нет, не требуется. За первые 3 месяца вы точно поймете, хотите ли вы продолжать заниматься и расти в этом направлении или нет.",
  },
  {
    q: "Что нужно принести на первое занятие?",
    a: "Ничего приносить не требуется. Школа все предоставляет.",
  },
  {
    q: "Я не знаю нот",
    a: "Нотам мы обучим. Для записи и чтения барабанных партий ноты гораздо проще, чем, например, для струнных инструментов. Вы освоите ноты очень быстро.",
  },
] as const;
