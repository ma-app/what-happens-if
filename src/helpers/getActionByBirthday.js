import { MAN_GROUP_ID, WOMAN_GROUP_ID, NAME_PROJECT } from "../constants";
import bridge from "@vkontakte/vk-bridge";
import { returnAsyncFnMethod } from "../bridge-method";
const addGroup = async (group_id_1) => {
  return await bridge
    .send("VKWebAppJoinGroup", { group_id: group_id_1 })
    .then(({ result }) => {})
    .catch((err) => {});
};

const subscribeMessageFromGroupDefault = async (
  groupIDsubscription,
  type,
  setTemplatePage,
  next
) => {
  return await bridge
    .send("VKWebAppAllowMessagesFromGroup", {
      group_id: groupIDsubscription,
    })
    .then((res) => {
      if (type === "search") {
        setTemplatePage(next);
      }
    })
    .catch((err) => {
      if (type === "search") {
        setTemplatePage(next);
      }
    });
};

export const getActionByBirthday = async (
  fetchedUser,
  getGroupId,
  name,
  next,
  setTemplatePage
) => {
  const today = new Date();
  const year = today.getFullYear();

  const bdate = "bdate" in fetchedUser;

  const haveBirthdayYear = bdate
    ? fetchedUser?.bdate?.split(".")?.length === 3
    : false;
  const currentYearUser = haveBirthdayYear
    ? year - fetchedUser.bdate.split(".")[2]
    : 0; // год

  const getIdByKey = (key) => {
    return getGroupId[`${NAME_PROJECT}_${key}`] || MAN_GROUP_ID;
  };

  // 1 - woman, 2 - man
  if (fetchedUser?.sex === 1) {
    if (haveBirthdayYear && currentYearUser) {
      if (currentYearUser < 21) {
        // ЖЦА До 21 паблик
        // ЖЦА До 21 паблик
        // ЖЦА До 21 рассылка
        returnAsyncFnMethod([
          addGroup(getIdByKey("subGcaDo21")),
          addGroup(getIdByKey("subGca2Do21")),
          subscribeMessageFromGroupDefault(
            getIdByKey("msgGcaDo21"),
            name,
            setTemplatePage,
            next
          ),
        ]);
      } else {
        // ЖЦА От 21 паблик
        // ЖЦА От 21 паблик
        // ЖЦА От 21 рассылка
        returnAsyncFnMethod([
          addGroup(getIdByKey("subGcaOt21")),
          addGroup(getIdByKey("subGca2Ot21")),
          subscribeMessageFromGroupDefault(
            getIdByKey("msgGcaOt21"),
            name,
            setTemplatePage,
            next
          ),
        ]);
      }
    } else {
      // Общая подписка
      // Общая подписка
      // Общая рассылка

      returnAsyncFnMethod([
        addGroup(getIdByKey("sub1All")),
        addGroup(getIdByKey("sub2All")),
        subscribeMessageFromGroupDefault(
          getIdByKey("msgAll"),
          name,
          setTemplatePage,
          next
        ),
      ]);
    }
  } else {
    if (haveBirthdayYear && currentYearUser) {
      if (currentYearUser < 21) {
        // МЦА До 21 паблик
        // МЦА До 21 паблик
        // МЦА До 21 рассылка
        returnAsyncFnMethod([
          addGroup(getIdByKey("subMcaDo21")),
          addGroup(getIdByKey("subMca2Do21")),
          subscribeMessageFromGroupDefault(
            getIdByKey("msgMcaDo21"),
            name,
            setTemplatePage,
            next
          ),
        ]);
      } else {
        // МЦА От 21 паблик
        // МЦА От 21 паблик
        // МЦА От 21 рассылка
        returnAsyncFnMethod([
          addGroup(getIdByKey("subMcaOt21")),
          addGroup(getIdByKey("subMca2Ot21")),
          subscribeMessageFromGroupDefault(
            getIdByKey("msgMcaOt21"),
            name,
            setTemplatePage,
            next
          ),
        ]);
      }
    } else {
      // Общая подписка
      // Общая подписка
      // Общая рассылка
      returnAsyncFnMethod([
        addGroup(getIdByKey("sub1All")),
        addGroup(getIdByKey("sub2All")),
        subscribeMessageFromGroupDefault(
          getIdByKey("msgAll"),
          name,
          setTemplatePage,
          next
        ),
      ]);
    }
  }

  setTimeout(() => {
    setTemplatePage("result");
  }, 7_000);
};
