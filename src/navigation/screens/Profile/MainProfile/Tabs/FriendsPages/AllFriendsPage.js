import React, {useEffect, useState} from "react";
import {Dimensions, ScrollView, StyleSheet, Text, TextInput, View} from "react-native";
import CustomCard from "../../../../../../components/Card/CustomCard";
// import { SearchBar } from '@rneui/themed'
import {getAllUsers} from "../../../../../../db/getData";
import ImageViewer from "../../../../../../components/ImageViewer/ImageViewer";
import CardUser from "../../components/CardUser";


export default function AllFriendsPage() {
  const [searchValue, setSearchValue] = useState("");
  const [allUsers, setAllUsers] = useState([]);


  useEffect(() => {
    getAllUsers().then(r => {
      setAllUsers(r.users)
    })
  }, [])

  return (
    <>
      <CustomCard>
        {/*<SearchBar*/}
        {/*  placeholder="Найти друзей..."*/}
        {/*  containerStyle={{*/}
        {/*    backgroundColor: "rgba(199,250,255,0.74)",*/}
        {/*    borderRadius: 5,*/}
        {/*  }}*/}
        {/*  inputStyle={{*/}
        {/*    color: "#4d4d4d",*/}
        {/*  }}*/}
        {/*  platform={"android"}*/}
        {/*  showCancel={true}*/}
        {/*  lightTheme={true}*/}
        {/*  onChangeText={setSearchValue}*/}
        {/*  value={searchValue}*/}
        {/*/>*/}
      </CustomCard>

      <View style={{
        height: Dimensions.get('window').height - 180,
      }}>
        <CustomCard>
          <ScrollView style={stylesAllFriendsPage.container}>
            <View style={{
              backgroundColor: "#048f9d",
              borderRadius: 5,
              flexDirection: "column",
              gap: 10
            }}>
              {allUsers.map((user) => {
                return (
                  <CardUser key={user.id}>
                    <ImageViewer selectedImage={user.avatar} styles={{
                      width: 65,
                      height: 65,
                      borderRadius: 50,
                    }} />
                    <Text style={{
                      color: "#4a4848",
                      textAlignVertical: "center",
                      paddingLeft: 20,
                      fontWeight: "bold",
                      fontSize: 16
                    }}>Ник: {user.username}{`\n`}Возраст: {user.age}</Text>
                  </CardUser>
                );
              })}
            </View>
          </ScrollView>
        </CustomCard>
      </View>

    </>
  )
}

const stylesAllFriendsPage = StyleSheet.create({
  whiteSpace: {
    flexDirection: "column",
    gap: 10
  },
  container: {

  }
})