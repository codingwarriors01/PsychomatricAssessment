import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    # Importing the libraries<br/>
    import numpy as np<br/>
    import matplotlib.pyplot as plt<br/>
    import pandas as pd<br/>

    # Importing the dataset<br/>
    dataset = pd.read_csv('Social_Network_Ads.csv')<br/>
    X = dataset.iloc[:, [2, 3]].values<br/>
    y = dataset.iloc[:, -1].values<br/>

    # Splitting the dataset into the Training set and Test set<br/>
    from sklearn.model_selection import train_test_split<br/>
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.20, random_state = 0)<br/>
    <br/>
    # Feature Scaling<br/>
    from sklearn.preprocessing import StandardScaler<br/><br/>
    sc = StandardScaler()<br/>
    X_train = sc.fit_transform(X_train)<br/>
    X_test = sc.transform(X_test)<br/>

    # Training the Naive Bayes model on the Training set<br/>
    from sklearn.naive_bayes import GaussianNB<br/>
    classifier = GaussianNB()<br/>
    classifier.fit(X_train, y_train)<br/>

    # Predicting the Test set results<br/>
    y_pred = classifier.predict(X_test)<br/>

    # Making the Confusion Matrix<br/>
    from sklearn.metrics import confusion_matrix, accuracy_score<br/>
    ac = accuracy_score(y_test,y_pred)<br/>
    cm = confusion_matrix(y_test, y_pred)<br/>
    
    
    `
    function NaiveByesPythonProgram(){
        return(
            
      <div>
         
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default NaiveByesPythonProgram;
       
  
