export function hoverLetters(text: string, keyPrefix: string) {
  return [...text].map((ch, i) =>
    ch === " " ? (
      " "
    ) : (
      <span
        key={`${keyPrefix}-${i}`}
        className="inline-block transition-colors duration-200 hover:text-brand-red"
      >
        {ch}
      </span>
    ),
  );
}
