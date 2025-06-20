import { useState, useContext, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import {
  Box,
  FormControl,
  styled,
  InputBase,
  Button,
  TextareaAutosize
} from '@mui/material'
import { API } from '../../service/api'
import { DataContext } from '../../context/DataProvider'

import createpost from '../../assets/cp.png'

const Container = styled(Box)(({ theme }) => ({
  margin: '50px 100px',
  [theme.breakpoints.down('md')]: {
    margin: 0
  }
}))
const Image = styled('img')({
  width: '100%',
  height: '80vh',
  objectFit: 'cover'
})

const StyledFormControl = styled(FormControl)`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
`
const InputTextField = styled(InputBase)`
  flex: 1;
  margin: 0 30px;
  font-size: 25px;
`
const Textarea = styled(TextareaAutosize)`
  width: 100%;
  margin-top: 50px;
  font-size: 18px;
  border: none;
  &:focus-visible {
    outline: none;
  }
`
const initialPost = {
  title: '',
  description: '',
  username: '',
  categories: '',
  createdDate: new Date()
}

const CreatePost = () => {
  const navigate = useNavigate()
  const [post, setPost] = useState(initialPost)
  const { account } = useContext(DataContext)
  const location = useLocation()

  useEffect(() => {
    const category = location.search?.split('=')[1] || 'All' // get ?category=Movies
    setPost(prevPost => ({
      ...prevPost,
      categories: category || '',
      username: account?.username || ''
    }))
  }, [location.search, account])
  const savePost = async () => {
    await API.createPost(post)
    navigate('/')
  }

  const handleChange = e => {
    setPost({ ...post, [e.target.name]: e.target.value })
  }

  return (
    <Container>
      <Image src={createpost} alt='banner' />

      <StyledFormControl>
        <InputTextField
          onChange={e => handleChange(e)}
          name='title'
          placeholder='Title'
        />
        <Button onClick={() => savePost()} variant='contained' color='primary'>
          Publish
        </Button>
      </StyledFormControl>

      <Textarea
        minRows={5}
        placeholder='Tell your story...'
        name='description'
        onChange={e => handleChange(e)}
      />
    </Container>
  )
}

export default CreatePost
