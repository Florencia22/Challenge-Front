import React from 'react';

class ResultItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <>  
                <div className="card mb-3" style={{maxWidth: '700px'}}>
                    <div className="row no-gutters">
                       { <div className="col-md-4">
                            <img src={this.props.imgUrl} className="card-img" alt="imagen" />
                        </div>}
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{this.props.title}</h5>
                                <p className="card-text">
                                    ${this.props.precio}
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
        );
    }
}

export default ResultItem;