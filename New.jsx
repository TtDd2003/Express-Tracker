import { Typography, styled, Box,  TextField ,Button} from '@mui/material';
import { useState } from 'react';

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  & > h6,& > Button, & > div{
  margin-top:30px;} 
`;
const New=({setTransactions})=>{
    const [text,setText] = useState('');
    const [amount,setAmounrt] = useState();
    const add = ()=>{
        const tr = {
            id: Math.floor(Math.random()* 1000000),
            text: text,
            amount: +amount
        }
        setTransactions(prevState => [tr,... prevState]);
    }

    return(
        <Container>
            <Typography variant="h6">New Transactions...</Typography>
            <TextField label ='enter Income' onChange={(e)=>setText(e.target.value)}/>
            <TextField label='Enter Expenses ' onChange={(e)=>setAmounrt(e.target.value)}/>
            <Button variant="contained" onClick={()=>add()}>Add Transactions</Button>
        </Container>
    )
}
export default New;