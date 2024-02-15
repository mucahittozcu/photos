"use client"
import Link from "next/link"
import { useState } from "react"


function App() {
  const carousels = [
    "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2F0fGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1618826411640-d6df44dd3f7a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2F0fGVufDB8fDB8fHww",
  ]
const [photos,setPhotos] = useState(0)
  
 const handleChange = () => {
  setPhotos((pre) => pre === 0 ? carousels.length - 1 : pre - 1)
 }

 const handleChangeCoursel = ()=>{
  setPhotos((pre) => pre === carousels.length - 1 ? 0 : pre + 1)
 }
  

  return (
    <>
    <div className="header">
     <h1>Project 1:Carousel</h1>  
    </div>
      <div className="carousel-container">
    <div className="carousel-image">

      <div className="divbtn" style={{ position: 'relative', width: '100%', height: '300px' }}>
      {carousels.map((carousel) => ( 
        <img 
        key={crypto.randomUUID()}
        src={carousel} 
        alt={`resim ${photos + 1}`} 
        style={{display: carousel === carousels[photos] ? "block" : "none"}}
        />
        ))}
    </div>
    </div>
    <button className="btn-handle" style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)' }} onClick={handleChange}>→</button>
    <div className="divbutton">
    <button className="btn-carousel"  style={{ position: 'absolute', top: '50%', right: '25%', transform: 'translate(50%, -50%)' }} onClick={handleChangeCoursel}>←</button>
    </div>
    </div>
    
    
        </>
  )
}
export default App












