import { Profile } from "./Profile";
import stats from '../data/data.json'
import friends from '../data/friends.json'
import  Statistics  from "./Statistics";
import  FriendList  from "./FriendsList";


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile/>
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
    </div>
  );
};
