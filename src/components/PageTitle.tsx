const PageTitle = (props: { title: string }) => {
	return (
		<div className="m-3">
			<h1>{props.title}</h1>
			<hr />
		</div>
	);
};

export default PageTitle;
