import BoardSpace from './boardSpace.js';

const Board = (props) => {
  return (
    <div
      style={{
        width: "1000px",
        height: "500px",
        backgroundColor: "red"
      }}
    >
      <BoardSpace index={0}/>
    </div>
  )
}

export default Board;