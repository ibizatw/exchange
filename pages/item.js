
import { useState ,useEffect} from "react"
export default function Item(props){


  const {item} = props
  const [rate, setRate] = useState(0)
  const [failed, setFailed] = useState(false)

  useEffect(()=>{
    getRate()
  }, [])
  function getRate(){
    fetch(`http://localhost:8080/rate`).then(res=>res.json()).then(data=>{
      setRate(data.rate)
      setFailed(false)
      setTimeout(getRate, 2000)
    }).catch(err=>{
      setTimeout(getRate, 2000)
      setRate(0)
      setFailed(true)
    })
  }

  return <div style={{color: failed ? 'red': 'black'}}>
    <h1>{item.currency}</h1>
    <h2> {`Rate: ${rate}`}</h2>
  </div>
}