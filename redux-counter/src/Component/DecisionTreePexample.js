import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
      In the following dataset, we make a decision on whether we will play or not based upon the given environmental conditions.<br/>
      <img src='https://ml4e.files.wordpress.com/2018/08/capturetable.png'/><br/>
      Now, you may use this table to decide whether to play or not. But, what if the weather pattern on Saturday does not match with any of rows in the table? This may be a problem. A decision tree would be a great way to represent data like this because it takes into account all the possible paths that can lead to the final decision by following a tree-like structure.<br/>
      <img src='https://www.researchgate.net/publication/316204490/figure/fig1/AS:748735613128705@1555523889678/A-Decision-Tree-There-are-three-tree-growing-method-in-decision-tree-namely-CHAID-CART.jpg'/><br/>
      fig.1 <br/>
      Fig 1. illustrates a learned decision tree. We can see that each node represents an attribute or feature and the branch from each node represents the outcome of that node. Finally, its the leaves of the tree where the final decision is made. If features are continuous, internal nodes can test the value of a feature against a threshold (see Fig. 2).<br/>
      <img src='https://s3-ap-southeast-1.amazonaws.com/he-public-data/Fig%201-29c63772.png' style="width:600px" /><br/>
      Fig 2.<br/>
      A general algorithm for a decision tree can be described as follows:<br/>

      1.Pick the best attribute/feature. The best attribute is one which best splits or separates the data.<br/>
      2.Ask the relevant question.<br/>
      3.Follow the answer path.<br/>
      4.Go to step 1 until you arrive to the answer.<br/>
      The best split is one which separates two different labels into two sets.<br/><br/>      
      The basic algorithm used in decision trees is known as the ID3 (by Quinlan) algorithm. 
      The ID3 algorithm builds decision trees using a top-down, greedy approach. Briefly, the steps to the algorithm are: - Select the best attribute → A - Assign A as the decision attribute (test case) for the NODE. - For each value of A, create a new descendant of the NODE. - Sort the training examples to the appropriate descendant node leaf. - If examples are perfectly classified, then STOP else iterate over the new leaf nodes.<br/>


    `
    function DecisionTreePythonExample(){
        return(
      <div>
          
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default DecisionTreePythonExample;
  



    
    

