import type { Locale } from "./locales";

export type UiCopy = {
  skip: string;
  homeAria: string;
  navAria: string;
  navMobileAria: string;
  extras: string;
  book: string;
  bookFree: string;
  bookFreeStrong: string;
  whatsappAria: string;
  openMenu: string;
  closeMenu: string;
  mobileMenu: string;
  langAria: string;
  nav: {
    prices: string;
    trainers: string;
    faq: string;
    contacts: string;
  };
  extrasItems: {
    percussions: string;
    events: string;
    kids: string;
    giftcard: string;
  };
  footer: {
    blurb: string;
    school: string;
    formats: string;
    contact: string;
    news: string;
    schoolPrices: string;
    schoolTrainers: string;
    schoolFaq: string;
    formatPercussion: string;
    formatGift: string;
    formatEvents: string;
    formatCamp: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  booking: {
    kicker: string;
    titleBefore: string;
    titleAccent: string;
    titleAfter: string;
    lead: string;
    name: string;
    phone: string;
    consent: string;
    submit: string;
    sending: string;
    reply: string;
    close: string;
    errName: string;
    errPhone: string;
    errConsent: string;
    notConfigured: string;
  };
  form: {
    name: string;
    yourName: string;
    phone: string;
    email: string;
    emailOptional: string;
    message: string;
    comment: string;
    date: string;
    guests: string;
    consent: string;
    consentData: string;
    consentTerms: string;
    submit: string;
    sending: string;
    send: string;
    errName: string;
    errPhone: string;
    errEmail: string;
    errEmailInvalid: string;
    errMessage: string;
    errConsent: string;
    notConfigured: string;
  };
  common: {
    walking: string;
    driving: string;
    mapLoading: string;
    mapBranch: string;
    openPhoto: string;
    more: string;
    allTrainers: string;
    trainersPrev: string;
    trainersNext: string;
    trainersScroll: string;
    trainerVideo: string;
    trainerPhoto: string;
    watchTrainer: string;
    perLesson: string;
    passPrice: string;
  };
  lightbox: {
    next: string;
    previous: string;
    close: string;
    zoomIn: string;
    zoomOut: string;
  };
};

const lv: UiCopy = {
  skip: "Uz saturu",
  homeAria: "DRUMSTARZ RIGA — uz sākumu",
  navAria: "Galvenā navigācija",
  navMobileAria: "Galvenā navigācija (mobilā)",
  extras: "Ekstras",
  book: "Pierakstīties",
  bookFree: "Pierakstīties uz bezmaksas nodarbību",
  bookFreeStrong: "bezmaksas nodarbību",
  whatsappAria: "Rakstīt WhatsApp",
  openMenu: "Atvērt izvēlni",
  closeMenu: "Aizvērt izvēlni",
  mobileMenu: "Mobilā izvēlne",
  langAria: "Valoda",
  nav: {
    prices: "Cenas",
    trainers: "Pasniedzēji",
    faq: "BUJ",
    contacts: "Kontakti",
  },
  extrasItems: {
    percussions: "Perkusija",
    events: "Ballīte pieaugušajiem",
    kids: "Bērnu ballīte",
    giftcard: "Dāvana",
  },
  footer: {
    blurb: "Bungu skola Rīgas centrā kopš 2013. gada. Individuālas nodarbības, perkusija, pasākumi un vasaras nometne.",
    school: "Bungu skola",
    formats: "Citi formāti",
    contact: "Kontakti",
    news: "Jaunumi",
    schoolPrices: "Cenas un abonementi",
    schoolTrainers: "Skolas pasniedzēji",
    schoolFaq: "Biežākie jautājumi",
    formatPercussion: "Perkusija",
    formatGift: "Dāvanu karte",
    formatEvents: "Pasākumi",
    formatCamp: "Vasaras nometne",
    rights: "Visas tiesības aizsargātas.",
    privacy: "Privātuma politika",
    terms: "Lietošanas noteikumi",
  },
  booking: {
    kicker: "Izmēģinājuma nodarbība",
    titleBefore: "Pierakstīties uz ",
    titleAccent: "bezmaksas",
    titleAfter: " nodarbību",
    lead: "Atstājiet pieteikumu — palīdzēsim spert pirmo soli mūzikā!",
    name: "Vārds",
    phone: "Tālruņa numurs",
    consent: "Esmu iepazinies ar lietošanas noteikumiem",
    submit: "Nosūtīt pieteikumu",
    sending: "Sūta…",
    reply: "Atbildēsim stundas laikā",
    close: "Aizvērt formu",
    errName: "Norādiet vārdu",
    errPhone: "Norādiet tālruni",
    errConsent: "Nepieciešama piekrišana",
    notConfigured: "Pieteikumu sūtīšana tiks pieslēgta nākamajā posmā",
  },
  form: {
    name: "Vārds",
    yourName: "Jūsu vārds",
    phone: "Tālruņa numurs",
    email: "E-pasts",
    emailOptional: "E-pasts (nav obligāts)",
    message: "Ziņa vai komentārs",
    comment: "Komentārs",
    date: "Vēlamais datums",
    guests: "Viesu skaits un vēlmes",
    consent: "Esmu iepazinies ar lietošanas noteikumiem",
    consentData: "Piekrītu personas datu apstrādei",
    consentTerms: "Piekrītu datu apstrādei un servisa noteikumiem.",
    submit: "Nosūtīt pieteikumu",
    sending: "Sūta…",
    send: "Nosūtīt",
    errName: "Lūdzu, norādiet vārdu",
    errPhone: "Lūdzu, norādiet tālruņa numuru",
    errEmail: "Lūdzu, norādiet e-pastu",
    errEmailInvalid: "Pārbaudiet e-pasta adresi",
    errMessage: "Uzrakstiet ziņu",
    errConsent: "Nepieciešams apstiprināt piekrišanu",
    notConfigured: "Pieteikumu sūtīšana tiks pieslēgta nākamajā posmā",
  },
  common: {
    walking: "Kājām",
    driving: "Ar mašīnu",
    mapLoading: "Ielādējam karti",
    mapBranch: "Karte: DRUMSTARZ filiāle",
    openPhoto: "Atvērt foto",
    more: "Vairāk",
    allTrainers: "Visi pasniedzēji",
    trainersPrev: "Iepriekšējie pasniedzēji",
    trainersNext: "Nākamie pasniedzēji",
    trainersScroll: "Ritināt pasniedzējus",
    trainerVideo: "Pasniedzēja video",
    trainerPhoto: "pasniedzējs DRUMSTARZ",
    watchTrainer: "Skatīties video ar",
    perLesson: "Cena par vienu nodarbību",
    passPrice: "abonementa cena",
  },
  lightbox: {
    next: "Nākamais foto",
    previous: "Iepriekšējais foto",
    close: "Aizvērt",
    zoomIn: "Pietuvināt",
    zoomOut: "Attālināt",
  },
};

const ru: UiCopy = {
  skip: "Перейти к содержимому",
  homeAria: "DRUMSTARZ RIGA — на главную",
  navAria: "Основная навигация",
  navMobileAria: "Основная навигация (мобильная)",
  extras: "Экстры",
  book: "Записаться",
  bookFree: "Записаться на бесплатный урок",
  bookFreeStrong: "бесплатный урок",
  whatsappAria: "Написать в WhatsApp",
  openMenu: "Открыть меню",
  closeMenu: "Закрыть меню",
  mobileMenu: "Мобильное меню",
  langAria: "Язык",
  nav: {
    prices: "Цены",
    trainers: "Преподаватели",
    faq: "FAQ",
    contacts: "Контакты",
  },
  extrasItems: {
    percussions: "Перкуссии",
    events: "Праздник для взрослых",
    kids: "Детский праздник",
    giftcard: "Подарок",
  },
  footer: {
    blurb: "Школа барабанов в центре Риги с 2013 года. Индивидуальные занятия, перкуссия, мероприятия и летний лагерь.",
    school: "Школа барабанов",
    formats: "Другие форматы",
    contact: "Контактная информация",
    news: "Новости",
    schoolPrices: "Цены и тарифы",
    schoolTrainers: "Преподаватели школы",
    schoolFaq: "Частые вопросы",
    formatPercussion: "Перкуссия",
    formatGift: "Подарочная карта",
    formatEvents: "Мероприятия",
    formatCamp: "Летний лагерь",
    rights: "Все права защищены.",
    privacy: "Политика конфиденциальности",
    terms: "Пользовательское соглашение",
  },
  booking: {
    kicker: "Пробный урок",
    titleBefore: "Записаться на ",
    titleAccent: "бесплатный",
    titleAfter: " урок",
    lead: "Оставьте заявку — и мы поможем вам сделать первый шаг в мир музыки!",
    name: "Имя",
    phone: "Номер телефона",
    consent: "Я ознакомился с пользовательским соглашением",
    submit: "Отправить заявку",
    sending: "Отправка…",
    reply: "Ответим в течение часа",
    close: "Закрыть форму",
    errName: "Укажите имя",
    errPhone: "Укажите телефон",
    errConsent: "Нужно согласие",
    notConfigured: "Отправка заявок будет подключена на следующем этапе",
  },
  form: {
    name: "Имя",
    yourName: "Ваше имя",
    phone: "Номер телефона",
    email: "Электронная почта",
    emailOptional: "Электронный адрес (необязательно)",
    message: "Сообщение или комментарий",
    comment: "Комментарий",
    date: "Желаемая дата",
    guests: "Количество гостей и пожелания",
    consent: "Я ознакомился с пользовательским соглашением",
    consentData: "Согласен на обработку персональных данных",
    consentTerms: "Согласен на обработку данных и условия сервиса.",
    submit: "Отправить заявку",
    sending: "Отправка…",
    send: "Отправить",
    errName: "Пожалуйста, укажите имя",
    errPhone: "Пожалуйста, укажите номер телефона",
    errEmail: "Пожалуйста, укажите электронную почту",
    errEmailInvalid: "Проверьте адрес электронной почты",
    errMessage: "Напишите сообщение",
    errConsent: "Нужно подтвердить согласие",
    notConfigured: "Отправка заявок будет подключена на следующем этапе",
  },
  common: {
    walking: "Пешком",
    driving: "На машине",
    mapLoading: "Загружаем карту",
    mapBranch: "Карта: филиал DRUMSTARZ",
    openPhoto: "Открыть фото",
    more: "Подробнее",
    allTrainers: "Все преподаватели",
    trainersPrev: "Предыдущие преподаватели",
    trainersNext: "Следующие преподаватели",
    trainersScroll: "Пролистать преподавателей",
    trainerVideo: "Видео преподавателя",
    trainerPhoto: "преподаватель DRUMSTARZ",
    watchTrainer: "Смотреть видео с",
    perLesson: "Цена за одно занятие",
    passPrice: "цена абонемента",
  },
  lightbox: {
    next: "Следующее фото",
    previous: "Предыдущее фото",
    close: "Закрыть",
    zoomIn: "Приблизить",
    zoomOut: "Отдалить",
  },
};

const en: UiCopy = {
  skip: "Skip to content",
  homeAria: "DRUMSTARZ RIGA — home",
  navAria: "Main navigation",
  navMobileAria: "Main navigation (mobile)",
  extras: "Extras",
  book: "Book a lesson",
  bookFree: "Book a free lesson",
  bookFreeStrong: "free lesson",
  whatsappAria: "Message on WhatsApp",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  mobileMenu: "Mobile menu",
  langAria: "Language",
  nav: {
    prices: "Prices",
    trainers: "Teachers",
    faq: "FAQ",
    contacts: "Contacts",
  },
  extrasItems: {
    percussions: "Percussion",
    events: "Party for adults",
    kids: "Kids party",
    giftcard: "Gift",
  },
  footer: {
    blurb: "A drum school in the centre of Riga since 2013. Private lessons, percussion, events and a summer camp.",
    school: "Drum school",
    formats: "Other formats",
    contact: "Contact",
    news: "News",
    schoolPrices: "Prices and plans",
    schoolTrainers: "School teachers",
    schoolFaq: "Common questions",
    formatPercussion: "Percussion",
    formatGift: "Gift card",
    formatEvents: "Events",
    formatCamp: "Summer camp",
    rights: "All rights reserved.",
    privacy: "Privacy policy",
    terms: "Terms of use",
  },
  booking: {
    kicker: "Trial lesson",
    titleBefore: "Book a ",
    titleAccent: "free",
    titleAfter: " lesson",
    lead: "Leave a request — we’ll help you take the first step into music!",
    name: "Name",
    phone: "Phone number",
    consent: "I have read the terms of use",
    submit: "Send request",
    sending: "Sending…",
    reply: "We’ll reply within an hour",
    close: "Close form",
    errName: "Enter your name",
    errPhone: "Enter your phone",
    errConsent: "Consent is required",
    notConfigured: "Form submissions will be connected in the next step",
  },
  form: {
    name: "Name",
    yourName: "Your name",
    phone: "Phone number",
    email: "Email",
    emailOptional: "Email (optional)",
    message: "Message or comment",
    comment: "Comment",
    date: "Preferred date",
    guests: "Guest count and notes",
    consent: "I have read the terms of use",
    consentData: "I agree to the processing of personal data",
    consentTerms: "I agree to data processing and the service terms.",
    submit: "Send request",
    sending: "Sending…",
    send: "Send",
    errName: "Please enter your name",
    errPhone: "Please enter your phone number",
    errEmail: "Please enter your email",
    errEmailInvalid: "Check the email address",
    errMessage: "Please write a message",
    errConsent: "Please confirm consent",
    notConfigured: "Form submissions will be connected in the next step",
  },
  common: {
    walking: "On foot",
    driving: "By car",
    mapLoading: "Loading map",
    mapBranch: "Map: DRUMSTARZ studio",
    openPhoto: "Open photo",
    more: "More",
    allTrainers: "All teachers",
    trainersPrev: "Previous teachers",
    trainersNext: "Next teachers",
    trainersScroll: "Browse teachers",
    trainerVideo: "Teacher video",
    trainerPhoto: "DRUMSTARZ teacher",
    watchTrainer: "Watch video with",
    perLesson: "Price per lesson",
    passPrice: "pass price",
  },
  lightbox: {
    next: "Next photo",
    previous: "Previous photo",
    close: "Close",
    zoomIn: "Zoom in",
    zoomOut: "Zoom out",
  },
};

export const UI: Record<Locale, UiCopy> = { lv, ru, en };
