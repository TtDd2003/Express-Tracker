import { Typography, styled, Box, Card, CardContent } from '@mui/material';

const Container = styled(Box)`
  display: flex;
  justify-content: space-between;
  & > div {
    flex: 1;
    padding: 10px;
  }
`;

const Expense = ({ transactions }) => {
  const amount = transactions.map(trans => trans.amount);

  const income = amount.filter(item => item > 0) // This filters only the positive values from your amount array.
    .reduce((acc, item) => acc + item, 0) //This takes the filtered array [acc, item] and adds them all up.
    .toFixed(2);// deciaml places..

  const expenses = amount.filter(item => item < 0).reduce((acc, item) => acc + item, 0).toFixed(2);

  return (
    <Container>
      <Card>
        <CardContent>
          <Typography>Income</Typography>
          <Typography style={{ color: 'green' }}>₹{income}</Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography>Expenses</Typography>
          <Typography style={{ color: 'red' }}>₹{Math.abs(expenses)}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};


export default Expense;
