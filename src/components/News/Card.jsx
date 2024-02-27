import React from 'react'

function Card({heading, image,news, handleClick}) {

    
    // console.log(heading)
  return (
    <div className="card w-1/4 glass h-fit pt-6">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body ">
    <h2 className="card-title  font-bold">{heading}</h2>
    <p className=''>{news}</p>
    <div className="card-actions justify-end">
      <button onClick={handleClick} className="btn bg-OrangeX text-slate-900">Read More</button>
    </div>
  </div>
</div>
  )
}

export default Card
