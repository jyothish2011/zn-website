import { useEffect, useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    useEffect(() => {
        let timeoutId;

        const handleScroll = (e) => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                if (e.deltaY > 0 && currentSectionIndex + 1 < sections.length) {
                    setCurrentSectionIndex((prevIndex) => prevIndex + 1);
                } else if (e.deltaY < 0 && currentSectionIndex - 1 >= 0) {
                    setCurrentSectionIndex((prevIndex) => prevIndex - 1);
                }
            }, 100); // Adjust the debounce delay as needed (e.g., 100ms)

            return () => {
                clearTimeout(timeoutId);
            };
        };

        document.addEventListener('wheel', handleScroll);

        return () => {
            document.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, setCurrentSectionIndex]);

    

    const sections = [

        {
            id: 0, content:
                <section>
                    <div className='container px-5 mx-auto pt-10 section'>
                        <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                            <div className=" left-div col-span-2 max-sm:hidden ">
                                <div className='2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[464px] 2xl:h-[524px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                    <Image src="/../public/discover-story-1.png" alt="/" width="464" height="524" className="" />
                                </div>
                            </div>
                            <div className="right-div col-span-3 max-sm:grid-cols-1">
                                <div className='px-16 pt-12 '>
                                    <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                        <div className=''>
                                            <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                CONSOLIDATED JOB FEED
                                            </div>
                                        </div>
                                        <div className='mt-12'>
                                            <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Use the Zinnext job feed to find your first opening using your preferred recruitment channel</div>
                                        </div>
                                        <div className='mt-8'>
                                            <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                The job feed on Zinnext allows you to source jobs from all your recruitment channels into one, clearly organized, and easy-to-use dashboard.
                                            </div>
                                        </div>
                                        <div className='mt-8'>
                                            <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>With Zinnext, your first job is only a click away!</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        },
        {
            id: 1, content:
                <section>
                    <div className='container px-5 mx-auto pt-10 '>
                        <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                            <div className="left-div col-span-3 max-sm:grid-cols-1">
                                <div className='px-24 pt-12'>
                                    {/* <div className=''>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className='scroll-from-left'>
                                                <div className="in-left text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    CANDIDATE SOURCING
                                                </div>
                                            </div>
                                            <div className='mt-12'>
                                                <div className='in-left-two font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Find qualified candidates for your open job, and begin hiring</div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='in-left-three 2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                    Begin sourcing qualified candidates by posting and promoting your job on [number]+ free and premium job boards, or source profiles from enriched hotlists.
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='in-left-four font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Stop hunting, and start hiring with Zinnext.</div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                            <div className="right-div col-span-2 mx-4 max-sm:hidden ">
                                <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[571px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                    <Image src="/../public/discover-story-2.png" alt="/" width="571" height="495" className="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        },
        {
            id: 2, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className='grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden'>
                                <div className='left-div col-span-3 max-sm:grid-cols-1'>
                                    <div className='px-24 pt-12'>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className='scroll-from-left'>
                                                <div className="in-left text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    CANDIDATE SOURCING
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[571px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-2.png" alt="/" width="571" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 3, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className='grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden'>
                                <div className=' col-span-3 max-sm:grid-cols-1'>
                                    <div className='px-24 pt-12'>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className=''>
                                                <div className="in-left text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    CANDIDATE SOURCING
                                                </div>
                                            </div>
                                            <div className='mt-12'>
                                                <div className='left-div-2 font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Find qualified candidates for your open job, and begin hiring</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[571px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-2.png" alt="/" width="571" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 4, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className='grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden'>
                                <div className=' col-span-3 max-sm:grid-cols-1'>
                                    <div className='px-24 pt-12'>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className='scroll-from-left'>
                                                <div className="in-left text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    CANDIDATE SOURCING
                                                </div>
                                            </div>
                                            <div className='mt-12'>
                                                <div className=' font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Find qualified candidates for your open job, and begin hiring</div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='left-div-3 2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                    Begin sourcing qualified candidates by posting and promoting your job on [number]+ free and premium job boards, or source profiles from enriched hotlists.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[571px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-2.png" alt="/" width="571" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 5, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className='grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden'>
                                <div className=" col-span-3 max-sm:grid-cols-1">
                                    <div className='px-24 pt-12'>
                                        <div className=''>
                                            <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                                <div className=''>
                                                    <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                        CANDIDATE SOURCING
                                                    </div>
                                                </div>
                                                <div className='mt-12'>
                                                    <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Find qualified candidates for your open job, and begin hiring</div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                        Begin sourcing qualified candidates by posting and promoting your job on [number]+ free and premium job boards, or source profiles from enriched hotlists.
                                                    </div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='left-div-4 font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Stop hunting, and start hiring with Zinnext.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[571px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-2.png" alt="/" width="571" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        }
    ]

    const sectionsss = [

        {
            id: 0, content:
                <div>
                    <section >
                        <div className='container px-5 mx-auto pt-10 section'>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className=" left-div col-span-2 max-sm:hidden ">
                                    <div className='2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[464px] 2xl:h-[524px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-1.png" alt="/" width="464" height="524" className="" />
                                    </div>
                                </div>
                                <div className="right-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-16 pt-12 '>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className=''>
                                                <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    CONSOLIDATED JOB FEED
                                                </div>
                                            </div>
                                            <div className='mt-12'>
                                                <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Use the Zinnext job feed to find your first opening using your preferred recruitment channel</div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                    The job feed on Zinnext allows you to source jobs from all your recruitment channels into one, clearly organized, and easy-to-use dashboard.
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>With Zinnext, your first job is only a click away!</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 1, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-24 pt-12'>
                                        <div className=''>
                                            <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                                <div className='scroll-from-left'>
                                                    <div className="in-left text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                        CANDIDATE SOURCING
                                                    </div>
                                                </div>
                                                <div className='mt-12'>
                                                    <div className='in-left-two font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Find qualified candidates for your open job, and begin hiring</div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='in-left-three 2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                        Begin sourcing qualified candidates by posting and promoting your job on [number]+ free and premium job boards, or source profiles from enriched hotlists.
                                                    </div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='in-left-four font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Stop hunting, and start hiring with Zinnext.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-div col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[571px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-2.png" alt="/" width="571" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 2, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto  pt-10 '>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-24 pt-12'>
                                        <div className=''>
                                            <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                                <div className=''>
                                                    <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                        CANDIDATE SOURCING
                                                    </div>
                                                </div>
                                                <div className='mt-12'>
                                                    <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Find qualified candidates for your open job, and begin hiring</div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                        Begin sourcing qualified candidates by posting and promoting your job on [number]+ free and premium job boards, or source profiles from enriched hotlists.
                                                    </div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Stop hunting, and start hiring with Zinnext.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className=" right-div col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[583px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-3.png" alt="/" width="583" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
        },
        {
            id: 3, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div col-span-2 mx-5 max-sm:hidden ">
                                    <div className=' 2xl:mt-44  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[522px] 2xl:h-[249px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-4.png" alt="/" width="598" height="542" className="" />
                                    </div>
                                </div>
                                <div className="right-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-28 pt-12 '>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className=''>
                                                <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    APPLICANT TRACKING
                                                </div>
                                            </div>
                                            <div className='mt-12'>
                                                <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Track your candidate’s progress and take next steps</div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                    Get a clear overview of what's happening, what's next, and what's left to do for each job and candidate in real-time with the Zinnext hiring dashboard (pipeline).
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Rank, track, and analyze with ease on Zinnext.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 4, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10  '>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-32 pt-12'>
                                        <div className=''>
                                            <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                                <div className=''>
                                                    <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                        CANDIDATE NURTURING
                                                    </div>
                                                </div>
                                                <div className='mt-12'>
                                                    <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Fill your candidates in on their progress</div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                        Connect with candidates and share updates using emails,
                                                        Interactive Voice Response (IVR), and video interviews.
                                                        Personalize candidate experiences while automating
                                                        communications.
                                                    </div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Attract, engage, and convert effortlessly on Zinnext.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-div col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[545px] 2xl:h-[465px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-5.png" alt="/" width="545" height="465" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 5, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div   col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[533px] 2xl:h-[479px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-6.png" alt="/" width="533" height="479" className="" />
                                    </div>
                                </div>
                                <div className="right-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-20 pt-12'>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className=''>
                                                <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    TEAM HIRING
                                                </div>
                                            </div>
                                            <div className='mt-12'>
                                                <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Share your progress and get your colleagues and hiring manager to weigh in</div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                    Use candidate scorecards, in-app chat, and shared notes to exchange information and make quicker hiring decisions.
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Hire better, together with Zinnext.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
        {
            id: 6, content:
                <div>
                    <section>
                        <div className='container px-5 mx-auto pt-10 '>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-24 pt-12'>
                                        <div className=''>
                                            <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                                <div className=''>
                                                    <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                        CANDIDATE DELIVERY
                                                    </div>
                                                </div>
                                                <div className='mt-12'>
                                                    <div className='font-family-Raleway font-semibold text-[#0053A5] tracking-[2%] leading-[42px] 2xl:text-[30px] ' >Submit your rockstar candidate to your client</div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                        Eliminate redundancies and ensure a lower percentage of rejections
                                                        by only submitting the best candidates to the client. You manage
                                                        candidate profiles, resumes, and qualifications in one centralized
                                                        location, accessible to the whole team, making it easy to match the
                                                        right candidate to the right job.
                                                    </div>
                                                </div>
                                                <div className='mt-8'>
                                                    <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>With Zinnext, you will submit with confidence, everytime.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="right-div  col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-28  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[592px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-7.png" alt="/" width="592" height="495" className="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </div>
        },
        {
            id: 7, content:
                <div>
                    <section>
                        <div className='container mx-auto px-5 pt-10'>
                            <div className=" grid grid-cols-5 max-sm:grid-cols-1 max-sm:gap-0  max-sm:hidden">
                                <div className="left-div col-span-2 mx-4 max-sm:hidden ">
                                    <div className=' 2xl:mt-40  xl:mt-12 lg:mt-0 md:mt-0  2xl:w-[510px] 2xl:h-[495px] xl:w-[469px] xl:h-[385px] lg:w-[342px] lg:h-[280px] md:w-[290px] md:h-[240px] max-sm:mr-5 max-sm:hidden'>
                                        <Image src="/../public/discover-story-8.png" alt="/" width="510" height="495" className="" />
                                    </div>
                                </div>
                                <div className=" right-div col-span-3 max-sm:grid-cols-1">
                                    <div className='px-20 pt-12'>
                                        <div className=" 2xl:mt-44 lg:mt-16 max-sm:-mx-6 max-sm:mt-5">
                                            <div className=''>
                                                <div className="text-[#231F20] font-extrabold font-family-Raleway uppercase 2xl:text-4xl 2xl:leading-normal xl:text-4xl xl:leading-10 xl:tracking-wide lg:text-3xl lg:leading-10 md:text-xl md:leading-9 max-sm:self-center max-sm:text-sm ">
                                                    Hired!
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='2xl:text-xl text-[#636B75] font-normal 2xl:leading-8 tracking-[2%]  xl:text-base xl:leading-7 xl:font-medium lg:text-sm lg:font-medium  lg:leading-7 md:text-xs md:font-medium md:leading-6 max-sm:text-[10px] max-sm:leading-7 '>
                                                    Congratulations, you nailed it! Your hiring superpowers combined with Zinnext's streamlined process has resulted in a successful hire.
                                                </div>
                                            </div>
                                            <div className='mt-8'>
                                                <div className='font-family-Raleway italic font-medium text-[#004181] tracking-[2%] 2xl:text-lg'>Convinced yet, about how Zinnext can streamline your recruitment efforts?</div>
                                            </div>
                                        </div>
                                        <div className='flex gap-12 mt-8'>
                                            <button className="bg-[#0293FD]  2xl:w-[166px] 2xl:h-[46px] max-sm:mx-5 rounded-lg py-2 px-2 w-40 h-11 text-white whitespace-nowrap xl:w-[147px] xl:h-[46px] lg:w-[133px] 
                                     lg:h-[46px] md:w-[105px] md:h-9 max-sm:w-28 max-sm:h-10 2xl:text-base  xl:text-base lg:text-sm md:text-sm max-sm:text-xs">
                                                Get Free Demo
                                            </button>
                                            <Link href="/">
                                                <button className="go-to-home-btn  2xl:w-[196px] 2xl:h-[46px] text-[#0154A6] font-normal  whitespace-nowrap flex justify-center items-center">
                                                    Back to Homepage
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        },
    ];

    return (
        <div className=''>
            <div className='bg-home'>
                {sections.map((section) => (
                    <section
                        key={section.id}
                        className={section.id === currentSectionIndex ? 'custom-section scroll' : 'custom-section'}
                    >
                        {section.content}
                    </section>
                ))}
            </div>
        </div>
    );
}