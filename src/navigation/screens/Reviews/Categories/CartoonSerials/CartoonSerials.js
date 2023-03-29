import React, {useState} from "react";
import ShowReviewContent from "../../../../../components/showReviewContent/showReviewContent";


function CartoonSerials({ navigation }) {
  const [reviews, setReviews] = useState([]);

  return (
    <>
      <ShowReviewContent navigation={navigation} reviews={reviews} setReviews={setReviews} imageBackground={""} />
    </>
  )
}

export default CartoonSerials;