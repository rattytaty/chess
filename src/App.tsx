import './app.css'
import {ChessBoardComponent} from "./components/ChessBoardComponent.tsx";
import {ChessBoard} from "./models/ChessBoard.ts";
import {useEffect, useState} from "react";
import {Player} from "./models/Player.ts";
import {Colors} from "./models/Colors.ts";


export function App() {
    const [board, setBoard] = useState(new ChessBoard())
    const restartBoard = () => {
        const newBoard = new ChessBoard()
        newBoard.initCells()
        newBoard.initChessPieces()
        setBoard(newBoard)
    }
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
    const [whitePlayer, setwhitePlayer] = useState(new Player(Colors.WHITE))
    const [currentPlayer, setCurrentPlayer] = useState<Player|null>(null)
    const changePlayer = () => setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)


    useEffect(() => {
        restartBoard()
        setCurrentPlayer(whitePlayer)
    }, [])
    return <div>

        <ChessBoardComponent changePlayer={changePlayer}
                             currentPlayer={currentPlayer}
                             board={board}
                             setBoard={setBoard}/>
    </div>
}

