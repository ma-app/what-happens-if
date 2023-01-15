import React, { useState, useEffect, useReducer } from "react";
import { navigate } from "@reach/router";
import { Tabs, Input, Button } from "antd";
const { TabPane } = Tabs;

import { Icon20HomeOutline } from "@vkontakte/icons";
import { NAME_PROJECT } from "../../constants";
import { TabItem } from "./TabItem";
import { tabsPagesData, notifyMockData } from "../../helpers/index";

import "./AdminPanelMain.scss";

const AdminPanelMain = ({
  onChangeAction,
  editLinkGroup,
  getPlatform,
  getButtonStats,
  getGroupId,
  notifyLinks,
  editLinkNotify,
}) => {
  // const arrStats = [];

  // for (let key in getButtonStats) {
  //   if (!key.includes("SquidGameAPP")) {
  //     arrStats.push({ [key]: getButtonStats[key] });
  //   }
  // }

  const renderTabPage = tabsPagesData(getGroupId);
  const renderTabNotify = notifyMockData(notifyLinks);

  return (
    <Tabs
      defaultActiveKey="pages"
      centered
      tabPosition="top"
      style={{ marginTop: getPlatform !== "web" ? "50px" : "0" }}
    >
      <TabPane
        tab={
          <div
            className="admin-panel-container__icon"
            onClick={() => navigate(NAME_PROJECT)}
            // onClick={() => navigate("/")}
          >
            <Icon20HomeOutline />
          </div>
        }
        key="home"
      ></TabPane>
      <TabPane tab="Страницы" key="pages">
        {renderTabPage?.map((item, index) => {
          return (
            <TabItem
              key={item.keyItem}
              keyItem={item.keyItem}
              title={item.title}
              placeholder={item.placeholder}
              onChangeAction={onChangeAction}
              defaultValue={item.defaultValue}
              editLink={editLinkGroup}
              className={
                renderTabPage.length - 1 === index &&
                "admin-panel-container last"
              }
            />
          );
        })}
      </TabPane>

      <TabPane tab="Уведомления" key="notify">
        {renderTabNotify?.map((item, index) => {
          return (
            <TabItem
              key={item.keyItem}
              keyItem={item.keyItem}
              title={item.title}
              placeholder={item.placeholder}
              onChangeAction={onChangeAction}
              defaultValue={item.defaultValue}
              editLink={editLinkNotify}
              className={
                renderTabPage.length - 1 === index &&
                "admin-panel-container last"
              }
            />
          );
        })}
      </TabPane>
    </Tabs>
  );
};

export { AdminPanelMain };
