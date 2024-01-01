import styled from "styled-components";

export const TrHistoryTable = styled.table`
margin-left: auto;
margin-right: auto;
margin-top: 40px;
width: 400px;
& th,
& td {
    text-align: center;
border: 1px solid grey;

}
& th {
    background-color: lightgray
}
& td:hover {
    background-color: lightblue;  
}
`