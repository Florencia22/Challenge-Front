import React from 'react';
import ResultItem from './ResultItem';

class ResultList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="list" style={{maxWidth: '750px'}}>
                <h5>Resultados</h5>
                <div>
                {this.props.items.map((item)=>{
                    return(
                        <ResultItem  title={item.title} imgUrl={item.thumbnail} 
                        precio={item.price}/>
                    )
                })}
                </div>
            </div>
        );
    }
}

export default ResultList;

