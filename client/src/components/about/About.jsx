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
const Babout = styled(Typography)`
  font-size: 80px;
  color: rgba(23, 107, 191, 0.71);

  display: flex;
  justify-content: center;
  font-family: 'Lobster', sans-serif;
  flex-direction: column;
  align-items: center;
`

const About = () => {
  return (
    <Box>
      <Image>
        <Heading>Start Blogging</Heading>
        <SubHeading>Uncover the magic behind impactful blogging</SubHeading>
      </Image>
      <Babout>
        About Us
        <Typography style={{ fontSize: '40px', color: 'rgba(1, 8, 16, 0.67)' }}>
          Welcome to my Blog-app, your space for sharing ideas, stories,
          knowledge, and creativity. <br />
          <br />
          We believe that everyone has a voice worth hearing — whether you're a
          tech enthusiast, travel lover, health advocate, or just someone who
          loves to write. <br />
          Our platform is built to connect people through meaningful content and
          spark conversations across different walks of life. <br />
          <br />
          <strong>What We Offer:</strong>
          <br />
          📝 Create & share your blogs with a simple editor
          <br />
          💬 Engage with others through comments
          <br />
          🔐 Secure login and personalized profiles
          <br />
          🌍 A growing community of curious minds
          <br />
          <br />
          Whether you're here to publish your first post or discover something
          new, we're excited to have you on this journey with us.
        </Typography>
      </Babout>
    </Box>
  )
}
export default About
