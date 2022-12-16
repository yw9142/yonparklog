import React from 'react';
import DocItem from '@theme-original/DocItem';
import Comment from "../components/Comment";
import Head from '@docusaurus/Head';

export default function DocItemWrapper(props) {

    return (
        <>
			<Head>
				<script src="https://app.embed.im/snow.js" defer></script>
			</Head>
          
			<DocItem {...props} />
            <Comment/>
        </>
    );
}