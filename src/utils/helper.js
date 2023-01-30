export function filterData(inputText, restaurants){
    const result = restaurants.filter((restaurant)=>(
        
            restaurant?.data?.name?.toLowerCase()?.includes(inputText?.toLowerCase())
        
    ))
    return result;
}