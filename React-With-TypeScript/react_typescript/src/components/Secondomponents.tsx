import React from "react"

interface IProps {
  name: string
}

function SecondComponent(props: IProps) {
  return (
    <div>
      <p>O nome dele é {props.name} </p>
    </div>
  )
}

export default SecondComponent
