import Link from "next/link";

const Header = () => (
    <header>
        <nav>
            <Link href="/Tokyo">Tokyo</Link>
            <Link href="/Shanghai">Shanghai</Link>
            <Link href="/New York">New York</Link>
            <Link href="/Seoul">Seoul</Link>
        </nav>
    </header>
);

export default Header;