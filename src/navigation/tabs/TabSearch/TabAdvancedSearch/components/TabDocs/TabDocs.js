import React, {useState} from "react";
import ContainerTab from "../../../../../../components/SearchTabs/ContainerTab/ContainerTab";
import ComponentSwitch from "../../../../../../components/ComponentSwitch/ComponentSwitch";


export default function TabDocs() {
  const [isHavePhotos, setIsHavePhotos] = useState(false);
  const [isHavePlans, setIsHavePlans] = useState(false);

  return (
    <ContainerTab>
      <ComponentSwitch setSwitchValue={setIsHavePhotos} label={"Есть фотографии"} switchValue={isHavePhotos} />
      <ComponentSwitch setSwitchValue={setIsHavePlans} label={"Есть планировки"} switchValue={isHavePlans} />
    </ContainerTab>
  )
}