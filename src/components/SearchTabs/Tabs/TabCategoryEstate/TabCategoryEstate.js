import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {UpdatedShowSelectedCategories} from "./components/UpdatedShowSelectedCategories";
import {setActiveTab} from "../../../../store/Slices/categoryEstatesSlice";
import {Entypo, Ionicons, MaterialIcons} from "@expo/vector-icons";


const ShowIconForMenuCategory = ({activeTab, item, categoryID, activeIcon, notActiveIcon}) => {
  if (activeTab === item.category_id && item.category_id === categoryID) {
    return activeIcon;
  } else if (activeTab !== item.category_id && item.category_id === categoryID) {
    return notActiveIcon
  }
}

export const TabCategoryEstate = ({modalRef, setCurrentItem}) => {
  const activeTab = useSelector(state => state.categoryEstates.activeTab);
  const mainCategory = useSelector(state => state.categoryEstates.mainCategories);
  const allCategories = useSelector(state => state.categoryEstates.allCategories);
  const dispatch = useDispatch();

  if (mainCategory !== []) {
    return (
      <>
        <View style={stylesTabCategoryEstate.categoryContainer}>
          <View style={stylesTabCategoryEstate.categoryContent}>
            {
              mainCategory.map((item) => {
                return (
                  <TouchableOpacity
                    key={item.id}
                    style={activeTab === item.category_id ? stylesTabCategoryEstate.activeTab : stylesTabCategoryEstate.categoryTab}
                    onPress={() => {
                      dispatch(setActiveTab(item.category_id));
                      modalRef.current?.open();
                      setCurrentItem(item);
                    }}
                  >
                    <ShowIconForMenuCategory
                      categoryID={1}
                      item={item}
                      activeTab={activeTab}
                      activeIcon={<Ionicons name="home" size={24} color="white" />}
                      notActiveIcon={<Ionicons name="home" size={24} color="#323232" />}
                    />

                    <ShowIconForMenuCategory
                      categoryID={2}
                      item={item}
                      activeTab={activeTab}
                      activeIcon={<MaterialIcons name="apartment" size={25} color="white" />}
                      notActiveIcon={<MaterialIcons name="apartment" size={25} color="#323232" />}
                    />

                    <ShowIconForMenuCategory
                      categoryID={3}
                      item={item}
                      activeTab={activeTab}
                      activeIcon={<Entypo name="shop"  size={24} color="white" />}
                      notActiveIcon={<Entypo name="shop"  size={24} color="#323232" />}
                    />
                    {/*{activeTab === item.category_id && item.category_id === 1 ? (<Ionicons name="home-outline" size={22} color="white" />) : (<Ionicons name="home-outline" size={22} color="black" />)}*/}
                    {/*{activeTab === item.category_id && item.category_id === 2 ? (<Ionicons name="home-outline" size={22} color="white" />) : (<Ionicons name="home-outline" size={22} color="black" />)}*/}
                    {/*{activeTab === item.category_id && item.category_id === 3 ? (<Ionicons name="home-outline" size={22} color="white" />) : (<Ionicons name="home-outline" size={22} color="black" />)}*/}
                    <Text style={activeTab === item.category_id  ? stylesTabCategoryEstate.active : stylesTabCategoryEstate.categoryTitle}>{item.title}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>

          <View style={stylesTabCategoryEstate.containerSelectedCheckBox}>
            <UpdatedShowSelectedCategories dispatch={dispatch} allCategories={allCategories} />
          </View>
        </View>
      </>
    )
  }
}

const stylesTabCategoryEstate = StyleSheet.create({
  categoryContent: {
    backgroundColor: "#fff",
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    marginBottom: 5,
    paddingLeft: 10,
    paddingRight: 10,

  },
  containerModal: {
    flex: 1,
    backgroundColor: "#C9D6DF",
    alignItems: "center",
    justifyContent: "center",
  },
  showSelectedCategory: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: "#323232"
  },
  categoryContainer: {
    backgroundColor: "#fff",
    marginTop: 6
  },
  containerSelectedCheckBox: {
    borderTopWidth: 1,
    borderColor: "#f2f2f2",
    paddingVertical: 10,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
  },
  checkedEstatesContainer: {
    backgroundColor: "#f2f2f2",
    borderRadius: 50,
    marginRight: 5,
    marginVertical: 3,
    flexDirection: "row"
  },
  activeTab: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    borderRadius: 10,
    height: 90,
    paddingTop: 10,
    backgroundColor: "tomato",
    alignItems: "center"
  },
  categoryTab: {
    width: "30%",
    borderWidth: 1,
    borderColor: "#f4f4f4",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    height: 90,
    paddingTop: 10,
    alignItems: "center"
  },
  categoryIcon: {
    textAlign: "center"
  },
  active: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: 10,
    color: "#ffffff",
    fontWeight: "bold"
  },
  categoryTitle: {
    textAlign: "center",
    fontSize: 12,
    paddingTop: 10,
    color: "#323232",
    fontWeight: "bold"
  },
})