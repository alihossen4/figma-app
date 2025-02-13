import React from 'react'
import Button from '../Button'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.png'
import profile3 from '../../assets/profile3.png'
import profile4 from '../../assets/profile4.png'
import Flex from '../Flex'

const TopCard = ({img_src,header, text}) => {
  return (
    <section className='flex flex-col items-center justify-center my-10 max-w-[1600px] m-auto flex'>
    <div className='w-[380px] max-h-[335px] bg-[#16192A] border border-[#2E3150] items-center justify-between justify-center gap-[8px] p-5 px-14 m-auto rounded-lg relative flex flex-col mr-[28px] ml-[-1px]'>
      <img src={img_src} />
      <h1 className='text-center my-4 mb-8'>{header}</h1>
      <Button text={text} className='absolute left-[25%] bottom-[-8%] items-center text-center m-auto'/>
    </div>
    </section>
  )
}

const TopCreatorCard = () => {
  return (
  <Flex>
    <TopCard img_src={profile1} header='John Doe' text='View Details' />
    <TopCard img_src={profile2} header='Kelvin Glan' text='View Details' />
    <TopCard img_src={profile3} header='Glam Lee' text='View Details' />
    <TopCard img_src={profile4} header='Alameda' text='View Details' />
  </Flex>
  )
}
export default TopCreatorCard
