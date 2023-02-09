import RestaurantCard from "./RestaurantCard"

const Shimmer = () =>{
    return(
        <div className="restaurant-list" data-testid="shimmer">
            {Array(10).fill("").map((e,index)=><div key={index} className="shimmer-card">
                
            </div>)}
        </div>
        
    
    )
    // {for(let i=0;i<10;i++){
        
    // }}
}


export default Shimmer;