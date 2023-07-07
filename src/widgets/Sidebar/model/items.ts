import { SVGProps, VFC } from "react";

import { RoutePaths } from "shared/config/routeConfig/routeConfig";
import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";

export interface SidebarItemType {
  path: string;
  text: string;
  icon: VFC<SVGProps<SVGSVGElement>>;
  authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
  {
    path: RoutePaths.main,
    text: "Main",
    icon: MainIcon,
  },
  {
    path: RoutePaths.about,
    text: "About",
    icon: AboutIcon,
  },
  {
    path: RoutePaths.profile,
    text: "Profile",
    icon: ProfileIcon,
    authOnly: true,
  },
  {
    path: RoutePaths.articles,
    text: "Articles",
    icon: ArticlesIcon,
    authOnly: true,
  },
];
