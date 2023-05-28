import React from 'react';
import 'react-tooltip/dist/react-tooltip.css';



import{

    GlobeAltIcon,
    UsersIcon,
    HandThumbUpIcon,
    HeartIcon,
    FaceSmileIcon,
    FaceFrownIcon,
    ChatBubbleOvalLeftIcon,
    ShareIcon

} from "@heroicons/react/24/solid"

import { Tooltip } from 'react-tooltip';
import PostActionButton from './PostActionButton';
import LikeTooltip from './LikeTooltip';


function Post(props) {


    const postDate = new Date()
    
    
    return (        
        <div className='pt-5 max-w-2xl'>        
            <div className='shadow-md rounded-lg bg-white'>   
                <div className='flex space-x-2 pl-3 pt-3'>                   
                    <div className='bg-slate-400 rounded-full p-1'>
                        <img src="icons8_person_100px.png"  width={30} height={30} />
                    </div>  
                    <div className='space-y-1'>
                        <div className='text-xs font-bold text-black'>Will Freed</div>                      
                        <div className='flex space-x-1'>
                            <div className='text-xs text-gray-500'>
                                {new Intl.DateTimeFormat("en-US",{
                                    year:"numeric",
                                    month: "long",
                                    day: "2-digit",
                                    hour: "numeric",
                                    minute: "numeric",
                                    hour12: true
                                }).format(postDate)}
                            </div>  
                            <div>
                                <UsersIcon className='text-gray-500' width={15} height={15}/>
                            </div>                                    
                        </div>                    
                    </div>                                   
                </div>
                <div className='pl-3 pr-3 mb-3'>
                    <div>
                        Fraser River
                    </div>
                    <div>
                        <img src ="20180916_183618.jpg" />
                    </div>
                    <div className='flex mt-3 items-center '>
                        <div className='flex items-center'>
                            <HandThumbUpIcon className='h-5 w-5 bg-blue-400 rounded-full p-1 text-white cursor-pointer hover:bg-blue-800' />
                            <HeartIcon className='h-5 w-5 bg-red-400 rounded-full p-1 text-white cursor-pointer hover:bg-red-800' />
                            <FaceSmileIcon className='h-5 w-5 bg-yellow-400 rounded-full text-white p-1 cursor-pointer hover:bg-yellow-800' />
                            <FaceFrownIcon className='h-5 w-5 bg-red-800 rounded-full text-white p-1 cursor-pointer hover:bg-red-900' />
                            <p className='ml-2'>5</p>
                        </div>
                        <div className='flex flex-grow justify-end'>
                            <p className='text-gray-500 text-sm'>10 Comments</p>
                        </div>
                    </div>                    
                </div> 
                <div className='flex justify-evenly border-t border-b p-2'>  
                    <div className='relative items-center' data-tooltip-id='1' data-tooltip-variant='light'>
                        <PostActionButton Icon={HandThumbUpIcon} Text={"Like"}></PostActionButton>  
                        <LikeTooltip TooltipId ="1"/>                 
                    </div>                                       
                    <PostActionButton Icon={ChatBubbleOvalLeftIcon} Text={"Comment"}></PostActionButton>                   
                    <PostActionButton Icon={ShareIcon} Text={"Share"}></PostActionButton>
                </div>               
            </div>
        </div>
    );
}

export default Post;