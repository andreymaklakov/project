import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "shared/ui/Select/Select";

import { Currency } from "../../model/types/currency";

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

export const CurrencySelect = memo(function CurrencySelect({
  className,
  value,
  onChange,
  readonly,
}: CurrencySelectProps) {
  const { t } = useTranslation("profile");

  const currencyOptions = useMemo(
    () =>
      Object.entries(Currency).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    []
  );

  const handleChange = useCallback(
    (value: string) => onChange?.(value as Currency),
    [onChange]
  );

  return (
    <Select
      readonly={readonly}
      label={t("Currency")}
      onChange={handleChange}
      value={value}
      options={currencyOptions}
      className={className}
    />
  );
});
