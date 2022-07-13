import React from 'react'

export const ResumeList = () => {
    return (
        <div>
            <p className='text-center'>ResumeList</p>
            <table className="table-auto border-collapse">
                <thead>
                    <tr className='border-b divide-sky-500'>
                        <th>Song</th>
                        <th>Artist</th>
                        <th>Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='border-b divide-sky-500 hover:bg-indigo-50'>
                        <td className='px-5'>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className='px-5'>Malcolm Lockyer</td>
                        <td className='px-5'>1961</td>
                    </tr>
                    <tr className='border-b divide-sky-500 hover:bg-indigo-50'>
                        <td className='px-5'>Witchy Woman</td>
                        <td className='px-5'>The Eagles</td>
                        <td className='px-5'>1972</td>
                    </tr>
                    <tr className='border-b divide-sky-500 hover:bg-indigo-50'>
                        <td className='px-5'>Shining Star</td>
                        <td className='px-5'>Earth, Wind, and Fire</td>
                        <td className='px-5'>1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
