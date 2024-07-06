import React from 'react'

function InfoOne() {
  return (
    <div className='container mx-auto flex items-center py-16'>
        <div className="w-1/2">
            <img src='https://images.unsplash.com/photo-1522252234503-e356532cafd5?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' className='w-full h-auto rounded-lg'/>
        </div>

        <div className='w-1/2 px-6'>
            <h2 className='text-3xl font-semibold '>Welcome to Website</h2>
            <p className='text-grey-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis alias officiis in repellendus facilis minus dolorem excepturi, repellat commodi voluptates dolor nemo voluptate, modi repudiandae incidunt, praesentium similique minima tempora!</p>
        
        </div>
    </div>
  )
}

export default InfoOne