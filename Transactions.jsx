import { Typography, styled, Box,Divider, List} from '@mui/material';
import Data from './Data';
const Transactions= ({ transactions })=>{
    return(
        <Box>
            <Typography varient='h5' style={{textAlign:'center',margin:'10px'}}> Transications History </Typography>
            <Divider/>
            <List>
                {transactions.map((trans) => ( // trans is passing parameter value 
                    <Data t={trans}  /> // here that trans variavles is passed for get data like (i) in array
                ))
                }
            </List>
        </Box>     
    )
}
export default Transactions;