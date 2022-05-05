import UserItem from "./UserItem";
import classes from "./UserList.module.css";

function UserList(props) {
  return (
    <ul className={classes.list}>
      {props.users.map((meetup) => (
        <UserItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default UserList;
