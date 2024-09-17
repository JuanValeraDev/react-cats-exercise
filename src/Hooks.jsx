import {useEffect, useState} from "react"

export function useCatFact() {
    const [fact, setFact] = useState()

    useEffect(() => {
        fetch("https://catfact.ninja/fact")
            .then(res => res.json())
            .then(data => {
                const {fact} = data
                setFact(fact)
            })
    }, [])
    return fact
}

export function useCatPicture(fact) {
    const [catPicture, setCatPicture] = useState()

    useEffect(() => {
        if (!fact) return
        const threeFirstWords = fact.split(" ").slice(0, 3).join(" ")
        fetch(`https://cataas.com/cat/says/${threeFirstWords}`)
            .then(data => {
                    const {url} = data
                    setCatPicture(url)
                }
            )
    }, [fact]);
    return catPicture
}
