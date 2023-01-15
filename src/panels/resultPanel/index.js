import React, { useState, useEffect } from "react";
// import { Button } from "@vkontakte/vkui";
import axios from "axios";
import bridge from "@vkontakte/vk-bridge";
import cn from "classnames";
import "./ResultPanel.scss";
import { story } from "../../sharing-method";
import { nativeAds } from "../../ads";
import { Modal, Button } from "antd";
import { SettingLightIcon } from "../../icons";
import { ResultModal } from "./ResultModal/index";

import { APP_IMG_SHARING_STORIES, NAME_PROJECT } from "../../constants";
import { AnimationStars } from "../../components";
import { navigate } from "@reach/router";
import fileDownload from "js-file-download";

const ResultPanel = ({
  id,
  go,
  IMGresult,
  getPlatform,
  openAlert,
  snackbar,
  fetchedUser,
  getGroupId,
  appID,
  imgIndex,
  notifyLinks,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      nativeAds();
    }, 1500);
  }, []);

  function success() {
    Modal.success({
      title: "Ваши результаты",
      content: (
        <div>
          <p>Сообщений отправлено за год: 856 412</p>
          <p>Шагов за год: 1 642 286</p>
        </div>
      ),
      onOk() {},
    });
  }

  const showModal = () => {
    setIsModalVisible(true);
    setTimeout(() => {
      success();
    }, 60 * 10 * 1000);
  };

  const openNewApp = (appId) => {
    bridge
      .send("VKWebAppOpenApp", { app_id: appId, location: "new-app" })
      .then((res) => {})
      .catch((err) => {});
  };

  const handleDownload = (url, filename = "Свидетельство.jpg") => {
    console.log("url", url);
    axios
      .get(url, {
        responseType: "blob",
      })
      .then((res) => {
        fileDownload(res.data, filename);
      });
  };

  return (
    <>
      <AnimationStars />
      <div
        className={cn({
          "result-panel": true,
          web: getPlatform === "web",
        })}
      >
        {IMGresult}
        <Button
          className="buttons"
          onClick={() => handleDownload(APP_IMG_SHARING_STORIES[imgIndex])}
          style={{
            backgroundColor: "#528bcc",
            borderColor: "#528bcc",
          }}
        >
          Скачать файл
        </Button>
        <Button
          className="buttons small-text"
          onClick={() => navigate("/what-happens-if")}
          style={{
            backgroundColor: "#e64646",
            borderColor: "#e64646",
          }}
          // onClick={() => navigate("/")}
        >
          Повторить еще
        </Button>
        <a href="https://vk.com/wall-217456200?own=1" target="_blank">
          <Button
            className="buttons small-text"
            style={{
              backgroundColor: "#4bb34b",
              borderColor: "#4bb34b",
            }}
          >
            Узнай что будет если нажать на лайк
          </Button>
        </a>
      </div>
      <ResultModal
        setIsModalVisible={setIsModalVisible}
        isModalVisible={isModalVisible}
        showModal={showModal}
        notifyLinks={notifyLinks}
        success={success}
      />

      {/* <Modal
        title="Кол-во сообщений и шагов за 2022г"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <SettingLightIcon color="black" />
          <Timer expiryTimestamp={time} />
          <p>Чтобы узнать результат нажмите кнопку ниже</p>
          <Button
            type="primary"
            href={notifyLinks[`${NAME_PROJECT}_linkTelegram`]}
            target="_blank"
            onClick={handleOk}
          >
            Узнать
          </Button>
        </div>
      </Modal> */}
    </>
  );
};

export { ResultPanel };
