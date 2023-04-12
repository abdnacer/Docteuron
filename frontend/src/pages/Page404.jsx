import React from 'react'
import Button from '../components/Button'


const Page404 = () => {

  const role = JSON.parse(localStorage.getItem('user'))
  
  const backToPage = () => {
    if(role){
        if(role.role === 'doctor' || role.role === 'admin'){
            window.location.replace(`http://localhost:3000/dashboard-${role.role}`)
        }else if(role.role === 'patient'){
            window.location.replace(`http://localhost:3000`)
        }
        else{
            window.location.replace(`http://localhost:3000/login`)
        }
    }else {
      window.location.replace(`http://localhost:3000/login`)
    }
  }

  return (
    <div>
      {/* <Button type='submit' className='w-16 h-16 fixed bg-[#02b3b9] rounded-full flex items-center justify-center text-2xl shadow-xl cursor-pointer text-white' style={{ bottom: '25px', right: '25px' }} btn='Back'/> */}
      <div class="bg-[#02b3b9] relative overflow-hidden h-screen">
        <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" class="absolute h-full w-full object-cover" />
        <div class="inset-0 bg-black opacity-25 absolute">
        </div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
          <div class="w-full font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You are all alone here
            </h1>
            <Button type='submit' onclick={backToPage} class="font-extrabold text-2xl text-center text-white bg-[#000]  rounded-lg  w-full sm:w-auto mt-3 px-9 py-2 dark:bg-[#02b3b9]"  btn="Back" />
            <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Page404