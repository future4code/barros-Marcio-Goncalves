import { AstroCamp, AstroPhoto, CampDescription } from "./style";

function AstroPage(props){
return(
       <AstroCamp>
            <AstroPhoto>
                <img src={props.Astro.photo}/>
                <CampDescription>
                    <h2>{props.Astro.name}, {props.Astro.age}</h2>
                    <label>{props.Astro.bio}</label>
                </CampDescription>
            </AstroPhoto>
             
       </AstroCamp>
    )
}

export default AstroPage