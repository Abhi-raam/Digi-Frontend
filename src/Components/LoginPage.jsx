import React, { useState } from 'react'
import Img from '../assets/LOGO.png'
import { useNavigate } from 'react-router-dom'

function LoginPage() {
  const navigate = useNavigate()

  const [pinForm,setPinForm] =useState(false)
  const [pin,setPin] = useState()

  const loginHandle = () =>{
    if (pin == '5456'){
      navigate('/',{state:true})
    }
    else{
      alert('Incorrect PIN')
    }
  }

  return (
    <div>
      {pinForm?
        <div className='h-[80%] flex flex-col justify-center items-center absolute right-1/2 left-1/2 z-30'>
              
              <form action="" onSubmit={loginHandle}>
                <h1 className='text-center text-[20px] font-bold text-white mb-5'>ENTER YOUR PIN</h1>
                <input type="password"  className='outline-none p-1 rounded-md px-2' onChange={(e)=>setPin(e.target.value)}/>
                <div className='flex justify-center my-3 '>
                  <input type="submit" className='bg-green-500 text-center px-2 rounded-md text-white cursor-pointer' onClick={()=>loginHandle}/>
                </div>
                <p className='text-center cursor-pointer text-blue-950' onClick={()=>setPinForm(false)}>cancel</p>
              </form>
        </div>
        :null
      }
      <div className={`h-screen w-full lg:px-[80px] px-[30px] pt-[50px] bg-gradient-to-r  from-black  lg:to-white to-black ${pinForm?'blur-2xl':'blur-0'}  `}>
        
        <div className='flex lg:flex-row flex-col items-center justify-center'>
          <div className='lg:w-[40%]  flex items-center'>
            <div>
              <h1 className='lg:text-[50px] text-[30px] font-[700] text-white'>Let's Grow Your Brand To The Next Level</h1>
              <p className='lg:text-[12px] text-[8px]  text-justify mt-3 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, id accusamus ratione asperiores fugiat inventore nihil eius laudantium provident corporis, labore quo ex maiores sint est pariatur expedita quidem delectus.</p>
              <div className='bg-green-600 cursor-pointer mt-5 text-center flex justify-center items-center p-1 font-bold w-[100px] py-2 rounded-md hover:bg-green-500 transition-all'  onClick={()=>setPinForm(true)}><button className='text-white text-[12px]'>Login</button></div>
            </div>
            
          </div>
          <div className='lg:w-[60%] '>
            <div className='flex'>
              <img src={Img} alt="" className='object-cover'/>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default LoginPage