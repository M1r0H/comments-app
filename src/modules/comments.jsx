import React, { useEffect } from 'react';
import { BackTop, Button, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { getData } from '../store/thunk/fetchData';
import { UserComment } from '../components/userComment';
import './comments.css'

const style = {
  height: 40,
  width: 40,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 14,
};

export const Comments = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getData())
  }, [dispatch])
  const userData = useSelector((state) => {
    const { ActionReducer: { userData: { data } } } = state
    if (data) {
      return {
        current_page: data.current_page,
        last_page: data.last_page,
        data: data.data
      }
    }
  })

  const handlePag = (page) => {
    dispatch(getData(page))
  }

  const handlerBtn = () => {
    if (userData) {
      let { current_page } = userData
      dispatch(getData(++current_page))
    }
  }

  const spawnComment = () => {
    if (userData) {
      const { data } = userData
      return data.map(({ id, name, text }) => {
        return (
          <React.Fragment key={id}>
            <UserComment name={name} text={text} />
          </React.Fragment>
        )
      })
    }
  }

  const spawnButton = () => {
    if (userData) {
      const { current_page, last_page } = userData
      if (current_page !== last_page) {
        return (
          <Button onClick={handlerBtn}>More</Button>
        )
      }
    }
  }

  const spawnPag = () => {
    if (userData) {
      const { current_page, last_page } = userData
      return (
        <Pagination current={current_page} onChange={handlePag} total={last_page * 10} showSizeChanger={false} />
      )
    }
  }

  return (
    <div className="comments-area">
      {spawnComment()}
      {spawnButton()}
      {spawnPag()}
      <BackTop visibilityHeight={200}>
        <div style={style}>UP</div>
      </BackTop>
    </div>
  );
};
