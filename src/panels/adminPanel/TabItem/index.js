import React, { useState, useEffect, useReducer } from "react";
import { navigate } from "@reach/router";
import { Tabs, Input, Button } from "antd";
const { TabPane } = Tabs;

import "../AdminPanelMain.scss";

const TabItem = ({
  title,
  placeholder,
  onChangeAction,
  defaultValue,
  editLink,
  keyItem,
  className,
}) => {
  return (
    <div className={className || "admin-panel-container"}>
      <div className="title">{title}</div>
      <Input
        placeholder={placeholder}
        onChange={(e) => onChangeAction(e)}
        type="text"
        defaultValue={defaultValue}
      />
      <Button type="primary" onClick={() => editLink(keyItem)}>
        Изменить
      </Button>
    </div>
  );
};

export { TabItem };
