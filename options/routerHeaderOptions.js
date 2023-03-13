import Header from "../shared/header";

export const setOptions = (titleText, backgroundColor, titleColor, isNested) => {
  return {
    headerTitle: (props) => <Header title={titleText} isNested={isNested} {...props} />,
    headerStyle: {
      backgroundColor: backgroundColor ? backgroundColor : "coral",
    },
    headerTintColor: titleColor ? titleColor : "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    }
  };
}
