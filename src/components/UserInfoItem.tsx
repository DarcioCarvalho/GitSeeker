import type { IconType } from "react-icons";
import { formatStrValue } from "../utils/stringUtils";

interface UserInfoItemProps {
  Icon: IconType;
  information?: string;
}

export default function UserInfoItem({ Icon, information }: UserInfoItemProps) {
  return (
    <div className="d-flex align-items-center gap-1">
      <Icon />
      <span>{formatStrValue(information)}</span>
    </div>
  );
}