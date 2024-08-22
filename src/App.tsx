import './app.css'
import {ChessBoardComponent} from "./components/ChessBoardComponent.tsx";
import {ChessBoard} from "./models/ChessBoard.ts";
import {useEffect, useState} from "react";


export function App() {
    const [board, setBoard] = useState(new ChessBoard())
    const restartBoard = () => {
        const newBoard = new ChessBoard()
        newBoard.initCells()
        newBoard.initChessPieces()
        setBoard(newBoard)
    }

    useEffect(() => {
        restartBoard()
    }, [])
    return <div>
        <ChessBoardComponent board={board} setBoard={setBoard}/>
    </div>
}

