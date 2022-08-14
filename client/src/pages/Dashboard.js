import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <div className="main-wrapper main-wrapper-1">
        <div className="main-content">
          <section className="section">
            <div className="row ">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-statistic-4">
                    <div className="align-items-center justify-content-between">
                      <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                          <div className="card-content">
                            <h5 className="font-15">All Students</h5>
                            <h2 className="mb-3 font-18">258</h2>
                            {/* <p className="mb-0"><span className="col-green">10%</span> Increase</p> */}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                          <div className="banner-img">
                            <img src="assets/img/banner/1.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-statistic-4">
                    <div className="align-items-center justify-content-between">
                      <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                          <div className="card-content">
                            <h5 className="font-15"> Courses</h5>
                            <h2 className="mb-3 font-18">5</h2>
                            {/* <p className="mb-0"><span className="col-orange">09%</span> Decrease</p> */}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                          <div className="banner-img">
                            <img src="assets/img/banner/2.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-statistic-4">
                    <div className="align-items-center justify-content-between">
                      <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                          <div className="card-content">
                            <h5 className="font-15">Students Without Enrollment</h5>
                            <h2 className="mb-3 font-18">12</h2>
                            {/* <p className="mb-0"><span className="col-green">18%</span>
                              Increase</p> */}
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                          <div className="banner-img">
                            <img src="assets/img/banner/3.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="card">
                  <div className="card-statistic-4">
                    <div className="align-items-center justify-content-between">
                      <div className="row ">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pr-0 pt-3">
                          <div className="card-content">
                            <h5 className="font-15">Revenue</h5>
                            <h2 className="mb-3 font-18">$48,697</h2>
                            <p className="mb-0"><span className="col-green">42%</span> Increase</p>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 pl-0">
                          <div className="banner-img">
                            <img src="assets/img/banner/4.png" alt="image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-sm-12 col-lg-12">
                <div className="card ">
                  <div className="card-header">
                    <h4>Revenue chart</h4>
                    <div className="card-header-action">
                      <div className="dropdown">
                        <a href="#" data-toggle="dropdown" className="btn btn-warning dropdown-toggle">Options</a>
                        <div className="dropdown-menu">
                          <a href="#" className="dropdown-item has-icon"><i className="fas fa-eye" />
                            View</a>
                          <a href="#" className="dropdown-item has-icon"><i className="far fa-edit" />
                            Edit</a>
                          <div className="dropdown-divider" />
                          <a href="#" className="dropdown-item has-icon text-danger"><i className="far fa-trash-alt" />
                            Delete</a>
                        </div>
                      </div>
                      <a href="#" className="btn btn-primary">View All</a>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-9">
                        <div id="chart1" />
                        <div className="row mb-0">
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="list-inline text-center">
                              <div className="list-inline-item p-r-30"><i data-feather="arrow-up-circle" className="col-green" />
                                <h5 className="m-b-0">$675</h5>
                                <p className="text-muted font-14 m-b-0">Weekly Earnings</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="list-inline text-center">
                              <div className="list-inline-item p-r-30"><i data-feather="arrow-down-circle" className="col-orange" />
                                <h5 className="m-b-0">$1,587</h5>
                                <p className="text-muted font-14 m-b-0">Monthly Earnings</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4">
                            <div className="list-inline text-center">
                              <div className="list-inline-item p-r-30"><i data-feather="arrow-up-circle" className="col-green" />
                                <h5 className="mb-0 m-b-0">$45,965</h5>
                                <p className="text-muted font-14 m-b-0">Yearly Earnings</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3">
                        <div className="row mt-5">
                          <div className="col-7 col-xl-7 mb-3">Total customers</div>
                          <div className="col-5 col-xl-5 mb-3">
                            <span className="text-big">8,257</span>
                            <sup className="col-green">+09%</sup>
                          </div>
                          <div className="col-7 col-xl-7 mb-3">Total Income</div>
                          <div className="col-5 col-xl-5 mb-3">
                            <span className="text-big">$9,857</span>
                            <sup className="text-danger">-18%</sup>
                          </div>
                          <div className="col-7 col-xl-7 mb-3">Project completed</div>
                          <div className="col-5 col-xl-5 mb-3">
                            <span className="text-big">28</span>
                            <sup className="col-green">+16%</sup>
                          </div>
                          <div className="col-7 col-xl-7 mb-3">Total expense</div>
                          <div className="col-5 col-xl-5 mb-3">
                            <span className="text-big">$6,287</span>
                            <sup className="col-green">+09%</sup>
                          </div>
                          <div className="col-7 col-xl-7 mb-3">New Customers</div>
                          <div className="col-5 col-xl-5 mb-3">
                            <span className="text-big">684</span>
                            <sup className="col-green">+22%</sup>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;