import React, {useEffect} from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'

const alanKey = process.env.KEYUP
export default function App() {
useEffect(() => {
  alanBtn({
    key: alanKey
  })
  
}, [])


  return (
    <div>
      The Voice news assistant
    </div>
  )
}
