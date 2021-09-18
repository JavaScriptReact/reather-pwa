import React, { useState } from "react"
import fetchWeather from "./api/fetchWeather"
import WeatherModal from "./components/WeatherMode"

const App: React.FC = () => {
 const input = React.useRef<any>(null)
 const [query, setQuery] = useState<string>("")
 const [data, setData] = useState<any>()
 const [name, setName] = useState<string>("")

 const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
   fetchWeather(query).then(arg => {
    setQuery("")
    setData(arg)
    setName(query)
    input.current.blur()
   })
  }
 }

 React.useEffect(() => {
  alert()
 }, [data])

 return (
  <>
   <section className="main-section">
    <div className="content">
     <input
      ref={input}
      type="search"
      placeholder="Search..."
      className="search"
      value={query}
      onChange={e => setQuery(e.target.value)}
      onKeyPress={search}
     />
    </div>
    <WeatherModal query={name} data={data} />
   </section>
  </>
 )
}

export default App