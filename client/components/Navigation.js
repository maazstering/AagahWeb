import Link from "next/link";
const Navigation = () => {
  return (
    <ul className="nav bg-dark d-flex justify-content-end">
      <Link href="/" className="nav-link text-light">
        Home
      </Link>
      <Link href="/login" className="nav-link text-light">
        Login
      </Link>
      <Link href="/signup" className="nav-link text-light">
        Signup
      </Link>
    </ul>
  );
};

export default Navigation;
