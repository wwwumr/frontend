import React from 'react';
import { Card, Button, Descriptions, Typography } from 'antd';
import { Remaining, ActivityProps } from './Mock';
import { Link } from 'react-router-dom';

const gridStyle: React.CSSProperties = {
	width: '50%',
	textAlign: 'center',
};

const MockActivity: ActivityProps = Remaining[0];

interface ReviewActionProps {
	status: string;
}

interface StatusActionProps {
	status: string;
	id: number;
}

const StatusAction = (props: StatusActionProps) => {
	const { status, id } = props;
	return (
		<React.Fragment>
			<Typography.Text>{`审核状态: ${status}`}</Typography.Text>
			{status === '已计分' && (
				<Button>
					<Link to={`/activity/marks/${id}`}>查看</Link>
				</Button>
			)}
			{status === '未计分' && <React.Fragment />}
		</React.Fragment>
	);
};

const ReviewAction = (props: ReviewActionProps) => {
	const { status } = props;

	return (
		<React.Fragment>
			<Button disabled={status !== '未审核'}>通过审核</Button>
			<Button disabled={status !== '未审核'}>不通过</Button>
		</React.Fragment>
	);
};

const ActivityDeatil = () => {
	return (
		<React.Fragment>
			<Card
				style={{ width: '80%', margin: '0 10%' }}
				actions={[
					<StatusAction status={MockActivity.status} id={MockActivity.id} />,
					<ReviewAction status={MockActivity.status} />,
				]}
			>
				<Card.Grid hoverable={false} style={gridStyle}>
					<Card
						hoverable={false}
						cover={<img alt='example' src={MockActivity.img} />}
					></Card>
				</Card.Grid>
				<Card.Grid hoverable={false} style={gridStyle}>
					<Descriptions
						column={1}
						title={'活动信息'}
						style={{ textAlign: 'left' }}
					>
						<Descriptions.Item label='活动编号'>
							{MockActivity.id}
						</Descriptions.Item>
						<Descriptions.Item label='活动时间'>
							{MockActivity.time}
						</Descriptions.Item>
						<Descriptions.Item label='活动地点'>
							{MockActivity.location}
						</Descriptions.Item>
						<Descriptions.Item label='活动类型'>
							{MockActivity.type}
						</Descriptions.Item>
						<Descriptions.Item label='活动描述'>
							{MockActivity.desc}
						</Descriptions.Item>
					</Descriptions>
				</Card.Grid>
			</Card>
		</React.Fragment>
	);
};

export default ActivityDeatil;
