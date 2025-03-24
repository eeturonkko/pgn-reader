# ♟️ Chess PGN Reader

A simple React + Next.js app that allows you to paste a PGN (Portable Game Notation) string, view the list of moves, and step through the game interactively on a chessboard. Built with `react-chessboard` and `chess.js`.

---

## ✨ Features

- 📥 Paste any valid PGN to parse a chess game
- ⏮️ Step through moves using "Back" and "Next"
- 🔁 Reset board at any time
- 🔄 Flip board orientation (White or Black at bottom)
- 🧾 Toggle PGN input visibility
- 🚫 Displays error for invalid PGN strings

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **UI**: [React](https://react.dev), [Tailwind CSS](https://tailwindcss.com)
- **Chess Logic**: [chess.js](https://github.com/jhlywa/chess.js)
- **Chessboard UI**: [react-chessboard](https://github.com/Clariity/react-chessboard)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/chess-pgn-reader.git
cd chess-pgn-reader
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

## Usage

1. Paste a valid PGN string (example below)
2. Click "Next" to step forward, or "Back" to step backward through the moves
3. Use "Reset" to return to the starting position
4. Use "Flip board" to change orientation

### Example PGN

```pgn
[Event "Casual Game"]
[Site "Berlin GER"]
[Date "1852.??.??"]
[Round "?"]
[White "Adolf Anderssen"]
[Black "Jean Dufresne"]
[Result "1-0"]

1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.b4 Bxb4 5.c3 Ba5 6.d4 exd4 7.O-O d3 8.Qb3 Qf6 9.e5 Qg6 10.Re1 Nge7 11.Ba3 b5 12.Qxb5 Rb8 13.Qa4 Bb6 14.Nbd2 Bb7 15.Ne4 Qf5 16.Bxd3 Qh5 17.Nf6+ gxf6 18.exf6 Rg8 19.Rad1 Qxf3 20.Rxe7+ Nxe7 21.Qxd7+ Kxd7 22.Bf5+ Ke8 23.Bd7+ Kf8 24.Bxe7# 1-0

```
