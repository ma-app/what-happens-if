import React, { useState } from "react";
import { Tabs, Input, Button } from "antd";
import { NAME_PROJECT } from "../../constants";
import "./NotifyPage.scss";

const NotifyPage = ({ notifyLinks }) => {
  return (
    <div className="notify-page">
      <div className="notify-page__img">
        <img
          className="img"
          src={notifyLinks[`${NAME_PROJECT}_linkImg`]}
          alt="img"
        />
      </div>
      <div className="notify-page__title">
        {notifyLinks[`${NAME_PROJECT}_title`]}
      </div>
      <div className="notify-page__button">
        <Button
          type="primary"
          block
          href={notifyLinks[`${NAME_PROJECT}_linkButton`]}
          target="_blank"
        >
          {notifyLinks[`${NAME_PROJECT}_textButtonNotify`] || "Открыть"}
        </Button>
      </div>
    </div>
  );
};

export { NotifyPage };
