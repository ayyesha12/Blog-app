import { Grid } from '@mui/material';
import Banner from '../banner/Banner.jsx'
import Categories from './categories.jsx';
const Home=()=>{

    return(
        <div>
        <Banner/>
        <Grid container> 
            <Grid item lg={2} sm={2} xs={2}>
        <Categories/>
         </Grid>
         <Grid container item xs={12} sm={10} lg={10}>
            posts
        </Grid>
        </Grid>
        </div>
    )
}
export default Home;
