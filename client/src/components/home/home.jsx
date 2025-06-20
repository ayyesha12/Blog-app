import { Grid } from '@mui/material'
import Banner from '../banner/Banner.jsx'
import Posts from './post/Posts.jsx'
import Categories from './categories.jsx'
const Home = () => {
  return (
    <div>
      <Banner />
      <Grid container>
        <Grid item lg={2} sm={2} xs={12}>
          <Categories />
        </Grid>

        <Grid item lg={10} sm={10} xs={12}>
          <Posts />
        </Grid>
      </Grid>
    </div>
  )
}
export default Home
