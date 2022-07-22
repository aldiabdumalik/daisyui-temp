import Head from "next/head";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function Layout(props) {
    return(
        <>
            <Head>
                <title>{ props.title }</title>
            </Head>
            <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex">
                <Sidebar/>
                <main className="flex-1 pb-8">
                    <Topbar/>
                    <div className="py-7 px-10">
                        {props.children}
                    </div>
                </main>
            </div>
        </>
    );
}