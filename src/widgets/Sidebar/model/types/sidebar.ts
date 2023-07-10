import { SVGProps, VFC } from "react";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}
