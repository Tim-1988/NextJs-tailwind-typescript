import Link from 'next/link'
import React, { ReactNode } from 'react'
import Image from "next/image"
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='drop-shadow-2xl flex items-center justify-center mx-auto max-w-[1440px] mb-5 mt-20 lg:mt-9 rounded-3xl bg-blue-200'>
      <div className='m-5 px-6 lg:px-20 3xl:px-0 flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap[10%] md:flex-row'>
          <Link href="/" className="mb-10">
            <img src='logo.jpg' alt='logo' width={74} height={29}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns) => (
              <FooterColumn title={columns.title}>
                <ul className='text-[14px] font-[600] flex flex-col gap-4 text-black'>
                  {columns.links.map((link) => (
                    <Link href="/" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className='flex flex-col gap-5'>
                  <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                    {FOOTER_CONTACT_INFO.links.map((link) => (
                      <Link
                        href="/"
                        key={link.label}
                        className='flex gap-4 md:flex-col lg:flex-row'
                        >
                          <p className='whitespace-nowrap font-[600]'>
                            {link.label}:
                          </p>
                          <p className='text-[14px] font-[600]'>
                            {link.value}
                          </p>
                        </Link>
                    ))}
                  </FooterColumn>
            </div>
                
                <div className='flex flex-col gap-5'>
                    <FooterColumn title={SOCIALS.title}>
                      <ul className='text-[14px] font-[500] flex gap-4'>
                        {SOCIALS.links.map((link) => (
                          <Link href="/" key={link}>
                            <Image src={link} alt='logo' width={24} height={24}/>
                          </Link>
                        ))}
                      </ul>
                    </FooterColumn>
                </div>
          </div>
        </div>
        <div className='border bg-gray-400'/>
        <p className='text-[14px] font-[700] w-full text-center'> 2024 Delivo | All rights reserved </p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='text-[18px] font-[700] whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  )
}

export default Footer