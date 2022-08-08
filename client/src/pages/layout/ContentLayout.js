import React from 'react'

const ContentLayout = (props) => {
  return (
    <div>
      <div className="main-wrapper main-wrapper-1">
        <div className="main-content">
          <section className="section">
            <div className="row">
              <div className="col-md-12">
                <div className="card card-primary">
                    <div className="card-header"></div>
                    <div className="card-body">
                        <div className="card">
                            <div className="card-header">
                                <h4>{props.heading}</h4>
                            </div>
                            <div className="card-body">
                                {props.content}
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

export default ContentLayout;