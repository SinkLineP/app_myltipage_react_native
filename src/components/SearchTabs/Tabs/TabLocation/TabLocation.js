// // import React from "react";
// // import {StyleSheet, Text} from "react-native";
// // import {Entypo} from "@expo/vector-icons";
// // import ContainerTab from "../../ContainerTab/ContainerTab";
// //
// //
// // export const TabLocation = ({title, iconName, iconSize, iconColor}) => {
// //   return (
// //     <ContainerTab>
// //       <Entypo style={stylesTabWithIcon.tabIcon} name={iconName} size={iconSize} color={iconColor} />
// //       <Text style={stylesTabWithIcon.tabTitle}>{title}</Text>
// //
// //     </ContainerTab>
// //   )
// // }
// //
// //
// // const stylesTabWithIcon = StyleSheet.create({
// //   tabTitle: {
// //     width: "80%",
// //     verticalAlign: "middle",
// //     fontWeight: "bold",
// //     fontSize: 18,
// //     color: "#323232"
// //   },
// //   tabIcon: {
// //     width: "20%",
// //     textAlign: "center"
// //   },
// // })
//
// const Wrapper = styled('div')({
//   position: 'relative',
//   width: '100%',
// })
//
// const Suggest = ({
//                    color,
//                    disabled,
//                    id,
//                    readOnly,
//                    placeholder,
//                    value,
//                    ymaps,
//                    onChange,
//                    onSuggest,
//                  }: SuggestProps) => {
//   const [items, setItems] = useState([])
//   const [toggle, setToggle] = useState(false)
//   const suggestRef = useRef()
//   const onUpdate = update(ymaps, setItems)
//   const content = []
//   content.push(
//     <Input
//       id={id}
//       key='smart-input'
//       disabled={disabled}
//       value={value}
//       onChange={
//         disabled ? null : targetValue => change(targetValue, onUpdate, onChange)
//       }
//       color={color}
//       readOnly={readOnly}
//       placeholder={placeholder}
//       onClick={() => setToggle(true)}
//     />,
//   )
//
//   if (
//     toggle &&
//     items.length > 0 &&
//     !(items[0] !== value && items.length === 1)
//   ) {
//     content.push(
//       <OnOutsideClick
//         key='smart-suggest'
//         target={suggestRef.current}
//         onOutsideClick={() => setToggle(false)}
//       >
//         <Dropdown>
//           <ContentLight borderRadius='s' width='large' noPopup>
//             <Column>
//               <Layout basis='12px' />
//               {items.map(s => (
//                 <SuggestView
//                   key={Math.random()}
//                   onClick={() =>
//                     select(s.value, onSuggest, onUpdate, onChange, setToggle)
//                   }
//                 >
//                   {s.displayName}
//                 </SuggestView>
//               ))}
//               <Layout basis='12px' />
//             </Column>
//           </ContentLight>
//         </Dropdown>
//       </OnOutsideClick>,
//     )
//   }
//
//   return <Wrapper ref={suggestRef}>{content}</Wrapper>
// }