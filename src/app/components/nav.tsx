import Link from "next/link";

const Nav = () => {
  const classString: string =
    "text-white p-2 rounded hover:text-sky-500 hover:bg-white";
  return (
    <nav className="pt-4 pb-4">
      <ul className="flex auto justify-around flex-wrap">
        <li className={"p-2"}>
          <Link className={classString} href="/">
            Acceuil
          </Link>
        </li>
        <li className={"p-2"}>
          <Link className={classString} href="#">
            Qui sommes-nous ?
          </Link>
        </li>
        <li className={"p-2"}>
          <Link className={classString} href="#">
            Nos AP
          </Link>
        </li>
        <li className={"p-2"}>
          <Link className={classString} href="#">
            PlayLists
          </Link>
        </li>
        <li className={"p-2"}>
          <Link className={classString} href="#">
            Tipee
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Nav;
