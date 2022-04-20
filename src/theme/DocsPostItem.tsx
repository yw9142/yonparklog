import React from 'react';
import DocItem from '@theme-original/DocItem';
import Comment from "../components/Comment";

export default function DocsPostItemWrapper(props) {
    return (
        <>
            <DocItem {...props} />
            <Comment/>
        </>
    );
}