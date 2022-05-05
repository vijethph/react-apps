import classes from "./UserDetail.module.css";
import Image from "next/image";

function UserDetail(props) {
  return (
    <section className={classes.detail}>
      <Image src={props.image} alt={props.title} width={128} height={128} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
}

export default UserDetail;
