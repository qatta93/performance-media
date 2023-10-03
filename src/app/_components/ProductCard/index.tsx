'use client'
import { ProductCardProps } from '@/app/_types'
import { BiChevronDown } from "react-icons/bi";
import { AiFillStar, AiFillHeart} from "react-icons/ai";
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Image from 'next/image'
import React, {useState} from 'react'
import './style.css'

export const ProductCard = ({product}:ProductCardProps) => {
  const [showMore, setShowMore] = useState(false)
  const [favorite, setFavorite] = useState(false)

  const maxRating = 5;

  return (
    <article className='product-card'>
      <Tooltip title={favorite? "Usuń z ulubionych" : "Dodaj do ulubionych" } className="product-card__favorite">
        <IconButton onClick={() => setFavorite(favorite => !favorite)}>
          <AiFillHeart color={favorite? "#ee4141" : "#cacaca" } fontSize="2rem"  alt="added to favorite" priority="true" />
        </IconButton>
      </Tooltip>
      <div className='product-card__image'>
        <Image
        src={product.image}
        height={200}
        width={120}
        alt={product.name}
        />
      </div>
      <h2 className='product-card__name'>{product.name}</h2>
      <p className='product-card__description'>{product.description}</p>
      <Tooltip title="szczegóły" className="product-card__more">
        <IconButton onClick={() => setShowMore(current => !current)}>
          <BiChevronDown color="#777676" fontSize="2rem" style = {{transform: showMore ? 'rotate(180deg)' : 'rotate(0deg)' }}/>
        </IconButton>
      </Tooltip>
      {showMore && <div className='product-card__details'>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</p>
      </div>}
      <p className='product-card__price'>{`${product.price}$`}</p>
      <div className='product-card__rating'>
        {[...Array(product.rating)].map((e, i) => <AiFillStar key={i} color="#FFD700"/>)}
        {[...Array(maxRating - product.rating)].map((e, i) => <AiFillStar key={i} color="#e5e5e5"/>)}
        <span>{`(${product.ratingNumber})`}</span>
      </div>
      <button className='product-card__button'>
        KUP TERAZ
      </button>
    </article>
  )
}
