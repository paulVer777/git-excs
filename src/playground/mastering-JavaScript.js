
//////////// Handmade FILTER ////////////////////////

const tab = [ 1,2,3,4,5]

const newFilter = (tab) => {
  
    const newArr = []
 
  for( let i=0; i < tab.length; i++)
   {
    //  if(tab[i] >= 3) 
    //   {
    //       newArr.push(tab[i])
    //   }
     tab[i] >= 3 && newArr.push(tab[i])
   }
   return newArr
}
/////////////////////////////////////////////////////////

console.log(newFilter(tab))