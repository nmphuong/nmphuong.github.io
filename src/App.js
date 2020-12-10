import './App.css';
import { FaCog } from 'react-icons/fa';
import { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div class="col-md-3 col-sm-6 item">
        <div class="card item-card card-block p-3">
          <h4 class="item-card-title text-right"><FaCog /></h4>
          <img src={this.props.src} alt="" />
          <h5 class="card-title  mt-3 mb-3">{this.props.title}</h5>
          <p class="card-text">{this.props.description}</p> 
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <>
      <div class="container mt-2">
        <div class="row">
          <div class="col-md-3 col-sm-6 item">
            <div class="card item-card card-block p-3">
              <h4 class="card-title text-right"><FaCog /></h4>
              <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="" />
              <h5 class="item-card-title mt-3 mb-3">HTML5</h5>
              <p class="card-text">Hypertext Markup Language is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript.</p> 
            </div>
          </div>
          <Card src="https://static.pexels.com/photos/7357/startup-photos.jpg" title="CSS3" description="Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript." />
          <Card src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" title="JavaScript" description="JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions." />
          <Card src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg" title="PHP" description="PHP is a general-purpose scripting language especially suited to web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1994. The PHP reference implementation is now produced by The PHP Group." />   
        </div>
      </div>
      </>
    </div>
  );
}

export default App;
