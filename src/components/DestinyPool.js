import React from 'react';

class CreatePools extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
      this.state.availablePool = props.array.available;
      this.state.spentPool = props.array.spent;
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
      //this.spendDestinyDice = this.spendDestinyDice.bind(this);
    }

    spendDestinyDice = (prop, i) => {
        console.log(prop, i);
    }

    availablePool() {
        let availablePool = this.state.availablePool.length >= 1 ? 
            this.state.availablePool.map((val, i) => 
            <li key={i + val}>
                <button onClick={(e) => this.spendDestinyDice(val, i)}>{val}</button>
            </li>) 
                : 
            <li>"No roll available"</li>
        return availablePool
    }

    spentPool() {
        return <li>lalala</li>
    }
  
    handleClick() {
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }
  
    render() {
      return (
        // <button onClick={this.handleClick}>
        //   {this.state.isToggleOn ? 'ON' : 'OFF'}
        // </button>
        <div>
        <div className="marginRight20px">
            <div>
                <h3>Available</h3>
            </div>
            <div className="listMinHeight">
                <ul className="listNoDecoration">
                    {this.availablePool()}
                </ul>
            </div>
        </div>
        <div className="inlineDiv">
            <div>
                <h3>Spent</h3>
            </div>
            <div className="listMinHeight">
                <ul className="listNoDecoration">
                    {this.spentPool()}
                </ul>
            </div>
        </div>
        </div>
      );
    }
  }

function DestinyPool (props) {
    return (
        <div>
            <h3>Destiny pool</h3>
            <div>
                <CreatePools array={props}></CreatePools>
            </div>
        </div>
    )
}

export default DestinyPool;

/*
function CreatePools (props) {
    let availablePool = props.array.available.length >= 1 ? 
            props.array.available.map((val, i) => 
            <li key={i + val}>
                <button onClick={activateLasers}>{val}</button>
            </li>) 
                : 
            <li>"No roll available"</li>
    let spentPool = props.array.spent.length >= 1 ? 
            props.array.spent.map((val, i) => <li key={i + val}><button>{val}</button></li>) 
                : 
            <li>"No roll available"</li>
    return (
        <div>
            <div className="marginRight20px">
                <div>
                    <h3>Available</h3>
                </div>
                <div className="listMinHeight">
                    <ul className="listNoDecoration">
                        {availablePool}
                    </ul>
                </div>
            </div>
            <div className="inlineDiv">
                <div>
                    <h3>Spent</h3>
                </div>
                <div className="listMinHeight">
                    <ul className="listNoDecoration">
                        {spentPool}
                    </ul>
                </div>
            </div>
        </div>
    )
}

*/