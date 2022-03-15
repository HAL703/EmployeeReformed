import React from "react";
import ReactDOM from "react-dom";
import Tree from "react-d3-tree";
import "./styles.css";
import "./hierarchyNames.json";
import './hierarchyData.json';

var jsonString = require('./hierarchyNames.json');
var jsonDataString = require('./hierarchyData.json');
console.log(jsonDataString);
var tempObj = Object.values(jsonDataString);
console.log(tempObj);
var data;
for(var i = 0;i < tempObj.length; i++)
{
  data = tempObj[i];
  console.log(data);
  /*for(var j = 0;j < tempObj.length; j++)
  { 
    var data2 = data;
    console.log(data2);
  }*/
}
var data2 = Object.values(data);
console.log(data2);
console.log(data)
const myTreeData = [ 
  {
    name: tempObj[0].EmployeeName,//data[0].EmployeeName,//jsonString[0],
    attributes: {
      keyA: tempObj[0].Position,
      keyB: tempObj[0].Department,
      keyC: tempObj[0].YWC + " Years"
    },
    children: [
      {
        name: jsonString[2],
        attributes: {
          keyA: tempObj[2].Position,
          keyB: tempObj[2].Department,
          keyC: tempObj[2].YWC + " Years"
        },
        children: [
          {
            name: jsonString[7],
            attributes: {
              keyA: tempObj[7].Position,
              keyB: tempObj[7].Department,
              keyC: tempObj[7].YWC + " Years"
            },
          },
          {
            name: jsonString[8],
            attributes: {
              keyA: tempObj[8].Position,
              keyB: tempObj[8].Department,
              keyC: tempObj[8].YWC + " Years"
            },
            children: [
              {
                name: jsonString[1],
                attributes: {
                  keyA: tempObj[1].Position,
                  keyB: tempObj[1].Department,
                  keyC: tempObj[1].YWC + " Years"
                },
              }
            ]
          },
          {
            name: jsonString[5],
            attributes: {
              keyA: tempObj[5].Position,
              keyB: tempObj[5].Department,
              keyC: tempObj[5].YWC + " Years"
            },
          }
        ]
      },
      {
        name: jsonString[1],
        attributes: {
          keyA: tempObj[1].Position,
          keyB: tempObj[1].Department,
          keyC: tempObj[1].YWC + " Years"
        },
      },
      {
        name: jsonString[3],
        attributes: {
          keyA: tempObj[3].Position,
          keyB: tempObj[3].Department,
          keyC: tempObj[3].YWC + " Years"
        },
        children: [
          {
            name: jsonString[6],
            attributes: {
              keyA: tempObj[6].Position,
              keyB: tempObj[6].Department,
              keyC: tempObj[6].YWC + " Years"
            },
            // children: [
            //   {
            //     name: "Level 2: A",
            //     attributes: {
            //       keyA: "val A",
            //       keyB: "val B",
            //       keyC: "val C"
            //     },
            //     children: [
            //       {
            //         name: "Level 2: A",
            //         attributes: {
            //           keyA: "val A",
            //           keyB: "val B",
            //           keyC: "val C"
            //         }
            //       },
            //       {
            //         name: "Level 2: B"
            //       }
            //     ]
            //   },
            //   {
            //     name: "Level 2: B"
            //   }
            // ]
          },
        ]
      },
      {
        name: jsonString[4],
        attributes: {
          keyA: tempObj[4].Position,
          keyB: tempObj[4].Department,
          keyC: tempObj[4].YWC + " Years"
        },
        children: [
          {
            name: jsonString[8],
            attributes: {
              keyA: tempObj[8].Position,
              keyB: tempObj[8].Department,
              keyC: tempObj[8].YWC + " Years"
            },
            // children: [
            //   {
            //     name: "Level 2: A",
            //     attributes: {
            //       keyA: "val A",
            //       keyB: "val B",
            //       keyC: "val C"
            //     },
            //     children: [
            //       {
            //         name: "Level 2: A",
            //         attributes: {
            //           keyA: "val A",
            //           keyB: "val B",
            //           keyC: "val C"
            //         }
            //       },
            //       {
            //         name: "Level 2: B"
            //       }
            //     ]
            //   }
            // ]
          },
          {
            name: jsonString[9],
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
    stroke: "#2F80ED"
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
    //console.log(nodeData.attributes);
    return (
      <div
        className={className}
        style={{
          background: "#ffffff",
          height: "70px",
          borderTop: "2px solid #2F80ED",
          textAlign: "center",
          // position: "fixed",
          zIndex: "1000",
          // left: "-10px",
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
//{nodeData.attributes.map((attribute))}
//<ol>{nodeData.attributes}</ol>
export default function App() {
  return (
    <div className="App">
      <h1>Electro Hierarchy</h1>
      <div id="treeWrapper" style={{ width: "100%", height: "120vh" }}>
        <Tree
          data={myTreeData}
          // nodeSvgShape={svgSquare}
          nodeSvgShape={test}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="vertical"
          translate={{ x: 800, y: 100 }}
          allowForeignObjects={true}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              width: 220,
              height: 200,
              y: -50,
              x: -100
            }
          }}
          initialDepth={2}
        />
      </div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));