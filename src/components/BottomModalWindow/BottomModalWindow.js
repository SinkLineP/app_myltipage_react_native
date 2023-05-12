import React from "react";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";


export const BottomModalWindow = ({modalRef, children, id}) => {
  return (
    <Portal>
      <Modalize id={id} ref={modalRef} adjustToContentHeight={true}>
        {children}
      </Modalize>
    </Portal>
  )
}
