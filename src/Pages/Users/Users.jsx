import { Button, Drawer, Space, Table, Modal, Input, message, Spin, Popconfirm } from 'antd';
import { useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
const delay = (ms) => new Promise((res) => setTimeout(res, ms));
const Users = () => {
    const [result, setResult] = useState([]);
    const [open, setOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [messageApi, contextHolder] = message.useMessage();


    // tự động reload lại table sau khi thêm mới
    // THêm thông báo
    // chưa xóa dữ liệu table sau khi tạo
    // loading khi lấy dữ liệu

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = async () => {
        setIsModalOpen(false);
        const res = await fetch('http://localhost:8080/api/v1/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                    fullName,
                    email,
                    phone,
                    password
                }
            )
        })
        const result2 = await res.json();
        messageApi.success("Thêm mới thành công");
        setFullName("");
        setEmail("");
        setPhone("");
        setPassword("");
        await getData();

    };
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }
    const getData = async () => {
        setIsLoading(true);
        await delay(1000);
        const res = await fetch('http://localhost:8080/api/v1/user');
        const result2 = await res.json();
        setResult(result2.data);
        setIsLoading(false);
    }
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    // Xem chi tiết
    // Thêm mới User
    // Update User
    // Deleted
    const handleDelete = async (id) => {
        const res = await fetch(`http://localhost:8080/api/v1/user/${id}`, {
            method: 'DELETE'
        });
        messageApi.success("Xóa thành công");
        await getData();
    }
    useEffect(() => {
        getData();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'Name',
            render: (record) => (
                <a onClick={() => {setCurrentUser(record); setOpen(true)}}>{record.fullName}</a>
            ),
        },
        {
            title: 'Email',
            dataIndex: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role'
        },
        {
            title: 'Action',
            render: (_, record) => (
                <Space size="middle">   
                    <div className='cursor-pointer text-orange-500'><EditOutlined /></div>
                    <Popconfirm
                        title="Xóa User"
                        description="Bạn có chắc chắn muốn xóa User này?"
                        onConfirm={() => handleDelete(record._id)}
                        onCancel={() => messageApi.info('Hủy Xóa')}
                        okText="Yes"
                        cancelText="No"
                    >
                        <div className='cursor-pointer text-red-500'><DeleteOutlined /></div>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    const onClose = () => {
        setCurrentUser({});
        setOpen(false);
    };

    return (
        <>
            <div className="p-4">
                <div className='flex justify-between items-center mb-4'>
                    <h1 className="text-2xl font-bold">Users Table</h1>
                    <Button type="primary" onClick={showModal}>+ Add User</Button>
                </div>

                {
                    isLoading ? <Spin /> : <Table columns={columns} rowKey="_id" dataSource={result} />
                }
                <Drawer
                    title="Thông tin người dùng"
                    closable={{ 'aria-label': 'Close Button' }}
                    onClose={onClose}
                    open={open}
                >
                    {currentUser ?

                        <div>
                            <h1>Tên người dùng: {currentUser.fullName}</h1>
                            <h1>Email: {currentUser.email}</h1>
                            <h1>Role: {currentUser.role}</h1>
                            <h1>Id: {currentUser._id}</h1>
                        </div>
                        :
                        <div>Không có giá trị</div>
                    }
                </Drawer>


                <Modal
                    title="Thêm người dùng"
                    closable={{ 'aria-label': 'Custom Close Button' }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                >
                    <div>Tên người dùng</div>
                    <Input placeholder="Tên người dùng" name='fullName' value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <div>Email</div>
                    <Input placeholder="Email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <div>password</div>
                    <Input type='password' placeholder="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div>phone</div>
                    <Input placeholder="phone" name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
                </Modal>
            </div>
            {contextHolder}
        </>
    );
}

export default Users;