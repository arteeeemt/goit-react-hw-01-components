import PropTypes from 'prop-types';
import { FriendAvatar, FriendItem, FriendName, FriendStat } from './FriendList.styled';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <FriendItem>
    <FriendStat $isOnline={isOnline}></FriendStat>
    <FriendAvatar src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </FriendItem>
);
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
export default FriendListItem;