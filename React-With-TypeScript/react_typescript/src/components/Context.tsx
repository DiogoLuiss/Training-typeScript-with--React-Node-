import { useContext } from "react"

import { AppContext } from "../App"

function Context() {
  const details = useContext(AppContext)
  console.log(details)

  return (
    <div>
      {details && (
        <div>
          <h3>Linguage: {details.language} </h3>
          <h4>FW: {details.framework} </h4>
          <p>QTD: {details.projects} </p>
        </div>
      )}
    </div>
  )
}

export default Context
