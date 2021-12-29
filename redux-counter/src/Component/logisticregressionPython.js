import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
    import pandas as pd <br/>
    import numpy as np <br/>
    import matplotlib.pyplot as plt <br/> <br/>
    
    dataset = pd.read_csv('...\\User_Data.csv')  # Loading Dataset -UserData <br/>
    # input</br/>
    x = dataset.iloc[:, [2, 3]].values<br/>
    # output<br/>
    y = dataset.iloc[:, 4].values <br/> <br/>

    #Splitting the dataset to train and test <br/>
    from sklearn.cross_validation import train_test_split <br/>
    xtrain, xtest, ytrain, ytest = train_test_split( <br/>
        x, y, test_size = 0.25, random_state = 0)<br/><br/>
    # Preforming feature Scaling    <br/>
    from sklearn.preprocessing import StandardScaler<br/>
    sc_x = StandardScaler()<br/>
    xtrain = sc_x.fit_transform(xtrain)<br/> 
    xtest = sc_x.transform(xtest)<br/>
        
    print (xtrain[0:10, :])    <br/> <br/>

    Output:- <br/>
    [[ 0.58164944 -0.88670699] <br/>
    [-0.60673761  1.46173768] <br/>
    [-0.01254409 -0.5677824 ]<br/>
    [-0.60673761  1.89663484]<br/>
    [ 1.37390747 -1.40858358]<br/>
    [ 1.47293972  0.99784738]<br/>
    [ 0.08648817 -0.79972756]<br/>
    [-0.01254409 -0.24885782]<br/>
    [-0.21060859 -0.5677824 ]<br/>
    [-0.21060859 -0.19087153]]<br/><br/>

    Finally, we are training our Logistic Regression model.<br/>
    from sklearn.linear_model import LogisticRegression<br/>
    classifier = LogisticRegression(random_state = 0)<br/>
    classifier.fit(xtrain, ytrain)<br/>
    y_pred = classifier.predict(xtest) #After training the model, it time to use it to do prediction on testing data. <br/><br/>
    
    from sklearn.metrics import confusion_matrix<br/>
    cm = confusion_matrix(ytest, y_pred)<br/>
    
    print ("Confusion Matrix : \n", cm)<br/><br/>

    Output:-<br/>
    Confusion Matrix : <br/>
    [[65  3]<br/>
    [ 8 24]]<br/><br/>
    Performance measure – Accuracy <br/>
        
    from sklearn.metrics import accuracy_score<br/>
    print ("Accuracy : ", accuracy_score(ytest, y_pred))<br/><br/>
    output:-<br/>
    Accuracy :  0.89

    
    `
    function LogisticregressionPython(){
        return(
            
      <div>
          <h5>Logistic Regression In Python</h5>
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default LogisticregressionPython;
       
  
