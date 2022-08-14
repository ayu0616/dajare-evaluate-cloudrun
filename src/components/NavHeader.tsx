import { Container, Nav, Navbar } from "react-bootstrap";

const NavHeader = () => {
	return (
		<Navbar bg="light" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand href="./">ホーム</Navbar.Brand>
				<Navbar.Toggle data-bs-toggle="collapse" aria-controls="header-nav" data-bs-target="#header-nav" />
				<Navbar.Collapse id="header-nav">
					<Nav className="me-auto">
						<Nav.Link href="./database">ダジャレDB</Nav.Link>
						<Nav.Link href="./evaluate">ダジャレ評価</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavHeader;
