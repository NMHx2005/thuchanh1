const Footer = () => {
    return (
        <footer className="bg-[#263238] text-gray-300 px-10 py-12">
            <div className=" px-[144px]  grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo + Social */}
                <div>
                    <h2 className="text-2xl font-bold text-white flex items-center ">
                        <img src="./F9.png" className="" alt="" />
                    </h2>
                    <p className=" text-[16px] mt-[40px] mb-[40px]">Copyright © 2020 Nexcent ltd.<br />All rights reserved</p>
                    <div className="flex gap-4 mt-4">
                        <img src="./F10.png" alt="" />
                        <img src="./F10.png" alt="" />
                        <img src="./F10.png" alt="" />
                        <img src="./F10.png" alt="" />

                    </div>
                </div>

                {/* Company */}
                <div className="ml-[30%]">
                    <h3 className="text-white font-semibold text-[20px] mb-8">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="">About us</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Pricing</a></li>
                        <li><a href="">Testimonials</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="ml-[20%]" >
                    <h3 className="text-white text-[20px] font-semibold mb-8">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#">Help center</a></li>
                        <li><a href="#">Terms of service</a></li>
                        <li><a href="#">Legal</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Status</a></li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-white text-[20px] font-semibold mb-4">Stay up to date</h3>
                    <div className="flex items-center bg-gray-700 rounded-lg ">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent px-[12px] py-[11px] w-full text-sm text-gray-200 "
                        />
                        <button className="px-[10px] ">
                            ✈
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )

}
export default Footer;