import Header from "../shared/Header/Header";

export const setOptions = (titleText, backgroundColor, titleColor, navigationRoute, height, width, sourceImage, showButton) => {
  return {
    headerTitle: (props) => <Header
      navigationRoute={navigationRoute}
      heightImage={height}
      iconSource={sourceImage}
      widthImage={width}
      showButton={showButton}
      titleColor={titleColor}
      title={titleText}
      {...props}
    />,
    headerStyle: {
      backgroundColor: backgroundColor ? backgroundColor : "coral",
    },
    headerTintColor: titleColor !== "" ? titleColor : "#fff",
    drawerLabel: titleText,
  };
}

export const drawerNavigatorOptions = (isShown) => {
  return {
    headerShown: isShown,
  }
}