import React from 'react';

function PostActionButton({Icon, Text}) {
    return (
        <div className='flex items-center space-x-1 text-gray-500 hover:bg-gray-100 p-2 cursor-pointer active:border-b-2 active:border-blue-500'>
            <Icon className='h-4 w-4' />
            <p>{Text}</p>
        </div>
    );
}

export default PostActionButton;