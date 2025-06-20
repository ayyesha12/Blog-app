import { Box, Typography, styled } from '@mui/material'
import bannerImage from '../../assets/banner.webp'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

// ---------- Styled Components ----------
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

const PContact = styled(Box)`
  padding: 50px 20px;
  text-align: center;
`

const Title = styled(Typography)`
  font-size: 60px;
  color: rgba(23, 107, 191, 0.71);
  font-family: 'Lobster', sans-serif;
  margin-bottom: 20px;
`

const Text = styled(Typography)`
  font-size: 18px;
  max-width: 700px;
  color: rgba(1, 8, 16, 0.67);
  margin: 0 auto 20px auto;
  line-height: 1.6;
`

const IconLink = styled('a')`
  color: inherit;
  text-decoration: none;
  margin-top: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 18px;
`

// ---------- Component ----------
const Contact = () => {
  return (
    <Box>
      <Image>
        <Heading>Start Blogging</Heading>
        <SubHeading>Uncover the magic behind impactful blogging</SubHeading>
      </Image>

      <PContact>
        <Title>Contact</Title>

        <Text>
          I'd love to hear from you! Whether it's a question, feedback, or a
          collaboration idea — feel free to reach out.
        </Text>
        <IconLink href='mailto:ayeshamemon.bscsf22@iba-suk.edu.pk'>
          <EmailOutlinedIcon fontSize='large' />
          ayeshamemon.bscsf22@iba-suk.edu.pk
        </IconLink>

        <br />

        <IconLink
          href='https://www.linkedin.com/in/ayesha-memon-b5066b282'
          target='_blank'
          rel='noopener noreferrer'
        >
          <LinkedInIcon fontSize='large' /> Connect on LinkedIn
        </IconLink>
      </PContact>
    </Box>
  )
}

export default Contact
