import React, {Component} from "react";
import  Validator from "./Validator/Validator";
import CharComponent from "./CharComponent/CharComponent";
class App extends Component {

  state = {
    inputVal : 0,
    inputArr : []
  }


  updateVal(e){
    let val = e.target.value;
    this.setState({inputArr:[]})
    let strngVal = val.split('');
    this.setState({inputArr:strngVal})
    console.log(val);
    let count = val.length;
    console.log(count)
    this.setState({inputVal : count});
  }

  render(){
  
  return (
    <div className="App">

      <input type='text' onChange={(e)=>this.updateVal(e)}></input>

      <p>
        The Entered string length is {this.state.inputVal}
      </p>
      <Validator inputValue = {this.state.inputVal}/>
        
      {
        this.state.inputVal ? 
        <div>
          {
            this.state.inputArr.map((e,i) => {

              return(
                <CharComponent componenet={e}
                key ={i}>

                </CharComponent>
              )
            })
          }
        </div>:
        <>
        </>
        
      }
    
    </div>
  )
}
}

export default App;
