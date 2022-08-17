import React, { createContext, useMemo } from "react"

import Context from "./components/Context"
import Destructuring from "./components/Destructuring"
import FirstComponent from "./components/FirstComponents"
// 3- desestruturando component
import SecondComponent from "./components/Secondomponents"
// 4- hooks
import Hooks from "./components/State"

// 5-  context
interface IAppContext {
  language: string
  framework: string
  projects: number
}

export const AppContext = createContext<IAppContext | null>(null)

function App() {
  // 1-Variaveis

  const name = "Diogo"

  const age = 20

  const isWorking: boolean[] = []

  isWorking.push(true)

  // 2- funções

  const userGreeting = (name: string): string => {
    return ` Olá ${name} `
  }

  // 5-  context

  const contextValue: IAppContext = useMemo(
    () => ({ language: "JavaScript", framework: "express", projects: 5 }),
    []
  ) // useMemo

  return (
    <AppContext.Provider value={contextValue}>
      <div className="App">
        <h1>TypeScript com React</h1>
        <FirstComponent />
        <p>{name}</p>

        <p>{age}</p>

        {isWorking[0] && (
          <div>
            <p>trabalhador</p>
          </div>
        )}

        <h3>{userGreeting("Diogo")}</h3>

        <SecondComponent name="Guilherme" />
        <Destructuring
          title="Primeiro post"
          content="algum conteudo"
          commentsQty={10}
          tags={["ts ", "js"]}
        />
        <Destructuring
          title="Segundo post"
          content="outro conteudo"
          commentsQty={10}
          tags={["ts ", "js"]}
        />
        <Hooks />
        <Context />
      </div>
    </AppContext.Provider>
  )
}

export default App
