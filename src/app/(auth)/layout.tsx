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
    <div className="main min-h-screen bg-gradient-to-b from-[#cca8e9] to-[#defcf9]" id="main_div">
      {children}
    </div>
  );
}
