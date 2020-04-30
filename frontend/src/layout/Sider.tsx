import React from 'react';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import { NotificationOutlined } from '@ant-design/icons';
import { AppState, UserProps } from '../redux/reducer/reducer';
import { connect } from 'react-redux';
import { Role } from '../redux/action/ActionTypes';
import { Link } from 'react-router-dom';

interface StateProps {
	user: UserProps;
}

const mapStateToProps = (state: AppState) => ({
	user: state.user,
});

type Props = StateProps;

const Sider: React.FunctionComponent<Props> = (props: Props) => {
	const { user } = props;

	return (
		<React.Fragment>
			{user.role === Role.CERTIFICATION_BODY && (
				<Menu
					mode='inline'
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub0', 'sub1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<SubMenu
						key='sub0'
						title={
							<span>
								<NotificationOutlined />
								活动审核
							</span>
						}
					>
						<Menu.Item key='0'>
							<Link to='/activity/review'>待审核活动</Link>
						</Menu.Item>
						<Menu.Item key='1'>
							<Link to='/activity/history'>已审核活动</Link>
						</Menu.Item>
					</SubMenu>
				</Menu>
			)}
			{user.role === Role.CLUB && (
				<Menu
					mode='inline'
					defaultSelectedKeys={['1']}
					defaultOpenKeys={['sub0', 'sub1']}
					style={{ height: '100%', borderRight: 0 }}
				>
					<SubMenu
						key='sub0'
						title={
							<span>
								<NotificationOutlined />
								活动审核
							</span>
						}
					>
						<Menu.Item key='0'>待审核活动</Menu.Item>
					</SubMenu>
					<SubMenu
						key='sub1'
						title={
							<span>
								<NotificationOutlined />
								活动计分
							</span>
						}
					>
						<Menu.Item key='1'>待计分活动</Menu.Item>
					</SubMenu>
				</Menu>
			)}
		</React.Fragment>
	);
};

export default connect(mapStateToProps)(Sider);
