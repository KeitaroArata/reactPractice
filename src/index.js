import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class CountView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }
    
    render() {
        const count = this.state.count;
        return(
            
        <div className="game-info">
             <div>{this.state.count}</div>
             <Increment
             onClick={() => this.sumOnClick()}
              />
        </div>
        );
    }

    sumOnClick(){
        this.setState({count: this.state.count + 1})
    }
}

function Increment (props) {
    return(
        <button className = "square" 
        onClick = {props.onClick}>
            {props.value}
        </button>
    )
}



// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     renderSquare(i) {
//       return <Square />;
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  
  ReactDOM.render(
    <CountView />,
    document.getElementById('root')
  );
  