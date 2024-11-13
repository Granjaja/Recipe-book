import MyForm from '@/components/Form'

const page = () => {
  return (
    <div className='justify-items-center'>
      <div className='text-2xl font-semibold text-green-500'>
      <h1>Create Recipe</h1>
      </div>
      
     <div>
      <MyForm/>
     </div>
    </div>
  )
}

export default page
