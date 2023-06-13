import Header from "../shared/Header/Header";
import {useNavigation} from "@react-navigation/native";
import {AntDesign} from "@expo/vector-icons";
import {Pressable} from "react-native";

export const setOptions = (titleText, backgroundColor, titleColor, navigationRoute, height, width, sourceImage, showButton) => {
  const navigation = useNavigation();

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
    // headerLeft: () => {
    //   if (navigation.canGoBack() === true) {
    //     return (
    //       <Pressable style={{
    //         paddingLeft: 15
    //       }} onPress={() => {
    //         navigation.goBack();
    //       }}>
    //         <AntDesign name="arrowleft" size={24} color="white" />
    //       </Pressable>
    //     );
    //   }
    // }
  };
}

export const drawerNavigatorOptions = (isShown) => {
  return {
    headerShown: isShown,
  }
}