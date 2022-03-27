import React, { useState } from "react"
import {cheaperCartList } from "../API/cheaperCartList"
import { expensiveCartList } from "../API/expensiveCartList"
import { ContainerHeader, ContainerInfo, ContainerPai, ContainerPrice, CardButton, CardPrice, CardItem, CardInfo, CardText,FreeShippingText, CardValue, NavegationButton} from "./styled"


export const Cart= () => {

    const [products, setProducts] = useState (expensiveCartList)
  

    const renderItem = products.items.map((item) => {
        return(
            <CardItem key={item.uniqueId}>
                <img src={item.imageUrl}/>
                <CardText>
                <p>{item.name}</p>
                <p>{`R$ ${(item.price * 0.01).toFixed(2).split(".").join(",")}`}</p>
                <p>{`R$ ${(item.sellingPrice *0.01).toFixed(2).split(".").join(",")}`}</p>
                </CardText>
            </CardItem>
        )
    })

   const getTotalPrice = (total, items) =>{
        return total + items.sellingPrice
   }

   let freeShipping = false

   let totalValue
   
   if(products.length !== 0) {
       totalValue = products.items.reduce(getTotalPrice, 0)
    }

    totalValue  = totalValue * 0.01

   if(totalValue > 10){
       freeShipping = true
   }

   let showFreeShippingText

   if(freeShipping === true){
    showFreeShippingText  = (
         <h4> Parabéns, sua compra tem frete grátis! </h4>
       )
   }

  
   const handleSetCheaperCart = () => {
        setProducts(cheaperCartList)
    }

    const handleSetExpensiveCart = () => {
        setProducts(expensiveCartList)
    }




    return(
        <ContainerPai>
            <NavegationButton>
                <button onClick={ handleSetCheaperCart }>Carrinho Barato</button>
                <button onClick={ handleSetExpensiveCart }> Carrinho Caro</button>
            </NavegationButton>
            <ContainerInfo>
            <ContainerHeader>
                <h1>Meu Carrinho</h1>
            </ContainerHeader>
            <CardInfo >
                {renderItem}
            </CardInfo>
            <ContainerPrice>
            <CardPrice>
                <CardValue>
                <p>Total</p>
                <p>R$ {totalValue.toFixed(2).split(".").join(",")}</p>
                </CardValue>
                <FreeShippingText>
                {showFreeShippingText}
                </FreeShippingText>
            </CardPrice>
            <CardButton>
                <button>Finalizar Compra</button>
            </CardButton>
            </ContainerPrice>
            </ContainerInfo>
        </ContainerPai>
    )
}