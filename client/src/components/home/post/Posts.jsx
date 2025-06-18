import{useState ,useEffect}from'react';
import {API} from '../../../service/api';
import {Box} from '@mui/material';
import {Grid} from '@mui/material';
import { useSearchParams,Link }  from 'react-router-dom';
//components
import Post from './Post';
const Posts =()=>{
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');     
    const [posts, setPosts] = useState([]);
   useEffect(() => {
    const fetchData = async () => {
        const response = await API.getAllPosts({category: category || ''});
        if (response.isSuccess) {
            setPosts(response.data);                
        }
    };

    fetchData();
}, [category]);

   
   
      return (
        <Grid container spacing={2}>
            {
                posts && posts.length > 0 ? (
                    posts.map(post => (
                        <Grid item lg={3} sm={4} xs={12} key={post._id}>
                            <Link to={`/details/${post._id}`} style={{ textDecoration: 'none',color: 'inherit'  }}>
                          
                            <Post post={post} />
                              </Link>
                        </Grid>
                    ))
                ) : (
                    <Box
                        style={{
                            color: '#878787',
                            margin: '30px auto',
                            fontSize: '20px',
                        }}
                    >
                        No Posts Available
                    </Box>
                )
            }
        </Grid>
    );
};
export default Posts;