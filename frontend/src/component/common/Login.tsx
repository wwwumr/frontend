import React from 'react';
import { Form, Input, Button, Card } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import styles from './login.module.css';
import { useHistory } from 'react-router';
import { store } from '../../redux/store/store';
import { setUser } from '../../redux/action/action';
import { Role } from '../../redux/action/ActionTypes';

const NormalLoginForm = () => {
	const history = useHistory();
	const onFinish = (values: any) => {
		console.log('Received values of form: ', values);
		store.dispatch(setUser({ userId: 0, role: Role.CLUB}));
		history.push('/');
	};

	return (
		<Form
			name='normal_login'
			className={styles.login_form}
			initialValues={{ remember: true }}
			onFinish={onFinish}
		>
			<Form.Item
				name='username'
				rules={[{ required: true, message: '请输入用户名!' }]}
			>
				<Input
					prefix={<UserOutlined className='site-form-item-icon' />}
					placeholder='用户名'
				/>
			</Form.Item>
			<Form.Item
				name='password'
				rules={[{ required: true, message: '请输入密码!' }]}
			>
				<Input
					prefix={<LockOutlined className='site-form-item-icon' />}
					type='password'
					placeholder='密码'
				/>
			</Form.Item>

			<Form.Item>
				<Button
					type='primary'
					htmlType='submit'
					className={styles.login_form_button}
				>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

const Login: React.FunctionComponent = () => {
	return (
		<React.Fragment>
			<Card
				style={{
					width: '30%',
					textAlign: 'center',
					marginLeft: '35%',
					marginTop: '50px',
					padding: '20px',
				}}
				title={'登录'}
				headStyle={{
					fontSize: '30px',
					textAlign: 'center',
					fontWeight: 'bold',
				}}
			>
				<NormalLoginForm />
			</Card>
		</React.Fragment>
	);
};

export default Login;
