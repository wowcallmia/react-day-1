let App = React.createClass({
  getInitialState() {
    return {
      x: (Math.floor(Math.random()*10)),
      y: (Math.floor(Math.random()*10)),
      answer: ''
    }
  },

  btnClick(e) {
    let answer = this.refs.answer.value;
    this.setState({
      answer: answer + e.target.id
    });
  },
  random () {
    this.setState({
      x: (Math.floor(Math.random() * 10)),
      y: (Math.floor(Math.random() * 10))
    });
  },
  clearOut() {
    this.setState({
      answer: ''
    });
  },
  submit() {
    let inputAnswer = parseInt(this.refs.answer.value);
    let numTotal = this.state.x + this.state.y;
    let notifier = document.getElementById("word");
    if (inputAnswer === numTotal) {
      notifier.innerHTML = "correct: " + numTotal;
    } else {
      notifier.innerHTML = "incorrect its: " + numTotal;
    }
    setTimeout(function() {
      notifier.innerHTML = '';
    }, 3000);
    this.random();
    this.clearOut();
  },

  render() {

    return(
      <div>
      <h1>Math Game</h1>
      <div>
      <h2 id="word"/>
      <h3>{this.state.x} + {this.state.y} = <input type='text' ref='answer' value={this.state.answer}/></h3>
      <button onClick={this.submit}>submit</button>
      </div>
      <div className = 'btn-group'>
      <button id='0' className = 'btn btn-default' onClick={this.btnClick}>0</button>
      <button id='1' className = 'btn btn-default' onClick={this.btnClick}>1</button>
      <button id='2' className = 'btn btn-default' onClick={this.btnClick}>2</button>
      <button id='3' className = 'btn btn-default' onClick={this.btnClick}>3</button>
      <button id='4' className = 'btn btn-default' onClick={this.btnClick}>4</button>
      <button id='5' className = 'btn btn-default' onClick={this.btnClick}>5</button>
      <button id='6' className = 'btn btn-default' onClick={this.btnClick}>6</button>
      <button id='7' className = 'btn btn-default' onClick={this.btnClick}>7</button>
      <button id='8' className = 'btn btn-default' onClick={this.btnClick}>8</button>
      <button id='9' className = 'btn btn-default' onClick={this.btnClick}>9</button>
      <button onClick={this.clearOut}>clear</button>
      </div>
      </div>

    )
  }
});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)
