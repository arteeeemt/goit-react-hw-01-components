import data from '../data/user.json'

import css from '../css/Profile.module.css'
export const Profile = (p) =>{
    return (<div class={css.profile}>
    <div className="description">
      <img
        src={data.avatar}
        alt="User avatar"
        className={css.avatar}
      />
      <p className={css.username}>{data.username}</p>
      <p className={css.tag}>@{data.tag}</p>
      <p className={css.location}>{data.location}</p>
    </div>
  
    <ul className={css.stats}>
      <li className ={css.list}>
        <span className="label">Followers</span>
        <span className="quantity">{data.stats.followers}</span>
      </li>
      <li className ={css.list}>
        <span className="label">Views</span>
        <span className="quantity">{data.stats.views}</span>
      </li>
      <li className ={css.list}>
        <span className="label">Likes</span>
        <span className="quantity">{data.stats.likes}</span>
      </li>
    </ul>
  </div>);}