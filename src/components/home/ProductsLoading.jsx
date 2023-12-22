const Loading = () => {
  return (
    <div className='rounded-md bg-gray-200 w-[200px] h-[400px]' >
    </div>
  )
}
export const ProductsLoading = () => {
  return (
    <div className='flex flex-wrap justify-center sm:justify-between gap-x-7 gap-y-4 animate-pulse'>
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
      <Loading />
    </div>
  )
}
