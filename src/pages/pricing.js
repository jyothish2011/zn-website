import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { Col, Collapse, Form, Input, Row, Select, Switch } from 'antd';
import { CardplusGrowthIcon, CardplusStartupIcon, CompareTick, DownArrow, GrowthArrowIcon, MinusIcon, PlusIcon, PreArrowIcon, StartUpArrowIcon, UpArrow } from '../../public/images';

const { Panel } = Collapse;
const { TextArea } = Input

export default function Pricing() {
    const text = (
        <p
            style={{
                paddingLeft: 24,
            }}
        >
            You can pay with a credit card  or via banking, we will renew  your subscription
            automatically at the end of every biling cycle.
        </p>
    );
    const [panelOpen, setPanelOpen] = useState(false);
    const [isSwitchActive, setIsSwitchActive] = useState(false);
    const [mobileCardOpen, setMobileCardOpen] = useState(false)
    const [activePanel, setActivePanel] = useState(['1']);
    const [showMore, setShowMore] = useState(false);

    const onChange = (checked) => {
        setIsSwitchActive(checked);
    };
    const handlePanelChange = (key) => {
        setPanelOpen(key === '1'); // Assuming the key of the panel is '1'
    };
    const handleCardPanelChange = (key) => {
        setActivePanel((prevActivePanel) => {
            if (prevActivePanel.includes(key)) {
                return [];
            } else {
                return [key];
            }
        });
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    function revealScroll() {
        if (typeof window !== 'undefined') {
            var reveals = document.querySelectorAll(".reveal-scroll");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 130;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("acti");
                } else {
                    reveals[i].classList.remove("acti");
                }
            }
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", revealScroll);
    }

    return (
        <>
            <section className='bg-home'>
                <div className=' container mx-auto px-4 '>
                    <div class=" grid grid-cols-1">
                        <div className='banner-right-fade fade-right banner-animate  text-center max-sm:px-4'>
                            <div className="flex justify-center items-center  mt-40 mb-10 ">
                                <div className="font-family-Raleway 2xl:text-5xl font-bold tracking-[0.02em] text-[#3A3A3A] xl:text-4xl lg:text-2xl md:text-xl max-sm:text-2xl">
                                    Affordable plans, priceless results.
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='-mt-5  2xl:text-2xl xl:text-xl lg:text-base md:text-sm  max-sm:text-[10px]  max-sm:justify-center max-sm:items-center tracking-[0.02em] text-[#535353] font-normal'>
                                    Explore our pricing options designed for your success.
                                </div>
                            </div>
                        </div>
                        <div className='banner-left-fade fade-left banner-animate banner-animate flex justify-center items-center'>
                            <div className='mt-20 2xl:w-[751px] 2xl:h-[565px] xl:w-[490px] xl:h-[368px] lg:w-[490px] lg:h-[368px] md:w-[490px] md:h-[368px] max-sm:w-[330px] max-sm:h-[225px]'>
                                <Image src="/../public/pricing banner.png" alt="/" width='751' height='565' className='home-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section >


            <section>
                <div className='container mx-auto px-4 pt-20'>
                    <div className='flex justify-end items-center 2xl:px-64 xl:px-56 lg:px-28 md:px-10'>
                        <div className='font-family-Raleway italic font-medium text-[#004181] 2xl:text-[26px] xl:text-xl lg:text-xl md:text-base max-sm:hidden'>Save 20%</div>
                    </div>
                    <div className='2xl:hidden xl:hidden lg:hidden md:hidden'>
                        <div className=' flex justify-center items-center whitespace-nowrap ml-64'>
                            <div className='font-family-Raleway italic font-medium text-[#004181] text-sm'>Save 20%</div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-8 '>
                        <div className='font-family-Raleway  tracking-[0.06em] text-[#9F9F9F] 2xl:text-[30px] xl:text-2xl lg:text-2xl md:text-xl max-sm:text-xs'>
                            <span className={isSwitchActive ? 'font-semibold text-[#9F9F9F]' : 'font-extrabold text-[#0053A5]'}>Billed Monthly</span>
                            <Switch
                                defaultChecked={isSwitchActive}
                                onChange={onChange}
                                className='2xl:mx-8 xl:mx-10 lg:mx-10 md:mx-10 max-sm:mx-[10px]'
                                style={{ backgroundColor: '#E6E6E6' }}
                            />
                            <span className={isSwitchActive ? 'font-extrabold text-[#0053A5]' : 'font-semibold text-[#9F9F9F]'}>Billed Annually</span>
                        </div>
                    </div>
                    <div className='flex justify-end items-center'>
                        <div className=' 2xl:w-[64px] 2xl:h-[59] xl:w-[45px] xl:h-[42px] lg:w-[45px] lg:h-[42px] md:w-[44px] md:h-[41px] 2xl:-mt-32 xl:-mt-28 lg:-mt-24 md:-mt-28 2xl:mr-[310px] xl:mr-64 lg:mr-36 md:mr-20 max-sm:hidden'>
                            <Image src="/../public/price-arrow.png" alt="/" width='64' height='59' className='home-image' />
                        </div>
                    </div>
                    <div className='flex justify-center items-center ml-60 '>
                        <div className='2xl:hidden xl:hidden lg:hidden md:hidden max-sm:-mt-24 '>
                            <Image src="/../public/Arrow_11.png" alt="/" width='32' height='32' className='home-image' />
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='container mx-auto px-4 py-40 max-sm:hidden'>
                    <div className='flex justify-center items-center 2xl:gap-14 xl:gap-10 lg:gap-9 md:gap-5'>

                        <div className='price-card-basic 2xl:px-4 xl:px-4 lg:pl-2 md:pl-2'>
                            <div className='flex justify-center items-center'>
                                <Image src={StartUpArrowIcon} width='14' height='13'
                                    className='2xl:w-[14px] 2xl:h-[13px] xl:w-[14px] xl:h-[13px] lg:w-[10px] lg:h-[9px] md:w-[10px] md:h-[9px] 2xl:mt-2 xl:mt-6 lg:mt-3 md:mt-3 2xl:ml-4 xl:ml-6 lg:ml-14 md:ml-7' />
                            </div>
                            <div className='flex justify-center items-center 2xl:mr-14 2xl:-mt-2 xl:-mt-1 lg:-mt-1 xl:mr-12 lg:mr-2 md:mr-2'>
                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#005F79] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Startup</div>
                            </div>
                            <div className='flex justify-start items-center mt-1'>
                                <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-xl md:text-base'>
                                    $15
                                </div>
                                <div className='mx-2 2xl:mt-5 xl:mt-3 lg:mt-3 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-sm lg:text-xs md:text-xs    '>
                                    /month
                                </div>
                            </div>
                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl'>Basic</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-2 md:mt-2'>
                                <div className='font-normal tracking-[0.02em] text-[#636B75] 2xl:text-base xl:text-sm lg:text-[10px] md:text-[8px]'>
                                    Explore the product and power small,personal projects.
                                </div>
                            </div>
                            <div className='card-divider mt-4'></div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px] '>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(50)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job search API</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 md:mt-3 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job posting API</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(upto 10000)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(Basic)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-normal tracking-[0.0125em] text-[#B5B5B5] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Hotlist portal integration /VMS</div>
                            </div>
                            <div className='flex justify-center items-center mt-4 lg:mt-3 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[235px] 2xl:h-[56px] xl:w-[191px] xl:h-[46px] lg:w-[143px] lg:h-[34px] md:w-[134px] md:h-[32px] xl:mt-4'>
                                <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-xl lg:text-xs md:text-xs '>
                                    Get Started
                                </button>
                            </div>
                        </div>


                        <div className='price-card-standard 2xl:px-4 xl:pl-3 lg:pl-2 md:pl-2'>
                            <div className='flex justify-center items-center'>
                                <Image src={GrowthArrowIcon} width='14' height='13'
                                    className='2xl:w-[14px] 2xl:h-[13px] xl:w-[14px] xl:h-[13px] lg:w-[10px] lg:h-[9px] md:w-[10px] md:h-[9px] 2xl:mt-2 xl:mt-6 lg:mt-3 md:mt-3 2xl:ml-4 xl:ml-6 lg:ml-14 md:ml-7' />
                            </div>
                            <div className='flex justify-center items-center 2xl:mr-14 2xl:-mt-2 xl:-mt-1 lg:-mt-1 xl:mr-12 lg:mr-2 md:mr-2'>
                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#756333] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Growth</div>
                            </div>
                            <div className='flex justify-start items-center mt-1'>
                                <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-xl md:text-base'>
                                    $20
                                </div>
                                <div className='mx-2 2xl:mt-5 xl:mt-3 lg:mt-3 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-sm lg:text-xs md:text-xs    '>
                                    /month
                                </div>
                            </div>
                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl'>Standard</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-2 md:mt-2'>
                                <div className='font-normal tracking-[0.02em] text-[#636B75] 2xl:text-base xl:text-sm lg:text-[10px] md:text-[8px]'>
                                    Run production apps with fully functionality.
                                </div>
                            </div>
                            <div className='card-divider mt-4'></div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px] '>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(150)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job search API</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 md:mt-3 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job posting API</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(upto 50000)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(Advanced)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Hotlist portal integration /VMS</div>
                            </div>
                            <div className='flex justify-center items-center mt-4 lg:mt-3 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[235px] 2xl:h-[56px] xl:w-[191px] xl:h-[46px] lg:w-[143px] lg:h-[34px] md:w-[134px] md:h-[32px] xl:mt-4'>
                                <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-xl lg:text-xs md:text-xs '>
                                    Get Started
                                </button>
                            </div>
                        </div>


                        <div className='price-card-pro 2xl:px-4 xl:pl-3 lg:pl-2 md:pl-2'>
                            {/* <div className='flex justify-center items-center'>
                                <Image src={StartUpArrowIcon} width='14' height='13'
                                    className='2xl:w-[14px] 2xl:h-[13px] xl:w-[14px] xl:h-[13px] lg:w-[10px] lg:h-[9px] md:w-[10px] md:h-[9px] 2xl:mt-2 xl:mt-6 lg:mt-3 md:mt-3 2xl:ml-4 xl:ml-6 lg:ml-14 md:ml-7' />
                            </div> */}
                            {/* <div className='flex justify-center items-center 2xl:mr-14 2xl:-mt-2 xl:-mt-1 lg:-mt-1 xl:mr-12 lg:mr-2 md:mr-2'>
                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#005F79] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Startup</div>
                            </div> */}
                            <div className=' flex justify-center items-center trapezoid'>
                                <div className=' font-semibold tracking-[0.02em] text-[#FFFFFF] 2xl:text-xs 2xl:pt-10 xl:text-[10px] xl:pt-10 lg:text-[8px] lg:whitespace-nowrap lg:pt-8 md:text-[6px] md:pt-8'>
                                    Most Recommended
                                </div>
                            </div>
                            <div className='flex justify-start items-center 2xl:mt-10 xl:mt-14 lg:mt-9 md:mt-10'>
                                <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-xl md:text-base'>
                                    $30
                                </div>
                                <div className='mx-2 2xl:mt-5 xl:mt-3 lg:mt-3 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-sm lg:text-xs md:text-xs    '>
                                    /month
                                </div>
                            </div>
                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl'>Pro</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-2 md:mt-2'>
                                <div className='font-normal tracking-[0.02em] text-[#636B75] 2xl:text-base xl:text-sm lg:text-[10px] md:text-[8px]'>
                                    Explore the product and power small,personal projects.
                                </div>
                            </div>
                            <div className='card-divider mt-4'></div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px] '>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(250)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job search API</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 md:mt-3 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job posting API</div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(upto 100000)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(Advanced)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Hotlist portal integration /VMS</div>
                            </div>
                            <div className='flex justify-center items-center mt-4 lg:mt-3 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[235px] 2xl:h-[56px] xl:w-[191px] xl:h-[46px] lg:w-[143px] lg:h-[34px] md:w-[134px] md:h-[32px] xl:mt-4'>
                                <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-xl lg:text-xs md:text-xs '>
                                    Get Started
                                </button>
                            </div>
                        </div>


                        <div className='price-card-pre 2xl:px-4 xl:pl-3 lg:pl-2 md:pl-2'>
                            <div className='flex justify-center items-center'>
                                <Image src={PreArrowIcon} width='14' height='13'
                                    className='2xl:w-[14px] 2xl:h-[13px] xl:w-[14px] xl:h-[13px] lg:w-[10px] lg:h-[9px] md:w-[10px] md:h-[9px] 2xl:mt-2 xl:mt-6 lg:mt-3 md:mt-3 2xl:ml-8 xl:ml-6 lg:ml-14 md:ml-10' />
                            </div>
                            <div className='flex justify-center items-center 2xl:mr-14 2xl:-mt-2 xl:-mt-1 lg:-mt-1 xl:mr-12 lg:mr-2 md:mr-4'>
                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#4A4186] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Enterprise</div>
                            </div>
                            <div className='flex justify-start items-center mt-2'>
                                <div className='font-family-Raleway font-medium tracking-[0.02em] text-[#636B75] 2xl:text-base xl:text-sm lg:text-sm md:text-xs'>Custom Pricing</div>
                            </div>
                            <div className='flex justify-start items-center 2xl:mt-4 xl:mt-2 lg:mt-1 md:mt-1'>
                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl'>Premium</div>
                            </div>
                            <div className='flex justify-start items-center 2xl:mt-4 xl:mt-4 lg:mt-2 md:mt-2'>
                                <div className='font-normal tracking-[0.02em] text-[#636B75] 2xl:text-base xl:text-sm lg:text-[10px] md:text-[8px]'>
                                    Explore the product and power small,personal projects.
                                </div>
                            </div>
                            <div className='card-divider mt-4'></div>
                            <div className='flex justify-start items-center 2xl:mt-4 xl:mt-4 lg:mt-3 md:mt-3  gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px] '>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(Unlimited)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job search API <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(Unlimited)</span>  </div>
                            </div>
                            <div className='flex justify-start items-center mt-4 md:mt-3 lg:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Job posting API <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(Unlimited)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px] md:text-[6px]'>(Unlimited)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] 2xl:text-xs xl:text-[10px] lg:text-[6px]'>(Advanced)</span></div>
                            </div>
                            <div className='flex justify-start items-center mt-4 lg:mt-3 md:mt-3 gap-2'>
                                <div className='2xl:w-[18px] 2xl:h-[18px] xl:w-[18px] xl:h-[18px] lg:w-[11px] lg:h-[11px] md:w-[8px] md:h-[8px]'>
                                    <Image src="/../public/card-tick.png" alt="/" width='18' height='18' className='' />
                                </div>
                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] 2xl:text-base xl:text-xs lg:text-[10px] md:text-[8px]'>Hotlist portal integration /VMS</div>
                            </div>
                            <div className='flex justify-center items-center mt-4 lg:mt-3 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[235px] 2xl:h-[56px] xl:w-[191px] xl:h-[46px] lg:w-[143px] lg:h-[34px] md:w-[134px] md:h-[32px] xl:mt-4'>
                                <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-xl lg:text-xs md:text-xs '>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Mobileview start */}
                <div className='2xl:hidden xl:hidden lg:hidden md:hidden '>
                    <div className='flex justify-center items-center mt-4'>
                        <div className='responsive-pricing card-header-text'>
                            <Collapse
                                bordered={false}
                                activeKey={activePanel}
                                className="card-bg-gradient header-border parent-class mobile-card max-sm:min-w-full"
                                expandIconPosition="right"
                                onChange={handleCardPanelChange}
                                accordion
                                expandIcon={({ isActive }) =>
                                    isActive ? (
                                        <Image src={MinusIcon} width="5px" height="1" className="flex-wrap justify-center items-center -mt-8" />
                                    ) : (
                                        <Image src={CardplusStartupIcon} width="10" height="10" className="flex-wrap justify-center items-center -mt-8" />
                                    )
                                }
                            >
                                <Panel header={<div className="text-[#005F79] font-medium tracking-[0.02em] font-family-Raleway text-xs ">Startup</div>} className='max-sm:text-xs  card-header-text' key="1">
                                    <div>
                                        <div className=''>
                                            <div className='flex justify-center items-center'>
                                                <Image src={StartUpArrowIcon} width='10' height='10'
                                                    className='ml-8' />
                                            </div>
                                            <div className='flex justify-center items-center mr-4 -mt-1'>
                                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#005F79] text-[10px]'>Startup</div>
                                            </div>
                                            <div className='flex justify-start items-center '>
                                                <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] text-base'>
                                                    $15
                                                </div>
                                                <div className='mx-2 mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] text-xs'>
                                                    /month
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] text-xl'>Basic</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2'>
                                                <div className='font-normal tracking-[0.02em] text-[#636B75] text-[8px]'>
                                                    Explore the product and power small,personal projects.
                                                </div>
                                            </div>
                                            <div className='mobile-card-divider mt-2'></div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(50)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job search API</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job posting API</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(upto 10000)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Basic)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-normal tracking-[0.0125em] text-[#B5B5B5] text-[8px]'>Hotlist portal integration /VMS</div>
                                            </div>
                                            <div className='flex justify-center items-center mt-4 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white w-[134px] h-[32px]'>
                                                <button className='font-family-Raleway font-semibold tracking-[1.25px] text-xs '>
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-4 '>
                        <div className='responsive-pricing card-header-text mt-10'>
                            <Collapse
                                bordered={false}
                                activeKey={activePanel}
                                className="card-bg-gradient header-border-growth parent-class mobile-card-growth max-sm:min-w-full"
                                expandIconPosition="right"
                                onChange={handleCardPanelChange}
                                accordion
                                expandIcon={({ isActive }) =>
                                    isActive ? (
                                        <Image src={MinusIcon} width="5px" height="1" className="flex-wrap justify-center items-center -mt-8" />
                                    ) : (
                                        <Image src={CardplusGrowthIcon} width="10" height="10" className="flex-wrap justify-center items-center -mt-8" />
                                    )
                                }
                            >
                                <Panel header={<div className="text-[#756333] font-medium tracking-[0.02em] font-family-Raleway text-xs ">Growth</div>} className='max-sm:text-xs  card-header-text' key="2">
                                    <div>
                                        <div className=''>
                                            <div className='flex justify-center items-center'>
                                                <Image src={GrowthArrowIcon} width='10' height='10'
                                                    className='ml-8' />
                                            </div>
                                            <div className='flex justify-center items-center mr-4 -mt-1'>
                                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#756333] text-[10px]'>Growth</div>
                                            </div>
                                            <div className='flex justify-start items-center '>
                                                <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] text-base'>
                                                    $20
                                                </div>
                                                <div className='mx-2 mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] text-xs'>
                                                    /month
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] text-xl'>Standard</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2'>
                                                <div className='font-normal tracking-[0.02em] text-[#636B75] text-[8px]'>
                                                    Run production apps with fully functionality.
                                                </div>
                                            </div>
                                            <div className='mobile-card-divider mt-2'></div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(150)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job search API</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job posting API</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(upto 50000)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Advanced)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-normal tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Hotlist portal integration /VMS</div>
                                            </div>
                                            <div className='flex justify-center items-center mt-4 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white w-[134px] h-[32px]'>
                                                <button className='font-family-Raleway font-semibold tracking-[1.25px] text-xs '>
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-4 '>
                        <div className='responsive-pricing card-header-text mt-10'>
                            <Collapse
                                bordered={false}
                                activeKey={activePanel}
                                className="card-bg-gradient header-border-recommended parent-class mobile-card-recommended max-sm:min-w-full"
                                expandIconPosition="right"
                                onChange={handleCardPanelChange}
                                accordion
                                expandIcon={({ isActive }) =>
                                    isActive ? (
                                        <Image src={MinusIcon} width="5px" height="1" className="flex-wrap justify-center items-center -mt-8" />
                                    ) : (
                                        <Image src={CardplusGrowthIcon} width="10" height="10" className="flex-wrap justify-center items-center -mt-8 " />
                                    )
                                }
                            >
                                <Panel header={<div className="text-center text-[#004181] font-medium tracking-[0.02em] font-family-Raleway text-[0.7rem] whitespace-nowrap -ml-2 ">Most Recommended</div>} className='max-sm:text-xs  card-header-text' key="3">
                                    <div>
                                        <div className=''>
                                            <div className=' trapezoid-mobile-card'>
                                                <div className='flex justify-center items-center font-semibold tracking-[0.02em] text-[#FFFFFF] whitespace-nowrap text-[8px] pt-3 '>
                                                    Most Recommended
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center mt-8 '>
                                                <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] text-base'>
                                                    $30
                                                </div>
                                                <div className='mx-2 mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] text-xs'>
                                                    /month
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] text-xl'>Pro</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2'>
                                                <div className='font-normal tracking-[0.02em] text-[#636B75] text-[8px]'>
                                                    Run production apps with fully functionality & Customer Support.
                                                </div>
                                            </div>
                                            <div className='mobile-card-divider mt-2'></div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(250)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job search API</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job posting API</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(upto 100000)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Advanced)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-normal tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Hotlist portal integration /VMS</div>
                                            </div>
                                            <div className='flex justify-center items-center mt-4 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white w-[134px] h-[32px]'>
                                                <button className='font-family-Raleway font-semibold tracking-[1.25px] text-xs '>
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>

                    <div className='flex justify-center items-center mt-4 '>
                        <div className='responsive-pricing card-header-text my-10'>
                            <Collapse
                                bordered={false}
                                activeKey={activePanel}
                                className="card-bg-gradient header-border-enterprise parent-class mobile-card-enterprise max-sm:min-w-full"
                                expandIconPosition="right"
                                onChange={handleCardPanelChange}
                                accordion
                                expandIcon={({ isActive }) =>
                                    isActive ? (
                                        <Image src={MinusIcon} width="5px" height="1" className="flex-wrap justify-center items-center -mt-8 " />
                                    ) : (
                                        <Image src={CardplusGrowthIcon} width="10" height="10" className="flex-wrap justify-center items-center -mt-8 " />
                                    )
                                }
                            >
                                <Panel header={<div className="text-[#4A4186] font-medium tracking-[0.02em] font-family-Raleway text-xs whitespace-nowrap -ml-2 ">Enterprise</div>} className='max-sm:text-xs  card-header-text' key="4">
                                    <div>
                                        <div className=''>
                                            <div className='flex justify-center items-center'>
                                                <Image src={PreArrowIcon} width='10' height='10'
                                                    className='ml-8' />
                                            </div>
                                            <div className='flex justify-center items-center mr-4 -mt-1'>
                                                <div className='font-family-Raleway font-semibold tracking-[0.02em] text-[#4A4186] text-[10px]'>Enterprise</div>
                                            </div>
                                            <div className='flex justify-start items-center '>
                                                {/* <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] text-base'>
                                                    $15
                                                </div> */}
                                                <div className=' mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] text-xs'>
                                                    Custom Pricing
                                                </div>
                                            </div>
                                            <div className='flex justify-start items-center 2xl:mt-2 xl:mt-2 lg:mt-1'>
                                                <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] text-xl'>Premium</div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2'>
                                                <div className='font-normal tracking-[0.02em] text-[#636B75] text-[8px]'>
                                                    Run production apps with fully functionality & Customer Support.
                                                </div>
                                            </div>
                                            <div className='mobile-card-divider mt-2'></div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Active jobs <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Unlimited)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job search API <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Unlimited)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Job posting API <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Unlimited)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Resume database <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Unlimited)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-medium tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Reports & Assessment <span className='font-medium  tracking-[0.02em] text-[#636B75] text-[6px]'>(Advanced)</span></div>
                                            </div>
                                            <div className='flex justify-start items-center mt-2 gap-2'>
                                                <div className=''>
                                                    <Image src="/../public/card-tick.png" alt="/" width='8' height='8' className='' />
                                                </div>
                                                <div className='font-normal tracking-[0.0125em] text-[#3C3C3C] text-[8px]'>Hotlist portal integration /VMS</div>
                                            </div>
                                            <div className='flex justify-center items-center mt-4 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white w-[134px] h-[32px]'>
                                                <button className='font-family-Raleway font-semibold tracking-[1.25px] text-xs '>
                                                    Get Started
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </Panel>
                            </Collapse>
                        </div>
                    </div>
                </div>
                {/* Mobileview end */}
            </section>

            <div className='text-center max-sm:hidden '>
                <button className='text-[#0053A5] font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-xl xl:text-xl lg:text-xl md:text-xl' onClick={() => setShowMore(!showMore)}>
                    {showMore ? <div className='flex'>See Full Comparison <Image src={UpArrow} className='mx-2' /> </div> : <div className='flex'>See Full Comparison <Image src={DownArrow} className='mx-2' /> </div>}
                </button>
                {showMore && (

                    <div>
                        <section>
                            <div className='container mx-auto px-10 pt-10'>
                                <div className='grid grid-cols-5 max-sm:hidden'>
                                    <div className='col-span-1'>

                                    </div>


                                    <div className='col-span-1'>
                                        <div className='flex-col justify-center items-center '>
                                            <div className='text-center px-4'>
                                                <div className='full-compare-startup flex justify-center items-center 2xl:mx-[5.5rem] xl:mx-16 lg:mx-12 md:mx-6'>
                                                    <div className=' text-[#3B8D67] tracking-[0.02em] font-family-Raleway font-medium 2xl:text-xs xl:text-xs lg:text-xs md:text-xs'>
                                                        Startup
                                                    </div>
                                                </div>
                                                <div className=' mt-3'>
                                                    <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl '>Basic</div>
                                                </div>
                                                <div className=' mt-2'>
                                                    <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-lg md:text-lg'>
                                                        $15
                                                    </div>
                                                </div>
                                                <div className='mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-base lg:text-sm md:text-sm'>
                                                    /month
                                                </div>
                                                <div className='flex justify-center items-center mt-4 2xl:mx-12 xl:mx-7 lg:mx-7 md:mx-0 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[151px] 2xl:h-[46px] xl:w-[140px] xl:h-[46px] lg:w-[105px] lg:h-[34px] md:w-[105px] md:h-[34px]'>
                                                    <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-lg xl:text-base lg:text-xs md:text-xs'>
                                                        Get Started
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='col-span-1'>
                                        <div className='flex-col justify-center items-center '>
                                            <div className='text-center px-4'>
                                                <div className='full-compare-growth flex justify-center items-center 2xl:mx-[5.5rem] xl:mx-16 lg:mx-12 md:mx-6'>
                                                    <div className=' text-[#B89D5A] tracking-[0.02em] font-family-Raleway font-medium 2xl:text-xs xl:text-xs lg:text-xs md:text-xs'>
                                                        Growth
                                                    </div>
                                                </div>
                                                <div className=' mt-2'>
                                                    <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl '>Standard</div>
                                                </div>
                                                <div className=' mt-2'>
                                                    <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-lg md:text-lg'>
                                                        $20
                                                    </div>
                                                </div>
                                                <div className='mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-base lg:text-sm md:text-sm'>
                                                    /month
                                                </div>
                                                <div className='flex justify-center items-center mt-4 2xl:mx-12 xl:mx-7 lg:mx-7 md:mx-0 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[151px] 2xl:h-[46px] xl:w-[140px] xl:h-[46px] lg:w-[105px] lg:h-[34px] md:w-[105px] md:h-[34px]'>
                                                    <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-lg xl:text-base lg:text-xs md:text-xs'>
                                                        Get Started
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-span-1'>
                                        <div className='flex-col justify-center items-center '>
                                            <div className='text-center px-4'>
                                                <div className='full-compare-recommended flex justify-center items-center 2xl:mx-16 xl:mx-16 lg:mx-6 md:mx-0'>
                                                    <div className=' text-[#2364A5] tracking-[0.02em] font-family-Raleway font-medium 2xl:text-xs xl:text-xs lg:text-xs md:text-xs'>
                                                        Recommended
                                                    </div>
                                                </div>
                                                <div className=' mt-2'>
                                                    <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl '>Pro</div>
                                                </div>
                                                <div className=' mt-2'>
                                                    <div className='font-semibold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-lg md:text-lg'>
                                                        $30
                                                    </div>
                                                </div>
                                                <div className='mt-2 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-base lg:text-sm md:text-sm'>
                                                    /month
                                                </div>
                                                <div className='flex justify-center items-center mt-4 2xl:mx-12 xl:mx-7 lg:mx-7 md:mx-0 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[151px] 2xl:h-[46px] xl:w-[140px] xl:h-[46px] lg:w-[105px] lg:h-[34px] md:w-[105px] md:h-[34px]'>
                                                    <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-lg xl:text-base lg:text-xs md:text-xs'>
                                                        Get Started
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='col-span-1'>
                                        <div className='flex-col justify-center items-center '>
                                            <div className='text-center px-4'>
                                                <div className='full-compare-enterprise flex justify-center items-center 2xl:mx-20 xl:mx-16 lg:mx-9 md:mx-2'>
                                                    <div className=' text-[#6358B0] tracking-[0.02em] font-family-Raleway font-medium 2xl:text-xs xl:text-xs lg:text-xs md:text-xs'>
                                                        Enterprise
                                                    </div>
                                                </div>
                                                <div className=' mt-2'>
                                                    <div className='font-family-Raleway font-bold tracking-[0.02em] text-[#3C3C3C] 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl '>Premium</div>
                                                </div>
                                                <div className='2xl:mt-[3.25rem] xl:mt-12 lg:mt-11 md:mt-11 font-family-Raleway text-[#636B75] font-medium tracking-[0.02em] 2xl:text-base xl:text-base lg:text-sm md:text-sm'>
                                                    Custom Pricing
                                                </div>
                                                <div className='flex justify-center items-center mt-4 2xl:mx-10 xl:mx-7 lg:mx-7 md:mx-0 card-btn bg-white hover:bg-[#0053A5] text-[#004181] hover:text-white 2xl:w-[173px] 2xl:h-[46px] xl:w-[140px] xl:h-[46px] lg:w-[105px] lg:h-[34px] md:w-[105px] md:h-[34px]'>
                                                    <button className='font-family-Raleway font-semibold tracking-[1.25px] 2xl:text-lg xl:text-base lg:text-xs md:text-xs'>
                                                        Contact Sales
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='container mx-auto px-16 pt-7'>
                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] whitespace-nowrap 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Number of active jobs</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>50</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>150</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>250</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Job search API</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden '>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Dice, CB, Monster, TF</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Dice, CB, Monster, TF</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Dice, CB, Monster, TF</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8  '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Job posting API</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Dice, CB, Monster, TF</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Dice, CB, Monster, TF</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-basexl:text-sm lg:text-xs md:text-[10px]'>Dice, CB, Monster, TF</div>
                                                            <div className='font-medium tracking-[0.02em] text-[#636B75] 2xl:text-[10px] xl:text-[8px] lg:text-[8px] md:text-[8px]'>( Free job boards+Any additional integrations )</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] whitespace-nowrap text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Customizable career page</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em]  text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Resume database</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>upto 10000</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>upto 50000</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>upto 100000</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Resume parsing</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>upto 200 / month</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>upto 500 / month</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>upto 1000 / month</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] whitespace-nowrap 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Reports and Assessment</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Basic</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Basic</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 mx-2 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Advanced</div>
                                                            <div className='font-medium tracking-[0.02em] text-[#636B75] 2xl:text-[10px] xl:text-sm xl:text-[8px] lg:text-[8px] md:text-[8px]'>( Custom and scheduled reports )</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Advanced</div>
                                                        <div className='font-medium tracking-[0.02em] text-[#636B75] 2xl:text-[10px] xl:text-[8px] lg:text-[8px] md:text-[8px]'>( Custom and scheduled reports )</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Scheduling</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Calendar integration</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Google</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Google</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Google, Microsoft</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Google, Microsoft</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>SSO</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Email (bulk mails)</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>200 / month</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>500 / month</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>1000 / month</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] whitespace-nowrap text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Call Integration with Twilio</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] whitespace-nowrap 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Voicemail integration</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] whitespace-nowrap 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Hotlist portal integration / VMS</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Storage</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>10 GB</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>20 GB</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>30 GB</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Unlimited</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Support</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Email support</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Call and email support</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='text-center'>
                                                            <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Chat, Call & email support</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='font-medium tracking-[0.02em] whitespace-nowrap text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>24*7 Priority support</div>
                                                        <div className='font-medium tracking-[0.02em] text-[#636B75] 2xl:text-[10px] xl:text-[8px] lg:text-[8px] md:text-[8px]'>( chat, call and email )</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>IAAS</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Pre-Onboarding</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Localisation</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-2'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px] 2xl:whitespace-nowrap xl:whitespace-nowrap lg:whitespace-nowrap'>Campaigns Customer, Vendor, Candidate</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px] '>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Form customization</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base'>-</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px] whitespace-nowrap'>Free Data Migration</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] whitespace-nowrap text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Self guided onboarding</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#F8F8FF]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Knowledge base</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 ml-8 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='bg-[#FAFAFA]'>
                                    <div className='text-center'>
                                        <div className='grid grid-cols-5 max-sm:hidden'>
                                            <div className='col-span-1'>
                                                <div className='flex justify-start items-center max-sm:hidden'>
                                                    <div className='py-4 mx-4'>
                                                        <div className='font-medium tracking-[0.02em] text-[#3C3C3C] 2xl:text-base xl:text-sm lg:text-xs md:text-[10px]'>Templates</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4 '>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='col-span-1'>
                                                <div className='flex justify-center items-center max-sm:hidden'>
                                                    <div className='py-4  ml-8'>
                                                        <div className='2xl:w-[16px] 2xl:h-[16px] lg:w-[14px] lg:h-[14px] md:w-[12px] md:h-[12px]'>
                                                            <Image src={CompareTick} className='' />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                )}
            </div>

            <div className='text-center mb-5 reveal-scroll'>
                <div className="flex justify-center items-center max-sm:mt-10 mt-36 mb-10 ">
                    <div className="font-family-Raleway 2xl:text-5xl font-bold tracking-[0.02em] text-[#3A3A3A] xl:text-4xl  lg:text-2xl md:text-xl  max-sm:text-3xl">Frequently asked questions (FAQs)
                    </div>
                </div>
                <div className='text-center'>
                    <div className='-mt-5 2xl:text-[22px] xl:text-lg lg:text-base md:text-sm  max-sm:text-[10px] max-sm:mx-24 max-sm:justify-center max-sm:items-center tracking-[0.01em] text-[#535353] font-medium'><span className='font-bold'>Have questions?</span> We’re here to help, Check out our <span className='text-[#0053A5] font-semibold'>Support Center.</span>
                    </div>
                </div>
            </div>

            <section>
                <div className='bg-[#FFF]'>
                    <div className='container  mx-auto px-4 reveal-scroll'>
                        <div className='flex justify-center items-center2xl:mt-10 xl:mt-10  lg:mt-10 md:mt-10 max-sm:px-3'>
                            <Collapse bordered={false} defaultActiveKey={['1']} className='bg-white 2xl:w-[1200px] xl:w-[992px] lg:w-[768px] md:w-[720px] max-sm:min-w-full ' expandIconPosition='right' onChange={handlePanelChange} accordion
                                expandIcon={({ isActive }) => isActive ? <Image src={MinusIcon} className='2xl:mt-20 xl:mt-12 lg:mt-10 md:mt-8 max-sm:mt-6' /> : <Image src={PlusIcon} className='mt-20 xl:mt-12 lg:mt-10 md:mt-8 max-sm:mt-6' />}
                            >
                                <Panel header={<div className="panel-header font-family-Raleway my-5">How do I pay for these plans?</div>} className='2xl:text-3xl xl:text-2xl lg:text-base md:text-base max-sm:text-[8px]' key="1">
                                    <div className='2xl:text-2xl xl:text-xl 2xl:leading-9 text-[#636B75] mb-5 tracking-[0.02em]'>
                                        You can pay with a credit card  or via banking, we will renew  your subscription<br />
                                        automatically at the end of every biling cycle.
                                    </div>
                                </Panel>
                                <Panel header={<div className="panel-header font-family-Raleway my-5">Can I cancel my subscription plan at any time?</div>} className='2xl:text-3xl xl:text-2xl lg:text-base md:text-base max-sm:text-[8px]' key="2">
                                    <div className='2xl:text-2xl xl:text-xl 2xl:leading-9 text-[#636B75] mb-5 tracking-[0.02em]'>
                                        You can pay with a credit card  or via banking, we will renew  your subscription <br />
                                        automatically at the end of every biling cycle.
                                    </div>
                                </Panel>
                                <Panel header={<div className="panel-header font-family-Raleway my-5">I need to add new members to my team. How will that be billed?</div>} className='2xl:text-3xl xl:text-2xl lg:text-base md:text-base max-sm:text-[8px]' key="3">
                                    <div className='2xl:text-2xl xl:text-xl 2xl:leading-9 text-[#636B75] mb-5 tracking-[0.02em]'> You can pay with a credit card  or via banking, we will renew  your subscription<br />
                                        automatically at the end of every biling cycle.</div>
                                </Panel>
                                <Panel header={<div className="panel-header font-family-Raleway my-5">Can I customize my SaaS-based ATS?</div>} className='2xl:text-3xl xl:text-2xl lg:text-base md:text-base max-sm:text-[8px]' key="4">
                                    <div className='2xl:text-2xl xl:text-xl 2xl:leading-9 text-[#636B75] mb-5 tracking-[0.02em]'> You can pay with a credit card  or via banking, we will renew  your subscription<br />
                                        automatically at the end of every biling cycle.</div>
                                </Panel>
                                <Panel header={<div className="panel-header my-5 font-family-Raleway">Can a SaaS-based ATS integrate with other HR software systems?</div>} className='2xl:text-3xl xl:text-2xl lg:text-base md:text-base max-sm:text-[8px]' key="5">
                                    <div className='2xl:text-2xl xl:text-xl 2xl:leading-9 text-[#636B75] mb-5 tracking-[0.02em]'> You can pay with a credit card  or via banking, we will renew  your subscription<br />
                                        automatically at the end of every biling cycle.</div>
                                </Panel>
                                <div className='m-5'></div>
                            </Collapse>
                        </div>
                        <div className='flex justify-between items-center px-24 max-lg:px-8'>
                            <div className='font-medium italic text-[#3C3C3C] tracking-[0.04em] 2xl:text-base xl:text-base lg:text-sm  md:text-sm max-sm:text-[8px]  max-sm:text-[#004181]'>Trouble finding the answer to your question? See all FAQs <span className='underline'>here</span></div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='2xl:bg-[#F8F8FF] xl:bg-hidden lg:bg-hidden md:bg-hidden max-sm:bg-[#F8F8FF]'>
                    <div className='container mx-auto px-8 '>
                        <div className=' get-in-touch-bg'>
                            <div className='grid grid-cols-5 max-sm:grid-cols-1 my-40 '>
                                <div className='col-span-3 mx-6 2xl:my-8 xl:my-2  max-sm:ml-8 max-sm:mt-8 reveal-scroll'>
                                    <div className='font-family-Raleway 2xl:text-5xl xl:text-4xl lg:text-xl md:text-xl max-sm:text-xl font-bold tracking-[0.02em] text-[#3A3A3A] 2xl:mt-6 xl:mt-5 lg:mt-9 md:mt-9 max-sm:flex max-sm:text-start max-sm:items-center'> What else can </div>
                                    <div className='font-family-Raleway 2xl:text-5xl xl:text-4xl lg:text-xl md:text-xl max-sm:text-xl font-bold tracking-[0.02em] text-[#0053A5] 2xl:mt-8 xl:mt-6 lg:mt-4 md:mt-4 max-sm:mt-3 max-sm:text-start max-sm:items-center'> Zinnext help you do?</div>
                                    <div className='self-center max-sm:flex max-sm:justify-center max-sm:items-center'>
                                        <div className='2xl:ml-20 xl:ml-16 md:ml-2 2xl:mt-12 md:mt-24 2xl:w-[521px] 2xl:h-[341px] xl:w-[402px] xl:h-[263px] lg:w-[286px] lg:h-[186px]  md:w-[268px] md:h-[176px]  max-sm:w-[267px] max-sm:h-[175px] max-sm:mt-4'>
                                            <Image src="/../public/Group 1000005925.png" alt="/" width='521' height='341' className='' />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-2 max-sm:flex max-sm:justify-center max-sm:items-center'>
                                    <div className='card -m-12 max-sm:mt-8 reveal-scroll'>
                                        <div className='relative 2xl:right-0 xl:right-0 lg:right-6 md:right-8 max-sm:right-8 mx-16 max-sm:mx-12  py-10 reveal-scroll'>
                                            <div className='font-family-Raleway font-semibold text-[#3C3C3C] tracking-[0.04em] 2xl:text-[26px] xl:text-xl lg:text-base md:text-sm max-sm:text-base'>Get in Touch</div>
                                            <div className='font-normal 2xl:leading-9 tracking-[0.04em text-[#636B75] 2xl:text-lg 2xl:mt-8 xl:text-base xl:mt-2 xl:leading-8 lg:text-sm md:text-xs md:mt-2  max-sm:text-[10px] max-sm:mt-2'>
                                                Fill up the form and our Team will get back to you
                                                within 24 hours.
                                            </div>
                                            <div className='text-center'>
                                                <Form
                                                    name="basic"
                                                    autoCorrect="off"
                                                    autoCapitalize="off"
                                                    autoComplete="off"
                                                    layout="vertical"
                                                >
                                                    <Row>
                                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className='2xl:pt-2 xl:pt-5 lg:pt-4 md:pt-5 max-sm:pt-5'>
                                                            <Form.Item name="name" label="Name" className='font-medium font-family-Raleway 2xl:text-lg xl:text-sm lg:text-sm text-[#3C3C3C] 2xl:mb-3 xl:mb-5 lg:mb-5 max-sm:text-xs max-sm:mb-2'>
                                                                <Input size="large" placeholder='Enter your name' />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className=''>
                                                            <Form.Item name="email" label="Email" className='font-medium  text-[#3C3C3C] 2xl:text-lg lg:text-sm xl:text-sm 2xl:mb-3 xl:mb-5 lg:mb-5 max-sm:text-xs max-sm:mb-2'>
                                                                <Input size="large" placeholder='Enter your email' />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className=''>
                                                            <Form.Item name="phonenumber" label="Phone number" className='font-medium  text-[#3C3C3C] 2xl:text-lg lg:text-sm xl:text-sm 2xl:mb-3 xl:mb-5 lg:mb-5 max-sm:text-xs max-sm:mb-2'>
                                                                <Input size="large" placeholder='Enter your phone number' />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className='text-area'>
                                                            <Form.Item name="Message" label="Message" className='text-area font-medium text-[#3C3C3C] 2xl:text-lg xl:text-sm lg:text-sm 2xl:mb-3 xl:mb-5 lg:mb-5 max-sm:text-xs max-sm:mb-2'>
                                                                <TextArea rows={4} placeholder='Enter your message' className='text-area' />
                                                            </Form.Item>
                                                        </Col>
                                                        <Col xs={24} sm={24} md={24} lg={24} xl={24} className=' '>
                                                            <div className='mt-7 max-sm:mt-7'>
                                                                <button className="submit-btn bg-[#0053A5] 2xl:w-[450px] 2xl:h-[56px] rounded-lg py-2 px-2 w-40 h-11 text-white whitespace-nowrap xl:w-[385px] xl:h-[56px] lg:w-[337px] lg:h-[56px] md:w-[337px] md:h-[46px] max-sm:w-[300px] max-sm:h-[46px]  xl:text-base lg:text-base md:text-sm max-sm:text-base">
                                                                    Submit
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='bg-[#fff]'>
                    <div className='container mx-auto px-4'>
                        <div className='flex justify-center items-center mt-36 max-sm:mt-16 reveal-scroll'>
                            <div className=' bottom-card'>
                                <div className='font-family-Raleway font-bold text-[#FFFFFF] 2xl:text-5xl xl:text-4xl lg:text-2xl md:text-2xl max-sm:text-sm 2xl:mt-20 2xl:ml-28 xl:mt-16 xl:ml-16 lg:mt-8 lg:ml-8 md:mt-6 md:ml-6 max-sm:mt-5 max-sm:ml-6'>
                                    Get Started with Zinnext
                                </div>
                                <div className='2xl:ml-28 2xl:mt-10 xl:mt-8 xl:ml-16 lg:mt-6 lg:ml-8 md:ml-7 md:mt-5 max-sm:hidden'>
                                    <div className='font-normal tracking-[0.0125em] text-[#ffffff] 2xl:text-2xl xl:text-xl'>Zinnext’s 14-day free trial allows you to explore the ins</div>
                                    <div className='font-normal tracking-[0.0125em] text-[#ffffff] 2xl:text-2xl xl:text-xl xl:mt-2 lg:mt-2 md:mt-2'>and outs of our platform without pressure to commit</div>
                                </div>
                                {/* Mobileview */}
                                <div className='2xl:hidden xl:hidden lg:hidden md:hidden font-normal tracking-[0.0125em] max-sm:text-[8px] max-sm:mt-2 max-sm:ml-6 text-[#ffffff]'>
                                    Zinnext’s 14-day free trial allows you to explore the ins and outs of our platform
                                </div>
                                <div className='2xl:hidden xl:hidden lg:hidden md:hidden font-normal tracking-[0.0125em] max-sm:text-[8px] max-sm:ml-6 max-sm:mt-1 text-[#ffffff]'>
                                    without pressure to commit.
                                </div>
                                {/* Mobileview-end */}
                                <div className='flex justify-end items-end 2xl:-mt-24 2xl:mr-32 xl:mr-20 xl:-mt-20 lg:-mt-16 lg:mr-10 md:-mt-16 md:mr-10 max-sm:flex max-sm:justify-center max-sm:items-center max-sm:mt-4'>
                                    <button className="get-free-demo-card-btn flex justify-center items-center gap-3 text-[#0154A6] font-semibold 2xl:text-2xl 2xl:w-[254px] 2xl:h-[58px] xl:text-2xl xl:w-[264px] xl:h-[58px] lg:w-[226px] lg:h-[48px] md:w-[193px] md:h-[48px] max-sm:w-[90px] max-sm:h-[26px] max-sm:text-[8px]  whitespace-nowrap ">
                                        Get Free Demo
                                        <div className='flex justify-end items-center max-sm:w-[7.05px]'>
                                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M10.6955 1L17 8L10.6955 15M16.1244 8H1" stroke="#0053A5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className='footer-divider 2xl:my-20'></div>


            <section>
                <div className='bg-[#fff]'>
                    <div className='container mx-auto px-10 pb-10'>
                        <div className='grid grid-cols-4 max-sm:grid-cols-2 mt-16'>
                            <div className='col-span-1'>
                                <div className='2xl:w-[200] 2xl:h-[50px] xl:w-[200px] xl:h-[50] lg:w-[200px] lg-h-[50px] md:w-[126px] md:h-[32px] max-sm:w-[63px] max-sm:h-[16px]'>
                                    <Image src="/../public/LOGO.png" alt="/" width={200} height={50} />
                                </div>
                                <div className='2xl:mt-8 xl:mt-10 lg:mt-10 md:mt-4 max-sm:mt-4'>
                                    <div className='font-medium text-[#3C3C3C] tracking-[0.0125em] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[8px] leading-5 xl:mr-7'>
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                                    </div>
                                    <div className='2xl:mt-8 xl:mt-6 lg:mt-6 md:mt-4 max-sm:mt-3'>
                                        <Select
                                            defaultValue="lucy"
                                            style={{
                                                width: 130,
                                            }}
                                            onChange={handleChange}
                                            options={[
                                                {
                                                    value: 'jack',
                                                    label: 'Jack',
                                                },
                                                {
                                                    value: 'lucy',
                                                    label: 'Lucy',
                                                },
                                                {
                                                    value: 'Yiminghe',
                                                    label: 'yiminghe',
                                                },
                                                {
                                                    value: 'disabled',
                                                    label: 'Disabled',
                                                    disabled: true,
                                                },
                                            ]}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-1 2xl:ml-28 xl:ml-24 lg:ml-16 md:ml-8 max-sm:ml-12'>
                                <div className='font-family-Raleway font-bold text-[#3C3C3C] tracking-[0.0125em] 2xl:text-2xl xl:text-xl lg:text-xl md:text-base max-sm:text-xs'>Product</div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Features</Link>
                                </div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Solutions</Link>
                                </div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Pricing</Link>
                                </div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Discover Zinnext</Link>
                                </div>
                            </div>
                            <div className='col-span-1 2xl:ml-28 xl:ml-6 lg:ml-16 md:ml-8 max-sm:mt-4'>
                                <div className='font-family-Raleway font-bold text-[#3C3C3C] tracking-[0.0125em] 2xl:text-2xl xl:text-xl lg:text-xl md:text-base max-sm:text-xs'>Company</div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">About</Link>
                                </div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Contact</Link>
                                </div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Privacy policy</Link>
                                </div>
                                <div class="2xl:mt-4 xl:mt-3 lg:mt-5 md:mt-1">
                                    <Link href="#!" class="font-medium text-[#3C3C3C] tracking-[1.25px] 2xl:text-xl xl:text-base lg:text-base md:text-xs max-sm:text-[10px] hover-underline-animation">Terms of service</Link>
                                </div>
                            </div>
                            <div className='col-span-1 2xl:ml-28 xl:ml-4 max-sm:hidden '>
                                <div className='font-family-Raleway font-bold text-[#3C3C3C] tracking-[0.0125em] 2xl:text-2xl xl:text-xl lg:text-xl md:text-base'>Follow us</div>
                                <div className='flex justify-start items-center gap-8 2xl:mt-5 xl:mt-4 lg:mt-5 md:mt-4'>
                                    <div className='cursor-pointer 2xl:w-[28px] 2xl:h-[28px] xl:w-[22px] xl:h-[22px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]'>
                                        <svg className='fill-[#4D4D4D] hover:fill-[#0053A5]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.8544 23.8607H19.7089V17.3631C19.7089 15.8138 19.6778 13.8196 17.5467 13.8196C15.386 13.8196 15.0562 15.5058 15.0562 17.2496V23.8607H10.9091V10.5H14.8913V12.32H14.9458C15.5027 11.2716 16.856 10.1624 18.8782 10.1624C23.0782 10.1624 23.856 12.9282 23.856 16.5262V23.8607H23.8544ZM6.22689 8.67222C5.91042 8.67263 5.59698 8.61058 5.30454 8.48961C5.0121 8.36864 4.74642 8.19115 4.52271 7.9673C4.29901 7.74345 4.12168 7.47765 4.00091 7.18513C3.88013 6.89261 3.81827 6.57914 3.81889 6.26267C3.8192 5.78641 3.96072 5.32094 4.22557 4.92512C4.49042 4.52929 4.8667 4.2209 5.30682 4.03893C5.74695 3.85695 6.23115 3.80958 6.69819 3.9028C7.16524 3.99601 7.59415 4.22563 7.9307 4.56261C8.26725 4.89959 8.49631 5.3288 8.58892 5.79597C8.68153 6.26314 8.63353 6.74727 8.45099 7.18716C8.26845 7.62705 7.95957 8.00293 7.56341 8.26727C7.16724 8.5316 6.70315 8.67253 6.22689 8.67222ZM8.30511 23.8607H4.14711V10.5H8.30667V23.8607H8.30511ZM25.9311 0H2.06733C0.922444 0 0 0.902222 0 2.01756V25.9824C0 27.0978 0.924 28 2.06578 28H25.9249C27.0667 28 28 27.0978 28 25.9824V2.01756C28 0.902222 27.0667 0 25.9249 0H25.9311Z" fill="" />
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer 2xl:w-[28px] 2xl:h-[28px] xl:w-[22px] xl:h-[22px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]'>
                                        <svg className='fill-[#4D4D4D] hover:fill-[#0053A5]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.292 28V17.164H22.9211L23.464 12.9516H19.292V10.2636C19.292 9.044 19.6311 8.21178 21.3796 8.21178H23.6102V4.44422C22.5304 4.32965 21.445 4.27408 20.3591 4.27778C17.1438 4.27778 14.9427 6.24089 14.9427 9.84667V12.9516H11.3058V17.164H14.9427V28H1.55556C1.143 28 0.747335 27.8361 0.455612 27.5444C0.163888 27.2527 0 26.857 0 26.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0H26.4444C26.857 0 27.2527 0.163888 27.5444 0.455612C27.8361 0.747335 28 1.143 28 1.55556V26.4444C28 26.857 27.8361 27.2527 27.5444 27.5444C27.2527 27.8361 26.857 28 26.4444 28H19.292Z" fill="" />
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer 2xl:w-[28px] 2xl:h-[28px] xl:w-[22px] xl:h-[22px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]'>
                                        <svg className='fill-[#4D4D4D] hover:fill-[#0053A5]' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03457 0.439385C11.3287 -0.146462 16.6714 -0.146462 21.9655 0.439385C24.8577 0.761731 27.1895 3.03487 27.5291 5.93294C28.157 11.2922 28.157 16.7062 27.5291 22.0654C27.1895 24.9635 24.8577 27.2366 21.967 27.5605C16.6724 28.1465 11.3292 28.1465 6.03457 27.5605C3.14233 27.2366 0.810565 24.9635 0.470928 22.0669C-0.156976 16.7072 -0.156976 11.2927 0.470928 5.93294C0.810565 3.03487 3.14233 0.761731 6.03457 0.439385ZM21.6152 4.8762C21.2113 4.8762 20.8239 5.03639 20.5383 5.32154C20.2526 5.60669 20.0922 5.99343 20.0922 6.39669C20.0922 6.79995 20.2526 7.1867 20.5383 7.47185C20.8239 7.757 21.2113 7.91719 21.6152 7.91719C22.0191 7.91719 22.4065 7.757 22.6922 7.47185C22.9778 7.1867 23.1382 6.79995 23.1382 6.39669C23.1382 5.99343 22.9778 5.60669 22.6922 5.32154C22.4065 5.03639 22.0191 4.8762 21.6152 4.8762ZM6.76563 13.9992C6.76563 12.0837 7.52782 10.2467 8.88453 8.8922C10.2413 7.53774 12.0813 6.77682 14 6.77682C15.9187 6.77682 17.7588 7.53774 19.1155 8.8922C20.4722 10.2467 21.2344 12.0837 21.2344 13.9992C21.2344 15.9147 20.4722 17.7517 19.1155 19.1062C17.7588 20.4606 15.9187 21.2215 14 21.2215C12.0813 21.2215 10.2413 20.4606 8.88453 19.1062C7.52782 17.7517 6.76563 15.9147 6.76563 13.9992Z" fill="" />
                                        </svg>
                                    </div>
                                    <div className='cursor-pointer 2xl:w-[28px] 2xl:h-[28px] xl:w-[22px] xl:h-[22px] lg:w-[22px] lg:h-[22px] md:w-[14px] md:h-[14px]'>
                                        <svg className='fill-[#4D4D4D] hover:fill-[#0053A5]' width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M30 2.82353C28.8958 3.31765 27.7055 3.64235 26.4723 3.79765C27.7342 3.04941 28.7094 1.86353 29.1683 0.437647C27.978 1.14353 26.6587 1.63765 25.2677 1.92C24.1348 0.705883 22.543 0 20.7361 0C17.3662 0 14.6128 2.71059 14.6128 6.05647C14.6128 6.53647 14.6702 7.00235 14.7706 7.44C9.66539 7.18588 5.1195 4.77176 2.09369 1.11529C1.5631 2.00471 1.26195 3.04941 1.26195 4.15059C1.26195 6.25412 2.33748 8.11765 4.00096 9.17647C2.98279 9.17647 2.03633 8.89412 1.20459 8.47059V8.51294C1.20459 11.4494 3.32696 13.9059 6.13767 14.4565C5.23527 14.6996 4.2879 14.7334 3.36998 14.5553C3.75947 15.7588 4.52228 16.8119 5.55117 17.5665C6.58006 18.3211 7.8233 18.7393 9.10612 18.7624C6.93159 20.4571 4.23613 21.3732 1.46272 21.36C0.975143 21.36 0.487572 21.3318 0 21.2753C2.72467 22.9976 5.96558 24 9.43595 24C20.7361 24 26.9455 14.7671 26.9455 6.76235C26.9455 6.49412 26.9455 6.24 26.9312 5.97176C28.1358 5.12471 29.1683 4.05176 30 2.82353Z" fill="" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobileview start */}
            <div className='2xl:hidden xl:hidden lg:hidden md:hidden max-sm:my-8'>
                <div className='flex justify-center items-center gap-10 '>
                    <div className='cursor-pointer max-sm:w-[13px] max-sm:h-[13px]'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8544 23.8607H19.7089V17.3631C19.7089 15.8138 19.6778 13.8196 17.5467 13.8196C15.386 13.8196 15.0562 15.5058 15.0562 17.2496V23.8607H10.9091V10.5H14.8913V12.32H14.9458C15.5027 11.2716 16.856 10.1624 18.8782 10.1624C23.0782 10.1624 23.856 12.9282 23.856 16.5262V23.8607H23.8544ZM6.22689 8.67222C5.91042 8.67263 5.59698 8.61058 5.30454 8.48961C5.0121 8.36864 4.74642 8.19115 4.52271 7.9673C4.29901 7.74345 4.12168 7.47765 4.00091 7.18513C3.88013 6.89261 3.81827 6.57914 3.81889 6.26267C3.8192 5.78641 3.96072 5.32094 4.22557 4.92512C4.49042 4.52929 4.8667 4.2209 5.30682 4.03893C5.74695 3.85695 6.23115 3.80958 6.69819 3.9028C7.16524 3.99601 7.59415 4.22563 7.9307 4.56261C8.26725 4.89959 8.49631 5.3288 8.58892 5.79597C8.68153 6.26314 8.63353 6.74727 8.45099 7.18716C8.26845 7.62705 7.95957 8.00293 7.56341 8.26727C7.16724 8.5316 6.70315 8.67253 6.22689 8.67222ZM8.30511 23.8607H4.14711V10.5H8.30667V23.8607H8.30511ZM25.9311 0H2.06733C0.922444 0 0 0.902222 0 2.01756V25.9824C0 27.0978 0.924 28 2.06578 28H25.9249C27.0667 28 28 27.0978 28 25.9824V2.01756C28 0.902222 27.0667 0 25.9249 0H25.9311Z" fill="#4D4D4D" />
                        </svg>
                    </div>
                    <div className='cursor-pointer max-sm:w-[13px] max-sm:h-[13px]'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.292 28V17.164H22.9211L23.464 12.9516H19.292V10.2636C19.292 9.044 19.6311 8.21178 21.3796 8.21178H23.6102V4.44422C22.5304 4.32965 21.445 4.27408 20.3591 4.27778C17.1438 4.27778 14.9427 6.24089 14.9427 9.84667V12.9516H11.3058V17.164H14.9427V28H1.55556C1.143 28 0.747335 27.8361 0.455612 27.5444C0.163888 27.2527 0 26.857 0 26.4444V1.55556C0 1.143 0.163888 0.747335 0.455612 0.455612C0.747335 0.163888 1.143 0 1.55556 0H26.4444C26.857 0 27.2527 0.163888 27.5444 0.455612C27.8361 0.747335 28 1.143 28 1.55556V26.4444C28 26.857 27.8361 27.2527 27.5444 27.5444C27.2527 27.8361 26.857 28 26.4444 28H19.292Z" fill="#4D4D4D" />
                        </svg>
                    </div>
                    <div className='cursor-pointer max-sm:w-[13px] max-sm:h-[13px]'>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.03457 0.439385C11.3287 -0.146462 16.6714 -0.146462 21.9655 0.439385C24.8577 0.761731 27.1895 3.03487 27.5291 5.93294C28.157 11.2922 28.157 16.7062 27.5291 22.0654C27.1895 24.9635 24.8577 27.2366 21.967 27.5605C16.6724 28.1465 11.3292 28.1465 6.03457 27.5605C3.14233 27.2366 0.810565 24.9635 0.470928 22.0669C-0.156976 16.7072 -0.156976 11.2927 0.470928 5.93294C0.810565 3.03487 3.14233 0.761731 6.03457 0.439385ZM21.6152 4.8762C21.2113 4.8762 20.8239 5.03639 20.5383 5.32154C20.2526 5.60669 20.0922 5.99343 20.0922 6.39669C20.0922 6.79995 20.2526 7.1867 20.5383 7.47185C20.8239 7.757 21.2113 7.91719 21.6152 7.91719C22.0191 7.91719 22.4065 7.757 22.6922 7.47185C22.9778 7.1867 23.1382 6.79995 23.1382 6.39669C23.1382 5.99343 22.9778 5.60669 22.6922 5.32154C22.4065 5.03639 22.0191 4.8762 21.6152 4.8762ZM6.76563 13.9992C6.76563 12.0837 7.52782 10.2467 8.88453 8.8922C10.2413 7.53774 12.0813 6.77682 14 6.77682C15.9187 6.77682 17.7588 7.53774 19.1155 8.8922C20.4722 10.2467 21.2344 12.0837 21.2344 13.9992C21.2344 15.9147 20.4722 17.7517 19.1155 19.1062C17.7588 20.4606 15.9187 21.2215 14 21.2215C12.0813 21.2215 10.2413 20.4606 8.88453 19.1062C7.52782 17.7517 6.76563 15.9147 6.76563 13.9992Z" fill="#4D4D4D" />
                        </svg>
                    </div>
                    <div className='cursor-pointer max-sm:w-[13px] max-sm:h-[13px]'>
                        <svg width="30" height="24" viewBox="0 0 30 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 2.82353C28.8958 3.31765 27.7055 3.64235 26.4723 3.79765C27.7342 3.04941 28.7094 1.86353 29.1683 0.437647C27.978 1.14353 26.6587 1.63765 25.2677 1.92C24.1348 0.705883 22.543 0 20.7361 0C17.3662 0 14.6128 2.71059 14.6128 6.05647C14.6128 6.53647 14.6702 7.00235 14.7706 7.44C9.66539 7.18588 5.1195 4.77176 2.09369 1.11529C1.5631 2.00471 1.26195 3.04941 1.26195 4.15059C1.26195 6.25412 2.33748 8.11765 4.00096 9.17647C2.98279 9.17647 2.03633 8.89412 1.20459 8.47059V8.51294C1.20459 11.4494 3.32696 13.9059 6.13767 14.4565C5.23527 14.6996 4.2879 14.7334 3.36998 14.5553C3.75947 15.7588 4.52228 16.8119 5.55117 17.5665C6.58006 18.3211 7.8233 18.7393 9.10612 18.7624C6.93159 20.4571 4.23613 21.3732 1.46272 21.36C0.975143 21.36 0.487572 21.3318 0 21.2753C2.72467 22.9976 5.96558 24 9.43595 24C20.7361 24 26.9455 14.7671 26.9455 6.76235C26.9455 6.49412 26.9455 6.24 26.9312 5.97176C28.1358 5.12471 29.1683 4.05176 30 2.82353Z" fill="#4D4D4D" />
                        </svg>
                    </div>
                </div>
            </div>
            {/* Mobileview end */}


            <div className='flex justify-center items-center'>
                <div className='footer-seperator-divider 2xl:my-5 xl:mt-10 lg:mt-8 md:mt-8'></div>
            </div>

            <section>
                <div className='container mx-auto px-8'>
                    <div className='bg-[#FFFFFF] flex justify-between items-center max-sm:gap-3 my-4'>
                        <div className=''>
                            <div className='font-medium text-[#484848] tracking-[0.0125em] 2xl:text-base xl:text-sm lg:text-sm md:text-xs max-sm:text-[6px]'>Copyright © 2023 Zinnext</div>
                        </div>
                        <div className=''>
                            <Link
                                className="font-medium text-[#484848] tracking-[0.0125em] text-base xl:text-sm lg:text-sm md:text-xs max-sm:text-[6px]"
                                href="/"
                            >
                                All Rights Reserved | <span className='text-[#0053A5] underline'>Terms and Conditions</span> | <span className='text-[#0053A5] underline'>Privacy Policy </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}