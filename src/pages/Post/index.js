import axios from "../../utils/axios"
import React, { useCallback, useState, useEffect } from "react"
import PostView from "../../components/PostView"
import { useParams } from "react-router-dom"

function Post() {
  const [post, setPosts] = useState([])
  const param = useParams()

  const getPost = useCallback(async () => {
    const post = await axios.get(`/api/post/${param.slug}`)
    setPosts(post.data)
  }, [setPosts])

  useEffect(() => { getPost() }, [getPost])

  return <PostView post={post} />
}

export default Post