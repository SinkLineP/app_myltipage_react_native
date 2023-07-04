import React, {useState} from "react";
import {Text, StyleSheet, View} from "react-native";
import ContainerTab from "../../../../../../components/SearchTabs/ContainerTab/ContainerTab";
import RangeField from "../../../../../../components/RangeField/RangeField";


export function TabArea() {
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");

  const [minAreaKitchen, setMinAreaKitchen] = useState("");
  const [maxAreaKitchen, setMaxAreaKitchen] = useState("");


  return (
    <ContainerTab>
      <View style={styles.container}>
        <View style={styles.containerText}>
          <Text style={styles.labelText}>Площадь, м</Text>
          <Text style={styles.unitText}>2</Text>
        </View>


        <RangeField setMinValue={setMinArea} minValue={minArea} setMaxValue={setMaxArea} maxValue={maxArea} />
      </View>

      <View>
        <View style={styles.containerText}>
          <Text style={styles.labelText}>Площадь кухни, м</Text>
          <Text style={styles.unitText}>2</Text>
        </View>

        <RangeField setMinValue={setMinAreaKitchen} minValue={minAreaKitchen} setMaxValue={setMaxAreaKitchen} maxValue={maxAreaKitchen} />
      </View>
    </ContainerTab>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  containerText: {
    flexDirection: 'row',
  },
  labelText: {
    marginRight: 5,
  },
  unitText: {
    fontSize: 10,
    marginBottom: 10,
    left: -5
  },
});