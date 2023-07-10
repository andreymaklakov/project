import { createSelector } from "@reduxjs/toolkit";

import { getUserAuthData } from "entitiess/User";
import { RoutePaths } from "shared/config/routeConfig/routeConfig";

import MainIcon from "shared/assets/icons/main.svg";
import AboutIcon from "shared/assets/icons/about.svg";
import ProfileIcon from "shared/assets/icons/profile.svg";
import ArticlesIcon from "shared/assets/icons/articles.svg";

import { SidebarItemType } from "../types/sidebar";

export const getSidebarItems = createSelector(getUserAuthData, (user) => {
  const sidebarItemList: SidebarItemType[] = [
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
  ];

  if (user) {
    sidebarItemList.push(
      {
        path: RoutePaths.profile + user?.id,
        text: "Profile",
        icon: ProfileIcon,
        authOnly: true,
      },
      {
        path: RoutePaths.articles,
        text: "Articles",
        icon: ArticlesIcon,
        authOnly: true,
      }
    );
  }

  return sidebarItemList;
});
