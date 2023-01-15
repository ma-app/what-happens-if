import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { Tabs, Input } from "antd";
import { navigate } from "@reach/router";
import { Button } from "@vkontakte/vkui";
import "./TemplatePage.scss";

import { nativeAds } from "../../ads";
import {
  subscribeAppNotifications,
  returnMethod,
  getUserToken,
  returnAsyncMethod,
  publishPhotoInAlbum,
  subscribeMessageFromGroupDefault,
} from "../../bridge-method";

import { getActionByBirthday } from "../../helpers";

import { GROUP_ID } from "../../constants";

const TemplatePage = ({
  icon,
  header,
  title,
  description,
  buttonName,
  setTemplatePage,
  name,
  next,
  fn,
  appID,
  getGroupId,
  openAlert,
  fetchedUser,
  getRandomImg,
  getPlatform,
  setUserToken,
}) => {
  const [editTitle, setEditTitle] = useState(title);

  function addGroup(group_id, type, setTemplatePage, next) {
    bridge
      .send("VKWebAppJoinGroup", { group_id: group_id })
      .then(({ result }) => {
        if (type === "search") {
          setTemplatePage(next);
        }
      });
  }

  // const getAccess = async () =>
  //   setTimeout(async () => {
  //     const hasToken = await getUserToken(setUserToken, appID);
  //     returnMethod(2, subscribeAppNotifications);
  //     if (hasToken) {
  //       await publishPhotoInAlbum(hasToken);
  //     }
  //   }, 0);

  useEffect(() => {
    switch (name) {
      case "setting":
        nativeAds();
        addGroup(GROUP_ID, "", setTemplatePage, next);
        subscribeMessageFromGroupDefault(GROUP_ID, name, setTemplatePage, next);
        break;
        // case "like":
        // nativeAds(getPlatform);

        break;
      case "search":
        setTimeout(() => {
          setEditTitle("Идет загрузка.");
        }, 1000);
        setTimeout(() => {
          setEditTitle("Идет загрузка..");
        }, 1500);
        setTimeout(() => {
          setEditTitle("Идет загрузка...");
        }, 2000);
        setTimeout(() => {
          setTemplatePage(next);
        }, 2500);

        break;
      case "result":
        getRandomImg(0, 4);

        break;
      default:
        break;
    }
  }, []);

  const onChangeActiveButton = async (index) => {
    if (name === "result") {
      navigate("/result-panel");
    } else {
      if (name === "setting" && index === 0) {
        // await getAccess();
        setTemplatePage(next);
      } else if (name === "setting" && index === 1) {
        // returnMethod(2, subscribeAppNotifications);
        setTemplatePage(next);
      } else {
        setTemplatePage(next);
      }
    }
  };

  return (
    <div className="container">
      <div className="container__icon">{icon}</div>
      <div className="container__main">
        <div className="header">{header}</div>
        <div className="title">
          {name === "setting" && !title ? (
            <Input
              className="container__input"
              type="number"
              placeholder="Введите цифру"
              onChange={(e) => onChangeAction(e)}
              defaultValue={0}
            />
          ) : (
            editTitle
          )}
        </div>
        <div className="description">{description}</div>
      </div>

      <div className={`buttons ${buttonName.length > 1 ? "two-item" : ""}`}>
        {buttonName.length &&
          buttonName.map((item, index) => {
            return (
              <Button
                onClick={() => onChangeActiveButton(index)}
                className={`button-action ${
                  buttonName.length > 1 ? "two-button" : ""
                }`}
              >
                <span>{item}</span>
              </Button>
            );
          })}
      </div>
    </div>
  );
};

export { TemplatePage };
