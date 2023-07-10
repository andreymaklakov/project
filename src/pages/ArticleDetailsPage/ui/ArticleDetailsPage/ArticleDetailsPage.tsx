import { FC, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { classNames } from "shared/lib/classNames/classNames";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch/useAppDispatch";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect/useInitialEffect";
import { Text } from "shared/ui/Text/Text";
import {
  DynamicModuleLoader,
  ReducersList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticleDetails } from "entitiess/Article";
import { CommentList } from "entitiess/Comment";
import { AddCommentForm } from "features/AddCommentForm";

import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/articleDetailsCommentsSlice";
import { getArticleCommentsIsLoading } from "../../model/selectors/comments/comments";
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId";
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle";

import styles from "./ArticleDetailsPage.module.scss";

interface ArticleDetailsPageProps {
  className?: string;
}

const initialReducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = ({ className }) => {
  const cls = classNames(styles.ArticleDetailsPage, {}, [className]);

  const { id } = useParams<{ id: string }>();

  const { t } = useTranslation("article");

  const comments = useSelector(getArticleComments.selectAll);
  const isLoading = useSelector(getArticleCommentsIsLoading);

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id));
  });

  const handleSendComment = useCallback(
    (text: string) => {
      dispatch(addCommentForArticle(text));
    },
    [dispatch]
  );

  if (!id) {
    return <div className={cls}>{t("Article not found")}</div>;
  }
  return (
    <DynamicModuleLoader reducer={initialReducers} removeAfterUnmount>
      <div className={cls}>
        <ArticleDetails id={id} />

        <Text className={styles.commentsTitle} title={t("Comments")} />

        <AddCommentForm onSendComment={handleSendComment} />

        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailsPage);

// {
//               id: "1",
//               text: "First comment",
//               user: {
//                 id: "1",
//                 username: "admin",
//                 avatar:
//                   "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
//               },
//             },
//             {
//               id: "2",
//               text: "Second comment",
//               user: {
//                 id: "1",
//                 username: "admin",
//                 avatar:
//                   "https://media.istockphoto.com/id/1225549108/vector/run-sport-exercise-vector-icon-illustration.jpg?s=612x612&w=0&k=20&c=RKFqwoj4U4mw076yakzLoxFxz5MLm1gQI_mU4RVpzp4=",
//               },
//             },
//             ,
//             {
//               id: "3",
//               text: "Third comment",
//               user: {
//                 id: "2",
//                 username: "andrejs",
//                 avatar:
//                   "https://res.cloudinary.com/practicaldev/image/fetch/s--TenQsTYv--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/rd3omc5vp71r5k9z69b4.png",
//               },
