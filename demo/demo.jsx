/*@flow*/
/*global document:false*/
import React from "react";
import { addLocaleData, IntlProvider } from "react-intl";
import Demo from "electrode-demo-index";

import * as libraryScope from "../src/index";

const locale = "en";
const messages = require(`../src/lang/${locale}.json`);
const localeData = require(`react-intl/locale-data/${locale}`);

addLocaleData(localeData);

const localScope = {IntlProvider, messages, locale};

const components = [
  {
    title: "HouseParty",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/guest-list.example"),
        noRender: true
      }
    ]
  },
  {
    title: "RenderFriend",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/render-friend.example"),
        noRender: true
      }
    ]
  },
  {
    title: "YourAwesomeComponent",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/myComponents.example"),
        noRender: true
      }
    ]
  }
];

const demo = () => (
  <Demo scope={localScope} libraryScope={libraryScope} components={components} />
);

export default demo;
