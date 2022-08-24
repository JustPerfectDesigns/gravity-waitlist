import { Table } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import "antd/dist/antd.min.css";

function Catmostdog() {
	const [dataSource, setDataSource] = useState([]);
	const [totalPages, setTotalPages] = useState(1);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		fetchRecords(1);
	}, []);
	const columns = [
		{
			title: "No.",
			dataIndex: "id",
		},
		{
			title: "Name",
			dataIndex: "name",
		},
		{
			title: "Email Address",
			dataIndex: "email",
		},
		{
			title: "Phone Number",
			dataIndex: "phone",
		},
	];

	const fetchRecords = (page) => {
		setLoading(true);
		axios.get(`https://api.gravity.africa/api/v1/wait-list`).then((res) => {
			setDataSource(res.data.data);
			setTotalPages(res.data.data.totalPages);
			setLoading(false);
		});
	};

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "3rem",
			}}
		>
			<Table
				loading={loading}
				columns={columns}
				dataSource={dataSource}
				pagination={{
					pageSize: 10,
					total: totalPages,
					onChange: (page) => {
						fetchRecords(page);
					},
				}}
			></Table>
		</div>
	);
}
export default Catmostdog;
