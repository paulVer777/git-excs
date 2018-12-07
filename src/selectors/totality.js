
export default (arr) => {

    if(arr.length > 0) {

    let data = {
        amount:0,
        exp:0
    }

         arr.forEach((value,index) => {

         data.amount += value.amount
         data.exp +=1

   })
   return data
    }
    else return 0
}


const sumUp = (arr) => arr.map((value, index) => value.amount).reduce((sum,value) => sum + value,0)

    
       
    
    


export {sumUp}



