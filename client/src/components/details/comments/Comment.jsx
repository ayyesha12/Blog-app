import { Typography, Box, styled } from '@mui/material'

import { useContext } from 'react'
import { DataContext } from '../../../context/DataProvider'
import { Delete } from '@mui/icons-material'
import { API } from '../../../service/api'

const Component = styled(Box)`
  margin-top: 30px;
  background: #f5f5f5;
  padding: 10px;
`
const Container = styled(Box)`
  display: flex;
  margin-bottom: 5px;
`
const Name = styled(Typography)`
  font-weight: 600;
  font-size: 18px;
  margin-right: 20px;
`
const StyledDate = styled(Typography)`
     color:#878787
     font-size:14px;
`
const DeleteIcon = styled(Delete)`
  margin-left: auto;
  font-size: 35px;
`
const Comment = ({ comment, setToggle }) => {
  const { account } = useContext(DataContext)

  const removeComment = async () => {
    let response = await API.deleteComment(comment._id)
    if (response.isSuccess) {
      setToggle(prev => !prev)
    }
  }

  return (
    <Component>
      <Container>
        <Name>{comment.name}</Name>
        <StyledDate>{new Date(comment.date).toDateString()}</StyledDate>
        {comment.name === account.username && (
          <DeleteIcon onClick={() => removeComment()} />
        )}
      </Container>
      <Box>
        <Typography>{comment.comments}</Typography>
      </Box>
    </Component>
  )
}
export default Comment
