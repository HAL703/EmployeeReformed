import React from "react";
import ReactDOM from "react-dom";
import Tree from "react-d3-tree";
import "./styles.css";
import './hierarchyData.json';

var jsonDataString = require('./hierarchyData.json');
var tempObj = Object.values(jsonDataString);
const myTreeData = [ 
  {
    name: tempObj[0].EmployeeName,
    attributes: {
      keyA: tempObj[0].Position,
      keyB: tempObj[0].Department,
      keyC: tempObj[0].YWC + " Years"
    },
    children: [
      {
        name: tempObj[2].EmployeeName,
        attributes: {
          keyA: tempObj[2].Position,
          keyB: tempObj[2].Department,
          keyC: tempObj[2].YWC + " Years"
        },
        children: [
          {
            name: tempObj[7].EmployeeName,
            attributes: {
              keyA: tempObj[7].Position,
              keyB: tempObj[7].Department,
              keyC: tempObj[7].YWC + " Years"
            },
          },
          {
            name: tempObj[8].EmployeeName,
            attributes: {
              keyA: tempObj[8].Position,
              keyB: tempObj[8].Department,
              keyC: tempObj[8].YWC + " Years"
            },
            // children: [
            //   {
            //     //name: tempObj[9].EmployeeName,
            //     //attributes: {
            //       //keyA: tempObj[1].Position,
            //       //keyB: tempObj[1].Department,
            //       //keyC: tempObj[1].YWC + " Years"
            //     },
            //   //}
            // ]
          },
          {
            name: tempObj[5].EmployeeName,
            attributes: {
              keyA: tempObj[5].Position,
              keyB: tempObj[5].Department,
              keyC: tempObj[5].YWC + " Years"
            },
          }
        ]
      },
      {
        name: tempObj[1].EmployeeName,
        attributes: {
          keyA: tempObj[1].Position,
          keyB: tempObj[1].Department,
          keyC: tempObj[1].YWC + " Years"
        },
      },
      {
        name: tempObj[3].EmployeeName,
        attributes: {
          keyA: tempObj[3].Position,
          keyB: tempObj[3].Department,
          keyC: tempObj[3].YWC + " Years"
        },
        children: [
          {
            name: tempObj[6].EmployeeName,
            attributes: {
              keyA: tempObj[6].Position,
              keyB: tempObj[6].Department,
              keyC: tempObj[6].YWC + " Years"
            },
          },
        ]
      },
      {
        name: tempObj[4].EmployeeName,
        attributes: {
          keyA: tempObj[4].Position,
          keyB: tempObj[4].Department,
          keyC: tempObj[4].YWC + " Years"
        },
        children: [
          {
            name: tempObj[8].EmployeeName,
            attributes: {
              keyA: tempObj[8].Position,
              keyB: tempObj[8].Department,
              keyC: tempObj[8].YWC + " Years"
            },
          },
          {
            name: tempObj[9].EmployeeName,
            attributes: {
              keyA: tempObj[9].Position,
              keyB: tempObj[9].Department,
              keyC: tempObj[9].YWC + " Years"
            },
          }
        ]
      }
    ]
  }
];

const svgSquare = {
  shape: "rect",
  shapeProps: {
    width: 180,
    height: 40,
    x: 0,
    y: -20,
    color: "#ffffff"
  }
};

const test = {
  shape: "rect",
  shapeProps: {
    width: 0,
    height: 0,
    x: -20,
    y: 20,
    stroke: "#2f80ed"
  }
};

/*const nodeStyle = (
  <svg viewbox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
    <rect
      width="80"
      height="40"
      x="10"
      y="10"
      style="fill: skyblue; stroke: cadetblue; stroke-width: 2;"
    />
  </svg>
);*/

const treeStyle = {
  nodes: {
    node: {
      circle: <nodeStyle />,
      name: <nodeStyle />,
      attributes: <nodeStyle />
    }
  }
};

class NodeLabel extends React.PureComponent {
  render() {
    const { className, nodeData } = this.props;
    return (
      <div
        className={className}
        style={{
          background: "#ffffff",
          height: "90px",
          border: "2px solid #2F80ED",
          textAlign: "center",
          position: "fixed",
          zIndex: "1000",
          left: "-10px",
          boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
          padding: "5px 0",
          borderRadius: "5px"
        }}
      >
        {nodeData.name}
        <br/>
        {nodeData.attributes.keyA}
        <br/>
        {nodeData.attributes.keyB}
        <br/>
        {nodeData.attributes.keyC}
      </div>
    );
  }
}
export default function App() {
  return (
    <div className="App">
      <div id="treeWrapper" style={{ width: "100%", height: "120vh", position: "fixed", top: "6.5%" }}>
        <h4 style={{color: "white"}}> Welcome to the Electro hierarchy. Double click on a box to open or close it.</h4>
        <Tree
          data={myTreeData}
          nodeSvgShape={test}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="vertical"
          translate={{ x: 950, y: 100 }}
          allowForeignObjects={true}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              width: 220,
              height: 200,
              y: -50,
              x: -85
            }
          }}
          initialDepth={0}
        />
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));