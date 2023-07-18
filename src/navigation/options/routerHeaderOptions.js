import Header from "../../../../app_myltipage_react_native/src/shared/Header/Header";
import {useNavigation} from "@react-navigation/native";

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