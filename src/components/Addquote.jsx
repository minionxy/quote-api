import React from 'react'
import Navquote from './Navquote'

const Addquote = () => {
  return (
    <div>
        <Navquote/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 align="center" className='text-primary'>ADD QUOTE</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Id</label>
                            <input type="number" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Author</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-12 col-sm-12 col-md- col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Quote</label>
                            <textarea name="" id="" className="form-control"></textarea>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success">SUBMIT</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addquote