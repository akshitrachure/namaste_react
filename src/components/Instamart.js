import { useState } from "react"

const Section=({name, description, isVisible, setIsVisible})=>{


    return(
        <div className="border border-black p-2 m-3">
            <h1 className="font-bold text-2xl p-2 m-2">{name}</h1>
            {isVisible ? (<>
                <button className="px-2 underline" onClick={()=>
                    setIsVisible(false)
                }>Hide</button>
                <p className="p-2 m-2">{description}</p>
            </>):(
                <button className="px-2 underline" onClick={()=>
                    setIsVisible(true)
                }>Show</button>
            )}
            
        </div>
    )
}


const Instamart=()=>{
    const [isVisible, setIsVisible] = useState(false);
    const [isVisibleSection, setIsVisibleSection] = useState("");
    return(
        <div className="p-2">
            <h1 className="p-2 text-3xl font-bold">Instamart</h1>
            <Section name="About" 
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            isVisible={isVisibleSection==="about"}
            setIsVisible={(e)=>{
                e ? setIsVisibleSection("about"): setIsVisibleSection("")}}
            />

            <Section name="Team" 
            description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc"
            isVisible={isVisibleSection==="team"}
            setIsVisible={(e)=>{
                e ? setIsVisibleSection("team"): setIsVisibleSection("")}}
            />
            
            <Section name="Products" 
            description="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur"
            isVisible={isVisibleSection==="product"}
            setIsVisible={(e)=>{
                e ? setIsVisibleSection("product"): setIsVisibleSection("")}}
            />
            
            {/* <h3 className="p-2 text-lg">Multiple components</h3> */}
        </div>
        
    )
}

export default Instamart;