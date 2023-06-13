import {ShowSelectedAddress} from "../../../components/SelectAddressForm/components/ShowSelectedAddress";
import SelectAddressForm from "../../../components/SelectAddressForm/SelectAddressForm";
import {useState} from "react";
import {useSelector} from "react-redux";


export default function SelectAddress({ route, navigation }) {
  const [valueLocation, setValueLocation] = useState("");
  const { typeLocation } = route.params;
  const isShowSettlements = useSelector(state => state.searchAddress.isShowSettlementsForm);


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
      />
    </>
  )
}
