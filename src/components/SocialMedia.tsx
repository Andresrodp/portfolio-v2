// Note: Social Media Component
import React, { ReactNode } from "react";

interface ChipSocialMediaProps {
  children: ReactNode;
  route: string;
}

const ChipSocialMedia: React.FC<ChipSocialMediaProps> = ({
  children,
  route,
}) => {
  return <a href={route}>{children}</a>;
};

export default ChipSocialMedia;
