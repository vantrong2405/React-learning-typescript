import { getStudents } from 'apis/students.api'
import { Fragment, useEffect, useState } from 'react'
import { Students as StudentsType } from 'types/students.type'

export default function Students() {
  const [students, setStudents] = useState<StudentsType>([])
  useEffect(() => {
    getStudents(1, 10).then((res) => {
      // setStudents(res.data)
      console.log(res.data)
    })
    console.log(123)
  }, [])
  return (
    <div>
      <h1 className='text-lg'>Students</h1>
      <div>
        <button className='mt-6 rounded bg-blue-500 px-5 py-2 text-white'>Click 10s</button>
      </div>
      <div>
        <button className='mt-6 rounded bg-blue-500 px-5 py-2 text-white'>Click 2s</button>
      </div>
      <div>
        <button className='mt-6 rounded bg-pink-700 px-5 py-2 text-white'>Refetch Students</button>
      </div>
      <div>
        <button className='mt-6 rounded bg-pink-700 px-5 py-2 text-white'>Cancel Request Students</button>
      </div>
      <div className='mt-6'>
        <a
          href='/students/add'
          className=' rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 '
        >
          Add Student
        </a>
      </div>

      <div role='status' className='mt-6 animate-pulse'>
        <div className='mb-4 h-4  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10 rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='mb-2.5 h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <div className='h-10  rounded bg-gray-200 dark:bg-gray-700' />
        <span className='sr-only'>Loading...</span>
      </div>
      <Fragment>
        <div className='relative mt-6 overflow-x-auto shadow-md sm:rounded-lg'>
          <table className='w-full text-left text-sm text-gray-500 dark:text-gray-400'>
            <thead className='bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400'>
              <tr>
                <th scope='col' className='py-3 px-6'>
                  #
                </th>
                <th scope='col' className='py-3 px-6'>
                  Avatar
                </th>
                <th scope='col' className='py-3 px-6'>
                  Name
                </th>
                <th scope='col' className='py-3 px-6'>
                  Email
                </th>
                <th scope='col' className='py-3 px-6'>
                  <span className='sr-only'>Action</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className='border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'>
                <td className='py-4 px-6'></td>
                <td className='py-4 px-6'>
                  <img src='' alt='student' className='h-5 w-5' />
                </td>
                <th scope='row' className='whitespace-nowrap py-4 px-6 font-medium text-gray-900 dark:text-white'></th>
                <td className='py-4 px-6'></td>
                <td className='py-4 px-6 text-right'>
                  <a href={`/students/`} className='mr-5 font-medium text-blue-600 hover:underline dark:text-blue-500'>
                    Edit
                  </a>
                  <button className='font-medium text-red-600 dark:text-red-500'>Delete</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='mt-6 flex justify-center'>
          <nav aria-label='Page navigation example'>
            <ul className='inline-flex -space-x-px'>
              <li>
                <span className='cursor-not-allowed rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                  Previous
                </span>
                <a
                  className='rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '
                  href={`/students?page=$`}
                >
                  Previous
                </a>
              </li>

              <li>
                <a
                  className='border border-gray-300   py-2 px-3 leading-tight  hover:bg-gray-100 hover:text-gray-700 '
                  href={`/students?page=`}
                ></a>
              </li>
              <li>
                <span className='cursor-not-allowed rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 '>
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    </div>
  )
}
