import React from 'react'
import filmFares from '../data.js'

const FilmFareAwards = () => {
  return (
    <>
    <h3 className='text-center bg-secondary text-warning px-3 my-2'>FilmFareAwards</h3>
    <table class="table table-success table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Year</th>
      <th scope="col">Category</th>
      <th scope="col">Song</th>
      <th scope="col">Result</th>
    </tr>
  </thead>
  <tbody>
    {
        filmFares.map((filmFare,i)=> (
    <tr key={filmFare.Id}>
      <th scope="row">{i+1}</th>
      <td>{filmFare.Year}</td>
      <td>{filmFare.Category}</td>
      <td>{filmFare.song}</td>
      <td>{filmFare.Result}</td>

    </tr>
    ))
}
  </tbody>
    </table>
    </>
  )
 
}

export default FilmFareAwards