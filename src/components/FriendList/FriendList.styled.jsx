import styled from "styled-components";



export const List = styled.ul`
margin: 30px;
`
export const FriendItem = styled.li`
display: flex;
align-items: center;
margin-left: auto;
margin-right: auto;
margin-bottom: 15px;
width: 250px;
padding: 25px;
background-color: rgb(230,236,239);
border-radius: 10px;
`
export const FriendStat = styled.span`
background-color: ${props => (props.$isOnline ? 'green' : 'red')};
  border-radius: 50%; 
  width: 10px;
  height: 10px;
display: block;
margin-right: 10px;

`
export const FriendAvatar = styled.img`
margin-right: 30px;

`
export const FriendName = styled.p`
font-size: 20px;
font-weight: 700;
color: darkgrey;
`