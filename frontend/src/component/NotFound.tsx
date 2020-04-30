import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const NotFound: React.FunctionComponent = () => {
	return (
		<Result
			status='404'
			title='404'
			subTitle='哎呀,您访问的页面不存在'
			extra={
				<Button type='primary'>
					<Link to='/'>返回主页</Link>
				</Button>
			}
		/>
	);
};

export default NotFound;
