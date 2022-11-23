import React from 'react'
import Grid from '@mui/material/Grid';
import Post from "../components/Post";
import { useDispatch, useSelector } from 'react-redux';

import { fetchPosts } from '../redux/slices/posts';

const Home = () => {
  const dispatch = useDispatch();
  const {posts} = useSelector((state) => state.posts)
  
  const isPostLoading = posts.status == 'loading';

  React.useEffect(() => {
    dispatch(fetchPosts());
  }, [])
  return (
    <>
      <Grid container spacing={4}>
        <Grid xs={8} item>
            {(isPostLoading ? [...Array(5)] : posts.items).map(( obj, index) => 
            isPostLoading ? (
            <Post isLoading={true} key = {index}/>
            )  : (
              <Post
                id={obj.id}
                title={obj.title}
                imageUrl={obj.imageUrl}
                isEditable
              />
            ))}
        </Grid>
      </Grid>
    </>
  )
}

export default Home