import './App.scss';

function App() {
  return (
    <div className="App">
      <h1>Org Chart Challenge</h1>
      <ul>
        <li>
          <p>Write a set of functions for organizing the flat employees array in <span className="highlight">data/employees.js</span> into a hierarchical array</p>
          <ul>
            <li>Map over the employees array and find the subordinates for each employee</li>
            <li>Add a new <span className="highlight">subordinates</span> property to each employee, it should be an array filled with the employee's subordinates</li>
          </ul>
        </li>
        <li>
          <p>Use the newly structured array to draw an org chart in a hierarchical manner</p>
        </li>
        <li>
          <p>Bonus points given for:</p>
          <ul>
            <li>Clean, simple code</li>
            <li>Elimination of horizontal scroll bar</li>
            <li>Use of a router to give the user the ability isolate a particular employee chain</li>
          </ul>
        </li>
      </ul>
      <div className="org-chart">
        
      </div>
    </div>
  );
}

export default App;
