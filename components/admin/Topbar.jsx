export default function Topbar() {
    return (
        <div className="flex items-center justify-between py-7 px-10">
            <div>
                <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Products</h1>
                <p className="text-sm font-medium text-gray-500">
                    Let's grow to your business! Create your product and upload here
                </p>
            </div>
            <button className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1">
                {/* <PlusIcon className="w-6 h-6 fill-current" /> */}
                <span className="text-sm font-semibold tracking-wide">Create Item</span>
            </button>
        </div>
    )
}