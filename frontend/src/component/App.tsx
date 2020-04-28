import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from '../layout/Header';
import Sider from '../layout/Sider';
import HomePage from './HomePage';
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

const App: React.FunctionComponent<Props> = (props: Props) => {
	const { user } = props;

	return (
		<React.Fragment>
			<BrowserRouter>
				<Layout>
					<Layout.Header className='header'>
						<Header />
					</Layout.Header>
					{user.userId !== -1 && user.role === Role.CERTIFICATION_BODY && (
						<Layout>
							<Layout.Sider width={200} className='site-layout-background'>
								<Sider />
							</Layout.Sider>
							<Layout style={{ padding: '24px 24px 24px' }}>
								<Layout.Content
									className='site-layout-background'
									style={{
										padding: 24,
										margin: 0,
										minHeight: 480,
									}}
								>
									<Route path='/' component={HomePage} />
								</Layout.Content>
							</Layout>
						</Layout>
					)}
					{user.userId !== -1 && user.role === Role.CLUB && (
						<Layout>
							<Layout.Sider width={200} className='site-layout-background'>
								<Sider />
							</Layout.Sider>
							<Layout style={{ padding: '24px 24px 24px' }}>
								<Layout.Content
									className='site-layout-background'
									style={{
										padding: 24,
										margin: 0,
										minHeight: 480,
									}}
								>
									<Route path='/' component={HomePage} />
								</Layout.Content>
							</Layout>
						</Layout>
					)}
					{user.role === Role.UNDEFINED && (
						<Layout>
							<Layout.Content
								className='site-layout-background'
								style={{
									margin: 0,
									minHeight: 480,
								}}
							>
								<Route path='/' component={HomePage} />
							</Layout.Content>
						</Layout>
					)}
				</Layout>
			</BrowserRouter>
		</React.Fragment>
	);
};

export default connect(mapStateToProps)(App);
