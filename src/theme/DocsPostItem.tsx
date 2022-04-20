import React from "react";
import DocsPostItem from "@theme-original/DocsPostItem"
import Comment from "../components/Comment";

export default function BlogPostItemWrapper(props) {
    return (
        <>
            <DocsPostItem {...props} />
            <Comment/>
        </>
    );
}