import React, {useState} from "react";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";


function CartoonSerials({ navigation }) {
  const [reviews, setReviews] = useState([
    {key: 1, title: "", body: "", rating: 0.0, releaseDate: "", img: "" },
    {key: 2, title: "", body: "", rating: 0.0, releaseDate: "", img: "" },
    {key: 3, title: "", body: "", rating: 0.0, releaseDate: "", img: "" }
  ])

  return (
    <>
      <ShowReviewContent navigation={navigation} reviews={reviews} setReviews={setReviews} imageBackground={""} />
    </>
  )
}

export default CartoonSerials;