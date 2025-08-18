import {
  MenuIcon,
  NotificationIcon,
  CartIcon,
  ListIcon,
  ProfileIcon,
} from "./nav-icons";
import { useLocation, useNavigate } from "react-router";

export default function Navigation() {
  let location = useLocation();
  let navigate = useNavigate();

  const paths = ["/", "/notifications", "/cart", "/list", "/profile"];

  const icons = [
    <MenuIcon isActive={location.pathname === paths[0]} />,
    <NotificationIcon isActive={location.pathname === paths[1]} />,
    <CartIcon isActive={location.pathname === paths[2]} />,
    <ListIcon isActive={location.pathname === paths[3]} />,
    <ProfileIcon isActive={location.pathname === paths[4]} />,
  ];

  return (
    <div className="flex items-center justify-center gap-8 p-4.5">
      {icons.map((icon, index) => (
        <button
          key={index}
          className="cursor-pointer"
          onClick={() => navigate(paths[index])}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
