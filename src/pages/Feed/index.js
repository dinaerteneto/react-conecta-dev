import React, { useCallback, useEffect } from "react"
import { Box, Container, makeStyles } from "@material-ui/core"

import PostCard from "../../components/PostCard"
import Navbar from "./Navbar"
import axios from "../../utils/axios"

const useStyles = makeStyles((theme) => ({
  root: {

  }
}))

function Feed() {
  const classes = useStyles()
  const [posts, setPosts] = React.useState([])

  const getPosts = useCallback(async () => {
    const feed = await axios.get("/api/feed")
    setPosts(feed.data.posts)
  }, [setPosts])

  useEffect(() => { getPosts() }, [getPosts])

  return (
    <Container maxWidth="lg">
      <Box display="flex">
        <Navbar />
        <div className={classes.root}>
          {posts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </Box>
    </Container>
  )
}

export default Feed
