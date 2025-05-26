import {Typography, styled, Box} from '@mui/material';
const BalanceText = styled(Typography)
`font-size:30px
margin-bottom:20px;
`
const Balance = ({ transactions }) => {
  const amount = transactions.map(trans => trans.amount);
  const total = amount.reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance : ₹ {total}</BalanceText>
    </Box>
  );
};

export default Balance;