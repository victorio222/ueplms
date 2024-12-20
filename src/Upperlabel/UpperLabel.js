// import React from "react";

// export default function UpperLabel({searchQuery, onSearch}) {
//     return (   
//         <div className='flex items-center justify-between border-b-1 bg-white shadow-sm p-1 pl-6 pr-6 mb-2'>
//             <h1 className='text-sm'>Course Overview</h1>
//             <div>
//                 <input type='text' name='search' className='border-2 w-96 mr-2' />
//                 <button type='button' onClick={() => onSearch({ target: { value: searchQuery } })} className='p-1 pl-3 pr-3 border-none'>Search</button>
//             </div>
//         </div>
//     );
// };



import React from "react";

export default function UpperLabel({ searchQuery, onSearch }) {
    return (
        <div className="flex items-center justify-between border-b-1 bg-white shadow-sm p-1 pl-6 pr-6 mb-2">
            <h1 className="text-sm">Course Overview</h1>
            <div>
                <input
                    type="text"
                    name="search"
                    value={searchQuery}
                    onChange={onSearch} // Directly handle updates to the search query
                    className="border-2 w-96 mr-2"
                    placeholder="Search courses..."
                />
                {/* <button
                    type="button"
                    onClick={() => onSearch({ target: { value: searchQuery } })} // Optional: Use the current searchQuery if needed
                    className="p-1 pl-3 pr-3 border-none bg-blue-500 text-white hover:bg-blue-600 rounded"
                >
                    Search
                </button> */}
            </div>
        </div>
    );
}
