import type { IconType } from "react-icons"
import { formatStrValue } from "../utils/stringUtils";

interface UserIndicatorProps {
  Icon: IconType;
  label: string;
  value?: string | number;
}

export default function UserIndicator({ Icon, label, value }: UserIndicatorProps) {
  return (
    <div className="card w-100">
      <div className="card-body d-flex flex-column align-items-center gap-2 text-secondary">
        <Icon />

        <h6 className="card-title mb-0 text-body fw-bolder">{formatStrValue(value)}</h6>
        <p className="card-text fs-7 text-capitalize">{label}</p>

      </div>
    </div>
  )
}