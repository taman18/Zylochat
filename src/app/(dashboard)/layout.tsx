'use client';
import Footer from '@/components/Footer/page';
import Header from '@/components/Header';
import React, { useEffect, useRef } from 'react';


export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <div>
      <Header />
      {children}
      <Footer/>
    </div>
  );
}
