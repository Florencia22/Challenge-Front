import React from 'react';

class SearchMovie extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            movie:""
        }
    }
    handleChange = (e) =>{
        this.setState({ movie: e.target.value})
    }
    handleClick = () =>{
        const MOVIESEARCH = this.state.movie;
       
        return this.props.search(MOVIESEARCH)
    }

    render() {
        return (
            <>
                <div className="input-group mb-3" style={{maxWidth: '750px'}}>
                    <input type="text" className="form-control" placeholder="Ingrese una búsqueda" aria-label="Ingrese una búsqueda" aria-describedby="button-addon2" onChange={this.handleChange} />
                    <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={this.handleClick}>Buscar</button>
                    </div>
                </div>
            </>
        );
    }
}

export default SearchMovie;