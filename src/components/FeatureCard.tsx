import type { IconType } from "react-icons";

interface FeatureCardProps {
  Icon: IconType;
  title: string;
  description: string;
}

export default function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <div className="card w-18rem shadow-sm">
      <div className="card-body d-flex flex-column gap-2">
        <div className="d-flex align-items-center justify-content-center rounded-2 w-fit p-2 bg-primary-subtle">

          <Icon className="text-primary" />
          {/* <FaSearch className="text-primary" /> */}
        </div>
        <h6 className="card-title mb-0">{title}</h6>
        <p className="card-text fs-7">{description}</p>

      </div>
    </div>
  );
}