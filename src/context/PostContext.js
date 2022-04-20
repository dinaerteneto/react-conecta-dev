import React, { createContext, useState, useContext } from "react"

export const PostContext = createContext()

export function PostProvider({ children }) {
    const [tags, setTags] = useState([])
    const [title, setTitle] = useState('')
    const [markdownText, setMarkdownText] = useState('')
    const [image, setImage] = useState(null)

    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
    }

    const handleChangeTagsChange = (event, values) => {
        setTags(values)
    }
    const handleChangeMarkdown = (event) => {
        setMarkdownText(event.currentTarget.value)
    }

    return (
        <PostContext.Provider
            value={{
                tags,
                setTags: handleChangeTagsChange,
                title,
                setTitle: handleChangeTitle,
                markdownText,
                setMarkdownText: handleChangeMarkdown,
                image,
                setImage,
            }}
        >
            {children}
        </PostContext.Provider>
    )
}

export function usePost() {
    const ctx = useContext(PostContext)
    const {
        tags,
        setTags,
        title,
        setTitle,
        markdownText,
        setMarkdownText,
        image,
        setImage,
    } = ctx

    return {
        tags,
        setTags,
        title,
        setTitle,
        markdownText,
        setMarkdownText,
        image,
        setImage,
    }
}