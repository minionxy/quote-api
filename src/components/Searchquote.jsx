import React from 'react'
import Navquote from './Navquote'

const Searchquote = () => {
  return (
    <div>
        <Navquote/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 align="center" className='text-warning'>SEARCH QUOTE</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Enter Id</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-warning">SEARCH</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Searchquote