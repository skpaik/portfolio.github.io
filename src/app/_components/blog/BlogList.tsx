'use client'
import {toDateFormat} from "@/libs/Utils";

import Link from "next/link";
import {BlogContent} from "@/app/_models/BlogModels";

type Props = {
    blogList: BlogContent[],
    currentPage: string,
}

export default function BlogList({blogList}: Props) {
    return <div className="max-w">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 items-center">

                {blogList.map((blogContent: BlogContent, index) => {
                    return <article key={index}
                        className="hover:animate-background mx-2 my-2 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
                        <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
                            <time dateTime="2022-10-10" className="block text-xs text-gray-500">
                                {toDateFormat(blogContent.dateTime)}
                            </time>
                            <Link href={blogContent.url}>
                                <h3 className="mt-0.5 text-lg font-medium text-gray-900">
                                    {blogContent.title}
                                </h3>
                            </Link>
                            <div className="mt-4 flex flex-wrap gap-1">
                                {blogContent.tags?.map((tech, tech_index) => {
                                    return <span key={tech_index}
                                                 className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600">{tech}</span>
                                })}
                            </div>
                        </div>
                    </article>
                })}

        </div>
    </div>
}
