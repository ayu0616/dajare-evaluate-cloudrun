import Link from "next/link";
import { ReactNode } from "react";

const NavLinkNext = (props: { href: string; children?: ReactNode }) => {
	return (
		<Link href={props.href}>
			<a className="nav-link">{props.children}</a>
		</Link>
	);
};

export default NavLinkNext;
