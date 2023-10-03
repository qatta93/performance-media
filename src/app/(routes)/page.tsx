'use client'
import React from 'react'
import { ProductCard } from '../_components/ProductCard';
import products from '../../../public/data/products.json'
import items from '../../../public/data/items.js'
import { HeroProps, ItemProps, ProductProps, SortOrderProps } from '../_types';


export default function Home() {

  //zadanie 1
  const sortArray = (array:Array<any>, sortOrder: keyof SortOrderProps, sortValue: keyof ItemProps) => {
    return sortOrder === 'ascending' ?
    array.sort((i1:ItemProps, i2:ItemProps) =>  (i1[sortValue] > i2[sortValue]) ? 1 : (i1[sortValue] < i2[sortValue]) ? -1 : 0)
    :    
    array.sort((i1:ItemProps, i2:ItemProps) =>  (i1[sortValue] < i2[sortValue]) ? 1 : (i1[sortValue] > i2[sortValue]) ? -1 : 0)
  }

  //a
  console.log(sortArray(items, 'ascending', 'name'))
  //b
  console.log(sortArray(items, 'descending', 'name'))
  //c
  console.log(sortArray(items, 'ascending', 'rating'))
  //d
  console.log(sortArray(items, 'descending', 'rating'))

  //zadanie 2
  const Paragraph = React.memo(({props}:any) => <p>{props}</p>)
  const Photo = React.memo(({props}:any) => <img src={props}/>)
  const Button = React.memo(({props}:any) => <button>{props}</button>)

  const MultiFuncionalComponent = (type:string, props:any) => {
    if (type === 'photo') return <Photo props={props}/>
    if (type === 'button') return <Button props={props}/>
    return <Paragraph props={props}/>
  }

  //zadanie 3

  const getHero = (id:number) => {
  fetch(`https://swapi.dev/api/people/${id}`)
  .then((response) => response.json())
  .then((data:HeroProps) => console.log(data))
  .catch((error) => console.log(error));
  }

  getHero(Math.floor(Math.random() * 100))

  //zadanie 4

  return (
    <main>
     {/* {MultiFuncionalComponent('button', 'click')} */}
     {products.map((product:ProductProps) => <ProductCard key={product.id} product={product}/>)}
    </main>
  )
}
