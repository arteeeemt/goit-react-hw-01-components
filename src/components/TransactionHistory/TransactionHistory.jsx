import { TrHistoryTable } from "./TransactionHistory.styled";

const TransactionHistory = ({items}) =>{
  return (
     <TrHistoryTable>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
   
    <tbody>
     {items.map(({id, type, amount, currency}) => (
      <tr key={id}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
      </tr>
     
      ))}
    </tbody>
   </TrHistoryTable>
   );

};
export default TransactionHistory