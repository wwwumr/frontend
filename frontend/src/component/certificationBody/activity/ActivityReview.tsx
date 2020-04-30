import React from 'react';
import { Table, Button } from 'antd';
import { Remaining } from './Mock';
import { Link } from 'react-router-dom';

export interface ActivityProps {
	id: number;
	location: string;
	time: string;
	type: string;
	desc: string;
}

const columns = [
	{
		title: '活动编号',
		dataIndex: 'id',
		key: '0',
	},
	{
		title: '活动时间',
		dataIndex: 'time',
		key: '1',
	},
	{
		title: '活动地点',
		dataIndex: 'location',
		key: '2',
	},
	{
		title: '活动类型',
		dataIndex: 'type',
		key: '3',
	},
	{
		title: '活动描述',
		dataIndex: 'desc',
		key: '4',
	},
	{
		title: '活动详情',
		dataIndex: 'id',
		key: '5',
		render: (id: number) => (
			<Button>
				<Link to={`/activity/detail/${id}`}>查看详情</Link>
			</Button>
		),
	},
];

const ActivityReview = () => {
	return (
		<React.Fragment>
			<Table dataSource={Remaining} columns={columns} />
		</React.Fragment>
	);
};

export default ActivityReview;
