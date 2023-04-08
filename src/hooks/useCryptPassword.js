import React from "react";
import bcrypt from "bcryptjs";


export const useCryptPassword = (password) => {
  const keyCrypt = bcrypt.genSaltSync(10);
  console.log(bcrypt.hashSync(password, keyCrypt));
  // return bcrypt.hashSync(password, keyCrypt);
}
