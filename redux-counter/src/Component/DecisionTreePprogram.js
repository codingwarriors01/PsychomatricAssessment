import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    import numpy as np<br/>
    import pandas as pd<br/><br/>
    df = pd.read_csv('weather.csv')<br/>
    df_getdummy=pd.get_dummies(data=df, columns=['Temperature', 'Outlook', 'Windy'])<br/><br/>
    
    
    from sklearn.model_selection import train_test_split<br/><br/>
        X = df_getdummy.drop('Played?',axis=1)<br/>
        y = df_getdummy['Played?']<br/>
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.30, random_state=101)<br/><br/>
    from sklearn.tree import DecisionTreeClassifier<br/><br/>
    dtree = DecisionTreeClassifier(max_depth=3)<br/>
    dtree.fit(X_train,y_train)<br/>
    predictions = dtree.predict(X_test)<br/><br/>
    from sklearn.tree import DecisionTreeClassifier<br/><br/>
    dtree = DecisionTreeClassifier(max_depth=3)<br/>
    dtree.fit(X_train,y_train)<br/>
    predictions = dtree.predict(X_test)<br/><br/>
    from sklearn.tree import plot_tree<br/>
    import matplotlib.pyplot as plt<br/><br/>
    fig = plt.figure(figsize=(16,12))<br/>
    a = plot_tree(dtree, feature_names=df_getdummy.columns, fontsize=12, filled=True,<br/>
    class_names=['Not Play', 'Play'])<br/>
    `
    function DecisionTreePython(){
        return(
      <div>
          <h5>Decision Tree in Python</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default DecisionTreePython;
  



    
    

