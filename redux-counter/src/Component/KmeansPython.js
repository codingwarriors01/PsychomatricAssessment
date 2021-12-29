import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    # importing the essential packages.<br/>
    %matplotlib inline<br/>
    import matplotlib.pyplot as plt<br/>
    import seaborn as sns; sns.set()<br/>
    import numpy as np<br/>
    from sklearn.cluster import KMeans<br/>
    #The code below will build a 2D dataset with four blobs.<br/>
    from sklearn.datasets.samples_generator import make_blobs<br/>
    X, y_true = make_blobs(n_samples=400, centers=4, cluster_std=0.60, random_state=0)<br/>
    #Following that, the code below will assist us in visualizing the dataset.<br/>
    plt.scatter(X[:, 0], X[:, 1], s=20);<br/>
    plt.show()<br/><br/>
    <img src='https://editor.analyticsvidhya.com/uploads/89681world_map.jpg'/><br/><br/> 
    #Next, create a K – means object while specifying the number of clusters, train the model, and estimate as follows-<br/><br/>
    kmeans = KMeans(n_clusters=4)<br/>
    kmeans.fit(X)<br/>
    y_kmeans = kmeans.predict(X)<br/>
    #Now, using the code below, we can plot and visualize the cluster’s centers as determined by the k-means Python estimator-<br/>
    plt.scatter(X[:, 0], X[:, 1], c=y_kmeans, s=20, cmap='summer')<br/>
    centers = kmeans.cluster_centers_<br/>
    plt.scatter(centers[:, 0], centers[:, 1], c='blue', s=100, alpha=0.9);<br/>
    plt.show()<br/>
    <img src='https://editor.analyticsvidhya.com/uploads/58386world_spot.jpg'/><br/>
   
    
         
    `
    function Kmeanpython(){
        return(
      <div>
          
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default Kmeanpython;
  



    
    

