import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "shared/ui/Select/Select";

import { Countries } from "../../model/types/countries";

interface CountrySelectProps {
  className?: string;
  value?: Countries;
  onChange?: (value: Countries) => void;
  readonly?: boolean;
}

export const CountrySelect = memo(function CountrySelect({
  className,
  value,
  onChange,
  readonly,
}: CountrySelectProps) {
  const { t } = useTranslation("profile");

  const countryOptions = useMemo(
    () =>
      Object.entries(Countries).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    []
  );

  const handleChange = useCallback(
    (value: string) => onChange?.(value as Countries),
    [onChange]
  );

  return (
    <Select
      readonly={readonly}
      label={t("Country")}
      onChange={handleChange}
      value={value}
      options={countryOptions}
      className={className}
    />
  );
});
