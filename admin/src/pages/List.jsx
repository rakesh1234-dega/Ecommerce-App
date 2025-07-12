import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { backendUrl, currency } from '../App'
import { toast, ToastContainer } from 'react-toastify'

const List = ({ token }) => {
  const [list, setList] = useState([])

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list')
      if (response.data.success) {
        setList(response.data.products)
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const removeProduct = async (id) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/product/remove',
        { id },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      if (response.data.success) {
        toast.success(response.data.message)
        await fetchList()
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  console.log("Product list:", list)

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-slate-50 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>

        {list.map((item, index) => (
          <div
            key={index}
            className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border text-sm'
          >
            <img
              src={
                item.images?.[0]?.startsWith('http')
                  ? item.images[0]
                  : `${backendUrl}/${item.images[0]}`
              }
              alt='product'
              className='h-12 w-12 object-cover'
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className=' text-right md:text-center cursor-pointer text-lg'>x</p>
          </div>
        ))}
      </div>
    </>
  )
}

export default List
