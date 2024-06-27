export default function PostItem() {
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRE0b7vFLR-jNx8hjihbU4MOfYxiE9qAGYCg&s"
          loading='lazy'
          alt="title"
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>22-05-2002</span>
        <h2 className='text-xl font-bold text-gray-800'>Tieeu dderf nef</h2>
        <p className='text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate sed vitae unde ab ducimus ea, autem illum adipisci illo dolore distinctio vero aperiam assumenda maiores possimus beatae vel iure facere!</p>
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              className='rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Edit
            </button>
            <button
              type='button'
              className='rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
