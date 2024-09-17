const SocialIcon = ({
  icon,
  color = "",
  link,
}: {
  icon: string;
  color?: string;
  link: string;
}) => {
  return (
    <a className="Btn" target="_blank" href={link}>
      <span className="svgContainer">
        <img src={icon} alt="" height={24} width={24} />
      </span>
      <span className="BG" style={{ background: color }}></span>
    </a>
  );
};

export default SocialIcon;
// 24
