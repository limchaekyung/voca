import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch";
import Word from "./Word";

export default function Day() {
    const { day } = useParams();
    const words = useFetch(`http://localhost:3001/words?day=${day}`)

    return (
        <>
            <h2>Day {day}</h2>
            {words.length === 0 && <span>loading...</span>}
            <table>
                <tbody>
                    {words.map(word =>
                        <Word word={word} key={word.id} />
                    )}
                </tbody>
            </table>
        </>
    )
}

// json-server --watch ./src/db/data.json --port 3001