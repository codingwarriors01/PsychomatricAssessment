import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    import numpy as np<br/>
    import matplotlib.pyplot as plt<br/>
    from sklearn import svm, datasets<br/><br/>
    # import some data to play with<br/>
    iris = datasets.load_iris()<br/>
    X = iris.data[:, :2] # we only take the first two features. We could<br/>
    # avoid this ugly slicing by using a two-dim dataset<br/>
    y = iris.target<br/><br/>
    # we create an instance of SVM and fit out data. We do not scale our<br/>
    # data since we want to plot the support vectors<br/>
    C = 1.0 # SVM regularization parameter<br/>
    svc = svm.SVC(kernel='linear', C=1,gamma=0).fit(X, y)<br/>
    # create a mesh to plot in<br/>
    x_min, x_max = X[:, 0].min() - 1, X[:, 0].max() + 1<br/>
    y_min, y_max = X[:, 1].min() - 1, X[:, 1].max() + 1<br/>
    h = (x_max / x_min)/100<br/>
    xx, yy = np.meshgrid(np.arange(x_min, x_max, h),<br/>
    np.arange(y_min, y_max, h))<br/>
    plt.subplot(1, 1, 1)<br/>
    Z = svc.predict(np.c_[xx.ravel(), yy.ravel()])<br/>
    Z = Z.reshape(xx.shape)<br/>
    plt.contourf(xx, yy, Z, cmap=plt.cm.Paired, alpha=0.8)<br/>
    plt.scatter(X[:, 0], X[:, 1], c=y, cmap=plt.cm.Paired)<br/>
    plt.xlabel('Sepal length')<br/>
    plt.ylabel('Sepal width')<br/>
    plt.xlim(xx.min(), xx.max())<br/>
    plt.title('SVC with linear kernel')<br/>
    plt.show()<br/>
    <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/10/SVM_111.png'/>
    `
    function SvmPython(){
        return(
      <div>
          <h5>Support Vector Machine(SVM) code in Python</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default SvmPython;
  



    
    

