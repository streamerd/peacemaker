import Image from "next/image";
import Logo from "public/peace.png";
import DevLinks from "./DevLinks";
import UserInfo from "./cards/UserInfoCard";
import { LoginProps } from "@/utils/types";

const Header = ({ token, setToken }: LoginProps) => {
  return (
    <div className="app-header-container flex justify-between items-center p-4 bg-gray-900">
      <div className="flex items-center gap-2.5">
        <Image src={Logo} alt="logo" className="w-20" />
   


      <div className="flex items-center gap-2.5 ml-auto">
        <UserInfo token={token} setToken={setToken} />
      </div>
      </div>
    </div>
  );
};

export default Header;
