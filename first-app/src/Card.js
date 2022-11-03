import React , {Component} from 'react';


// function Card(props) {
//     return (
//         <div className="Card">
//             <header className="card-header">
//                 <h2>{ props.title }</h2>
//             </header>
//             <section className="card-body">
//                 <p>{ props.body }</p>
//             </section>
//             <footer className="card-footer">
//                 <h2>card footer</h2>
//             </footer>
//             <hr></hr>
//         </div>
//     )
// }

class Card extends Component{
    render() {
        let {title , body } = this.props;
        return (
            <div className="Card">
                <header className="card-header">
                    <h2>{ title }</h2>
                </header>
                <section className="card-body">
                    <p>{ body }</p>
                </section>
                <footer className="card-footer">
                    <h2>card footer</h2>
                </footer>
                <hr></hr>
            </div>
        )
    }
}

export default Card;