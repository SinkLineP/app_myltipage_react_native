import {ShowSelectedAddress} from "../../../components/SelectAddressForm/components/ShowSelectedAddress";
import SelectAddressForm from "../../../components/SelectAddressForm/SelectAddressForm";
import {useState} from "react";
import {useSelector} from "react-redux";
import {Text} from "react-native";
import ContainerTab from "../../../components/SearchTabs/ContainerTab/ContainerTab";


export default function SelectAddress({ route, navigation }) {
  const [valueLocation, setValueLocation] = useState("");
  const { typeLocation } = route.params;
  const isShowSettlements = useSelector(state => state.searchAddress.isShowSettlementsForm);
  const isShowStreet = useSelector(state => state.searchAddress.isShowStreetForm);
  const settlementStatus = useSelector(state => state.searchAddress.addressStatus)
  const streetStatus = useSelector(state => state.searchAddress.streetStatus)


  return (
    <>
      <ShowSelectedAddress
        valueLocation={valueLocation}
        typeLocation={typeLocation}
        isShowSettlements={isShowSettlements}
        setValueLocation={setValueLocation}
      />

      <SelectAddressForm
        setValueLocation={setValueLocation}
        isShowSettlements={isShowSettlements}
        typeLocation={typeLocation}
        valueLocation={valueLocation}
        navigation={navigation}
        isShowStreet={isShowStreet}
      />
    </>
  )
}
