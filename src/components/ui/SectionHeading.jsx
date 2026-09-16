function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const headingClassName = `section-heading section-heading-${align}`;

  return (
    <div className={headingClassName}>
      {eyebrow && (
        <p className="section-heading-eyebrow">
          {eyebrow}
        </p>
      )}

      <h2>{title}</h2>

      {description && (
        <p className="section-heading-description">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;