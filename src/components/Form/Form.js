import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { useHistory } from "react-router-dom";
import ChipInput from "material-ui-chip-input";


import useStyles from "./styles";
const Form = () => {
  const classes = useStyles();
  return (
    <div>Form</div>
  )
}

export default Form