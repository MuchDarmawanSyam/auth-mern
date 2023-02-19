import React, {useEffect} from 'react'
import Layout from './Layout'
import UserList from '../components/UserList'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from '../features/authSlice';

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isError} = useSelector((state => state.auth));

  // gunakan 2 useEffect karena harus dispatch dulu baru validasi
  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if(isError){
      navigate("/");
    }
  }, [isError, navigate]);

  return (
    <Layout>
        <UserList />
    </Layout>
  )
}

export default Users