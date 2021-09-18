import React from "react"

interface Props {
 query: string,
 data: any
}

const WeatherModal: React.FC<Props> = ({ query, data }) => {

 return (
  <>
   {data && <section className="modal-section">
    <div className="header">
     <h1>{data.name} ({data.sys.country})</h1>
    </div>
    <div className="logo">
     <img alt="background" src="https://i.ibb.co/47YYfy7/logo.png" className="icon" />
    </div>
    <div className="temp">
     <h1>{Math.round(data.main.temp)} C°</h1>
    </div>
   </section>}
  </>
 )
}

export default WeatherModal