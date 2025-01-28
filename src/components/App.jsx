import Header from "./Header"
import Entry from "./Entry"
import entry from "../data.js"

function App( ){
  const entryElements = entry.map((entry) => (
    <Entry
                key={entry.id}
                {...entry}
            /> 
          ))
  return(
    
    <main>
      <Header/>
      {entryElements}
    </main>
   
    )
}

export default App
