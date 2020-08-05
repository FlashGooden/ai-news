import React, {useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = process.env.REACT_APP_KEYUP
console.log(alanKey)
export default function App() {
useEffect(() => {
  alanBtn({
    key: alanKey,
    onCommand: ({command})=> {
      if(command === 'hooty') {
        alert('you said the right command BOYYYY!!!!  ')
      }
    }
  })
  
}, [])


  return (
    <div>
      The Voice news assistant
    </div>
  )
}
