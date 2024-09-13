import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
    <section className="relative h-10 overflow-hidden py-10 border-none rounded-xl mt-56 bg-gray-900 ">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-5 flex flex-wrap">
                    <div className="w-full p-2 md:w-1/2 lg:w-5/12">
                        <div className="flex h-full flex-col justify-between">
                            <div>
                                <p className="text-sm text-white">
                                    &copy; Copyright 2024. All Rights Reserved by Chanchal Rathore.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full  p-2 md:w-1/2 lg:w-3/12">
                        <div className="h-full">
                            <Link className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                Contact Us
                            </Link>
                            
                        </div>
                    </div>
                    <div className="w-full  p-2 md:w-1/2 lg:w-1/12">
                        <div className="h-full">
                            <Link to="https://www.instagram.com/_chanchalsinghrathore_/" className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                INSTAGRAM
                            </Link>
                            
                        </div>
                    </div>
                    <div className="w-full  p-2 md:w-1/2 lg:w-1/12">
                        <div className="h-full">
                            <Link to="https://github.com/ChanchalSinghRathore" className="tracking-px mb-9  text-xs font-semibold uppercase text-white">
                                GITHUB
                            </Link>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Footer