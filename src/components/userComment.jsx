import React from 'react';
import { Comment } from 'antd';

import './userComment.css'

export const UserComment = ({ name, text }) => {
    return (
        <div className="comment-block">
            <Comment
                author={<h4>{name}</h4>}
                content={
                    <p>
                        {text}
                    </p>
                }
            />
        </div>
    );
};
