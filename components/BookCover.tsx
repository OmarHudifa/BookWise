"use client"

import { cn } from '@/lib/utils'
import React from 'react'
import BookCoverSvg from './BookCoverSVG'
import { IKImage } from 'imagekitio-next'
import config from '@/lib/config'


type BookCoverVariant="extraSmall"|"small"|"medium"|"regular"|"wide"

const variantStyles:Record<BookCoverVariant,string>={
    extraSmall:'book-cover_extra-small',
    small:'book-cover_small',
    medium:'book-cover_medium',
    regular:'book-cover_regular',
    wide:'book-cover_wide'
}

interface Props{
    className?:string,
    variant?:BookCoverVariant,
    coverColor:string,
    coverImage:string
}

const BookCover = ({className,variant="regular",coverColor="#012b48",coverImage="https://placehold.co/400x600.png"}:Props) => {

  

  return (
    <div className={cn('relative transition-all duration-300',variantStyles[variant],className)}>
        <BookCoverSvg coverColor={coverColor}/>
        <div className="absolute z-10" style={{left:'12%',width:"87.5%",height:"88%"}}>
            <IKImage path={coverImage} urlEndpoint={config.env.imagekit.urlEndpoint} alt="book cover" fill loading='lazy' lqip={{active:true}} />
        </div>
    
    </div>
  )
}

export default BookCover