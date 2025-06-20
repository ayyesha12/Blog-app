import { Box, Typography, styled } from '@mui/material'
import postimage from '../../../assets/post.png'
import { addElipsis } from '../../../utils/common-utils'

const Container = styled(Box)`
  border: 1px solid #d3cede;
  border-radius: 10px;
  margin: 20px 10px 10px 20px;
  width: 300px;
  height: 450px;
  display: flex;
  align-items: center;
  flex-direction: column;
  & > p {
    padding: 0px 5px 5px 5px;
  }
`
const Text = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 600;
  text-transform: uppercase;
`
const Image = styled('img')({
  width: '100%',
  borderRadius: '10px 10px 0px  0px',
  objectFit: 'cover',
  height: '250px'
})
const Heading = styled(Typography)`
  font-size: 15px;
  font-weight: 600;
  margin: 10px;
`
const Details = styled(Typography)`
  font-size: 14px;
`
const Post = ({ post }) => {
  return (
    <Container>
      <Image src={postimage}></Image>
      <Text>{post.categories}</Text>
      <Heading>{addElipsis(post.title, 20)}</Heading>
      <Text>{post.username}</Text>
      <Details>{addElipsis(post.description, 25)}</Details>
    </Container>
  )
}
export default Post
