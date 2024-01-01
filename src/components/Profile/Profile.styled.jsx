import styled from 'styled-components';

export const ProfileContainer = styled.div`
  width: 400px;
  margin: auto;
  padding: 20px;
  background-color: rgb(224, 224, 230);
`;
export const Description = styled.div`
  width: 200px;
  height: 250px;
  background-color: white;
  margin: auto;
  padding: 20px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
export const Avatar = styled.img`
  border-radius: 50%;
  width: 100px;
  margin: 0px auto;
`;
export const Name = styled.p`
  margin-top: 40px;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;
export const Tag = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: rgb(192, 192, 192);
`;
export const Location = styled.p`
  text-align: center;
  color: rgb(192, 192, 192);
`;
export const Stats = styled.ul`
  width: 241px;
  height: 70px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  background-color: rgb(235, 235, 235);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 14px;
  flex: 1 1 0%;
  text-align: center;
  &:not(:last-child) {
    border-right: 1px solid rgb(192, 192, 192);
  }
`;
export const Label = styled.span`
  color: rgb(192, 192, 192);
`;
export const Quantity = styled.span`
  font-size: 18px;
  font-weight: 700;
`;