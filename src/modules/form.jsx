import React, { useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css';

import { sednData } from '../store/thunk/fetchData';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 8,
    },
};

/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
};

/* eslint-enable no-template-curly-in-string */

export const FormForComment = ({ history }) => {
    const dispatch = useDispatch()

    const onFinish = (values) => {
        dispatch(sednData(values))
    };

    const status = useSelector((state) => {
        const { ActionReducer: { status } } = state
        if (status) {
            return status
        }
    })

    useEffect(() => {
        if (status === 200) {
            history.push('/comments')
        }
    }, [status, history])

    return (
        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item
                name={'name'}
                label="Name"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name={'text'}
                label="Comment"
                rules={[
                    {
                        required: true,
                    },
                ]}
            >
                <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};
