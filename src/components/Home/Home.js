import React, { useState, useEffect } from "react";
import {
  Container,
  Grow,
  Grid,
  AppBar,
  TextField,
  Button,
  Paper,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";

// import { getPostsBySearch } from "../../actions/posts";
import { getPosts } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
// import Pagination from "../Pagination";
import useStyles from "./styles";

const Home = () => {

  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          className={classes.mainContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
