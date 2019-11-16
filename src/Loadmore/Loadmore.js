import React, { Component } from 'react';
import ReactDom from 'react-dom';

class Loadmore extends Component {
    constructor(props){
        super(props);
        this.state={
            items:[],
            url:'https://api.themoviedb.org/3/movie/upcoming?api_key=d466811a6b256c8fc0e6c0c21d1531b2&page=1'
        }
    }

    componentDidMount(){
        fetch(this.state.url).then(res=>res.json())
        .then((res)=>{
            this.setState({items:res})
        })
    }

    render() {
        return (
            <div>
                <div className="bla">
                {this.state.items.map((item)=>{
                    return(
                    <div className="col-md-4">
                    <p>TITLE</p>
                    </div>)
               
               

                })}
               </div>
                
            </div>
        );
    }
}

export default Loadmore;