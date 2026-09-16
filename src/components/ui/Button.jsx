import { ArrowUpRight } from "lucide-react";

function Button({
  children,
  href,
  variant = "primary",
  showIcon = true,
  className = "",
  ariaLabel,
}) {
  const classes = `button button-${variant} ${className}`.trim();

  const content = (
    <>
      <span>{children}</span>

      {showIcon && (
        <ArrowUpRight
          className="button-icon"
          size={17}
          strokeWidth={1.6}
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        aria-label={ariaLabel}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={classes}
      type="button"
      aria-label={ariaLabel}
    >
      {content}
    </button>
  );
}

export default Button;