import Link from 'next/link'
import { useRecoilValue } from 'recoil'
import { listSidebar } from '../../store/sidebar';

export default function Sidebar() {
    const list = useRecoilValue(listSidebar);
    return (
        <div>
            <aside className="justify-start w-full min-h-screen py-6 px-10 w-64 border-r border-gray-200 overflow-y-scroll no-scrollbar">
                <div className="">
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
                <ul className="flex flex-col pt-20">
                    {
                        list.map((item) => {
                            return <li>
                                <Link href="/admin/dashboard">
                                    <a className="flex items-center py-2 text-gray-500 hover:text-indigo-600 group" >
                                        <span className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out" />
                                        <span>{ item.name }</span>
                                    </a>
                                </Link>
                            </li>
                        })
                    }
                </ul>
            </aside>
        </div>
    );
}