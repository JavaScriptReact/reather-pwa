import React, { useState } from "react"
import fetchWeather from "./api/fetchWeather"
import WeatherModal from "./components/WeatherMode"

const App: React.FC = () => {
 const input = React.useRef<any>(null)
 const [query, setQuery] = useState<string>("")
 const [data, setData] = useState<any>()
 const [name, setName] = useState<string>("")
 const [show, setShow] = useState<boolean>(false)

 const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === "Enter") {
   fetchWeather(query).then(arg => {
    setShow(true)
    setQuery("")
    setData(arg)
    setName(query)
    input.current.blur()
   })
  }
 }

 return (
  <>
   <img src={`https://maps.googleapis.com/maps/api/staticmap?center=1,1&zoom=14&size=400x300&sensor=false&key=AIzaSyBn0LnPdiVKENAfgNh2nRSl2NII_ezuFaY`} alt="map" />
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
      onFocus={() => setShow(false)}
     />
    </div>
    {show && <WeatherModal query={name} data={data} />}
   </section>
  </>
 )
}

export default App