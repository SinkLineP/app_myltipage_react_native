import React, {useState} from "react";
import ContainerTab from "../../../../../../components/SearchTabs/ContainerTab/ContainerTab";
import ComponentSwitch from "../../../../../../components/ComponentSwitch/ComponentSwitch";


export default function TabExchange() {
  const [exchange, setExchange] = useState(false);

  return (
    <ContainerTab>
      <ComponentSwitch switchValue={exchange} label={"Обмен"} setSwitchValue={setExchange} />
    </ContainerTab>
  )
}