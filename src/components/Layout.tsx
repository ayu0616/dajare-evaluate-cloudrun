import { ReactNode } from "react";
import NavHeader from "./nav/NavHeader";

const Layout = (props: { children: ReactNode }) => {
	return (
		<>
			<NavHeader></NavHeader>
			{props.children}
		</>
	);
};

export default Layout;
