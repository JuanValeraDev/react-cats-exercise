import React from "react";
import {useCatFact, useCatPicture} from "./Hooks.jsx";

export default function App() {

    const catFact = useCatFact()
    const catPicture = useCatPicture(catFact)

return <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
    {catFact && <div style={{fontSize: '1.5em', marginTop:'2em', marginLeft:'2em', marginRight:'2em'}}>{catFact}</div>}
    {catPicture &&
        <img style={{ maxWidth: '40%', height: 'auto', marginTop:'2em', borderRadius: '5%', border: '5px solid black', }} src={catPicture} alt={"Random picture got from using the first three words of a random fact."}/>}
</div>
}

