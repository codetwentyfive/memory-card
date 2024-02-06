import {}

export default function Header({currentScore,highScore}){
    return (
        <header>
            <h1>Memory Card Game</h1>
            <p>Score:{currentScore}</p>
            <p>Highscore:{highScore}</p>
        </header>
    )
}