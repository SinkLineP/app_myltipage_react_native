import React from "react";


export default function ShowAndHide({ searchResult, activeLocation, searchInput, children }) {
  if (searchResult.length !== 0) {
    if (JSON.stringify(activeLocation) === "{}") {
      return children;
    } else {
      if (activeLocation.value.length !== searchInput.length) {
        return children;
      }
    }
  }
}