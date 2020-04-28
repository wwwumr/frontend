import React from 'react';
import { Menu } from 'antd';
import { UserProps, AppState } from '../redux/reducer/reducer';
import { Role } from '../redux/action/ActionTypes';
import { connect } from 'react-redux';

interface StateProps {
	user: UserProps;
}

const mapStateToProps = (state: AppState) => ({
	user: state.user,
});

type Props = StateProps;

const Header: React.FunctionComponent<Props> = (props: Props) => {
	const { user } = props;

	return (
		<React.Fragment>
			{user.role === Role.UNDEFINED && (
				<React.Fragment>
					<div className='logo' />
					<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
						<Menu.Item key='1'>nav 1</Menu.Item>
						<Menu.Item key='2'>nav 2</Menu.Item>
						<Menu.Item key='3'>nav 3</Menu.Item>
					</Menu>
				</React.Fragment>
			)}
			{user.role === Role.CLUB && (
				<React.Fragment>
					<div className='logo' />
					<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
						<Menu.Item key='1'>nav 1</Menu.Item>
						<Menu.Item key='2'>nav 2</Menu.Item>
						<Menu.Item key='3'>nav 3</Menu.Item>
					</Menu>
				</React.Fragment>
			)}
		</React.Fragment>
	);
};

export default connect(mapStateToProps)(Header);
