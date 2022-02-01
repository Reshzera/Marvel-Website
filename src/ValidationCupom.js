export function CupomValidation(cart , input, setDescontoRaro, SetDescontoCom, SetInvalido) {
    let Result = cart
    console.log("func")
    Result.map((Produto)=>{
        switch (input){
            case "RARA20OFF":{
                if(Produto.raro === true){
                    console.log('raro')
                    Produto.prices[0].desconto = Produto.prices[0].price*0.8
                    setDescontoRaro(true)
                    SetInvalido(false)
                }
                return 0
            }
            case "COMUM30OFF":{
                if (Produto.raro === undefined){
                    console.log('comum')
                    console.log(Result)
                    Produto.prices[0].desconto = Produto.prices[0].price*0.7
                    SetDescontoCom(true)
                    SetInvalido(false)
                    }
                return 0
            }
            default: {
                SetInvalido(true)
                return 0
            }
        }
   })
   return Result
}