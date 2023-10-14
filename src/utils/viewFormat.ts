const VIEW_FORMATTER = new Intl.NumberFormat(undefined, { notation: "compact" });

export const viewFormat = (n: number) => VIEW_FORMATTER.format(n);
