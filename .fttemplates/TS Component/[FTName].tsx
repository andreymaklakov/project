import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';

import styles from './[FTName].module.scss';

interface [FTName]Props {
   className?: string;
}

export const [FTName] = memo(function [FTName]({ className }: [FTName]Props) {
     const cls = classNames(styles.[FTName], {}, [className]);

   const { t } = useTranslation()

   return (
      <div className={cls}>

      </div>
   );
})