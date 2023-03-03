import React from "react";

import Home from "./screens/home";
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (
      <>
        <Home />
        <StatusBar style="auto" />
      </>
  );
}
