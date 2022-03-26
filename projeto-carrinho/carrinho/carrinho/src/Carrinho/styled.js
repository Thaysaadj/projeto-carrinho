import styled from "styled-components"

export const ContainerPai = styled.div `
    width:100%;
    height:100vh; 
    display:flex ;
    justify-content:center ;
    margin: 30px ;
    
`

export const ContainerInfo = styled.div `
    display:flex ;
    flex-direction: column ;
    justify-content:space-between ;
    align-items:center ;
    width: 500px ;
    height:850px;
    box-shadow: 0 0 1em rgba(0 0 0 / 30%);
    border-radius: 10px ;

`

export const ContainerHeader = styled.div `
    height:70px ;
    width:500px ;
    border-bottom: 1px solid #c9c9c9;
    display:flex;
    justify-content:center ;
    

    h1{
       font-size: 25px;
    }
    
`
export const CardInfo = styled.div `
    width:100% ;
    height:100% ;
    display:flex ;
    flex-direction:column ;

`

export const CardItem = styled.div`
    display:flex ;
    justify-content:flex-start ;
    margin:15px ;

    img{
        width:140px ;
        height:150px ;
        border:1px solid #c9c9c9;
    }

`

export const CardText = styled.div `

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

export const ContainerPrice = styled.div `
    width:500px ;
    height:200px ;
    
    display:flex ;
    align-items:center ;
    flex-direction: column ;
    /* justify-content:center ; */

`
export const CardPrice = styled.div`
    width:500px ;
    height:150px;
    border-top: 1px solid #c9c9c9;;
    border-bottom :1px solid #c9c9c9; ;
    display:flex;
    align-items:center ;
    justify-content: space-between;
    
    p{
        margin: 30px ;
        font-size:20px ;
    }


`
.exibeFreeFret

export const CardButton = styled.div `
    height: 80px;
    margin:10px ;
    
    
    button {
        width:400px ;
        height: 60px ;
        border-radius:10px ;
        background-color:#3b74f2 ;
        color:#ffff ;
        font-size:20px ;
        font-weight: bolder;
        
    }
`