import bridge from "@vkontakte/vk-bridge";
import axios from "axios";
import { navigate } from "@reach/router";
import {
  APP_ID_DEFAULT,
  APP_IMG_SHARING_STORIES,
  rootUrl,
  USER_ID,
} from "../constants";

const incrementCountButton = (type) => {
  axios
    .post(`${rootUrl}/edit`, {
      key: type,
      value: 1,
    })
    .then(function (response) {})
    .catch(function (error) {});
};

export function sharing(type, openAlert, e, urlSharing, typeState, appID) {
  switch (type) {
    case "share-link":
      shareLink();
      break;
    case "copy-link":
      copyLink(openAlert);
      break;
    case "story":
      story(urlSharing, appID);
      break;
    case "story-task":
      storyTask(urlSharing, openAlert, typeState, appID);
      break;
    case "share-wall":
      share(e, urlSharing);
      break;
    default:
      break;
  }
}

function shareLink() {
  const link = `https://vk.com/app${APP_ID_DEFAULT}`;
  bridge.send("VKWebAppShare", {
    link: link,
  });
}

// Копирование в буфер
function copyLink(openAlert) {
  const link = `https://vk.com/app${APP_ID_DEFAULT}`;
  bridge
    .send("VKWebAppGetClientVersion")
    .then((result) => {
      if (result.platform === "web" || result.platform === "mobile-web") {
        window.navigator.clipboard.writeText(link).then(
          () => {},
          () => {}
        );
      } else {
        bridge.send("VKWebAppCopyText", { text: link });
      }
    })
    .catch((error) => {});
}

//  Поделиться в истории
export function story(urlSharing) {
  const url = `https://vk.com/app${APP_ID_DEFAULT}`;

  bridge
    .send("VKWebAppShowStoryBox", {
      background_type: "image",
      url: urlSharing,
      attachment: {
        text: "go_to",
        type: "url",
        url: url,
      },
    })
    .then((res) => {
      // navigate("/result-panel");
      // incrementCountButton(`stats.buttonPage_${page}`);
    })
    .catch((err) => {
      navigate("/result-panel");
    });
}

//  Поделиться в истории по заданию
function storyTask(urlSharing, openAlert, typeState, appID) {
  const url = `https://vk.com/app${appID}`;
  bridge
    .send("VKWebAppShowStoryBox", {
      background_type: "image",
      url: urlSharing,
      attachment: {
        text: "go_to",
        type: "url",
        url: url,
      },
    })
    .then((res) => {
      typeState(true);
      // incrementCountButton("stats.button3");
    })
    .catch((err) => {
      openAlert(`Чтобы узнать результат, выполните данное задание`, "red");
      typeState(false);
    });
}

//  ДОБАВЛЕНИЕ РЕПОСТА НА СТЕНУ ПОЛЬЗОВАТЕЛЯ
function share(e, urlSharing) {
  e.preventDefault();

  const url = `https://vk.com/app${APP_ID_DEFAULT}`;
  const urlPhotoWall = `${urlSharing},https://vk.com/app${APP_ID_DEFAULT}`;
  const text = `Узнай если не боишься! Приложение - ${url}`;

  bridge.send("VKWebAppShowWallPostBox", {
    message: text,
    attachments: urlPhotoWall,
  });
}
