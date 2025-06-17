import {AppBar,styled,Toolbar, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
const Component=styled(AppBar)`
   background: #6f8faf;
   color:#FFFFFF;
   font-size:30px;
   font-family:"Lobster Two", sans-serif;  
`
const Container=styled(Toolbar)`
    justify-content:center;
    & > a{
    padding:20px;
    color:#FFFFFF;
    text-decoration:none;
    }
`
const Header=()=>{
    return(
     <Component>
        <Container>
       <Link to='/'>Home</Link>
       <Link to='About'>About</Link>
       <Link to='Contact'>Contact</Link>
       <Link to='login'>LogOut</Link>
        </Container>
     </Component>
    )
}
export default Header;