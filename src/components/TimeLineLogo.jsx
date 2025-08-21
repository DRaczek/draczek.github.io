export default function TimeLineLogo({ href, src, alt }) {
  return (
    <a className="timeline-logo" href={href}>
      <img src={src} alt={alt} />
    </a>
  );
}
