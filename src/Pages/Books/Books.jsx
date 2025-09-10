import { Space, Table, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { getAllBooks } from '../../services/book';

const Books = () => {
    const [listBook, setListBook] = useState([]);

    useEffect(() => {
        const dataBook =  async () => {
            const res = await getAllBooks();
            setListBook(res.data.data.result);
            console.log(res.data.data.result);
        };
        dataBook();
    }, []);

    const columns = [
        {
            title: 'ID',
            dataIndex: '_id',
            key: '_id',
        },
        {
            title: 'mainText',
            dataIndex: 'mainText',
            key: 'mainText'
        },
        {
            title: 'author',
            dataIndex: 'author',
            key: 'author',
        },
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, record) => (
        //         <Space size="middle">
        //             <a>Invite {record.name}</a>
        //             <a>Delete</a>
        //         </Space>
        //     ),
        // },
    ];
    
    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Books Page</h1>
            <p>This is the Books page content.</p>
            <Table columns={columns} dataSource={listBook} rowKey="_id" />
        </div>
    );
}

export default Books;