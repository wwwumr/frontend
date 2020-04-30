import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import 'antd/dist/antd.css';
import Header from '../layout/Header';
import Sider from '../layout/Sider';
import HomePage from './HomePage';
import { UserProps, AppState } from '../redux/reducer/reducer';
import { Role } from '../redux/action/ActionTypes';
import { connect } from 'react-redux';
import Login from './common/Login';
import Register from './common/Register';
import NotFound from './NotFound';
import ActivityReview from './certificationBody/activity/ActivityReview';
import HistoryActivity from './certificationBody/activity/HistoryActivity';
import ActivityDeatil from './certificationBody/activity/ActivityDetail';
import MarksReview from './certificationBody/marks/MarksReview';

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
			<Router>
				<Layout>
					<Layout.Header className='header'>
						<Header />
					</Layout.Header>
					{user.userId !== -1 && user.role === Role.CERTIFICATION_BODY && (
						<Layout>
							<Layout.Sider width={200} className='site-layout-background'>
								<Sider />
							</Layout.Sider>
							<Layout>
								<Layout.Content
									className='site-layout-background'
									style={{
										padding: 24,
										margin: 0,
										minHeight: 480,
									}}
								>
									<Switch>
										<Route exact path='/' component={HomePage} />
										<Route
											exact
											path='/activity/review'
											component={ActivityReview}
										/>
										<Route
											exact
											path='/activity/history'
											component={HistoryActivity}
										/>
										<Route
											exact
											path='/activity/marks/:id'
											component={MarksReview}
										/>
										<Route
											exact
											path='/activity/detail/:id'
											component={ActivityDeatil}
										/>
										<Route path='*' component={NotFound} />
									</Switch>
								</Layout.Content>
							</Layout>
						</Layout>
					)}
					{user.userId !== -1 && user.role === Role.CLUB && (
						<Layout>
							<Layout.Sider width={200} className='site-layout-background'>
								<Sider />
							</Layout.Sider>
							<Layout>
								<Layout.Content
									className='site-layout-background'
									style={{
										padding: 24,
										margin: 0,
										minHeight: 480,
									}}
								>
									<Switch>
										<Route exact path='/' component={HomePage} />
										<Route path='*' component={NotFound} />
									</Switch>
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
									minHeight: 561,
								}}
							>
								<Switch>
									<Route exact path='/' component={HomePage} />
									<Route exact path='/login' component={Login} />
									<Route exact path='/register' component={Register} />
									<Route path='*' component={NotFound} />
								</Switch>
							</Layout.Content>
						</Layout>
					)}
				</Layout>
			</Router>
		</React.Fragment>
	);
};

export default connect(mapStateToProps)(App);
