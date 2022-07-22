import Link from 'next/link'

export default function Sidebar() {
    return (
        <div>
            <aside className="flex justify-start w-full min-h-screen py-6 px-10 w-64 border-r border-gray-200">
                <div className="overflow-y-scroll">
                    <div className='flex items-center'>
                        <Link href="/">
                            <a className='flex gap-1 text-xl items-center text-black font-bold'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                Edocument
                            </a>
                        </Link>
                    </div>
                </div>
            </aside>
            {/* <div className="flex justify-start w-full min-h-screen bg-gray-200">
                <div className="w-64 overflow-y-scroll bg-gray-900">
                    <div className="px-6 pt-8">
                        <div className="flex items-center justify-between">
                            <div className='flex items-center'>
                                <Link href="/">
                                    <a className='flex gap-1 text-xl items-center text-white'>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                        </svg>
                                        Edocument
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
}