import React, { useState } from "react"
import { abaixoDe } from "../API/abaixoDe"
import { ContainerHeader, ContainerInfo, ContainerPai, ContainerPrice, CardButton, CardPrice, CardItem, CardInfo, CardText} from "./styled"


export const Carrinho = () => {

    const [items, setItems] = useState (abaixoDe)
  

    const renderItem = abaixoDe.items.map((item) => {
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

   const priceTotal = (total, items) =>{
        return total + items.sellingPrice
   }

   let freeFret = false

   let valorTotal
   
   valorTotal = valorTotal * 0.01


   if(items.length !== 0) {
       valorTotal = items.items.reduce(priceTotal, 0)
   }

   if(valorTotal > 10){
       freeFret = true
   }

   let exibeFreeFret

   if(freeFret === true){
       exibeFreeFret = (
           <h3 className="exibeFreeFret"> Compra com frete grátis ! </h3>
       )
   }



    return(
        <ContainerPai>
            <ContainerInfo>
            <ContainerHeader>
                <h1>Meu Carrinho</h1>
            </ContainerHeader>
            <CardInfo >
                {renderItem}
            </CardInfo>
            <ContainerPrice>
            <CardPrice>
                <p>Total</p>
                <p>Preços</p>
            </CardPrice>
            <CardButton>
                <button>Finalizar Compra</button>
            </CardButton>
            </ContainerPrice>
            </ContainerInfo>
        </ContainerPai>
    )
}