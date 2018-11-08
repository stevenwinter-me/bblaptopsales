import React, { Component } from 'react';

class APICall extends Component {

      constructor() {
        super();
        this.state= {
          bbdata: [],
        };
      }

      componentDidMount() {
        fetch('https://api.bestbuy.com/v1/products(onSale=true&(categoryPath.id=abcat0502000))?apiKey=qBuX6XunHKJ9uqKLf8R5U9CS&format=json')
        .then(results => {
          return results.json();
        }).then(data => {
            let bbdata = data.products.map((poo) => {
                return(
                    <div key={poo.products} className="lapContainer">
                      <div className="grow">
                      <a href={poo.url}><img src={poo.image} /></a>
                      </div>
                      <p>{poo.name}</p>
                      <span className="span1 strikethrough">${poo.regularPrice}</span><span className="span2">${poo.salePrice}</span>
                    </div>
                )
            })
            this.setState({bbdata: bbdata});
            console.log("state", this.state.bbdata);
        })
    }



        render() {
            return (
              <div>{this.state.bbdata}</div>
              
            );
          }
        }

export default APICall;