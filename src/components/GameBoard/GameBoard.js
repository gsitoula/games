import React from "react";
import './GameBoard.css';

const boardLayout = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

class GameBoard extends React.Component {

    constructor(props) {
        super(props);
    }

logPosition (contNum, squareNum) {
    let position = {contNum: contNum, squareNum: squareNum}
    console.log(position);
}

SetContainerTop (top, i) {
    return {"top": top * i + "px"}
    /*if(i === 1) {
        return {"top": top + "px"}
    } else {
        return {"top": top * i + "px"}
    }*/
}

CreateRow () {
    let row = boardLayout.map((v, i) => {
        return <div style={this.SetContainerTop(18, i)} className={"container"} key={i}>{i} {this.CreateSquaredRow(i)} </div>
    });
    return row;
}

CreateSquaredRow (contNum) {
    let board_layout = boardLayout.map((v, i) => {
        //return <div className={"square" + i} key={i} onClick={(e) => this.logPosition({contNum}, {i})}><h4>{letterList[i]}</h4></div>
        return <button className={"square" + i} key={i} onClick={(e) => this.logPosition(contNum, i)}><h4>{letterList[i]}</h4></button>
    });
    return board_layout;
}


render() {
        return (
            <div className="board">
                {/* <div className="container0">
                    {this.CreateSquaredRow()}
                </div>
                <div className="container1">
                    <div className="square0"></div>
                    <div className="square1"></div>
                    <div className="square2"></div>
                </div>
                <div className="container2">
                    <div className="square0"></div>
                    <div className="square1"></div>
                    <div className="square2"></div>
                </div> */}
                {this.CreateRow()}
            </div>
        )
    }
}

export default GameBoard;