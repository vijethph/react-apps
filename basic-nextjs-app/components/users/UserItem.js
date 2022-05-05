import Card from "../ui/Card";
import classes from "./UserItem.module.css";
import Image from "next/image";
import { useRouter } from "next/router";

function UserItem(props) {
  const router = useRouter();
  const showDetailsHandler = () => {
    // router object can be used to navigate programmatically
    router.push(`/${props.id}`); // this pushes a new page onto a stack of pages; equivalent of using the <Link> component
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <Image src={props.image} alt={props.title} width={128} height={128} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
    </li>
  );
}

export default UserItem;
