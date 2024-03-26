import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi'

function Contact() {
  const ContactUs = [
    {
      id: 1,
      title: 'Email',
      info: 'Liên hệ với quản trị của chúng tôi',
      icon:FiMail,
      contact: 'T1thanhT2@gmail.com'
    },
    {
      id: 2,
      title: 'Call Us',
      info: 'Hãy liên hệ với chúng tôi từ 8 giờ sáng - 24 giờ tối',
      icon:FiPhoneCall,
      contact: '+87 0345 878 241'
    },
    {
      id: 3,
      title: 'Location',
      info: '84/74 Đoàn Văn Bơ, Quận 4, Phường 14 TPHCM',
      icon:FiMapPin,
      contact: ''
    },
  ];
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 py-6'>
        <Head title='Contact'/>
        <div className='grid mg:grid-cols-2 gap-6 lg:my-20 my-10 lg:grid-cols-3 xl:gap-8'>
          {ContactUs.map((item) => (
            <div 
              key={item.id} 
              className='border border-border flex-colo p-10 bg-dry rounded-lg text-center'
            >
              <span className='flex-colo w-20 h-20 rounded-full bg-main text-subMain'>
                <item.icon/>
              </span>
              <h5 className='text-xl font-semibold mb-2'>
                {item.title}
              </h5>
              <p className='mb-0 text-sm text-text leading-7'>
                <a 
                  href={`mailto:${item.contact}`} 
                  className='text-blue-600'
                >
                  {item.contact} {''}
                </a>
                {item.info}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Contact