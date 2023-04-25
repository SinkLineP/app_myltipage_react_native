import React from "react";


export const controllerTheme_TabNavigator_Title_Active = (theme, titleActiveColorDefault) => {
  if (theme === "dark-theme") {
    return "#fff";
  } else if (theme === "light-theme") {
    return "#000000";
  } else if (theme === "default-theme") {
    return titleActiveColorDefault;
  }
}

export const controllerTheme_TabNavigator_Title_NotActive = (theme, titleNotActiveColorDefault) => {
  if (theme === "dark-theme") {
    return "#a7a7a7";
  } else if (theme === "light-theme") {
    return "#6a6a6a";
  } else if (theme === "default-theme") {
    return titleNotActiveColorDefault;
  }
}

export const controllerTheme_TabNavigator_BackgroundColor = (theme, backgroundColorDefault) => {
  if (theme === "dark-theme") {
    return "#202020";
  } else if (theme === "light-theme") {
    return "#ffffff";
  } else if (theme === "default-theme") {
    return backgroundColorDefault;
  }
}
