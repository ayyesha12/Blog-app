import { useState,useEffect,useContext } from 'react';
import {Box,styled,Typography} from '@mui/material';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import {useParams,Link} from 'react-router-dom';
import {API} from '../../service/api';
import  detail from '../../assets/detailview.png'
import { DataContext } from '../../context/DataProvider';

const Container=styled(Box)` 
    margin: 100px 100px; 
`
const Image=styled('img')({

    width: '100%',
    height:'70vh',
    objectFit: 'cover',
})

const Title=styled(Typography)`
    font-size: 38px;    
    font-family:"Lobster", sans-serif;
    text-align: center;
    margin: 50px 0 10px 0;
    word-break: break-word;
    
    
    `
const EditIcon=styled(Edit)`
    margin: 5px;
    padding:5px;
    font-size: 40px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{    
        background: #f0f0f0;
    }
`
const DeleteIcon=styled(Delete)`
    margin: 5px;
    padding:5px;
    font-size: 40px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{    
        background: #f0f0f0;
    }
`
const Author=styled(Box) `
   color: #878787;
   margin: 20px 0;
   display: flex;


`
const Description=styled(Typography)`
    word-break: break-word;
    font-size: 25px;
    font-family: 'DM Serif Display', serif;

    `
const  DetailView=()=>{
    const [post,setPost] = useState({});


    const {id} = useParams();
    // Here you would typically fetch the details using the id
   const {account} = useContext(DataContext);
    useEffect(() => {
    const fecthData = async () => {
        //console.log("useEffect triggered with id:", id);
        let response=await API.getPostById(id );
       console.log("Response in DetailView:", response);

    if(response.isSuccess){
        setPost(response.data);
     }          
    }
     fecthData();
   },[])


    return (
        <Container>
          <Image src={detail} alt=""/>
          <Box  style={{float:'right'}}>
            {
                account.username === post.username && 
                <>
                <Link to={`/update/${post._id}`
                }> <EditIcon color='primary' /> </Link>
               
                 <DeleteIcon color='error' />
                </>
            }
           
          </Box>
             <Title>
                {post.title}
                </Title> 
                <Author>
                    <Typography>Author:<Box component='span' style={{fontWeight:600}}>    {post.username}</Box>
                    
                    </Typography>
                    <Typography style={{
                        marginLeft: 'auto',

                      
                    }}>
                        {post.createdDate ? new Date(post.createdDate).toDateString() : ''}
                    </Typography>
                </Author>
            <Description>
                {post.description}
            </Description>
        </Container>
    );
}
export default DetailView;