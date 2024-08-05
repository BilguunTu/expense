import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export const YourAvatar = () => {
  return (
    <Avatar className={"wid"}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
