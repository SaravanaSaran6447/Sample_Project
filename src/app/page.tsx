import { ReactElement } from "react";
import bg from "../../public/Login/bg.png";

export default function Home(): ReactElement {
  type NavProps = { title: string; icon: string };
  const Nav: NavProps[] = [
    {
      title: "Home",
      icon: "fa-house",
    },
    {
      title: "Info",
      icon: "",
    },
    {
      title: "Settings",
      icon: "",
    },
  ];
  return (
    <div className="w-full h-screen">
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full relative flex justify-center items-center"
      >
        <nav className="bg-transparent/5 hover:bg-transparent/10 transition-all absolute top-5 w-[80%] p-3 rounded-md">
          <div className="flex justify-between items-center">
            <div>Sample logo</div>
            <div>
              <ul className="flex space-x-2 items-center">
                {Nav.map((item, index) => {
                  return (
                    <li key={index} className="bg-red-500 px-2 rounded">
                      <i className="fa-solid fa-house"></i>
                      <span>{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
