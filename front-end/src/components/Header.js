import Image from "next/image";
import { Button } from "./ui/button";
import { YourAvatar } from "./YourAvatar";
import { FiPlus } from "react-icons/fi";

const role = [
  {
    title: "Dashboard",
    link: "/dashboard",
  },
  {
    title: "Records",
    link: "/Records",
  },
];

export const Header = () => {
  return (
    <div className="w-screen">
      <div className="flex justify-between w-5/6 py-4 m-auto">
        <div className="flex items-center gap-6">
          <Image src={"/ExpenseTrackerLogo.png"} width={40} height={40} />
          {role.map((item, index) => {
            return (
              <div key={index}>
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-6">
          <Button className="bg-[#0166FF] py-1 px-3 rounded-3xl h-fit flex gap-1 hover:bg-blue-700">
            <FiPlus className="text-xl" />
            <p className="text-base font-light"> Record</p>
          </Button>
          <YourAvatar />
        </div>
      </div>
    </div>
  );
};
