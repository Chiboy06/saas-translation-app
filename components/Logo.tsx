import React from 'react'
import LogoImage from '@logos/chat.svg'
import Link from 'next/link'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'

function Logo() {
  return (
    <Link href={"/"} prefetch={false} className='overflow-hidden'>
        <div className='w-72 h-14 flex items-center'>
            <AspectRatio
                ratio={16 / 9}
                className='flex items-center justify-center'
            >
                <Image
                    priority
                    alt='logo'
                    src={LogoImage}
                    className='dark:filter dark:invert w-[200px]'
                />
            </AspectRatio>
        </div>
    </Link>
  )
}

export default Logo