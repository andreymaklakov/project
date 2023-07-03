import { memo, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import { Select } from "shared/ui/Select/Select";

import { Country } from "../../model/types/country";

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
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
      Object.entries(Country).map((val) => ({
        value: val[0],
        content: val[1],
      })),
    []
  );

  const handleChange = useCallback(
    (value: string) => onChange?.(value as Country),
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
