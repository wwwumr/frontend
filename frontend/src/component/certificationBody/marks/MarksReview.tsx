import React, { useState } from 'react';
import { Table, Input, InputNumber, Popconfirm, Form, Button } from 'antd';
import { MarksReviewProps, MockMarks } from './Mock';
import Demo from './Demo';

type Item = MarksReviewProps;

const originData: Item[] = MockMarks;

interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
	editing: boolean;
	dataIndex: string;
	title: any;
	inputType: 'number' | 'text';
	record: Item;
	index: number;
	children: React.ReactNode;
}

const EditableCell: React.FC<EditableCellProps> = ({
	editing,
	dataIndex,
	title,
	inputType,
	record,
	index,
	children,
	...restProps
}) => {
	const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;

	return (
		<td {...restProps}>
			{editing ? (
				<Form.Item
					name={dataIndex}
					style={{ margin: 0 }}
					rules={[
						{
							required: true,
							message: `请输入 ${title}!`,
						},
					]}
				>
					{inputNode}
				</Form.Item>
			) : (
				children
			)}
		</td>
	);
};

const MarksReview = () => {
	const [form] = Form.useForm();
	const [data, setData] = useState(originData);
	const [editingKey, setEditingKey] = useState(-1);

	const isEditing = (record: Item) => record.id === editingKey;

	const edit = (record: Item) => {
		form.setFieldsValue({ name: '', age: '', address: '', ...record });
		setEditingKey(record.id);
	};

	const cancel = () => {
		setEditingKey(-1);
	};

	const save = async (key: React.Key) => {
		try {
			const row = (await form.validateFields()) as Item;

			const newData = [...data];
			const index = newData.findIndex((item) => key === item.id);
			if (index > -1) {
				const item = newData[index];
				newData.splice(index, 1, {
					...item,
					...row,
				});
				setData(newData);
				setEditingKey(-1);
			} else {
				newData.push(row);
				setData(newData);
				setEditingKey(-1);
			}
		} catch (errInfo) {
			console.log('Validate Failed:', errInfo);
		}
	};

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
			width: '60%',
			editable: true,
		},
		{
			title: '更改',
			dataIndex: 'operation',
			render: (_: any, record: Item) => {
				const editable = isEditing(record);
				return editable ? (
					<span>
						<Button onClick={() => save(record.id)} style={{ marginRight: 8 }}>
							保存
						</Button>
						<Popconfirm title='要取消修改吗?' onConfirm={cancel}>
							<Button>取消</Button>
						</Popconfirm>
					</span>
				) : (
					<Button onClick={() => edit(record)}>修改</Button>
				);
			},
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
				editing: isEditing(record),
			}),
		};
	});

	return (
		<React.Fragment>
			<Demo />
			<Form form={form} component={false}>
				<Table
					components={{
						body: {
							cell: EditableCell,
						},
					}}
          bordered
          rowKey='id'
					dataSource={data}
					columns={mergedColumns}
					rowClassName='editable-row'
					pagination={{
						onChange: cancel,
					}}
				/>
			</Form>
		</React.Fragment>
	);
};

export default MarksReview;
