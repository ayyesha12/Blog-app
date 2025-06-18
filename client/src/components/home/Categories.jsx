import {Button, styled,Table, TableBody, TableCell, TableHead, TableRow} from '@mui/material'
import { categories } from '../../constants/data';
import {Link,useSearchParams} from 'react-router-dom';

const StyledTable=styled(Table)`
  border:1px solid rgba(224,224,224,1);
  margin:10px;



`
const StyledButton=styled(Button)`
   margin:10px;
   width:95%;
   background:#6495ED;
   color:#fff;
   height:50px
`
const StyledLink=styled(Link)`
    font-family: 'Lobster', sans-serif;
   text-decoration:none;
   color:inherit;
   font-size:25px;
 
`

const Categories =()=>{
    const [searchParams]=useSearchParams();
    const category=searchParams.get('category'); 
     return(
    <>
    <StyledLink to={`/create?category=${category || ''}`}>
    < StyledButton variant='contained'>Create Blog</ StyledButton>
    </StyledLink>
    <StyledTable>
        
        <TableHead>
            <TableRow>
                <TableCell>
                    <StyledLink to ='/' >
                    All Categories
                    </StyledLink>
                </TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                categories.map(category=>(
                    <TableRow key={category.id}>
                <TableCell>
                    <StyledLink to={`/?category=${category.type}`}>
                    {category.type}
                    </StyledLink>
                </TableCell>
            </TableRow>
                ))
            }
        </TableBody>
    </StyledTable>
    </>
 )

}
export default Categories; 