import {
  StatsIcon,
  SettingLightIcon,
  CalendarIcon,
  Setting2Icon,
  HourglassIcon,
} from "../icons";
import { sharing } from "../sharing-method";
import { APP_IMG_SHARING_STORIES, APP_ID_DEFAULT } from "../constants";

export const dataTemplatePages = [
  {
    name: "/",
    icon: null,
    header: "Запомнили последнюю цифру лайка?",
    title: "",
    description: "",
    buttonName: ["Да"],
    next: "setting",
  },
  {
    name: "setting",
    icon: null,
    header: "Нужно ввести последнюю цифру лайка",
    title: ``,
    description: "",
    buttonName: ["Далее"],
    next: "search",
  },
  // {
  //   name: "like",
  //   icon: <Setting2Icon />,
  //   header: "Отлично",
  //   title: "Теперь я могу проверить твои данные",
  //   description: "",
  //   buttonName: ["Начать анализ"],
  //   next: "search",
  // },
  {
    name: "search",
    icon: <SettingLightIcon />,
    header: "Провожу анализ",
    title: "Идет загрузка",
    description: "",
    buttonName: [],
    next: "result",
  },
  {
    name: "result",
    icon: <CalendarIcon />,
    header: "Анализ завершён",
    title: "",
    description: "",
    buttonName: ["Узнать результат"],
    next: "/result-panel",
  },
];
