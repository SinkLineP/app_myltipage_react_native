import React from "react";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import {View} from "react-native";


export const BottomModalWindow = ({modalRef, children, id}) => {
  return (
    <Portal>
      <Modalize id={id} ref={modalRef} adjustToContentHeight={true}>
        <View style={{paddingTop: 10}}>
          {children}
        </View>
      </Modalize>
    </Portal>
  )
}
