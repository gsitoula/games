import React from "react";
import './GameBoard.css';

const boardLayout = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//const boardLayout = [1, 2];
//const boardLayout = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
//const letterList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

class GameBoard extends React.Component {

    constructor(props) {
        super(props);

        //this.logPosition = this.logPosition.bind(this);
    }

logPosition (contNum, squareNum, e) {
    let position = {contNum: contNum, squareNum: squareNum}
    console.log(e.target.classList/*.contains("square_unit")*/)
    //console.log(this);
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
        let hasUnitClass = "squarex square" + i;
        if(contNum === 0 && i === 0) {
            hasUnitClass = "square_unit squarex square" + i;
        }
        return <button className={hasUnitClass} key={i} onClick={(e) => this.logPosition(contNum, i, e)}><h4>{letterList[i]}</h4></button>
    });
    return board_layout;
}

CreateSquare () {
    return <button className={"square"} onClick={(e) => this.logPosition(0, 0)}><h4>{"A"}</h4></button>
}


render() {
        return (
            <div>
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
                </div> 

                            <div className="square_container">
                {
                    this.CreateSquare()
                }
            </div>
                
                
                */}
                {this.CreateRow()}
            </div>

            </div>
        )
    }
}

export default GameBoard;