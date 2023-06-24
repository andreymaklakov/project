import type { ReactRenderer } from "@storybook/react";
import { PartialStoryFn } from "@storybook/types";
import { Suspense } from "react";
import { I18nextProvider } from "react-i18next";

import i18n from "shared/config/i18n/i18nForTests";

export const TranslationDecorator = (Story: PartialStoryFn<ReactRenderer>) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback={""}>
        <Story />
      </Suspense>
    </I18nextProvider>
  );
};
