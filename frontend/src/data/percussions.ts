export const PERCUSSION_PLANS = [
  { name: "Single", meta: "1 урок", unit: "30", ribbon: null, featured: false },
  { name: "Starter", meta: "95 € / 4 урока", unit: "23.75", ribbon: null, featured: false },
  { name: "Expert", meta: "245 € / 12 уроков", unit: "20.42", ribbon: "Хит продаж", featured: true },
  { name: "Premium", meta: "450 € / 24 урока", unit: "18.45", ribbon: "Лучшая цена", featured: false },
] as const;

export const PERCUSSION_INSTRUMENTS = ["Джембе", "Конги", "Кахон", "Шейкеры", "Другие перкуссионные"] as const;

export const PERCUSSION_WHY = [
  {
    num: "01",
    title: "90 минут",
    text: "Длительность одного занятия — достаточно, чтобы разогреться, разобрать ритм и сыграть его вместе с группой.",
  },
  {
    num: "02",
    title: "Без опыта",
    text: "Музыкальная подготовка не нужна — уже на первом занятии вся группа играет простой ритм вместе.",
  },
  {
    num: "03",
    title: "В любой момент",
    text: "Можно присоединиться к группе в любое время, не дожидаясь начала нового потока.",
  },
  {
    num: "04",
    title: "Всё на месте",
    text: "Джембе, конги, кахон и шейкеры уже ждут в студии — свой инструмент приносить не нужно.",
  },
  {
    num: "05",
    title: "Энергия группы",
    text: "Совместная игра заряжает энергией сильнее, чем занятие в одиночку — ритм держит вся группа.",
  },
  {
    num: "06",
    title: "Центр Риги",
    text: "Студия на Tērbatas iela 76 — легко добраться после работы или учёбы.",
  },
] as const;

export const PERCUSSION_GALLERY = [
  { src: "/assets/img/percussions/gallery-tambourine.jpg", alt: "Участник с бубном на занятии перкуссии" },
  { src: "/assets/img/percussions/gallery-instructor.jpg", alt: "Инструктор ведёт групповое занятие" },
  { src: "/assets/img/percussions/gallery-hands.jpg", alt: "Руки на джембе" },
  { src: "/assets/img/percussions/gallery-portrait.jpg", alt: "Участница занятия по перкуссии" },
  { src: "/assets/img/percussions/gallery-shaker.jpg", alt: "Шейкер на занятии" },
] as const;

export const PERCUSSION_FAQ = [
  {
    q: "Нужен ли музыкальный опыт?",
    a: "Нет. Уже на первом занятии вся группа играет вместе простой ритм — специальная музыкальная подготовка не нужна.",
  },
  {
    q: "Нужен ли свой инструмент?",
    a: "Нет, брать инструмент с собой не нужно — джембе, конги, кахон и шейкеры уже есть в студии.",
  },
  {
    q: "Сколько длится занятие?",
    a: "Одно занятие длится 90 минут.",
  },
  {
    q: "Можно ли присоединиться позже?",
    a: "Да, к группе можно присоединиться в любой момент, не дожидаясь начала нового потока.",
  },
  {
    q: "Где и когда проходят занятия?",
    a: "По будням в 20:00, по адресу Rīga, Tērbatas iela 76.",
  },
  {
    q: "Первое занятие бесплатно?",
    a: "Да, первое занятие можно попробовать бесплатно.",
  },
] as const;

export const PERCUSSION_DAYS = [
  { value: "monday", label: "Понедельник" },
  { value: "tuesday", label: "Вторник" },
  { value: "wednesday", label: "Среда" },
  { value: "thursday", label: "Четверг" },
  { value: "friday", label: "Пятница" },
] as const;
