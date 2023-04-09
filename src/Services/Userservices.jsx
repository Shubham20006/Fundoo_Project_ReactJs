import React from "react";
import axios from "axios";

export const signin = async (obj) => {
  let response = await axios.post(
    "http://fundoonotes.incubation.bridgelabz.com/api/user/login",
    obj
  );
  return response;
};

export const signup = async (obj) => {
    let response = await axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",
      obj
    );
    return response;
  };