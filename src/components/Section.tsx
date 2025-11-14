import type React from "react";
import type { FC } from "react";

type Props = {
  children: React.ReactNode;
};

const Section: FC<Props> = ({ children }) => {
  return <section className="grid grid-cols-12 gap-4 p-4">{children}</section>;
};
export default Section;
