export const setOptions = (titleText, backgroundColor, titleColor, titleStyle) => {
  return {
    title: titleText ? titleText : "Empty",
    headerStyle: {
      backgroundColor: backgroundColor ? backgroundColor : "coral",
    },
    headerTintColor: titleColor ? titleColor : "#fff",
    headerTitleStyle: {
      fontWeight: titleStyle ? titleStyle : "bold",
    }
  };
}
