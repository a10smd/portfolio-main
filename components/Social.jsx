import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

// Define an array of social icons and their respective paths
const socials = [
  { icon: <FaGithub />, path: "https://github.com/a10smd" },
  { icon: <FaLinkedinIn />, path: "www.linkedin.com/in/abdus-samad-5a5171225" },
  { icon: <FaYoutube />, path: "https://youtube.com/your-channel" },
  { icon: <FaTwitter />, path: "https://twitter.com/your-handle" },
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
