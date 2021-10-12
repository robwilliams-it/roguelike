

const BoardSpace = (props) => {
  return (
    <div
      id="space"
      className={props.index}
      style={{
        height:"100px",
        width:"100px",
        backgroundColor: "blue",
        border: "solid, black, 1px"
      }}
    />
  )
}

export default BoardSpace;