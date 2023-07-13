import type { Meta, StoryObj } from "@storybook/react";

import { Theme } from "app/providers/ThemeProvider";
import { Article, ArticleView } from "entitiess/Article";
import {
  ArticleBlockType,
  ArticleType,
} from "entitiess/Article/model/types/article";
import StoreDecorator from "shared/config/storybook/StoreDecorator/StoreDecorator";
import ThemeDecorator from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import ArticlesPage from "./ArticlesPage";

const meta: Meta<typeof ArticlesPage> = {
  title: "pages/Article/ArticlesPage",
  component: ArticlesPage,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesPage>;

const article: Article = {
  id: "1",
  title: "Hello world! Or Habr in English, v1.0",
  subtitle: "What new in JS in 2022?",
  img: "https://softuni.org/wp-content/uploads/2022/08/ECMAScript2022-Featured-Image1.png",
  views: 1022,
  createdAt: "07.07.2023",
  user: {
    id: "1",
    username: "admin",
    avatar:
      "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
  },
  type: [ArticleType.IT, ArticleType.SCIENCE, ArticleType.ECONOMICS],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      paragraphs: [
        "This is the first post in our blog in 2019. And this is important for all of us: we are finally launching the English version of Habr! Actually it was ready in the middle of December, but — you know — releasing a new feature right before Christmas is like deploying on Friday afternoon. So we decided to do it in the beginning of 2019.",
      ],
    },
    {
      id: "2",
      type: ArticleBlockType.IMAGE,
      src: "https://habrastorage.org/r/w1560/webt/xg/v5/vu/xgv5vukdrhgj4lvzhkg67hfiy_a.jpeg",
      title: "Iceberg",
    },
    {
      id: "3",
      type: ArticleBlockType.TEXT,
      paragraphs: [
        "The development of the English version looked like an iceberg with «it would be cool to be able to create posts in English» on the top — one of the numerous feature requests with no even approximate scope of work.",
        "For almost a year this feature request had been gaining likes (and after all gained just one), but this idea was born long before the request. The idea seemed promising because you can count our English-language competitors on the fingers of one hand (as well as implementation options). We were thinking hard for a long time, estimating, listening for users and clients requests, approving posts in English from «Sandbox», but pieces of the puzzle still did not fit to each other.",
        "It’s known more than 90% of iceberg is hidden under the water. And our iceberg had even greater density so we had to rework almost the whole Habr. In fact we spent one half of 2018 for it. And now in the beginning of 2019 we are glad to release the result of our work.",
      ],
    },
    {
      id: "4",
      type: ArticleBlockType.TEXT,
      title: "What we did",
      paragraphs: [
        "When we announced that Habr is going to become international we already had a specific plan. It was raw scope of work and approximate terms. But after we started we understood that rework will become really massive.",
        "Habr is quite big — both inside and outside. You don’t realise it if you need to add a single line of text, but when you translate the whole website it becomes clear the it is really an iceberg. We understood that «Habr in English» is not just translation «Хабр» → «Habr».",
      ],
    },
    {
      id: "5",
      type: ArticleBlockType.CODE,
      code: "// global variable to hold our model\n\nlet model;\n\n(async function\n\n() {\n\n// load the model after page loaded\n\nmodel = await tf.\n\nloadLayersModel('assets/model.json');\n\n})();\n\nasync function predict(input = '', count = 5) {\n// equivalent of argsort\nconst dsu = (arr1, arr2) => arr1\n.map((item, index) => [arr2[index], item]) // add the args to sort by\n.sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args\n.map(([, item]) => item); // extract the sorted items\n\n// Convert input text to words\nconst words = cleanText(input).split(' ');\n// Model works on sequences of MAX_SEQUENCE_LENGTH words, make one \nconst sequence = makeSequence(words);\n// convert JS array to TF tensor\nlet tensor = tf.tensor1d(sequence, dtype='float32').expandDims(0);\n// run prediction, obtain a tensor\nlet predictions = await model.predict(tensor);\n\nconst numClasses = predictions.shape[1];\n// array of sequential indices into predictions\nconst indices = Array.from(Array(numClasses), (x, index) => index);\n// convert tensor to JS array\npredictions = await predictions.array();\n// we predicted just a single instance, get it's results\npredictions = predictions[0];\n// prediction indices sorted by score (probability)\nconst sortedIndices = dsu(indices, predictions);\nconst topN = sortedIndices.slice(0, count);\nconst results = topN.map(function(tagId) {\nconst topic = getKey(TAGS_VOCAB, tagId);\nconst prob = predictions[tagId];\nreturn {\ntopic: topic,\nscore: prob\n}\n});\n\nreturn results;\n}",
    },
    {
      id: "6",
      type: ArticleBlockType.TEXT,
      paragraphs: [
        "This is the first post in our blog in 2019. And this is important for all of us: we are finally launching the English version of Habr! Actually it was ready in the middle of December, but — you know — releasing a new feature right before Christmas is like deploying on Friday afternoon. So we decided to do it in the beginning of 2019.",
      ],
    },
    {
      id: "7",
      type: ArticleBlockType.CODE,
      code: "// global variable to hold our model\n\nlet model;\n\n(async function\n\n() {\n\n// load the model after page loaded\n\nmodel = await tf.\n\nloadLayersModel('assets/model.json');\n\n})();\n\nasync function predict(input = '', count = 5) {\n// equivalent of argsort\nconst dsu = (arr1, arr2) => arr1\n.map((item, index) => [arr2[index], item]) // add the args to sort by\n.sort(([arg1], [arg2]) => arg2 - arg1) // sort by the args\n.map(([, item]) => item); // extract the sorted items",
    },
  ],
};

const articles: Article[] = new Array(16).fill(0).map((item, index) => ({
  ...article,
  id: (+article.id + index).toString(),
}));

export const ListLight: Story = {
  args: {},
};

ListLight.decorators = [
  StoreDecorator({
    articlesPage: {
      view: ArticleView.LIST,
      page: 1,
      limit: 10,
      hasMore: false,
      entities: {},
      ids: [],
    },
  }),
];

export const Dark: Story = {
  args: {},
};

Dark.decorators = [
  StoreDecorator({
    articlesPage: {
      view: ArticleView.LIST,
      page: 1,
      limit: 10,
      hasMore: false,
      entities: {},
      ids: [],
    },
  }),
  ThemeDecorator(Theme.DARK),
];
