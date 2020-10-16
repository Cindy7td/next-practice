import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router'

const Post = () => {
    const router = useRouter()
    const { pid } = router.query
  
    return (
        <p>
            Post: {pid}
        </p>)
}
  
export default Post;