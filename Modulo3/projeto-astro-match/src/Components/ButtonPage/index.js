import { CampButton, Icon } from "./style";
import axios from "axios"
import { useEffect, useState } from "react";
import ImgList from "../../IMG/list.png"
import ImgReject from "../../IMG/reject.png"
import ImgLike from "../../IMG/heart.png"

function ButtonPage( props ){

    const [ProfileID,SetProfileId] = useState("")
    const [ChoiceProf, SetChoiceProf] = useState(false)

    useEffect(()=>{GetProfileToChoose()},[])

    const GetProfileToChoose = () =>{
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-barros/person")
            .then((resp)=>{
                SetProfileId(resp.data.profile.id);
                props.SetAstro(resp.data.profile)
            })
            .catch((er)=>{
                console.log(er.resp);
            })
    }

    const GetMatches = () =>{
        
        axios
            .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-barros/matches")
            .then((resp)=>{
                console.log(resp.data.matches);
                props.SetMatch(resp.data.matches)
            })
            .catch((er)=>{
                console.log(er.resp);
            })
            
    }

    const ChoosePerson = () =>{
        axios
            .post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/marcio-barros/choose-person",
            {
                id: ProfileID,
                choice: ChoiceProf
            }
            )
            .then((resp)=>{
                console.log(resp.data.isMatch);
            })
                
            .catch((error)=>{
                console.log(error.resp);
            })
    }

    const Like = ()=>{
        SetChoiceProf(true)
        ChoosePerson()
        GetProfileToChoose()
        GetMatches()
    }

    const UnLike = ()=>{
        GetProfileToChoose()
        console.log(props.Match);
    }

    const NextPage = ()=>{
        props.SetLogado(true)
    }

    return(
        <CampButton>
            <Icon onClick={UnLike} BackImage = {ImgReject}/>
            <Icon onClick={Like} BackImage = {ImgLike}/>
            <Icon onClick={NextPage} BackImage = {ImgList}/>
        </CampButton>
    )
    
}

export default ButtonPage