const PERSIAN_DIGITS = "۰۱۲۳۴۵۶۷۸۹";

/** Convert English digits inside a string to Persian digits. */
export function faDigits(value: string | number): string {
  return String(value).replace(/\d/g, (digit) => PERSIAN_DIGITS[Number(digit)]);
}

/** Convert Persian/Arabic digits inside a string to English digits. */
export function toEnglishDigits(value: string): string {
  return value
    .replace(/[۰-۹]/g, (digit) => String(PERSIAN_DIGITS.indexOf(digit)))
    .replace(/[٠-٩]/g, (digit) =>
      String("٠١٢٣٤٥٦٧٨٩".indexOf(digit)),
    );
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat("fa-IR").format(value);
}
