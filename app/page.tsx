"use client";
import { Chess } from "chess.js";
import { useState } from "react";
import { Chessboard } from "react-chessboard";

export default function Home() {
  const [moves, setMoves] = useState<string[]>([]);

  return (
    <>
      <PGNBoard moves={moves} />
      <PGNReader setMoves={setMoves} />
    </>
  );
}

export function PGNReader({
  setMoves,
}: {
  setMoves: (moves: string[]) => void;
}) {
  const [pgn, setPgn] = useState("");
  const [toggle, setToggle] = useState(false);
  const [error, setError] = useState("");
  const [showStatus, setShowStatus] = useState("Hide");

  const handlePGNInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputPGN = event.target.value;
    setPgn(inputPGN);

    const chess = new Chess();
    try {
      chess.loadPgn(inputPGN);
      setMoves(chess.history());
      setError("");
    } catch (error) {
      console.log("Invalid PGN:", error);
      setError("Invalid PGN");
      setMoves([]);
    }
  };

  const handleToggle = () => {
    setToggle(!toggle);
    setShowStatus(toggle ? "Hide" : "Show");
  };

  return (
    <div className="container mx-auto max-w-xl text-center">
      <div className="flex items-center justify-between">
        <button
          className="my-5  bg-amber-700 rounded py-2 px-4 font-bold"
          onClick={handleToggle}
        >
          {showStatus} PGN input
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </div>

      <textarea
        className={`bg-gray-300 p-2 w-full text-black ${
          toggle ? "hidden" : ""
        }`}
        value={pgn}
        onChange={handlePGNInput}
        placeholder="Paste PGN here..."
        rows={5}
      />
    </div>
  );
}

export function PGNBoard({ moves }: { moves: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [orientation, setOrientation] = useState<"white" | "black">("white");

  const applyMovesUpTo = (index: number) => {
    const newGame = new Chess();
    for (let i = 0; i < index; i++) {
      newGame.move(moves[i]);
    }
    setGame(newGame);
  };

  const handleNext = () => {
    if (currentIndex < moves.length) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      applyMovesUpTo(newIndex);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      applyMovesUpTo(newIndex);
    }
  };

  const handleReset = () => {
    setCurrentIndex(0);
    setGame(new Chess());
  };

  const handleBoardFlip = () => {
    setOrientation(orientation === "white" ? "black" : "white");
  };

  return (
    <div className="container max-w-xl mx-auto text-center">
      <h1 className="text-6xl font-bold mt-6">Chess PGN Reader</h1>
      <div className="flex items-center justify-between">
        <button
          className="my-5  bg-amber-700 rounded py-2 px-4 font-bold"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          className="my-5  bg-amber-700 rounded py-2 px-4 font-bold"
          onClick={handleBoardFlip}
        >
          Flip board
        </button>
      </div>

      <Chessboard position={game.fen()} boardOrientation={orientation} />

      <div className="flex justify-evenly">
        <button
          onClick={handleBack}
          className="my-5 bg-amber-700 rounded py-2 px-4 font-bold"
          disabled={currentIndex === 0}
        >
          Back
        </button>
        <button
          onClick={handleNext}
          className={`my-5 bg-amber-700 rounded py-2 px-4 font-bold ${
            currentIndex === moves.length ? "opacity-50" : ""
          }`}
          disabled={currentIndex === moves.length}
        >
          Next
        </button>
      </div>
    </div>
  );
}
