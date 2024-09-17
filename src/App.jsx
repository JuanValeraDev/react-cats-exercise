import React, {useEffect, useState} from "react";

export default function App() {

    const [fact, setFact] = useState()
    const [catPicture, setCatPicture] = useState()

    useEffect(() => {

        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)

                const threeFirstWords = fact.split(" ").slice(0, 3).join(" ")
                console.log("En useEffect " + threeFirstWords)

                fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
                    .then(data => {
                            const {url} = data
                            setCatPicture(url)
                        }
                    )
            })
    }, [])

    return <main>
        {fact && <p>{fact}</p>}
        {catPicture &&
            <img src={catPicture} alt={"Random picture got from using the first three words of a random fact."}/>}
    </main>
}

