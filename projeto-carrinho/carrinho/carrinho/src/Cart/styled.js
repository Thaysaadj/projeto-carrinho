import styled from "styled-components"

export const ContainerPai = styled.div`
    width:100%;
    min-height:100vh; 
    display:flex ;
    justify-content:center ;
    /* margin: 30px ; */
    
    @media (max-width: 700px)
    {
        display:flex ;
        flex-direction:column ;
        align-items:center ;
        
    }


    
`

export const ContainerInfo = styled.div`
    display:flex ;
    flex-direction: column ;
    justify-content:space-between ;
    align-items:center ;
    width: 470px ;
    height: 850px;
    box-shadow: 0 0 1em rgba(0 0 0 / 30%);
    border-radius: 10px ;
   
    @media (max-width: 700px)
    {
        width: 410px;
    }

`

export const ContainerHeader = styled.div`
    height:70px ;
    width:470px ;
    border-bottom: 3px solid #c9c9c9;
    display:flex;
    justify-content:center ;
    

    h1{
       font-size: 25px;
    }    

    @media (max-width: 700px)
    {
        width: 410px;
    }
`

export const CardInfo = styled.div`
    width:100% ;
    height:600px ;
    display:flex ;
    flex-direction:column ;
    overflow:auto ;
`

export const CardItem = styled.div`
    display:flex ;
    justify-content:flex-start ;
    margin:15px ;
    box-sizing: border-box ;

    img{
        width:100px ;
        height:80% ;
        border:2px solid #c9c9c9;
        padding:5px ;
    }

`

export const CardText = styled.div`

    p{
        font-weight:bolder ;
        margin-left: 20px ;
        font-size: 15px ;
    }

    p:nth-child(2){
        color: #afafaf
    }

    p:nth-child(3){
        font-size: 15px ;
        margin-top: -15px ;
    }

`

export const ContainerPrice = styled.div`
    width:470px ;
    height:300px ;
    display:flex ;
    flex-direction: column ;
    align-items:stretch ;

    @media (max-width: 700px)
    {
        width: 410px;
    }
`

export const CardPrice = styled.div`
    width:470px ;
    border-top: 3px solid #c9c9c9;
    border-bottom: 3px solid #c9c9c9;
    display:flex;
    flex-direction:column ;
    justify-content:space-between ;
    
    
    p{
        margin: 30px ;
        font-size:25px ;
        font-weight:bolder;
    }

    @media (max-width: 700px)
    {
        width: 410px;
    }
`

export const CardValue = styled.div`
    display:flex ;
    flex-direction:row ;
    justify-content: space-between;
    height:100% ;

    @media (max-width: 700px)
    {
        width: 410px;
    }
    
`

export const FreeShippingText = styled.div`
    display:flex ;
    justify-content:center ;
    align-items:center ;
    position:relative ;
    background-color: rgb(199,255,166);
    color: #2a8a04; 
    margin:auto;
    margin-bottom: 20px;
    border-radius: 50px;
    width: 70%;
    padding-left:10px ;
    padding-right:10px;
    transform: translateY(0px);
    animation: float 3s ease-in-out;

    @media (max-width: 700px)
    {
        font-size:14px ;
    }

    h4 {
        margin: 6px 0;
        font-weight: normal ;
    }
    
`

export const CardButton = styled.div`
    display:flex ;
    align-items:center ;
    flex-direction:column ;
    justify-content:center ;
    height: 60%;
    margin:10px ;
    position:relative ;
    
    button {
        width:400px ;
        height:60px ;
        border-radius:10px ;
        background-color:#3b74f2 ;
        color:#ffff ;
        font-size:20px ;
        font-weight: bolder;
        cursor: pointer;
        
    }
`

export const NavegationButton = styled.div`
    display:flex ;
    flex-direction:column ;
    
    button{
        width:150px ;
        height:40px ;
        border: 0.8px solid #c9c9c9 ;
        margin:10px ;
        box-shadow: 0 0 1em rgba(0 0 0 / 20%);
        border-radius: 10px ;
        transition: 0.8s ;

        cursor: pointer;
        
        :hover{
            background-color: #0e0e0e ;
            color: #ffff;
        }

    }

    @media (max-width: 700px)
    {
        display:flex ;
        flex-direction:row ;
        align-items:center ;
        
    }


`
