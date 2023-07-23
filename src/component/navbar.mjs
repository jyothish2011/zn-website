import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import { useRouter } from 'next/router';
import { Drawer, Dropdown, Menu } from "antd";
import { ApiDropdownIcon, CaseDropdownIcon, DocsDropdownIcon, FaqDropdownIcon, ResourceDownArrowIcon, ResourceUpArrowIcon, TechnicalDropdownIcon, UpArrow } from "../../public/images";

export default function Navbar({ children }) {
    const [open, setOpen] = useState(false);
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const router = useRouter();
    const menu = (
        <>
            <div>
                <Menu>
                    <div className="px-1 flex 2xl:gap-5 xl:gap-5 md:gap-0 md:mt-0">
                        <Menu.Item>
                            <Link href="/resource1" legacyBehavior >
                                <div className="flex justify-between items-center 2xl:px-6 xl:px-6  md:px-0 ">
                                    <div className="mx-6">
                                        <Image src={FaqDropdownIcon} width='40' height='40' className='' />
                                    </div>
                                    <div className="flex-col">
                                        <div className="font-family-Raleway font-semibold text-[#3C3C3C] 2xl:text-lg xl:text-lg lg:text-lg md:text-sm">Faq</div>
                                        <div className="font-normal text-[#636B75] tracking-[2%] 2xl:text-base xl:text-lg lg:text-base md:text-[10px]">Have questions? We’re here to help, Check out our support center.</div>
                                    </div>
                                </div>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/resource1" legacyBehavior>
                                <div className="flex justify-between items-center 2xl:px-6 xl:px-6  md:px-0 ">
                                    <div className="mx-6">
                                        <Image src={DocsDropdownIcon} width='40' height='40' className='' />
                                    </div>
                                    <div className="flex-col">
                                        <div className="font-family-Raleway font-semibold text-[#3C3C3C] 2xl:text-lg xl:text-lg lg:text-lg md:text-sm">Docs</div>
                                        <div className="font-normal text-[#636B75] tracking-[2%] 2xl:text-base xl:text-lg lg:text-base md:text-[10px]">Have questions? We’re here to help, Check out our support center.</div>
                                    </div>
                                </div>
                            </Link>
                        </Menu.Item>
                    </div>
                    <div className="px-1 flex 2xl:gap-5 xl:gap-5 md:gap-0 mt-9 md:mt-0">
                        <Menu.Item>
                            <Link href="/resource1" legacyBehavior>
                                <div className="flex justify-between items-center 2xl:px-6 xl:px-6  md:px-0">
                                    <div className="mx-6">
                                        <Image src={ApiDropdownIcon} width='40' height='40' className='' />
                                    </div>
                                    <div className="flex-col">
                                        <div className="font-family-Raleway font-semibold text-[#3C3C3C] 2xl:text-lg xl:text-lg lg:text-lg md:text-sm">Api</div>
                                        <div className="font-normal text-[#636B75] tracking-[2%] 2xl:text-base xl:text-lg lg:text-base md:text-[10px]">Have questions? We’re here to help, Check out our support center.</div>
                                    </div>
                                </div>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/resource1" legacyBehavior>
                                <div className="flex justify-between items-center 2xl:px-6 xl:px-6  md:px-0">
                                    <div className="mx-6">
                                        <Image src={CaseDropdownIcon} className='' />
                                    </div>
                                    <div className="flex-col">
                                        <div className="font-family-Raleway font-semibold text-[#3C3C3C] 2xl:text-lg xl:text-lg lg:text-lg md:text-sm">Case studies</div>
                                        <div className="font-normal text-[#636B75] tracking-[2%] 2xl:text-base xl:text-lg lg:text-base md:text-[10px]">Have questions? We’re here to help, Check out our support center.</div>
                                    </div>
                                </div>
                            </Link>
                        </Menu.Item>
                    </div>
                    <div className="px-1 flex 2xl:gap-5 xl:gap-5 md:gap-0  md:mt-0">
                        <Menu.Item>
                            <Link href="/resource1" legacyBehavior>
                                <div className="flex justify-between items-center 2xl:px-6 xl:px-6  md:px-0">
                                    <div className="mx-6">
                                        <Image src={TechnicalDropdownIcon} className='' />
                                    </div>
                                    <div className="flex-col">
                                        <div className="font-family-Raleway font-semibold text-[#3C3C3C] 2xl:text-lg xl:text-lg lg:text-lg md:text-sm">Technical</div>
                                        <div className="font-normal text-[#636B75] tracking-[2%] 2xl:text-base xl:text-lg lg:text-base md:text-[10px]">Have questions? We’re here to help, Check out our support center.</div>
                                    </div>
                                </div>
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href="/resource1" legacyBehavior>
                                <div className="flex justify-between items-center 2xl:px-6 xl:px-6  md:px-0">
                                    <div className="mx-6">
                                        <Image src={DocsDropdownIcon} className='' />
                                    </div>
                                    <div className="flex-col">
                                        <div className="font-family-Raleway font-semibold text-[#3C3C3C] 2xl:text-lg xl:text-lg lg:text-lg md:text-sm">Blogs</div>
                                        <div className="font-normal text-[#636B75] tracking-[2%] 2xl:text-base xl:text-lg lg:text-base  md:text-[10px]">Have questions? We’re here to help, Check out our support center.</div>
                                    </div>
                                </div>
                            </Link>
                        </Menu.Item>
                    </div>
                </Menu>
            </div>
        </>
    );
    return (
        <>
            <div className="">
                {/* <MobileNav open={open} setOpen={setOpen} /> */}
                <header className=" fixed w-full h-20 z-[50] bg-white fade-down header-fade animate overflow-hidden">
                    <div className=" container mx-auto px-6 py-5 ">
                        <div className=" flex justify-between items-center w-full h-full">
                            <Link href="/" legacyBehavior>
                                <a>
                                    <div className="2xl:w-[146px] 2xl:h-9 xl:w-[146px] xl:h-9 lg:w-[109px] lg:h-9 md:w-[89px] md:h-5 max-sm:w-24 max-sm:h-5">
                                        <Image
                                            src="/../public/LOGO.png"
                                            alt="Logo"
                                            width={146}
                                            height={36}
                                        />
                                    </div>
                                </a>
                            </Link>
                            <div className="flex items-center">
                                <ul className="hidden md:flex items-center">
                                    <Link href="/features" legacyBehavior>
                                        <a className={`2xl:mx-5 xl:mx-4 lg:mx-4 md:mx-3 hover-underline-animation font-medium 2xl:text-lg xl:text-base lg:text-sm md:text-xs md:tracking-wider md:leading-3 lg:tracking-[1.25px] ${router.pathname === '/features' ? 'text-[#0053A5]' : 'text-[#636B75]'}`}>
                                            Features
                                        </a>
                                    </Link>
                                    <Link href="/solution" legacyBehavior>
                                        <a className={`2xl:mx-5 xl:mx-4 lg:mx-4 md:mx-3 hover-underline-animation font-medium 2xl:text-lg xl:text-base lg:text-sm md:text-xs md:tracking-wider md:leading-3 lg:tracking-[1.25px] ${router.pathname === '/solution' ? 'text-[#0053A5]' : 'text-[#636B75]'}`}>
                                            Solutions
                                        </a>
                                    </Link>
                                    <Link href="/pricing" legacyBehavior>
                                        <a className={`2xl:mx-5 xl:mx-4 lg:mx-4 md:mx-3 hover-underline-animation font-medium 2xl:text-lg xl:text-base lg:text-sm md:text-xs md:tracking-wider md:leading-3 lg:tracking-[1.25px] ${router.pathname === '/pricing' ? 'text-[#0053A5]' : 'text-[#636B75]'}`}>
                                            Pricing
                                        </a>
                                    </Link>
                                    <Dropdown overlay={menu} trigger={['click']} className=" cursor-pointer">
                                        <a className={`2xl:mx-5 xl:mx-4 lg:mx-4 md:mx-3 hover-underline-animation text-[#636B75] active:text-[#0053A5] font-medium 2xl:text-lg xl:text-base lg:text-sm md:text-xs md:tracking-wider md:leading-3 lg:tracking-[1.25px]`} onClick={e => e.preventDefault()}>
                                            <span>Resources</span>
                                        </a>
                                    </Dropdown>
                                    <Link href="/company" legacyBehavior>
                                        <a className={`2xl:mx-5 xl:mx-4 lg:mx-4 md:mx-3 hover-underline-animation font-medium 2xl:text-lg xl:text-base lg:text-sm md:text-xs md:tracking-wider md:leading-3 lg:tracking-[1.25px] ${router.pathname === '/company' ? 'text-[#0053A5]' : 'text-[#636B75]'}`}>
                                            Company
                                        </a>
                                    </Link>
                                    <Link href="/">
                                        <li className="2xl:mx-5 xl:mx-4 lg:mx-4 md:mx-3 hover-underline-animation  text-[#636B75] active:text-[#0053A5] font-medium 2xl:text-lg xl:text-base lg:text-sm md:text-xs whitespace-nowrap md:tracking-wider md:leading-3 lg:tracking-[1.25px]">
                                            Log in</li>
                                    </Link>
                                </ul>
                                <div className=''>
                                    <button className="bg-gradient-to-br  2xl:w-[166px] 2xl:h-[46px] max-sm:mx-5 rounded-lg py-2 px-2 w-40 h-11 text-white whitespace-nowrap xl:w-[147px] xl:h-[46px] lg:w-[133px] 
                                     lg:h-[46px] md:w-[105px] md:h-9 max-sm:w-28 max-sm:h-10  xl:text-base lg:text-sm md:text-sm max-sm:text-xs">
                                        Get Free Demo
                                    </button>
                                </div>

                                <div className='text-gray-400 2xl:hidden xl:hidden lg:hidden md:hidden'>

                                    <svg onClick={showDrawer} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.75 12.25H13.25M2.75 8.25H13.25M2.75 4.25H13.25" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <Drawer placement="top" onClose={onClose} open={open} height='1000' className={`ant-drawer ${showMore ? 'show-more-height' : ''}`} >
                                        <div className='mobile-menu flex flex-col justify-between'>
                                            <div className="flex flex-col mx-2 ">
                                                <Link className="font-family-Raleway text-xl font-bold my-4 text-white tracking-[0.06em]" href='/features' onClick={() => setOpen(!open)}>
                                                    Features
                                                </Link>
                                                <Link className="font-family-Raleway text-xl font-bold my-4 text-white tracking-[0.06em]" href='/solution' onClick={() => setOpen(!open)}>
                                                    Solutions
                                                </Link>
                                                <Link className="font-family-Raleway text-xl font-bold my-4 text-white tracking-[0.06em]" href='/pricing' onClick={() => setOpen(!open)}>
                                                    Pricing
                                                </Link>
                                                <button
                                                    className="font-family-Raleway text-xl font-bold my-4 text-white tracking-[0.06em]"
                                                    onClick={toggleShowMore}
                                                >
                                                    {showMore ? (
                                                        <div className="flex">
                                                            Resources
                                                            <Image src={ResourceUpArrowIcon} alt="/" className="mx-2" />
                                                        </div>
                                                    ) : (
                                                        <div className="flex">
                                                            Resources
                                                            <Image src={ResourceDownArrowIcon} alt="/" className="mx-2" />
                                                        </div>
                                                    )}
                                                </button>
                                                {showMore && (
                                                    <div className="p-3 px-6 show-more-height">
                                                        <div className=" font-family-Raleway font-semibold text-white text-xl mt-2 tracking-[0.96rem]">
                                                            FAQ
                                                        </div>
                                                        <div className="tracking-[6%] font-family-Raleway font-semibold text-white text-xl mt-4">
                                                            Api
                                                        </div>
                                                        <div className="tracking-[6%] font-family-Raleway font-semibold text-white text-xl mt-4">
                                                            Technical
                                                        </div>
                                                        <div className="tracking-[6%] font-family-Raleway font-semibold text-white text-xl mt-4">
                                                            Docs
                                                        </div>
                                                        <div className="tracking-[6%] font-family-Raleway font-semibold text-white text-xl mt-4">
                                                            Case studies
                                                        </div>
                                                        <div className="tracking-[6%] font-family-Raleway font-semibold text-white text-xl mt-4">
                                                            Blogs
                                                        </div>
                                                    </div>
                                                )}
                                                <Link className="font-family-Raleway text-xl font-bold my-4 text-white tracking-[0.06em]" href='/company' onClick={() => setOpen(!open)}>
                                                    Company
                                                </Link>
                                                <Link className="font-family-Raleway text-xl font-bold my-4 text-white tracking-[0.06em]" href='/' onClick={() => setOpen(!open)}>
                                                    Log in
                                                </Link>
                                                <div className='px-10'>
                                                    <button className="hamburger-btn  text-[#0053A5] font-medium whitespace-nowrap my-4 py-2 px-2 ">
                                                        Get Free Demo
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Drawer>
                                </div>
                            </div>
                        </div>
                    </div>
                </header >
            </div>
            {children}
        </>
    )
}
