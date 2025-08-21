import TimeLineLogo from "./TimeLineLogo";

export default function TimeLineItem({
  variant,
  ref,
  src,
  alt,
  href,
  children,
}) {
  return (
    <div className={"timeline-item " + variant} ref={ref}>
      <TimeLineLogo href={href} src={src} alt={alt} />
      <div className="card shadow-sm p-4">{children}</div>
    </div>
  );
}
