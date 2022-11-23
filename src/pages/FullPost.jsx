import React from 'react'
import Post from '../components/Post'
import { useParams } from 'react-router-dom'
import axios from '../axios';


const FullPost = () => {
  const [data, setData] = React.useState();
  const [isLoading, setLoading] = React.useState(true);
  const {id} = useParams();

  React.useEffect(() => {
    axios.get(`/posts/${id}`).then(res => {
      setData(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      alert("Error when getting post")
    })
  }, [])

  if (isLoading) {
    return <Post isLoading={isLoading} isFullPost/>
  }
  

  return (
    <>
    <Post
    id={data.id}
    title={data.title}
    imageUrl={data.imageUrl}
    isEditable
    isFullPost/>
    <p>
        {data.description}
    </p>

    </>
  )
}

export default FullPost