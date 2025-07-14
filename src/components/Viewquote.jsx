import axios from 'axios'
import React, { useEffect } from 'react'
import Navquote from './Navquote'

const Viewquote = () => {
    const [quotes,changeQuotes]=(
        {"quotes":[]}
    )
    const fetchData=()=>(
        axios.get("https://dummyjson.com/quotes").then(
            (response)=>{
                changeQuotes(response.data)
            }
        ).catch()
    )
    useEffect(()=>{fetchData()}, [])
  return (
    <div>
        <Navquote/>
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <h1 align="center" className='text-primary'>VIEW QUOTE</h1>
                    </div>
                </div>
            <div className="row">
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col">Quote</th>
                                            <th scope="col">Author</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {quotes.quotes.map(
                                            (value, index) => {
                                                return (
                                                    <tr key={value.id}>
                                                        <td>{value.quote}</td>
                                                        <td>{value.author}</td>
                                                    </tr>
                                                )
                                            }
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewquote