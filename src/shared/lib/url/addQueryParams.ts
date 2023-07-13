export function getQueryParams(params: OptionalRecord<string, string>) {
  const searchParams = new URLSearchParams(window.location.search);

  Object.entries(params).forEach(([key, value]) => {
    if (value === undefined) return;

    searchParams.set(key, value);
  });

  return `?${searchParams.toString()}`;
}

// Function adds a query parameters to the URL query string

export function addQueryParams(params: OptionalRecord<string, string>) {
  window.history.pushState(null, "", getQueryParams(params));
}
