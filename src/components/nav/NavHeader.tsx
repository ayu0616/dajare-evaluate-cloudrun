import Link from "next/link";
import { Container, Nav, Navbar } from "react-bootstrap";
import NavLinkNext from "./NavLinkNext";

const NavHeader = () => {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Container>
				<Link href="./">
					<a className="navbar-brand">ダジャリストの部屋</a>
				</Link>
				<Navbar.Toggle data-bs-toggle="collapse" aria-controls="header-nav" data-bs-target="#header-nav" />
				<Navbar.Collapse id="header-nav">
					<Nav className="me-auto">
						<NavLinkNext href="./evaluate">採点の祭典</NavLinkNext>
						<NavLinkNext href="./database">ダジャレDB</NavLinkNext>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavHeader;
