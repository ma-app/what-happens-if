import React, { useState } from "react";
import { navigate } from "@reach/router";
import { Panel, PanelHeader, Button } from "@vkontakte/vkui";

import { TemplatePage, AnimationStars } from "../../components";
import "./Home.scss";

import { dataTemplatePages } from "../../helpers";
import { AdminPanel } from "../index";
import { LoveIcon, StarIcon } from "../../icons";

const Home = ({
  id,
  go,
  snackbar,
  fetchedUser,
  setTemplatePage,
  templatePage,
  appID,
  openAlert,
  getButtonStats,
  getStats,
  getGroupId,
  getRandomImg,
  gotToken,
  getPlatform,
  setUserToken,
}) => {
  const arrRainWeb = [20, 100, 150, 200, 250, 300, 350, 400, 450, 500, 550];
  const arrRainMobile = [20, 50, 80, 110, 140, 170, 210, 240, 270, 300, 330];
  const arrResult = getPlatform === "web" ? arrRainWeb : arrRainMobile;

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается

    return result;
  }

  const rainItems = (number) =>
    arrResult.map((item) => {
      return (
        <span
          style={{
            position: "absolute",
            left: `${item}px`,
            top: `-${getRandomInt(20)}px`,
            animation: `${getRandom(6, 10)}s rain linear infinite`,
            opacity: "0.6",
          }}
        >
          <LoveIcon key={item} className="rain-anim" />
        </span>
      );
    });

  return (
    <>
      {/* <div className="rain-container">{rainItems(1000)}</div> */}
      <AnimationStars />
      <div>
        <>
          {fetchedUser && (
            <>
              {[738505078, 219183172].includes(fetchedUser.id) ? (
                <Button
                  onClick={() => navigate("/admin-panel")}
                  className="admin-btn"
                >
                  Админ панель
                </Button>
              ) : (
                ""
              )}
            </>
          )}
        </>

        {dataTemplatePages.map((item, index) => {
          if (item.name === templatePage) {
            return (
              <TemplatePage
                key={index}
                icon={item.icon}
                header={item.header}
                title={item.title}
                description={item.description}
                buttonName={item.buttonName}
                next={item.next}
                setTemplatePage={setTemplatePage}
                fn={item.fn && item.fn}
                name={item.name}
                appID={appID}
                getGroupId={getGroupId}
                openAlert={openAlert}
                fetchedUser={fetchedUser}
                getRandomImg={getRandomImg}
                gotToken={gotToken}
                getPlatform={getPlatform}
                setUserToken={setUserToken}
              />
            );
          }
        })}
      </div>
    </>
  );
};

export { Home };
