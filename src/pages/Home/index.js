import React from "react";
import { Route, Routes } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

import Header from "./Header";
import Feed from "../Feed";
import NewPost from "../Post/New";
import Post from "../Post";
import Profile from "../Profile";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    padding: 24,
  },
  toolbar: {
    minHeight: 64
  },
  box: {
    display: 'flex'
  }
})

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />

      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:username" element={<Profile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/post/new" element={<NewPost />} />
          <Route path="/post/:slug" element={<Post />} />
          <Route path="*" element={<div>Not found 404</div>} />
        </Routes>
      </main>
    </div>
  )
}

export default Home