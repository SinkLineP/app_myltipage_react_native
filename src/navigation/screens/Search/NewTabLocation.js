//
//
// export const NewTabLocation = () => {
//   const attemptGeocodeAsync = async () => {
//     this.setState({ inProgress: true, error: null });
//     try {
//       let result = await Location.geocodeAsync({lat: 48, lon: 48});
//       this.setState({ result });
//     } catch (e) {
//       this.setState({ error: e.message });
//     } finally {
//       this.setState({ inProgress: false });
//     }
//   };
// }