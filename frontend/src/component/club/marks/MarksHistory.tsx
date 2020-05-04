import React, { useState } from 'react';
import { Table, Form } from 'antd';
import { MarksReviewProps, MockMarks } from './Mock';

type Item = MarksReviewProps;

const originData: Item[] = MockMarks;

const MarksHistory = () => {
	const [form] = Form.useForm();
	const [data, setData] = useState<Item[]>([]);

	React.useEffect(() => {
		setData(originData);
	}, []);

	const columns = [
		{
			title: '学生学号',
			dataIndex: 'id',
			width: '10%',
		},
		{
			title: '学生得分',
			dataIndex: 'marks',
			width: '10%',
			editable: true,
		},
		{
			title: '评语',
			dataIndex: 'desc',
			width: '80%',
			editable: true,
		},
	];

	const mergedColumns = columns.map((col) => {
		if (!col.editable) {
			return col;
		}
		return {
			...col,
			onCell: (record: Item) => ({
				record,
				inputType: col.dataIndex === 'marks' ? 'number' : 'text',
				dataIndex: col.dataIndex,
				title: col.title,
			}),
		};
	});

	return (
		<React.Fragment>
			<Form form={form} component={false}>
				<Table bordered rowKey='id' dataSource={data} columns={mergedColumns} />
			</Form>
		</React.Fragment>
	);
};

export default MarksHistory;
