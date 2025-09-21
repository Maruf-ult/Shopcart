"use client"
import { Product } from '@/sanity.types';
import { ShoppingBag } from 'lucide-react';
import React from 'react'
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
// import useStore from '@/store';

interface Props{
     product:Product | null | undefined;
     className?:string;
}

const AddToCartButton = ({product,className}:Props) => {
     
   // const {addItem,getItem} = useStore();

     const isOutofStock = product?.stock === 0;
  
  const handleAddToCart = () => {
     alert("added to card")
  }

     return (
    <div>
       <Button 
       onClick={handleAddToCart}
       disabled={isOutofStock}
       className={cn(
            "w-full bg-shop_dark_green/80 text-lightBg shadow-none border border-shop_dark_green/80 font-semibold tracking-wide text-white hover:bg-shop_dark_green hover:border-shop_dark_green hoverEffect",
            className
          )}>
           <ShoppingBag/> {isOutofStock?"Out of Stock":"Add to Cart"}
       </Button>
    </div>
  )
}

export default AddToCartButton