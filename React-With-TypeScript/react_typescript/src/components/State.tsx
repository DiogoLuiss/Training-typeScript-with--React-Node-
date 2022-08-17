import { useState } from "react"

function Hooks() {
  const [text, setText] = useState("Testando o hook")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typeof e.target)

    setText(e.target.value)
  }

  return (
    <div>
      <p> o texto é : {text}</p>
      <input type="text" onChange={handleChange} />
    </div>
  )
}

export default Hooks
