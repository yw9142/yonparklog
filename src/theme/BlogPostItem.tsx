import React from "react";
import BlogPostItem from "@theme-original/BlogPostItem"
import Comment from "../components/Comment";
import Head from '@docusaurus/Head';

export default function BlogPostItemWrapper(props) {
    return (
        <>
			<Head>
				<script src="https://app.embed.im/snow.js" defer></script>
			</Head>
		
            <BlogPostItem {...props} />
            <Comment/>
        </>
    );
}