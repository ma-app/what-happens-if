import { NAME_PROJECT } from "../constants";

export const typeLinkKey = {
  subMcaDo21: `links.${NAME_PROJECT}_subMcaDo21`,
  subMca2Do21: `links.${NAME_PROJECT}_subMca2Do21`,
  msgMcaDo21: `links.${NAME_PROJECT}_msgMcaDo21`,

  subMcaOt21: `links.${NAME_PROJECT}_subMcaOt21`,
  subMca2Ot21: `links.${NAME_PROJECT}_subMca2Ot21`,
  msgMcaOt21: `links.${NAME_PROJECT}_msgMcaOt21`,

  subGcaDo21: `links.${NAME_PROJECT}_subGcaDo21`,
  subGca2Do21: `links.${NAME_PROJECT}_subGca2Do21`,
  msgGcaDo21: `links.${NAME_PROJECT}_msgGcaDo21`,

  subGcaOt21: `links.${NAME_PROJECT}_subGcaOt21`,
  subGca2Ot21: `links.${NAME_PROJECT}_subGca2Ot21`,
  msgGcaOt21: `links.${NAME_PROJECT}_msgGcaOt21`,

  sub1All: `links.${NAME_PROJECT}_sub1All`,
  sub2All: `links.${NAME_PROJECT}_sub2All`,
  msgAll: `links.${NAME_PROJECT}_msgAll`,

  "app-id": `links${NAME_PROJECT}_.appID`,
};

export const typeLinkKeyNotify = {
  title: `${NAME_PROJECT}_title`,
  linkButton: `${NAME_PROJECT}_linkButton`,
  linkImg: `${NAME_PROJECT}_linkImg`,
  linkTelegram: `${NAME_PROJECT}_linkTelegram`,
  textButtonNotify: `${NAME_PROJECT}_textButtonNotify`,
};

export const tabsPagesData = (getGroupId) => [
  {
    keyItem: "subMcaDo21",
    title: "МЦА До 21 паблик",
    placeholder: "МЦА До 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subMcaDo21`]
    }`,
  },
  {
    keyItem: "subMca2Do21",
    title: "МЦА До 21 паблик",
    placeholder: "МЦА До 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subMca2Do21`]
    }`,
  },
  {
    keyItem: "msgMcaDo21",
    title: "МЦА До 21 рассылка",
    placeholder: "МЦА До 21 рассылка",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_msgMcaDo21`]
    }`,
  },
  {
    keyItem: "subMcaOt21",
    title: "МЦА От 21 паблик",
    placeholder: "МЦА От 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subMcaOt21`]
    }`,
  },
  {
    keyItem: "subMca2Ot21",
    title: "МЦА От 21 паблик",
    placeholder: "МЦА От 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subMca2Ot21`]
    }`,
  },
  {
    keyItem: "msgMcaOt21",
    title: "МЦА От 21 рассылка",
    placeholder: "МЦА От 21 рассылка",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_msgMcaOt21`]
    }`,
  },

  {
    keyItem: "subGcaDo21",
    title: "ЖЦА До 21 паблик",
    placeholder: "ЖЦА До 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subGcaDo21`]
    }`,
  },
  {
    keyItem: "subGca2Do21",
    title: "ЖЦА До 21 паблик",
    placeholder: "ЖЦА До 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subGca2Do21`]
    }`,
  },
  {
    keyItem: "msgGcaDo21",
    title: "ЖЦА До 21 рассылка",
    placeholder: "ЖЦА До 21 рассылка",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_msgGcaDo21`]
    }`,
  },

  {
    keyItem: "subGcaOt21",
    title: "ЖЦА От 21 паблик",
    placeholder: "ЖЦА От 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subGcaOt21`]
    }`,
  },
  {
    keyItem: "subGca2Ot21",
    title: "ЖЦА От 21 паблик",
    placeholder: "ЖЦА От 21 паблик",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_subGca2Ot21`]
    }`,
  },
  {
    keyItem: "msgGcaOt21",
    title: "ЖЦА От 21 рассылка",
    placeholder: "ЖЦА От 21 рассылка",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_msgGcaOt21`]
    }`,
  },

  {
    keyItem: "sub1All",
    title: "Подписка общая 1",
    placeholder: "Подписка общая 1",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_sub1All`]
    }`,
  },
  {
    keyItem: "sub2All",
    title: "Подписка общая 2",
    placeholder: "Подписка общая 2",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_sub2All`]
    }`,
  },
  {
    keyItem: "msgAll",
    title: "Рассылка общая",
    placeholder: "Рассылка общая",
    defaultValue: `https://vk.com/public${
      getGroupId[`${NAME_PROJECT}_msgAll`]
    }`,
  },
];

export const notifyMockData = (notifyLinks) => [
  {
    keyItem: "linkTelegram",
    title: "Ссылка для кнопки Telegram",
    placeholder: "Ссылка для кнопки Telegram",
    defaultValue:
      notifyLinks[`${NAME_PROJECT}_linkTelegram`] || "Укажите ссылку",
  },

  {
    keyItem: "title",
    title: "Текст",
    placeholder: "Текст с описанием",
    defaultValue: notifyLinks[`${NAME_PROJECT}_title`] || "Укажите текст",
  },

  {
    keyItem: "linkButton",
    title: "Ссылка для кнопки",
    placeholder: "Ссылка для кнопки",
    defaultValue: notifyLinks[`${NAME_PROJECT}_linkButton`] || "Укажите ссылку",
  },

  {
    keyItem: "linkImg",
    title: "Ссылка на картинку",
    placeholder: "Ссылка на картинку",
    defaultValue: notifyLinks[`${NAME_PROJECT}_linkImg`] || "Укажите ссылку",
  },

  {
    keyItem: "textButtonNotify",
    title: "Текст кнопки",
    placeholder: "Текст кнопки",
    defaultValue:
      notifyLinks[`${NAME_PROJECT}_textButtonNotify`] || "Укажите текст кнопки",
  },
];

// useEffect(() => {
//   ["links.results-year_title", "linksresults-year_title", "test"].forEach(
//     (item) => {
//       axios
//         .post("https://top1bot.ru/app-notify/delete", {
//           key: item,
//         })
//         .then(function (response) {
//           openAlert(`Вы удалили элемент ${item}`, "red");
//         })
//         .catch(function (error) {});
//     }
//   );
// });
