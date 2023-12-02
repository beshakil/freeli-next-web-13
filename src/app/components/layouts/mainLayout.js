"use client"
import React from 'react';
import dynamic from 'next/dynamic';
import '../../globals.css';
import "../../App.css";


const metadata = {
  title: 'Workfreeli',
  description: 'Workfreeli',
}
const RightTop = dynamic(() => import('../rightTop'), {
  ssr: false
});

 function MainLayout({ children }) {

  return (
    <>
      <div className='rightTop'>
        <RightTop />
      </div>
      {children}
    </>
  )
}
export default MainLayout;
