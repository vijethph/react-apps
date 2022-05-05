import classes from "./MainNavigation.module.css";
import Link from "next/link";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Random Users</div>
      <nav>
        <ul>
          <li>
            <Link href="/">All Users</Link>
          </li>
          <li>
            <Link href="/new-user">Add New User</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
