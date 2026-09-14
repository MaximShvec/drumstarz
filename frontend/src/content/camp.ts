import type { Locale } from "../i18n/locales";

type Item = { time: string; text: string };
type Day = { day: string; date: string; note: string | null; items: Item[] };
type Faq = { q: string; a: string };

export type CampCopy = {
  metaTitle: string;
  metaDescription: string;
  heroKicker: string;
  heroTitle: string;
  heroLead: string;
  cta: string;
  factsTitle: string;
  facts: { dates: string; age: string; location: string };
  factLabels: { dates: string; age: string; location: string };
  perStay: string;
  introKicker: string;
  introTitle: string;
  introP1: string;
  introP2: string;
  introAlt: string;
  experienceTitle: string;
  experienceLead: string;
  programKicker: string;
  programTitle: string;
  programLead: string;
  weatherNote: string;
  videoKicker: string;
  videoTitle: string;
  videoLead: string;
  videoAria: string;
  galleryKicker: string;
  galleryTitle: string;
  locationKicker: string;
  locationTitle: string;
  locationLead: string;
  locationPitch: string;
  mapCta: string;
  locLabels: { dates: string; age: string; meals: string; address: string };
  locValues: { dates: string; age: string; meals: string };
  included: readonly [{ title: string; text: string }, { title: string; text: string }, { title: string; text: string }, { title: string; text: string }];
  faqKicker: string;
  faqTitle: string;
  cardKicker: string;
  cardTitle: string;
  cardLines: readonly [string, string, string];
  days: readonly [Day, Day, Day, Day, Day, Day];
  faq: readonly [Faq, Faq, Faq, Faq, Faq, Faq];
  alts: string[];
  form: {
    kicker: string;
    title: string;
    lead: string;
    bullets: readonly [string, string, string];
    formKicker: string;
    formTitle: string;
    formLead: string;
    parentName: string;
    childAge: string;
    wishes: string;
    hint: string;
  };
};

const lv: CampCopy = {
  metaTitle: "DRUMSTARZ bungu nometne — vasaras nometne bērniem 7–15 gadi",
  metaDescription:
    "DRUMSTARZ bungu nometne, 2026. gada 5.–10. jūlijs: bungas, mūzika, sports un jauni draugi dabā 40 km no Rīgas. Bērni 7–15 gadi, 470 € par nedēļu, ēdināšana un transfers iekļauti.",
  heroKicker: "Vasaras nometne · 6 dienas pie ezera",
  heroTitle: "Drumstarz bungu nometne",
  heroLead:
    "Nedēļa prom no ierastās rutīnas: bungas, mūzika, sports un jauni draugi — īstā skatuvē meža un ezeru vidū 40 km no Rīgas. Iepriekšēja muzikālā pieredze nav svarīga.",
  cta: "Pierakstīties nometnē",
  factsTitle: "Īsumā par nometni",
  facts: { dates: "2026. gada 5.–10. jūlijs", age: "7–15 gadi", location: "«Turbas», Turkalne, Ogres nov." },
  factLabels: { dates: "Datumi", age: "Vecums", location: "Vieta" },
  perStay: "par 6 dienām / 5 naktīm",
  introKicker: "Bungas, mūzika, draudzība",
  introTitle: "Nedēļa, kas nav parastā vasara",
  introP1:
    "Gribat bērniem kaut ko jaunu un neierastu? Lai viņi atslēgtos no ikdienas un jautri pavadītu vasaras nedēļu? Aicinām uz DRUMSTARZ bungu nometni!",
  introP2:
    "Bērnu gaida krāsaina izklaides programma un unikāli notikumi katru dienu, par kuriem parūpējušies mūsu labākie pasniedzēji: bungas, mūzika, sports, gardas ēdienreizes četras reizes dienā, jauni draugi un neaizmirstamas emocijas.",
  introAlt: "Meitene spēlē bungas DRUMSTARZ vasaras nometnē",
  experienceTitle: "Pieredze nav svarīga",
  experienceLead:
    "Jau pēc piecām nodarbību dienām profesionālu pasniedzēju vadībā katrs dalībnieks nospēlēs ritmu savai iemīļotajai dziesmai — vai pat paša bungu solo.",
  programKicker: "Nometnes programma",
  programTitle: "Kā paiet nedēļa",
  programLead:
    "Sešas dienas ar skaidru ritmu: nodarbības un sports līdz pusdienām, ūdens un spēles pēc tam, vakarā — ugunskurs, disko vai kino. Atveriet dienu pēc dienas.",
  weatherNote: "Aktivitātes var mainīties un papildināties atkarībā no laikapstākļiem.",
  videoKicker: "Paskatieties paši",
  videoTitle: "Kā tas bija",
  videoLead: "Kadri no iepriekšējās DRUMSTARZ bungu nometnes — tā pati atmosfēra, kas gaida arī šosezon.",
  videoAria: "DRUMSTARZ bungu nometne — video",
  galleryKicker: "Iepriekšējā nometne kadros",
  galleryTitle: "Īsti mirkļi, nevis iestudējums",
  locationKicker: "Cena un vieta",
  locationTitle: "470 € par nedēļu",
  locationLead:
    "Apmēram 40 km no Rīgas. Autobuss izbrauc no bungu skolas Šarlotes 18a nometnes pirmajā dienā.",
  locationPitch: "Bungas, mūzika, sports, garda ēdienreize četras reizes dienā, jauni draugi un neaizmirstamas emocijas",
  mapCta: "Skatīt kartē",
  locLabels: { dates: "Datumi", age: "Vecums", meals: "Ēdināšana", address: "Adrese" },
  locValues: { dates: "2026. gada 5.–10. jūlijs", age: "7–15 gadi", meals: "4 reizes dienā" },
  included: [
    { title: "Naktsmītne", text: "Nedēļa «Turbas» teritorijā — 6 dienas / 5 naktis." },
    { title: "Ēdināšana", text: "Četras reizes dienā." },
    { title: "Programma", text: "Bungas, mūzika, sports un vakari — ar DRUMSTARZ pasniedzējiem." },
    { title: "Transfers", text: "Autobuss no bungu skolas Šarlotes 18a pirmajā dienā." },
  ],
  faqKicker: "BUJ",
  faqTitle: "Biežākie jautājumi",
  cardKicker: "Vasaras nometne",
  cardTitle: "470 € par visu nedēļu",
  cardLines: ["2026. gada 5.–10. jūlijs · bērni 7–15 gadi", "Naktsmītne un 4 ēdienreizes", "Autobuss no Šarlotes 18a, Rīga"],
  days: [
    {
      day: "1. diena",
      date: "Svētdiena, 5. jūlijs — iebraukšana",
      note: null,
      items: [
        { time: "15:00", text: "Autobuss no bungu skolas (Šarlotes 18a)" },
        { time: "16:00", text: "Iekārtošanās, reģistrācija, ekipējuma pārbaude, drošības instruktāža" },
        { time: "17:30", text: "Launags" },
        { time: "19:00", text: "Medicīniskā apskate" },
        { time: "20:00", text: "Vakariņas, zvans vecākiem" },
        { time: "20:30", text: "Iepazīšanās kvests nometnes teritorijā" },
        { time: "22:00", text: "Gulētiešana" },
      ],
    },
    {
      day: "2. diena",
      date: "Pirmdiena, 6. jūlijs",
      note: "Dienas pamata ritms, kopīgs visām nometnes darba dienām:",
      items: [
        { time: "09:00", text: "Celšanās, higiēna" },
        { time: "09:15", text: "Rīta vingrošana" },
        { time: "10:00", text: "Brokastis, brīvais laiks" },
        { time: "10:40", text: "Bungas, ritma teorija, sports un angļu valoda — pa grupām" },
        { time: "13:30", text: "Pusdienas" },
        { time: "14:00", text: "Klusā stunda, zvans vecākiem" },
        { time: "15:00", text: "Peldēšanās un jautras stafetes" },
        { time: "16:00", text: "Launags" },
        { time: "16:40", text: "Muzikālā viktorīna" },
        { time: "18:00", text: "Sporta spēle" },
        { time: "20:00", text: "Vakariņas, brīvais laiks" },
        { time: "21:00", text: "Disko un drum jam session" },
        { time: "22:00", text: "Gulētiešana" },
      ],
    },
    {
      day: "3. diena",
      date: "Otrdiena, 7. jūlijs",
      note: "09:00–16:00 — kopīgais dienas ritms, tāpat kā iepriekšējā dienā. Tālāk:",
      items: [
        { time: "16:40", text: "Komandu spēle «Meža kaķis un Tarzāns»" },
        { time: "18:00", text: "Peldēšanās, ūdens spēles, mierīgs vakars" },
        { time: "20:00", text: "Vakariņas, brīvais laiks" },
        { time: "21:00", text: "Vakars pie ugunskura: ģitāra un zefīrs" },
        { time: "22:00", text: "Gulētiešana" },
      ],
    },
    {
      day: "4. diena",
      date: "Trešdiena, 8. jūlijs",
      note: "09:00–16:00 — kopīgais dienas ritms. Tālāk:",
      items: [
        { time: "14:00", text: "Sagatavošanās koncertam vecākiem" },
        { time: "16:40", text: "Galda spēles vai kvests nometnes teritorijā" },
        { time: "20:00", text: "Vakariņas, pidžamu ballīte un kino" },
        { time: "22:00", text: "Gulētiešana" },
      ],
    },
    {
      day: "5. diena",
      date: "Ceturtdiena, 9. jūlijs",
      note: "09:00–16:00 — kopīgais dienas ritms. Vakarā — nedēļas galvenais notikums:",
      items: [
        { time: "16:40", text: "Pēdējā sagatavošanās koncertam" },
        { time: "19:00", text: "Koncerts vecākiem" },
        { time: "22:00", text: "Garākā nometnes nakts — gulētiešana 01:00" },
      ],
    },
    {
      day: "6. diena",
      date: "Piektdiena, 10. jūlijs — izbraukšana",
      note: null,
      items: [
        { time: "10:00", text: "Brokastis" },
        { time: "10:30", text: "Apbalvošanas ceremonija, diplomi" },
        { time: "11:00", text: "Saņemšanās un ceļš mājās" },
      ],
    },
  ],
  faq: [
    { q: "No kāda vecuma var braukt uz nometni?", a: "Nometne ir paredzēta bērniem no 7 līdz 15 gadiem." },
    { q: "Vai vajadzīga bungu spēles pieredze?", a: "Nē, iepriekšēja muzikālā pieredze nav svarīga — jau pēc piecām nodarbību dienām katrs dalībnieks nospēlēs ritmu savai iemīļotajai dziesmai, un kāds arī paša bungu solo." },
    { q: "Kas iekļauts cenā?", a: "Naktsmītne nometnes teritorijā, četras ēdienreizes, visa bungu un izklaides programma, pasniedzēju darbs un autobuss no bungu skolas Rīgā." },
    { q: "Kur nometne notiek?", a: "Adrese «Turbas», Turkalne, Ogres nov., LV-5015 — apmēram 40 km no Rīgas." },
    { q: "Kā bērns tiks uz nometni?", a: "Autobuss izbrauc no bungu skolas Šarlotes 18a nometnes pirmajā dienā, plkst. 15:00." },
    { q: "Vai nometnes laikā var piezvanīt bērnam?", a: "Jā, katras dienas programmā ir zvans vecākiem — pēc klusās stundas un pēc vakariņām." },
  ],
  alts: [
    "Zēns spēlē bungu komplektu vasaras nometnē",
    "Divi zēni spēlē bungas pie nometnes mājiņas",
    "Nometnes pasniedzējs spēlē bungu komplektu",
    "Bērni peldas upē nometnes teritorijā",
    "Bungu komplekti nometnes segtajā skatuvē",
    "Bērni uz laipām pie ezera nometnes teritorijā",
    "Koka mājiņa nometnes teritorijā",
  ],
  form: {
    kicker: "Atlicis precizēt detaļas",
    title: "Pierakstīties nometnē",
    lead: "Atstājiet pieteikumu — precizēsim brīvās vietas un visus iebraukšanas jautājumus.",
    bullets: ["2026. gada 5.–10. jūlijs", "Bērni 7–15 gadi", "470 € par nedēļu · ēdināšana un transfers iekļauti"],
    formKicker: "Pieteikums nometnei",
    formTitle: "Vecāka kontakti",
    formLead: "Vārds, tālrunis un e-pasts ir obligāti. Bērna vecumu var norādīt uzreiz.",
    parentName: "Vecāka vārds",
    childAge: "Bērna vecums",
    wishes: "Vēlmes un veselības īpatnības",
    hint: "Piezvanīsim, lai apstiprinātu vietu un iebraukšanas detaļas.",
  },
};

const ru: CampCopy = {
  metaTitle: "Барабанный лагерь Drumstarz — летний лагерь для детей 7–15 лет",
  metaDescription:
    "Барабанный лагерь DRUMSTARZ, 5–10 июля 2026: барабаны, музыка, спорт и новые друзья на природе в 40 км от Риги. Дети 7–15 лет, 470 € за неделю, питание и трансфер включены.",
  heroKicker: "Летний лагерь · 6 дней у озера",
  heroTitle: "Барабанный лагерь Drumstarz",
  heroLead:
    "Неделя вдали от привычной рутины: барабаны, музыка, спорт и новые друзья — на настоящей сцене посреди леса и озёр в 40 км от Риги. Предыдущий музыкальный опыт не важен.",
  cta: "Записаться в лагерь",
  factsTitle: "Коротко о лагере",
  facts: { dates: "5–10 июля 2026", age: "7–15 лет", location: "«Turbas», Turkalne, Ogres nov." },
  factLabels: { dates: "Даты", age: "Возраст", location: "Локация" },
  perStay: "за 6 дней / 5 ночей",
  introKicker: "Барабаны, музыка, дружба",
  introTitle: "Неделя, непохожая на обычное лето",
  introP1:
    "Хотите попробовать что-то новенькое и необычное для ваших детей? Чтобы они отключились от повседневной рутины и весело провели летнюю неделю? Приглашаем в барабанный лагерь DRUMSTARZ!",
  introP2:
    "Ребёнка ждёт красочная развлекательная программа и уникальные мероприятия каждый день, о которых позаботились наши лучшие преподаватели: игра на барабанах, музыка, спортивные активности, вкусная еда четыре раза в день, новые друзья и незабываемые эмоции.",
  introAlt: "Девочка играет на барабанной установке на летнем лагере DRUMSTARZ",
  experienceTitle: "Опыт не важен",
  experienceLead:
    "Уже через пять дней занятий под наставничеством профессиональных преподавателей каждый участник сыграет ритм под любимую песню — или даже собственное барабанное соло.",
  programKicker: "Программа лагеря",
  programTitle: "Как проходит неделя",
  programLead:
    "Шесть дней с понятным ритмом: занятия и спорт до обеда, вода и игры после, а вечером — костёр, диско или кино. Открывайте день за днём.",
  weatherNote: "Активности могут меняться и дополняться в зависимости от погоды.",
  videoKicker: "Смотрите сами",
  videoTitle: "Как это было",
  videoLead: "Кадры из прошлого барабанного лагеря DRUMSTARZ — та самая атмосфера, которая ждёт и в этом сезоне.",
  videoAria: "Барабанный лагерь DRUMSTARZ — видео",
  galleryKicker: "Прошлый лагерь в кадрах",
  galleryTitle: "Настоящие моменты, а не постановка",
  locationKicker: "Стоимость и локация",
  locationTitle: "470 € за неделю",
  locationLead:
    "Около 40 км от Риги. Отправление на автобусе — от барабанной школы по адресу Šarlotes 18a, в первый день лагеря.",
  locationPitch: "Игра на барабанах, музыка, спорт, вкусная еда четыре раза в день, новые друзья и незабываемые эмоции",
  mapCta: "Посмотреть на карте",
  locLabels: { dates: "Даты", age: "Возраст", meals: "Питание", address: "Адрес" },
  locValues: { dates: "5–10 июля 2026", age: "7–15 лет", meals: "4 раза в день" },
  included: [
    { title: "Проживание", text: "Неделя на территории «Turbas» — 6 дней / 5 ночей." },
    { title: "Питание", text: "Четыре раза в день." },
    { title: "Программа", text: "Барабаны, музыка, спорт и вечера — с преподавателями DRUMSTARZ." },
    { title: "Трансфер", text: "Автобус от барабанной школы Šarlotes 18a в первый день." },
  ],
  faqKicker: "Чаво",
  faqTitle: "Частые вопросы",
  cardKicker: "Летний лагерь",
  cardTitle: "470 € за всю неделю",
  cardLines: ["5–10 июля 2026 · дети 7–15 лет", "Проживание и 4-разовое питание", "Автобус от Šarlotes 18a, Rīga"],
  days: [
    {
      day: "День 1",
      date: "Воскресенье, 5 июля — заезд",
      note: null,
      items: [
        { time: "15:00", text: "Автобус от барабанной школы (Šarlotes 18a)" },
        { time: "16:00", text: "Заселение, регистрация, проверка снаряжения, инструктаж по технике безопасности" },
        { time: "17:30", text: "Полдник" },
        { time: "19:00", text: "Медицинский осмотр" },
        { time: "20:00", text: "Ужин, звонок родителям" },
        { time: "20:30", text: "Квест-знакомство с территорией лагеря" },
        { time: "22:00", text: "Отбой" },
      ],
    },
    {
      day: "День 2",
      date: "Понедельник, 6 июля",
      note: "Базовый распорядок дня, общий для всех будних дней лагеря:",
      items: [
        { time: "09:00", text: "Подъём, гигиена" },
        { time: "09:15", text: "Утренняя зарядка" },
        { time: "10:00", text: "Завтрак, свободное время" },
        { time: "10:40", text: "Барабаны, теория ритма, спорт и английский — по группам" },
        { time: "13:30", text: "Обед" },
        { time: "14:00", text: "Тихий час, звонок родителям" },
        { time: "15:00", text: "Купание и весёлые эстафеты" },
        { time: "16:00", text: "Полдник" },
        { time: "16:40", text: "Музыкальная викторина" },
        { time: "18:00", text: "Спортивная игра" },
        { time: "20:00", text: "Ужин, свободное время" },
        { time: "21:00", text: "Диско и drum jam session" },
        { time: "22:00", text: "Отбой" },
      ],
    },
    {
      day: "День 3",
      date: "Вторник, 7 июля",
      note: "09:00–16:00 — общий распорядок дня, как и накануне. Дальше:",
      items: [
        { time: "16:40", text: "Командная игра «Лесной кот и Тарзан»" },
        { time: "18:00", text: "Купание, водные игры, спокойный вечер" },
        { time: "20:00", text: "Ужин, свободное время" },
        { time: "21:00", text: "Вечер у костра: гитара и маршмеллоу" },
        { time: "22:00", text: "Отбой" },
      ],
    },
    {
      day: "День 4",
      date: "Среда, 8 июля",
      note: "09:00–16:00 — общий распорядок дня. Дальше:",
      items: [
        { time: "14:00", text: "Подготовка к концерту для родителей" },
        { time: "16:40", text: "Настольные игры или квест по территории лагеря" },
        { time: "20:00", text: "Ужин, пижамная вечеринка и кино" },
        { time: "22:00", text: "Отбой" },
      ],
    },
    {
      day: "День 5",
      date: "Четверг, 9 июля",
      note: "09:00–16:00 — общий распорядок дня. Вечером — главное событие недели:",
      items: [
        { time: "16:40", text: "Финальная подготовка к концерту" },
        { time: "19:00", text: "Концерт для родителей" },
        { time: "22:00", text: "Самая долгая ночь лагеря — отбой в 01:00" },
      ],
    },
    {
      day: "День 6",
      date: "Пятница, 10 июля — отъезд",
      note: null,
      items: [
        { time: "10:00", text: "Завтрак" },
        { time: "10:30", text: "Церемония награждения, дипломы" },
        { time: "11:00", text: "Сборы и отъезд домой" },
      ],
    },
  ],
  faq: [
    { q: "С какого возраста можно поехать в лагерь?", a: "Лагерь рассчитан на детей от 7 до 15 лет." },
    { q: "Нужен ли опыт игры на барабанах?", a: "Нет, предыдущий музыкальный опыт не важен — уже через пять дней занятий каждый участник сыграет ритм под свою любимую песню, а кто-то и собственное барабанное соло." },
    { q: "Что входит в стоимость?", a: "Проживание на территории лагеря, четырёхразовое питание, вся барабанная и развлекательная программа, работа преподавателей и автобус от барабанной школы в Риге." },
    { q: "Где проходит лагерь?", a: "По адресу «Turbas», Turkalne, Ogres nov., LV-5015 — около 40 км от Риги." },
    { q: "Как ребёнок доберётся до лагеря?", a: "Автобус отправляется от барабанной школы по адресу Šarlotes 18a в первый день лагеря, в 15:00." },
    { q: "Можно ли позвонить ребёнку во время лагеря?", a: "Да, в программе каждого дня есть звонок родителям — после тихого часа и после ужина." },
  ],
  alts: [
    "Мальчик играет на барабанной установке на летнем лагере",
    "Двое мальчиков играют на барабанах у домика лагеря",
    "Преподаватель лагеря играет на барабанной установке",
    "Дети купаются в реке на территории лагеря",
    "Барабанные установки на крытой сцене лагеря",
    "Дети на мостках у озера на территории лагеря",
    "Деревянный домик на территории лагеря",
  ],
  form: {
    kicker: "Осталось уточнить детали",
    title: "Записаться в лагерь",
    lead: "Оставьте заявку — мы уточним свободные места и все детали заезда.",
    bullets: ["5–10 июля 2026", "Дети 7–15 лет", "470 € за неделю · питание и трансфер включены"],
    formKicker: "Заявка в лагерь",
    formTitle: "Контакты родителя",
    formLead: "Имя, телефон и почта — обязательны. Возраст ребёнка можно указать сразу.",
    parentName: "Имя родителя",
    childAge: "Возраст ребёнка",
    wishes: "Пожелания и особенности здоровья",
    hint: "Перезвоним, чтобы подтвердить место и детали заезда.",
  },
};

const en: CampCopy = {
  metaTitle: "DRUMSTARZ drum camp — summer camp for kids 7–15",
  metaDescription:
    "DRUMSTARZ drum camp, 5–10 July 2026: drums, music, sport and new friends in nature 40 km from Riga. Ages 7–15, 470 € per week, meals and transfer included.",
  heroKicker: "Summer camp · 6 days by the lake",
  heroTitle: "Drumstarz drum camp",
  heroLead:
    "A week away from the usual routine: drums, music, sport and new friends — on a real stage among forest and lakes 40 km from Riga. Previous musical experience doesn’t matter.",
  cta: "Book the camp",
  factsTitle: "Camp in brief",
  facts: { dates: "5–10 July 2026", age: "7–15 years", location: "«Turbas», Turkalne, Ogres nov." },
  factLabels: { dates: "Dates", age: "Age", location: "Location" },
  perStay: "for 6 days / 5 nights",
  introKicker: "Drums, music, friendship",
  introTitle: "A week unlike an ordinary summer",
  introP1:
    "Want something new and unusual for your kids? A week off the daily routine, spent having fun? Welcome to the DRUMSTARZ drum camp!",
  introP2:
    "Kids get a colourful programme and unique activities every day, prepared by our best teachers: drums, music, sport, tasty meals four times a day, new friends and memories that last.",
  introAlt: "A girl playing drums at the DRUMSTARZ summer camp",
  experienceTitle: "Experience doesn’t matter",
  experienceLead:
    "After five days of lessons with professional teachers, every participant will play a groove to their favourite song — or even their own drum solo.",
  programKicker: "Camp programme",
  programTitle: "How the week goes",
  programLead:
    "Six days with a clear rhythm: lessons and sport before lunch, water and games after, and in the evening — a campfire, disco or a film. Open the days one by one.",
  weatherNote: "Activities may change or be added depending on the weather.",
  videoKicker: "See for yourself",
  videoTitle: "How it was",
  videoLead: "Footage from the last DRUMSTARZ drum camp — the same atmosphere waiting this season.",
  videoAria: "DRUMSTARZ drum camp — video",
  galleryKicker: "Last camp in frames",
  galleryTitle: "Real moments, not a setup",
  locationKicker: "Price and location",
  locationTitle: "470 € per week",
  locationLead: "About 40 km from Riga. The bus leaves from the drum school at Šarlotes 18a on the first day of camp.",
  locationPitch: "Drums, music, sport, tasty meals four times a day, new friends and unforgettable emotions",
  mapCta: "View on map",
  locLabels: { dates: "Dates", age: "Age", meals: "Meals", address: "Address" },
  locValues: { dates: "5–10 July 2026", age: "7–15 years", meals: "4 times a day" },
  included: [
    { title: "Stay", text: "A week on the «Turbas» grounds — 6 days / 5 nights." },
    { title: "Meals", text: "Four times a day." },
    { title: "Programme", text: "Drums, music, sport and evenings — with DRUMSTARZ teachers." },
    { title: "Transfer", text: "Bus from the drum school at Šarlotes 18a on day one." },
  ],
  faqKicker: "FAQ",
  faqTitle: "Common questions",
  cardKicker: "Summer camp",
  cardTitle: "470 € for the whole week",
  cardLines: ["5–10 July 2026 · kids 7–15", "Stay and 4 meals a day", "Bus from Šarlotes 18a, Rīga"],
  days: [
    {
      day: "Day 1",
      date: "Sunday, 5 July — arrival",
      note: null,
      items: [
        { time: "15:00", text: "Bus from the drum school (Šarlotes 18a)" },
        { time: "16:00", text: "Check-in, registration, gear check, safety briefing" },
        { time: "17:30", text: "Afternoon snack" },
        { time: "19:00", text: "Medical check" },
        { time: "20:00", text: "Dinner, call home" },
        { time: "20:30", text: "Getting-to-know-you quest around the camp" },
        { time: "22:00", text: "Lights out" },
      ],
    },
    {
      day: "Day 2",
      date: "Monday, 6 July",
      note: "The basic daily rhythm, shared by all weekday camp days:",
      items: [
        { time: "09:00", text: "Wake-up, hygiene" },
        { time: "09:15", text: "Morning exercise" },
        { time: "10:00", text: "Breakfast, free time" },
        { time: "10:40", text: "Drums, rhythm theory, sport and English — in groups" },
        { time: "13:30", text: "Lunch" },
        { time: "14:00", text: "Quiet hour, call home" },
        { time: "15:00", text: "Swimming and fun relays" },
        { time: "16:00", text: "Afternoon snack" },
        { time: "16:40", text: "Music quiz" },
        { time: "18:00", text: "Sport game" },
        { time: "20:00", text: "Dinner, free time" },
        { time: "21:00", text: "Disco and drum jam session" },
        { time: "22:00", text: "Lights out" },
      ],
    },
    {
      day: "Day 3",
      date: "Tuesday, 7 July",
      note: "09:00–16:00 — the shared daily rhythm, same as the day before. Then:",
      items: [
        { time: "16:40", text: "Team game “Forest Cat and Tarzan”" },
        { time: "18:00", text: "Swimming, water games, a calm evening" },
        { time: "20:00", text: "Dinner, free time" },
        { time: "21:00", text: "Campfire evening: guitar and marshmallows" },
        { time: "22:00", text: "Lights out" },
      ],
    },
    {
      day: "Day 4",
      date: "Wednesday, 8 July",
      note: "09:00–16:00 — the shared daily rhythm. Then:",
      items: [
        { time: "14:00", text: "Prep for the parents’ concert" },
        { time: "16:40", text: "Board games or a quest around the camp" },
        { time: "20:00", text: "Dinner, pyjama party and a film" },
        { time: "22:00", text: "Lights out" },
      ],
    },
    {
      day: "Day 5",
      date: "Thursday, 9 July",
      note: "09:00–16:00 — the shared daily rhythm. In the evening — the week’s main event:",
      items: [
        { time: "16:40", text: "Final concert prep" },
        { time: "19:00", text: "Concert for parents" },
        { time: "22:00", text: "The longest night of camp — lights out at 01:00" },
      ],
    },
    {
      day: "Day 6",
      date: "Friday, 10 July — departure",
      note: null,
      items: [
        { time: "10:00", text: "Breakfast" },
        { time: "10:30", text: "Awards ceremony, diplomas" },
        { time: "11:00", text: "Pack up and head home" },
      ],
    },
  ],
  faq: [
    { q: "From what age can kids go to camp?", a: "The camp is for children aged 7 to 15." },
    { q: "Do they need drumming experience?", a: "No — previous musical experience doesn’t matter. After five days of lessons every participant will play a groove to their favourite song, and some will play their own drum solo." },
    { q: "What’s included in the price?", a: "Stay on the camp grounds, four meals a day, the full drum and entertainment programme, teachers, and a bus from the drum school in Riga." },
    { q: "Where is the camp?", a: "«Turbas», Turkalne, Ogres nov., LV-5015 — about 40 km from Riga." },
    { q: "How does the child get to camp?", a: "The bus leaves from the drum school at Šarlotes 18a on the first day, at 15:00." },
    { q: "Can I call my child during camp?", a: "Yes — every day’s programme includes a call home after quiet hour and after dinner." },
  ],
  alts: [
    "A boy playing a drum kit at summer camp",
    "Two boys playing drums by a camp cabin",
    "A camp teacher playing a drum kit",
    "Kids swimming in the river on the camp grounds",
    "Drum kits on the covered camp stage",
    "Kids on a pier by the lake on the camp grounds",
    "A wooden cabin on the camp grounds",
  ],
  form: {
    kicker: "Just a few details left",
    title: "Book the camp",
    lead: "Leave a request — we’ll check free places and all arrival details.",
    bullets: ["5–10 July 2026", "Kids 7–15", "470 € per week · meals and transfer included"],
    formKicker: "Camp request",
    formTitle: "Parent contacts",
    formLead: "Name, phone and email are required. You can add the child’s age right away.",
    parentName: "Parent’s name",
    childAge: "Child’s age",
    wishes: "Notes and health details",
    hint: "We’ll call to confirm the place and arrival details.",
  },
};

export const CAMP: Record<Locale, CampCopy> = { lv, ru, en };
