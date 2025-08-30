import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import My_example from './view/My_example'
import Header from './component/Layout/Header'
import Home from './Pages/Home'
import Footer from './component/Layout/Footer'
import { Tabs } from 'antd';
import Users from './Pages/Users/Users'
import Books from './Pages/Books/Books'

const onChange = key => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Trang Chủ',
    children: <Home />,
  },
  {
    key: '2',
    label: 'Quản Lý Người Dùng',
    children: <Users />,
  },
  {
    key: '3',
    label: 'Quản Lý Sách',
    children: <Books />,
  },
];

function App() {
  return (
    <>
      {/* <Header />
      <Outlet />
      <Home />
      <Footer /> */}
      {/* <Link to="/"></Link>
        <Link to="/Home"></Link>
        <Link to="/Footer"></Link>
        <Link to=""></Link> */}

      <div className='p-[100px]'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
      {/* <Outlet /> */}
    </>
  )
}

export default App
