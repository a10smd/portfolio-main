import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// Define an array of social icons and their respective paths
const socials = [
  { icon: <FaGithub />, path: "https://github.com/a10smd" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/abdus-samad-5a5171225",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/as_30ae?igshid=NTc4MTIwNjQ2YQ==",
  },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          href={social.path}
          key={index}
          className={iconStyles}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
