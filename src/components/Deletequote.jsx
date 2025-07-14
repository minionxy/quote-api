import React from 'react'
import Navquote from './Navquote'

const Deletequote = () => {
  return (
    <div>
        <Navquote/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 align="center" className='text-danger'>DELETE QUOTE</h1>
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
                            <button className="btn btn-danger">DELETE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Deletequote