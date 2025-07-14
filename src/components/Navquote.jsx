import React from 'react'

const Navquote = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                                    <div class="container-fluid">
                                        <a class="navbar-brand" href="/">QUOTESS</a>
                                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                            <span class="navbar-toggler-icon"></span>
                                        </button>
                                        <div class="collapse navbar-collapse" id="navbarNav">
                                            <ul class="navbar-nav">
                                                <li class="nav-item">
                                                    <a class="nav-link active" aria-current="page" href="/">Add</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/searchq">Search</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/deleteq">Delete</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" href="/viewq">View</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navquote