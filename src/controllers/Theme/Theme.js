import React from "react";


// MenuSettings
export const controllerTheme_MenuSettings_TitleOption = (theme, titleColor) => {
  if (theme === "dark-theme") {
    return "#d8d8d8";
  } else if (theme === "light-theme") {
    return "#2e2e2e";
  } else if (theme === "default-theme") {
    return titleColor;
  }
}

export const controllerTheme_MenuSettings_TextContentOption = (theme, titleColor) => {
  if (theme === "dark-theme") {
    return "#ffffff";
  } else if (theme === "light-theme") {
    return "#000000";
  } else if (theme === "default-theme") {
    return titleColor;
  }
}

export const controllerTheme_MenuSettings_BackgroundColorOption = (theme, titleColor) => {
  if (theme === "dark-theme") {
    return "#323232";
  } else if (theme === "light-theme") {
    return "#ffffff";
  } else if (theme === "default-theme") {
    return titleColor;
  }
}



// RadioButton
export const controllerTheme_RadioButton_Title = (theme, titleColor) => {
  if (theme === "dark-theme") {
    return "#fff";
  } else if (theme === "light-theme") {
    return "#000000";
  } else if (theme === "default-theme") {
    return titleColor;
  }
}

export const controllerTheme_RadioButton_Background = (theme, backgroundColor) => {
  if (theme === "dark-theme") {
    return "#323232";
  } else if (theme === "light-theme") {
    return "#ffffff";
  } else if (theme === "default-theme") {
    return backgroundColor;
  }
}

export const controllerTheme_RadioButton_CircleUnFilled = (theme, backgroundColor) => {
  if (theme === "dark-theme") {
    return "#ffffff";
  } else if (theme === "light-theme") {
    return "#000000";
  } else if (theme === "default-theme") {
    return backgroundColor;
  }
}

export const controllerTheme_RadioButton_CircleFilled = (theme, backgroundColor) => {
  if (theme === "dark-theme") {
    return "#ffffff";
  } else if (theme === "light-theme") {
    return "#000000";
  } else if (theme === "default-theme") {
    return backgroundColor;
  }
}



// Tab.Navigator
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


// Stack.Navigator
export const controllerTheme_StackNavigator_Title = (theme, titleColor) => {
  if (theme === "dark-theme") {
    return "#ffffff";
  } else if (theme === "light-theme") {
    return "#000000";
  } else if (theme === "default-theme") {
    return titleColor;
  }
}

export const controllerTheme_StackNavigator_Background = (theme, backgroundColor) => {
  if (theme === "dark-theme") {
    return "#323232";
  } else if (theme === "light-theme") {
    return "#ffffff";
  } else if (theme === "default-theme") {
    return backgroundColor;
  }
}
