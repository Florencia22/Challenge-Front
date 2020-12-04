import React from 'react';

class SearchBox extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            producto:""
        }
    }
    handleChange = (e) =>{
        this.setState({ producto: e.target.value})
    }
    handleClick = () =>{
        const PRODUCTOSEARCH = this.state.producto;
        console.log(PRODUCTOSEARCH);
        return this.props.search(PRODUCTOSEARCH)
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

export default SearchBox;