export interface Article {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleType[];
  blocks: ArticleBlock[];
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock;

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
  title?: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
}

export enum ArticleType {
  IT = "IT",
  SCIENCE = "SCIENCE",
  ECONOMICS = "ECONOMICS",
}

export enum ArticleBlockType {
  TEXT = "TEXT",
  CODE = "CODE",
  IMAGE = "IMAGE",
}
