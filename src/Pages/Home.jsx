import Lession from "../component/Lesson/Lession";

const Home = () => {
    return (
        <>
            <Lession />
            {/* <div className="px-[144px] py-[40px]" >
                <div className="mb-[16px]">
                    <p className="text-[36px] font-bold text-center pt-[8px]">Our Clients</p>
                    <p className="text-[16px]  text-center  ">We have been working with some Fortune 500+ clients</p>
                </div>
                <div className="flex justify-between mt-[25px] mb-[25px]">
                    <img src="./F11.png" alt="" />
                    <img src="./F1.png" alt="" />
                    <img src="./F11.png" alt="" />
                    <img src="./F1.png" alt="" />
                    <img src="./F11.png" alt="" />
                    <img src="./F1.png" alt="" />
                    <img src="./F11.png" alt="" />
                </div>
            </div>
            <div className="px-[144px]">
                <div className="px-[40px]">
                    <p className="text-[36px] font-600 text-center">Manage your entire community </p>
                    <p className="text-[36px] font-600 text-center">in a single system</p>
                    <p className="text-[16px]  text-center">Who is Nextcent suitable for?</p>
                </div>
                <div className="flex gap-[127px] mt-[20px] mb-[42px] ">
                    <div className="border-[none] pt-[20px] w-[30%] shadow-lg hover:shadow-2xl rounded-2xl">
                        <img src="./F2.png" className=" ml-[40%] bg-[cover] w-[65px] h-[56px]" alt="" />
                        <p className="text-[28px]  font-bold text-center">Membership </p>
                        <p className="text-[28px]  font-bold text-center">Organisations</p>
                        <p className="px-[24px]  text-center pb-[24px]">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="border-[none] pt-[20px] w-[30%] shadow-lg hover:shadow-2xl rounded-2xl">
                        <img src="./F12.png" className=" ml-[40%] bg-[cover] w-[65px] h-[56px]" alt="" />
                        <p className="text-[28px]  font-bold text-center">Membership </p>
                        <p className="text-[28px]  font-bold text-center">Organisations</p>
                        <p className="px-[24px]  pb-[24px] text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>
                    <div className="border-[none] pt-[20px] w-[30%] shadow-lg hover:shadow-2xl rounded-2xl">
                        <img src="./F2.png" className=" ml-[40%] bg-[cover] w-[65px] h-[56px]" alt="" />
                        <p className="text-[28px]  font-bold text-center">Membership </p>
                        <p className="text-[28px]  font-bold text-center">Organisations</p>
                        <p className="px-[24px]  pb-[24px] text-center">Our membership management software provides full automation of membership renewals and payments</p>
                    </div>

                </div>
            </div>
            <div className="px-[144px] ">
                <div className="flex justify-center" >
                    <div className="w-[40%]">
                        <img src="./F3.png" alt="" />
                    </div>
                    <div className="w-[50%] items-center py-[83px] ml-[50px]">
                        <p className="text-[36px] font-[600]">The unseen of spending three </p>
                        <p className="text-[36px] font-[600]">years at Pixelgrade</p>
                        <p className="text-[14px] pt-[16px] font-[400] w-[80%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.            </p>
                        <button className="px-[32px] py-[14px] rounded-xl text-[#FFFFFF] mt-[32px] bg-emerald-400">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="px-[144px] py-[42px] bg-[#F5F7FA]">
                <div className="grid grid-cols-2 py-[64px]">
                    <div>
                        <p className="text-[36px]  font-[600] pb-[8px]">Helping a local </p>
                        <p className="text-[36px] font-[600] pb-[8px] text-[#4CAF4F]">business reinvent itself</p>
                        <p className="text-[16px] ">We reached here with our hard work and dedication</p>
                    </div>
                    <div className="">
                        <div className="flex ">
                            <div className="flex mr-[25%]">
                                <div>
                                    <img src="./F4.png" alt="" />
                                </div>
                                <div className="ml-[16px] ">
                                    <p className="text-[28px] font-[700]">2,245,341</p>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className="flex">
                                <div>
                                    <img src="./F4.png" alt="" />
                                </div>
                                <div className="ml-[16px] ">
                                    <p className="text-[28px] font-[700]">46,328</p>
                                    <p>Clubs</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="flex mr-[25%] mt-[40px]">
                                <div>
                                    <img src="./F4.png" alt="" />
                                </div>
                                <div className="ml-[16px] ">
                                    <p className="text-[28px] font-[700]">828,867</p>
                                    <p>Event booking</p>
                                </div>
                            </div>
                            <div className="flex mt-[40px]">
                                <div>
                                    <img src="./F4.png" alt="" />
                                </div>
                                <div className="ml-[16px] ">
                                    <p className="text-[28px] font-[700]">1,926,436</p>
                                    <p>Payment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <div className="px-[144px] py-[] ">
                <div className="flex justify-center" >
                    <div className="w-[40%] mt-[48px]">
                        <img src="./pana.png" alt="" />
                    </div>
                    <div className="w-[50%] items-center py-[83px] ml-[50px]">
                        <p className="text-[36px] font-[600] w-[85%]">How to design your site footer like we did ? </p>
                        <p className="text-[14px] pt-[16px] font-[400] ">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                        <button className="px-[32px] py-[14px] rounded-xl text-[#FFFFFF] mt-[32px] bg-emerald-400">Learn more</button>
                    </div>
                </div>
            </div>
            <div className="px-[144px] py-[42px]  mt-[16px] bg-[#F5F7FA] " >
                <div className="flex gap-[80px] ">
                    <div className="ml-[5%]">
                        <img src="./F6.png" className="w-[326px] h-[326px] bg-[cover]" alt="" />
                    </div>
                    <div className="w-[70%] pl-[15%]">
                        <p className="text-[16px] mb-[16px] font-[500]  w-[70%] ">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                        <p className="text-[20px] text-[#4CAF4F] font-[600]" >Tim Smith</p>
                        <p className="text-[16px] mt-[10px]">
                            British Dragon Boat Racing Association
                        </p>
                        <div className="flex gap-[41px] mt-[32px]">
                            <img src="./F14.png" alt="" />
                            <img src="./F5.png" alt="" />
                            <img src="./F14.png" alt="" />
                            <img src="./F5.png" alt="" />
                            <img src="./F14.png" alt="" />
                            <img src="./F5.png" alt="" />
                            <p className="text-[20px] font-[500] text-[#4CAF4F]">Meet all customers → </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-[144px] py-[42px] mt-[16px]">
                <div>
                    <p className="text-center font-[700] text-[36px] ">Caring is the new marketing</p>
                    <p className=" items-center text-center ml-[30%] mt-[12px] font-[400] text-[16px] w-[40%] ">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
                </div>
                <div className="flex  mt-[20px] w-[100%] justify-between mb-[90px] ">
                    <div className="relative max-w-sm  rounded-[10px]  ">
                        <img className="w-368 h-[286px] rounded-2xl bg-cover" src="./F15.png" alt="" />
                        <div className="absolute p-[20px] left-9 top-52 w-[80%] bg-white shadow-2xl rounded-lg  text-center">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Revamping the Membership Model with Triathlon Australia
                            </h3>
                            <a href="#" className="mt-3 inline-block text-green-600 font-[600]">
                                Readmore →
                            </a>
                        </div>
                    </div><div className="relative max-w-sm  rounded-[10px] ">
                        <img className="w-368 h-[286px] rounded-2xl bg-cover" src="./F8.png" alt="" />
                        <div className="absolute p-[20px] left-9 top-52 w-[80%] bg-white shadow-2xl rounded-lg  text-center">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Revamping the Membership Model with Triathlon Australia
                            </h3>
                            <a href="#" className="mt-3 inline-block text-green-600 font-[600]">
                                Readmore →
                            </a>
                        </div>
                    </div><div className="relative max-w-sm  rounded-[10px] ">
                        <img className="w-368 h-[286px] rounded-2xl bg-cover" src="./F15.png" alt="" />
                        <div className="absolute p-[20px] left-9 top-52 w-[80%] bg-white shadow-2xl rounded-lg  text-center">
                            <h3 className="text-lg font-semibold text-gray-700">
                                Revamping the Membership Model with Triathlon Australia
                            </h3>
                            <a href="#" className="mt-3 inline-block text-green-600 font-[600]">
                                Readmore →
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <div className="text-center px-[144px] py-[42px] bg-[#F5F7FA]">
                <p className="mt-[32px] font-[700] text-[36px]">Pellentesque suscipit </p>
                <p className="font-[700] text-[36px]">fringilla libero eu.</p>
                <button className="px-[32px] py-[14px] bg-[#4CAF4F] text-[16px] mt-[50px] rounded-xl text-[#FFFFFF]">Get a Demo  →</button>
            </div> */}
        </>
    )
}
export default Home;