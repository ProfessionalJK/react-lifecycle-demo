import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Lifecycle extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          color: 'blue',
      };
  }
  static getDerivedStateFromProps(props, state){
      alert("The component will be mounted now and getDerivedStateFromProps() will be executed!!!");
  }
  shouldComponentUpdate(){
      alert("shouldComponentUpdate() allows the component to be updated!!!");
      return true;
  }
  getSnapshotBeforeUpdate(prevProps,prevState){
      document.getElementById("oldState").innerHTML = "Before update: My favorite color was "+prevState.color;
  }
  componentDidMount(){
      alert("The component is already mounted, so componentDidMount() will be executed!!!");
  }
  changeColor = () => {
      alert("The color will be changed now and component will be re-mounted!!!");
      this.setState({color: "red"});
  }
  componentDidUpdate(){
      document.getElementById("newState").innerHTML = "After update: My favorite color is "+this.state.color;
  }
  deleteHeader = () => {
      ReactDOM.unmountComponentAtNode(document.getElementById('root'), 0);
  }
  componentWillUnmount() {
      alert('The component will be un-mounted now!!!')
  }
  render(){
      alert("The component will be renderred now!!!");
      return (
          <div>
              <div id="mount">
                  <h1 id="header">Here is the demonstration of React Lifecycle phases</h1>
                  <h3>My favorite color is {this.state.color}</h3>
                  <button type="button" onClick={this.changeColor}>Change Color</button>
                  <div id="oldState"></div>
                  <div id="newState"></div>
                  <button type="button" onClick={this.deleteHeader} id="deleteButton">Delete Component</button>
              </div>
          </div>
      );
  }
}

ReactDOM.render(<Lifecycle color='black'/>, document.getElementById('root'));