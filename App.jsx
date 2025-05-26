import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Balance from './components/Balance';
import Expense from './components/Expense';
import New from './components/New';
import Data from './components/Data';
import Transactions from './components/Transactions';
import {Typography, styled, Box} from '@mui/material';

const Header = styled(Typography)
`text-transform:uppercase;
  font-size:50px;
color: blue;
width:97%;
`
const Component = styled(Box)
`display:flex;
justify-content: space-between;
 background:#fff;
 padding:20px;
 border-radius: 20px;
 width:75%;
 margin: 10px auto;
`
const Inside= styled(Box)
`width:50%;
padding:20px;
`


function App() {
  const [transactions,setTransactions] = useState([
    {id:1,text:'Momos', amount:-60},
    {id:2,text:'Salary', amount:15000},
    {id:3,text:'Phone Cover', amount:-210},
    {id:4,text:'Bonus', amount:2000}
  ])
  return (
    <><div className='App'>
      <Header>Exress Tracker
      <Typography>All expenses are sorted </Typography></Header>
      <Component>
        <Inside>
          <Balance transactions={transactions} />
          <Expense transactions={transactions}/>
          <New setTransactions = {setTransactions}/>
        </Inside>
  
        <Inside>
          <Transactions transactions={transactions}/>{/* here transactions variable is extracted and passed as prpes*/}
        </Inside>
      </Component>
      </div>
    </>
  )
}

export default App
