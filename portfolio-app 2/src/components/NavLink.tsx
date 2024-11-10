import Link from "next/link";

interface NavLinkProps {
  href: string; // URL path for the link
  title: string; // Text to display for the link
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
  return (
    <Link href={href} className="nav-link">
      {title}
    </Link>
  );
};

export default NavLink;

