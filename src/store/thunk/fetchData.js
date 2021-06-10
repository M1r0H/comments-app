import axios from 'axios'
import { setComment, setStatus } from '../actions/action';

export const sednData = (data) => async (dispatch) => {
    const { status } = await axios.post("https://jordan.ashton.fashion/api/goods/30/comments", data)
    dispatch(setStatus(status))
};

export const getData = (page) => async (dispatch) => {
    const data = await axios.get(`https://jordan.ashton.fashion/api/goods/30/comments?page=${page}`)
    dispatch(setComment(data))
}