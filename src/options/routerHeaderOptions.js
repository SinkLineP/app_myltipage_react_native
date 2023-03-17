import Header from "../shared/header";

export const setOptions = (titleText, backgroundColor, titleColor, showBar) => {
  return {
    headerTitle: (props) => <Header titleColor={titleColor} showBar={showBar} title={titleText} {...props} />,
    headerStyle: {
      backgroundColor: backgroundColor ? backgroundColor : "coral",
    },
    headerTintColor: titleColor ? titleColor : "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      backgroundColor: "red"
    },
    drawerLabel: titleText,
  };
}

export const drawerNavigatorOptions = (isShown) => {
  return {
    headerShown: isShown,
  }
}