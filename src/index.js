import React from "react";
import ReactDOM from "react-dom";
import Tree from "react-d3-tree";
import "./styles.css";
import "./hierarchyData.json";

var jsonString = require('./hierarchyData.json');
console.log(jsonString);
const myTreeData = [ 
  {
    name: jsonString[0],
    attributes: {
      keyA: "val A",
      keyB: "val B",
      keyC: "val C"
    },
    children: [
      {
        name: jsonString[2],
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C"
        },
        children: [
          {
            name: jsonString[7],
          },
          {
            name: jsonString[8],
            children: [
              {
                name: jsonString[1],
              }
            ]
          },
          {
            name: jsonString[5],
          }
        ]
      },
      {
        name: jsonString[1],
      },
      {
        name: jsonString[3],
        attributes: {
          keyA: "val A",
          keyB: "val B",
          keyC: "val C"
        },
        children: [
          {
            name: jsonString[6],
            attributes: {
              keyA: "val A",
              keyB: "val B",
              keyC: "val C"
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
        children: [
          {
            name: jsonString[8],
            attributes: {
              keyA: "val A",
              keyB: "val B",
              keyC: "val C"
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
    console.log(this.props);
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