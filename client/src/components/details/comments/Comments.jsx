import { Box, TextareaAutosize, Button, styled } from '@mui/material'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { DataContext } from '../../../context/DataProvider'
import { API } from '../../../service/api'
import Comment from './Comment'

const Container = styled(Box)`
  margin-top: 100px;
  display: flex;
`
const Image = styled('img')`
  width: 80px;
  bordrer-radius: 50%;
  object-fit: cover;
`
const Textarea = styled(TextareaAutosize)`
  width: 100%;
  height: 80px;
  font-size: 20px;
  margin: 0 20px;
`
const initialValues = {
  name: '',
  postId: '',
  comments: '',
  date: new Date()
}

export const Comments = ({ post }) => {
  const url = 'https://static.thenounproject.com/png/12017-200.png'
  const [comment, setComment] = useState(initialValues)
  const [comments, setComments] = useState([])
  const { account } = useContext(DataContext)
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const response = await API.getAllComments(post._id)
      if (response.isSuccess) {
        setComments(response.data)
      }
    }
    getData()
  }, [post, toggle])

  const handleChange = e => {
    setComment({
      ...comment,
      name: account.username,
      postId: post._id,
      comments: e.target.value
    })
  }

  const addComment = async e => {
    let response = await API.newComment(comment)
    if (response.isSuccess) {
      setComment(initialValues)
    }
    setToggle(prev => !prev)
  }
  return (
    <Box>
      <Container>
        <Image src={url} alt='dp' />
        <Textarea
          minRows={5}
          placeholder="What's on your mind?"
          value={comment.comments}
          onChange={e => handleChange(e)}
        />
        <Button
          variant='contained'
          color='primary'
          size='medium'
          onClick={e => addComment(e)}
          style={{ height: '20%', width: '10%' }}
        >
          Post
        </Button>
      </Container>
      <Box>
        {comments &&
          comments.length > 0 &&
          comments.map(comment => {
            return (
              <Comment
                key={comment._id}
                comment={comment}
                setToggle={setToggle}
              />
            )
          })}
      </Box>
    </Box>
  )
}
export default Comments
