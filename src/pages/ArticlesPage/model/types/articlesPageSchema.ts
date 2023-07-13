import { EntityState } from "@reduxjs/toolkit";

import { Article, ArticleType, ArticleView } from "entitiess/Article";
import { ArticleSortField } from "entitiess/Article";
import { SortOrder } from "shared/types";

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean;
  error?: string;
  view: ArticleView;
  page: number;
  limit: number;
  hasMore: boolean;

  //filtration
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  _inited: boolean;
}
