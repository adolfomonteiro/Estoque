import { MenuItems } from "@/app/utils/constants/menuItems";
import { Link } from "react-router-dom";
import { Text } from "react-native";

export const DashboardMenu = () => {
  return (
    <header className="bg-neutral-800 px-20 py-3 flex items-center justify-between w-full">
      <nav className="w-full flex items-center">
        <Link to="/">
          <Text>Logo</Text>
        </Link>

        <ul className="ml-8">
          {MenuItems.map((item) => (
            <Link
              className="font-[500] text-sm cursor-pointer text-white px-4 hover:underline hover:underline-offset-8 "
              to={item.path}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </nav>

      <>
            <Link to="/auth/login">Sair</Link>
      </>
    </header>
  );
};
