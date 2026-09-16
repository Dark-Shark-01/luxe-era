function Badge({ children, variant = "default" }) {
  const badgeClassName = `badge badge-${variant}`;

  return <span className={badgeClassName}>{children}</span>;
}

export default Badge;