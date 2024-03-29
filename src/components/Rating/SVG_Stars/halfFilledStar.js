// import React from "react";
// import Svg, {Path, Line, Rect} from "react-native-svg";
// import {View, StyleSheet} from "react-native";
//
// export default function HalfFilledStar({widthImage, heightImage, color}) {
//
//
//   return (
//     <View>
//       <Svg width={widthImage} height={heightImage} viewBox="0 0 96 91" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <Path d="M48 1.61804L58.7502 34.7037L58.8624 35.0491H59.2257H94.014L65.8697 55.4972L65.5758 55.7107L65.688 56.0562L76.4382 89.1418L48.2939 68.6938L48 68.4803L47.7061 68.6938L19.5618 89.1418L30.312 56.0562L30.4242 55.7107L30.1303 55.4972L1.98601 35.0491H36.7743H37.1376L37.2498 34.7037L48 1.61804Z" stroke={color === "" ? "#EAC25C" : color}/>
//         <Line x1="47.9923" y1="69" x2="47.9923" y2="3" stroke={color === "" ? "#EAC25C" : color} stroke-width="2.01533"/>
//         <Rect x="30" y="35" width="17" height="34" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="18" y="35" width="6" height="12" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="23" y="35" width="6" height="15" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="25" y="35" width="6" height="17" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="8.72738" y="39.605" width="6" height="26.7662" transform="rotate(-54.1363 8.72738 39.605)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="31.1899" y="55.0209" width="6" height="26.9772" transform="rotate(18.2693 31.1899 55.0209)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="39.2412" y="63.9273" width="6" height="15.0157" transform="rotate(54.6101 39.2412 63.9273)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="44.9926" y="63" width="6" height="26.9772" transform="rotate(54.6101 44.9926 63)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="26.2031" y="81.6292" width="1.79081" height="7.24119" transform="rotate(54.0995 26.2031 81.6292)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="22.3137" y="80" width="1.79081" height="7.24119" transform="rotate(18.6336 22.3137 80)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="22.3137" y="81" width="1.26495" height="7.24119" transform="rotate(18.6336 22.3137 81)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="24.3137" y="78" width="1.79081" height="7.24119" transform="rotate(18.6336 24.3137 78)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="26.3137" y="77" width="1.79081" height="7.24119" transform="rotate(18.6336 26.3137 77)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="3.77691" y="36.147" width="1.49617" height="8.66978" transform="rotate(-54.1363 3.77691 36.147)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="13.75" y="35" width="4.5" height="9" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="15" y="35" width="4.5" height="9" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="12" y="35" width="2.75" height="5.5" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="10" y="35" width="2.75" height="5.5" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="9" y="35" width="2.75" height="5.5" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="7" y="35" width="3" height="4" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="3" y="35" width="3" height="1" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="5" y="35" width="3" height="2" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="40.9226" y="23" width="6.45457" height="12.9091" transform="rotate(17.6897 40.9226 23)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="41.3447" y="22.1785" width="7.36372" height="14.7274" transform="rotate(1.4419 41.3447 22.1785)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="44.1748" y="17" width="3.47427" height="6.94854" transform="rotate(1.4419 44.1748 17)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="44.8109" y="11.6689" width="2.82163" height="5.64326" transform="rotate(1.4419 44.8109 11.6689)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="46.0953" y="8" width="1.89347" height="3.78695" transform="rotate(1.4419 46.0953 8)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="46.0953" y="6" width="1.89347" height="3.78695" transform="rotate(1.4419 46.0953 6)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="45.0953" y="9" width="1.89347" height="3.78695" transform="rotate(1.4419 45.0953 9)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="44.0953" y="13" width="1.89347" height="3.78695" transform="rotate(1.4419 44.0953 13)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="43.0953" y="15" width="1.89347" height="3.78695" transform="rotate(1.4419 43.0953 15)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="43.0953" y="18" width="1.89347" height="3.78695" transform="rotate(1.4419 43.0953 18)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="42.3903" y="18.3103" width="1.59071" height="3.18142" transform="rotate(1.4419 42.3903 18.3103)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="43.0801" y="20" width="1.59071" height="3.18142" transform="rotate(1.4419 43.0801 20)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="42.2689" y="19.1469" width="2.42312" height="4.84624" transform="rotate(1.4419 42.2689 19.1469)" fill={color === "" ? "#EAC25C" : color}/>
//         <Rect x="41.1219" y="21" width="2.42312" height="4.84624" transform="rotate(1.4419 41.1219 21)" fill={color === "" ? "#EAC25C" : color}/>
//       </Svg>
//
//     </View>
//   )
// }
//
// const stylesHalfFilledStar = StyleSheet.create({
//
// })
//
