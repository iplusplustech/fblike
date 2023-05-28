import { FaceFrownIcon, FaceSmileIcon, HandThumbUpIcon, HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';


function LikeTooltip({TooltipId}) {
    return (
        <div>
            <Tooltip id={TooltipId} data-isCapture={true} clickable={true}  style={{opacity:"1", padding:"0"}}>
                <div className='flex cursor-pointer rounded-full items-center p-1'>
                <HandThumbUpIcon className='w-8 h-8 bg-blue-400 rounded-full p-1 text-white hover:bg-blue-300' style={{animation:`App-logo-spin infinite 3s linear`}}/>
                    <HeartIcon className='w-8 h-8 bg-red-400 rounded-full p-1 text-white hover:bg-red-300' style={{animation:`App-logo-spin infinite 3s linear`}}/>
                    <FaceSmileIcon className='w-8 h-8 bg-yellow-400 rounded-full p-1 text-white hover:bg-yellow-300' style={{animation:`App-logo-spin infinite 3s linear`}}/>
                    <FaceFrownIcon className='w-8 h-8 bg-red-800 rounded-full p-1 text-white hover:bg-red-900' style={{animation:`App-logo-spin infinite 3s linear`}}/>
                </div>
            </Tooltip>
        </div>
    );
}

export default LikeTooltip;