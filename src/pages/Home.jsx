import React from 'react'
import Grid from '@mui/material/Grid';
import Post from "../components/Post";

const Home = () => {
  return (
    <>
    <Grid container spacing={4}>
    <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title="Roast the code #1 | Rock Paper Scissors"
              imageUrl="https://yagla.ru/img/slogany-1.png"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                fullName: 'Keff',
              }}
              createdAt={'12 июня 2022 г.'}
              isEditable
             
            />
          ))}
        </Grid>
    </Grid>

    </>
  )
}

export default Home