import { Box, Typography, styled } from '@mui/material'
import bannerImage from '../../assets/banner.webp'

const Image = styled(Box)`
  background: url(${bannerImage}) center/65% repeat-x #0000;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const Heading = styled(Typography)`
  font-size: 80px;
  color: rgba(23, 107, 191, 0.71);
  line-height: 1;
  background: #ffff;
  opacity: 0.9;
  font-family: 'Lobster Two', sans-serif;
  margin-bottom: 5px;
`

const SubHeading = styled(Typography)`
  font-size: 40px;
  color: rgba(1, 8, 16, 0.67);
  line-height: 1;
  background: #ffff;
  opacity: 0.9;
  font-family: 'Lobster', sans-serif;
`
const Banner = () => {
  return (
    <Image>
      <Heading>Start Blogging</Heading>
      <SubHeading>Uncover the magic behind impactful blogging</SubHeading>
    </Image>
  )
}
export default Banner
