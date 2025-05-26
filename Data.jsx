import { Typography, styled, Box,Divider, List, ListItem, ListItemText} from '@mui/material';

const Detail = styled(ListItem)
`margin-top:20px;`

const Data = ({t})=>     // here that t is variable of trans 
{
    const color = t.amount > 0 ? 'Green' : 'Red';
   return(
    <Detail style={{background: `${color}`, color:'#fff'}}>
        {/* <ListItemText primary={trans.text} secondary={`Amount: ₹${trans.amount}`} />*/}
        <ListItemText>{t.text}</ListItemText>
        <ListItemText>{t.amount}</ListItemText>
    </Detail>
   )
} 
export default Data;