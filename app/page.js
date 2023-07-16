import styles from "./page.module.scss";
import Image from "next/image";
import primaryLogo from "../assets/icons/paloma_logo_primary.svg";
export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Image
          src={primaryLogo}
          alt="paloma logo"
          priority={true}
          className={styles.primaryLogo}
        />
      </div>
      <nav className={styles.mainMenuNavigation}>
        <ul>
          <li>
            <a href="#">hear</a>
          </li>
          <li>
            <a href="#">latest</a>
          </li>
          <li>
            <a href="#">tour</a>
          </li>
          <li>
            <a href="#">see</a>
          </li>
          <li>
            <a href="#">shop</a>
          </li>
          <li>
            <a href="#">watch</a>
          </li>
          <li>
            <a href="#">personal</a>
          </li>
          <li>
            <a href="#">aid</a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
