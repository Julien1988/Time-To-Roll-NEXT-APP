import Nav from "@/app/components/nav";

const Header = () => {
  return (
    <header>
      <Nav />
      <div className={"flex justify-center pt-5"}>
        <h1 className={"text-white text-6xl"}>Time To Roll</h1>
      </div>
    </header>
  );
};

export default Header;
