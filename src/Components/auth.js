import React from "react";

const auth = () => {
    if(localStorage.getItem("token")) return true;
    else return false;
}
export default auth;