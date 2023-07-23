import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react';
import { Col, Collapse, Form, Input, Row, Select, } from 'antd';
import { MinusIcon, PlusIcon } from '../../public/images';

const { Panel } = Collapse;
const { TextArea } = Input
export default function solution() {
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
    const [mobilepanelOpen, setmobilePanelOpen] = useState(false);

    const handlePanelChange = (key) => {
        setPanelOpen(key === '1'); // Assuming the key of the panel is '1'
    };
    const handleMobilePanelChange = (key) => {
        setmobilePanelOpen(key === '1'); // Assuming the key of the panel is '1'
    };
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };
    function reveal() {
        if (typeof window !== 'undefined') {
            var reveals = document.querySelectorAll(".reveal");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 130;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("active");
                } else {
                    reveals[i].classList.remove("active");
                }
            }
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", reveal);
    }

    function revealRight() {
        if (typeof window !== 'undefined') {
            var reveals = document.querySelectorAll(".reveal-right");
            for (var i = 0; i < reveals.length; i++) {
                var windowHeight = window.innerHeight;
                var elementTop = reveals[i].getBoundingClientRect().top;
                var elementVisible = 130;
                if (elementTop < windowHeight - elementVisible) {
                    reveals[i].classList.add("actives");
                } else {
                    reveals[i].classList.remove("actives");
                }
            }
        }
    }
    if (typeof window !== 'undefined') {
        window.addEventListener("scroll", revealRight);
    }

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
                <div className=' container mx-auto px-4'>
                    <div class=" grid grid-cols-1">
                        <div className='banner-right-fade fade-right banner-animate text-center'>
                            <div className="flex justify-center items-center  mt-40 mb-10 ">
                                <div className="font-family-Raleway 2xl:text-5xl font-bold tracking-[0.02em] text-[#3A3A3A] xl:text-4xl lg:text-2xl md:text-xl max-sm:text-2xl">Tailored solutions, transformative impact.
                                </div>
                            </div>
                            <div className='text-center'>
                                <div className='-mt-5 2xl:text-2xl xl:text-xl lg:text-base md:text-sm  max-sm:text-[10px]  max-sm:justify-center max-sm:items-center tracking-[0.02em] text-[#535353] font-normal'>Unleash your recruitment potential with our customized solutions</div>
                            </div>
                            <div className='text-center'>
                                <div className='mt-2 2xl:text-2xl xl:text-xl lg:text-base md:text-sm  max-sm:text-[10px]  max-sm:justify-center max-sm:items-center tracking-[0.02em] text-[#535353] font-normal'>designed for your unique needs
                                </div>
                            </div>
                        </div>
                        <div className='banner-left-fade fade-left banner-animate banner-animate flex justify-center items-center'>
                            <div className='mt-12 2xl:w-[795px] 2xl:h-[565px] xl:w-[490px] xl:h-[348px] lg:w-[490px] lg:h-[348px] md:w-[490px] md:h-[348px] max-sm:w-[330px] max-sm:h-[225px]'>
                                <Image src="/../public/working-together--work-working-together-job.png" alt="/" width='795' height='565' className='home-image' />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className='bg-[#FBFEFF]'>
                <div className='container mx-auto px-9 pt-32'>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1 2xl:gap-12 xl:gap-16 lg:gap-10 md:gap-0  max-sm:hidden">
                        <div className="reveal col-span-1 max-sm:grid-cols-1">
                            <div className=''>
                                <div className=" 2xl:mt-24 lg:mt-16 md:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                    <div className="text-[#3C3C3C] font-bold 2xl:lowercase uppercase font-family-Raleway tracking-[0.04em] 2xl:text-4xl 2xl:leading-normal xl:text-3xl xl:leading-10 lg:text-2xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                        System-driven recruitment
                                    </div>
                                    <div className=''>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Recruitment workflows</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7  '>
                                                An intuitive system that follows a job or candidate from start to finish, allowing you and your team to track progress at any stage, and make hiring decisions together.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Recruiter Progress Tracking</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Detailed insights to easily track recruiter progress using clear hiring reports and analysis, allowing you to identify areas of improvement and making your recruitment efforts more efficient.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Applicant Tracking</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Candidate scorecards and progress tracking to streamline recruitment and manage large volumes of candidates with ease.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='reveal-right self-center col-span-1'>
                            <div className=" mx-4 xl:mt-16 lg:mt-2 md:mt-2  2xl:w-[591px] 2xl:h-[480px] xl:w-[476px] xl:h-[386px] lg:w-[346px] lg:h-[280px] md:w-[314px] md:h-[255px] max-sm:mr-5">
                                <Image src="/../public/solution-banner.png" alt="/" width="591" height="480" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className='bg-[#FBFEFF]'>
                <div className='container mx-auto px-4'>
                    <div className="grid grid-cols-2 max-sm:grid-cols-1  max-sm:hidden">
                        <div className='col-span-1'>
                            <div className='reveal self-center '>
                                <div className="2xl:mt-32 xl:mt-32 lg:mt-24 md:mt-16 2xl:w-[624px] 2xl:h-[508px] xl:w-[410px] xl:h-[345px] lg:w-[346px] lg:h-[282px] md:w-[314px] md:h-[255px] max-sm:mr-5">
                                    <Image src="/../public/solution-banner-2.png" alt="/" width="624" height="508" className="" />
                                </div>
                            </div>
                        </div>
                        <div className="reveal-right col-span-1 max-sm:grid-cols-1">
                            <div className='px-3'>
                                <div className=" 2xl:mt-14 xl:mt10   lg:mt-12 md:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                    <div className="text-[#3C3C3C]  font-bold 2xl:lowercase uppercase font-family-Raleway tracking-[0.04em] 2xl:text-4xl 2xl:leading-normal xl:text-[28px] xl:leading-10 lg:text-2xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                        Optimized Candidate Handling
                                    </div>
                                    <div className=''>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Multi-channel candidate sourcing</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Build robust talent pipelines and efficiently source candidates from
                                                various channels, such as internal databases, hotlists, and job boards,
                                                allowing you to land your best hires with ease.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Brandable, personalized communication</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Customize candidate messaging everywhere from email templates to
                                                job posts to all your preferred social media channels. Create cohesive
                                                candidate experiences by integrating your brand on all levels of
                                                communication.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Automated candidate enrichment</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Choose from an automatically enriched list of detailed candidate
                                                profiles whenever you're searching for new talent, enabling you to
                                                make quicker, well-informed submissions.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Candidate nurturing</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7 mr-1'>
                                                Keep candidates engaged and informed with our user-friendly
                                                candidate nurturing tools. Send timely updates, share valuable
                                                content, and maintain open communication to build strong
                                                relationships with potential hires.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='bg-[#FBFEFF]'>
                <div className='container mx-auto px-8 pt-10'>
                    <div className="grid grid-cols-2 2xl:gap-16 xl:gap-24 lg:gap-28  max-sm:grid-cols-1  max-sm:hidden">
                        <div className="reveal col-span-1 max-sm:grid-cols-1">
                            <div className=''>
                                <div className=" 2xl:mt-4 lg:mt-16 md:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                    <div className="text-[#3C3C3C] font-bold 2xl:lowercase uppercase font-family-Raleway tracking-[0.04em] 2xl:text-4xl 2xl:leading-normal xl:text-3xl xl:leading-10 lg:text-2xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                        Managed Vendor Relations
                                    </div>
                                    <div className=''>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Centralized Vendor Hotlists</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7  '>
                                                Manage multiple vendors and candidate hotlists for different roles, all
                                                in one convenient place, ensuring you always have access to the
                                                right talent.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Streamlined Communications</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Stay connected with your vendors using single-click email templates,
                                                and more to simplify communication, and make it easy for you to
                                                send updates, requests, and feedback.
                                            </div>
                                        </div>
                                        <div className=''>
                                            <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 2xl:text-2xl xl:text-xl lg:text-base md:text-sm'>Automated IVR Communication</div>
                                            <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 2xl:text-[20px] 2xl:leading-9 xl:text-[16px] xl:leading-8 lg:text-sm lg:leading-8 md:text-xs md:leading-7'>
                                                Experience faster, more efficient communication with our IVR
                                                integrations. This system handles routine interactions like status
                                                updates and basic inquiries, allowing you to focus on more strategic
                                                tasks.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-span-1'>
                            <div className='reveal-right self-center'>
                                <div className=" mx-4 2xl:mt-8 xl:mt-16 lg:mt-16 md:mt-16  2xl:w-[582px] 2xl:h-[486px] xl:w-[476px] xl:h-[386px] lg:w-[346px] lg:h-[280px] md:w-[314px] md:h-[255px] max-sm:mr-5">
                                    <Image src="/../public/solution-banner-3.png" alt="/" width="582" height="486" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* mobile view collopse start */}
            <section>
                <div className='flex justify-center items-center 2xl:hidden xl:hidden lg:hidden md:hidden max-sm:px-3'>
                    <Collapse bordered={false} defaultActiveKey={['1']} className='bg-white' style={{ width: "100%" }} expandIconPosition='right' onChange={handleMobilePanelChange} accordion
                        expandIcon={({ isActive }) => isActive ? <Image src={MinusIcon} className='flex-wrap justify-center items-center mt-8' /> : <Image src="/../public/pannel-open-btn.png" alt='/' width='16'
                            height='16' className='flex-wrap justify-center items-center mt-8' />}>
                        <Panel header={<div className="font-extrabold font-family-Raleway text-sm text-[#3C3C3C] tracking-[0.0125em] mx-5 my-5"> SYSTEM-DRIVEN RECRUITMENT</div>} key="1">
                            <div className='flex justify-center items-center'>
                                <div className=" mx-4 max-sm:w-[314px] max-sm:h-[255px] ">
                                    <Image src="/../public/solution-banner.png" alt="/" width="314" height="255" className="" />
                                </div>
                            </div>
                            <div className=''>
                                <div className=''>
                                    <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Recruitment workflows</div>
                                    <div className='text-[#636B75] font-medium tracking-[0.0125em] max-sm:text-[10px]  '>
                                        An intuitive system that follows a job or candidate from start to finish, allowing you and your team to track progress at any stage, and make hiring decisions together.
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Recruiter Progress Tracking</div>
                                    <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                        Detailed insights to easily track recruiter progress using clear hiring reports and analysis, allowing you to identify areas of improvement and making your recruitment efforts more efficient.
                                    </div>
                                </div>
                                <div className=''>
                                    <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Applicant Tracking</div>
                                    <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                        Candidate scorecards and progress tracking to streamline recruitment and manage large volumes of candidates with ease.
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 flex justify-start items-center gap-4 '>
                                <div className='font-family-Raleway font-semibold text-[#004181] italic text-[10px]'>Explore more</div>
                                <button className='w-7 h-7 explore-btn flex justify-center items-center'>
                                    <svg className='whitespace-nowrap gap-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5531 7.72879L5.42586 15.879C5.24271 16.0621 5.02507 16.1537 4.77293 16.1537C4.52079 16.1537 4.30346 16.0621 4.12092 15.879C3.93777 15.6958 3.84619 15.4782 3.84619 15.226C3.84619 14.9739 3.93777 14.7566 4.12092 14.574L12.2711 6.44674H5.31139C5.05193 6.44674 4.83429 6.35883 4.65846 6.183C4.48264 6.00718 4.39503 5.78984 4.39564 5.53099C4.39564 5.27153 4.48355 5.05388 4.65938 4.87806C4.8352 4.70223 5.05254 4.61463 5.31139 4.61524H14.4689C14.7284 4.61524 14.946 4.70315 15.1218 4.87897C15.2977 5.0548 15.3853 5.27214 15.3847 5.53099V14.6885C15.3847 14.948 15.2967 15.1656 15.1209 15.3414C14.9451 15.5172 14.7278 15.6049 14.4689 15.6042C14.2094 15.6042 13.9918 15.5163 13.816 15.3405C13.6401 15.1647 13.5525 14.9473 13.5531 14.6885V7.72879Z" fill="#004181" />
                                    </svg>
                                </button>
                            </div>
                        </Panel>
                        <Panel header={<div className="font-extrabold font-family-Raleway text-sm text-[#3C3C3C] tracking-[0.0125em] mx-5 my-5">OPTIMIZED CANDIDATE HANDLING</div>} key="2">
                            <div className='text-[10px] leading-8 font-medium text-[#3C3C3C] mx-5'>
                                <div className='flex justify-center items-center'>
                                    <div className=" mx-4 max-sm:w-[293px] max-sm:h-[246px] ">
                                        <Image src="/../public/solution-banner-2.png" alt="/" width="293" height="246" className="" />
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'><div className=''>
                                    <div className=''>
                                        <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Multi-channel candidate sourcing</div>
                                        <div className='text-[#636B75] font-medium tracking-[0.0125em] max-sm:text-[10px]  '>
                                            Build robust talent pipelines and efficiently source candidates
                                            from various channels, such as internal databases, hotlists,
                                            and job boards, allowing you to land your best hires with ease.
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Brandable, personalized communication</div>
                                        <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                            Customize candidate messaging everywhere from email
                                            templates to job posts to all your preferred social media
                                            channels. Create cohesive candidate experiences by integrating
                                            your brand on all levels of communication.
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Automated candidate enrichment</div>
                                        <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                            Choose from an automatically enriched list of detailed candidate
                                            profiles whenever you're searching for new talent, enabling you to
                                            make quicker, well-informed submissions.
                                        </div>
                                    </div>
                                </div>
                                </div>
                                <div className=''>
                                    <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Candidate nurturing</div>
                                    <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                        Keep candidates engaged and informed with our user-friendly
                                        candidate nurturing tools. Send timely updates, share valuable
                                        content, and maintain open communication to build strong
                                        relationships with potential hires.
                                    </div>
                                </div>
                            </div>
                            <div className='mt-6 flex justify-start items-center gap-4 '>
                                <div className='font-family-Raleway font-semibold text-[#004181] italic text-[10px]'>Explore more</div>
                                <button className='w-7 h-7 explore-btn flex justify-center items-center'>
                                    <svg className='whitespace-nowrap gap-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5531 7.72879L5.42586 15.879C5.24271 16.0621 5.02507 16.1537 4.77293 16.1537C4.52079 16.1537 4.30346 16.0621 4.12092 15.879C3.93777 15.6958 3.84619 15.4782 3.84619 15.226C3.84619 14.9739 3.93777 14.7566 4.12092 14.574L12.2711 6.44674H5.31139C5.05193 6.44674 4.83429 6.35883 4.65846 6.183C4.48264 6.00718 4.39503 5.78984 4.39564 5.53099C4.39564 5.27153 4.48355 5.05388 4.65938 4.87806C4.8352 4.70223 5.05254 4.61463 5.31139 4.61524H14.4689C14.7284 4.61524 14.946 4.70315 15.1218 4.87897C15.2977 5.0548 15.3853 5.27214 15.3847 5.53099V14.6885C15.3847 14.948 15.2967 15.1656 15.1209 15.3414C14.9451 15.5172 14.7278 15.6049 14.4689 15.6042C14.2094 15.6042 13.9918 15.5163 13.816 15.3405C13.6401 15.1647 13.5525 14.9473 13.5531 14.6885V7.72879Z" fill="#004181" />
                                    </svg>
                                </button>
                            </div>
                        </Panel>
                        <Panel header={<div className="font-extrabold font-family-Raleway text-sm text-[#3C3C3C] tracking-[0.0125em] mx-5 my-5"> MANAGED VENDOR RELATIONS</div>} key="3">
                            <div className='text-[10px] leading-8 font-medium text-[#3C3C3C] mx-5'>
                                <div className='flex justify-center items-center'>
                                    <div className=" mx-4 max-sm:w-[276px] max-sm:h-[231px] ">
                                        <Image src="/../public/solution-banner-3.png" alt="/" width="276" height="231" className="" />
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'><div className=''>
                                    <div className=''>
                                        <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Centralized Vendor Hotlists</div>
                                        <div className='text-[#636B75] font-medium tracking-[0.0125em] max-sm:text-[10px]  '>
                                            Manage multiple vendors and candidate hotlists for different roles, all in one convenient place, ensuring you always have access to the right talent.
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Streamlined Communications</div>
                                        <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                            Stay connected with your vendors using single-click email
                                            templates, and more to simplify communication, and make
                                            it easy for you to send updates, requests, and feedback.
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='text-[#004181] font-medium tracking-[0.02em] mt-6 max-sm:text-xs'>Automated IVR Communication</div>
                                        <div className='text-[#636B75] font-medium tracking-[0.0125em]  mt-2 max-sm:text-[10px]'>
                                            Experience faster, more efficient communication with our IVR
                                            integrations. This system handles routine interactions like
                                            status updates and basic inquiries, allowing you to focus on
                                            more strategic tasks.
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div className='mt-6 flex justify-start items-center gap-4 '>
                                <div className='font-family-Raleway font-semibold text-[#004181] italic text-[10px]'>Explore more</div>
                                <button className='w-7 h-7 explore-btn flex justify-center items-center'>
                                    <svg className='whitespace-nowrap gap-0' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5531 7.72879L5.42586 15.879C5.24271 16.0621 5.02507 16.1537 4.77293 16.1537C4.52079 16.1537 4.30346 16.0621 4.12092 15.879C3.93777 15.6958 3.84619 15.4782 3.84619 15.226C3.84619 14.9739 3.93777 14.7566 4.12092 14.574L12.2711 6.44674H5.31139C5.05193 6.44674 4.83429 6.35883 4.65846 6.183C4.48264 6.00718 4.39503 5.78984 4.39564 5.53099C4.39564 5.27153 4.48355 5.05388 4.65938 4.87806C4.8352 4.70223 5.05254 4.61463 5.31139 4.61524H14.4689C14.7284 4.61524 14.946 4.70315 15.1218 4.87897C15.2977 5.0548 15.3853 5.27214 15.3847 5.53099V14.6885C15.3847 14.948 15.2967 15.1656 15.1209 15.3414C14.9451 15.5172 14.7278 15.6049 14.4689 15.6042C14.2094 15.6042 13.9918 15.5163 13.816 15.3405C13.6401 15.1647 13.5525 14.9473 13.5531 14.6885V7.72879Z" fill="#004181" />
                                    </svg>
                                </button>
                            </div>
                        </Panel>
                    </Collapse>
                </div>
                {/* mobile view collopse end */}
            </section>


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
                                                                <TextArea rows={3} placeholder='Enter your message' className='text-area' />
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