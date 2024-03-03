import React from 'react';
import './Home.css'; // Import the external CSS file

const Homepage = () => {
  return (
    <>
    <div className="data-structures-container">
    <h1 className="heading">Tree Visualizer</h1>
    <p className="paragraph">Data structure visualization serves as a beacon in the realm of software engineering, illuminating the intricate organization and functionality of complex algorithms.</p>
    <p className="paragraph">Here are some reasons why visualizing data structures is essential:</p>
    <ul className="list">
        <li><strong>Enhanced Understanding:</strong> Visual representations facilitate a deeper comprehension of data organization and algorithmic processes.</li>
        <li><strong>Efficient Debugging:</strong> Visualization aids in identifying and rectifying errors swiftly, ensuring robust software performance.</li>
        <li><strong>Performance Analysis:</strong> By visualizing data structures, developers can analyze algorithmic efficiency and optimize for speed and scalability.</li>
        <li><strong>Educational Value:</strong> Visualization serves as a valuable teaching tool, allowing students to grasp complex concepts with ease.</li>
        <li><strong>Problem-Solving:</strong> Visualization enables users to explore various scenarios and problem-solving approaches with ease.</li>

    </ul>


      
      <h2 className="heading">Data Structures Information</h2>
      <table className="table data-structures-table">
        <thead>
          <tr>
            <th>Data Structure</th>
            <th>Operation</th>
            <th>Description</th>
            <th>Time Complexity</th>
            <th>Space Complexity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowSpan="4">Binary Search Tree</td>
            <td>Insertion</td>
            <td>Inserts a new node into the BST.</td>
            <td>O(log n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>Deletes a node from the BST.</td>
            <td>O(log n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>Searches for a node in the BST.</td>
            <td>O(log n)</td>
            <td>O(1) - for balanced BST, O(n) - for skewed BST</td>
          </tr>
          <tr>
            <td>Traversal</td>
            <td>Traverses the BST in different orders (in-order, pre-order, post-order).</td>
            <td>O(n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td rowSpan="4">Avl</td>
            <td>Insertion</td>
            <td>Inserts a new node into the AVL tree and performs rotations to maintain balance.</td>
            <td>O(log n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>Deletes a node from the AVL tree and performs rotations to maintain balance.</td>
            <td>O(log n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>Searches for a node in the AVL tree.</td>
            <td>O(log n)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Traversal</td>
            <td>Traverses the AVL tree in different orders (in-order, pre-order, post-order).</td>
            <td>O(n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td rowSpan="4">Tries</td>
            <td>Insertion</td>
            <td>Inserts a new key into the trie.</td>
            <td>O(m), m = length of key</td>
            <td>O(n * m), n = number of keys</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>Deletes a key from the trie.</td>
            <td>O(m)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Search</td>
            <td>Searches for a key in the trie.</td>
            <td>O(m)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Prefix Search</td>
            <td>Finds all keys with the given prefix.</td>
            <td>O(m), m = length of prefix</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td rowSpan="4">Heaps (Max/Min)</td>
            <td>Insertion</td>
            <td>Inserts a new element into the heap.</td>
            <td>O(log n)</td>
            <td>O(n)</td>
          </tr>
          <tr>
            <td>Deletion</td>
            <td>Deletes the root element from the heap.</td>
            <td>O(log n)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Extract Max/Min</td>
            <td>Extracts the maximum/minimum element from the heap.</td>
            <td>O(log n)</td>
            <td>O(1)</td>
          </tr>
          <tr>
            <td>Heapify</td>
            <td>Builds a heap from an array of elements.</td>
            <td>O(n)</td>
            <td>O(1)</td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default Homepage;