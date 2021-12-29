import React from 'react';
import Card from "react-bootstrap/Card";


function AlgoPage() {

    return (
        <html>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                    crossorigin="anonymous"
                />
            </head>
            <body>
                <div className='row container'>
                        <h1>Algorithms</h1>
                    <div className='col-md-6'>

                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title>Linear Regression</Card.Title>
                                
                                <Card.Text>
                                    It is used to estimate real values (cost of houses, number of calls, total sales etc.) based on continuous variable(s).
                                    Here, we establish relationship between independent and dependent variables by fitting a best line.
                                    This best fit line is known as regression line and represented by a linear equation Y= a *X + b.
                                    The best way to understand linear regression is to relive this experience of childhood.
                                    Let us say, you ask a child in fifth grade to arrange people in his class by increasing order of weight, without asking them their weights!
                                    What do you think the child will do? He / she would likely look (visually analyze) at the height and build of people and arrange them using a combination of these visible parameters.
                                    This is linear regression in real life!
                                    The child has actually figured out that height and build would be correlated to the weight by a relationship, which looks like the equation above.
                                    <br />
                                    In this equation:
                                    <br />
                                    Y - Dependent Variable <br />
                                    a - Slope <br />
                                    X - Independent variable <br />
                                    b - Intercept <br />
                                    These coefficients a and b are derived based on minimizing the sum of squared difference of distance between data points and regression line.

                                </Card.Text>
                                <Card.Link href="/LinearApplication">Applications</Card.Link>
                                <br />
                                <Card.Link href="/programs">Example Programs</Card.Link>
                            </Card.Body>
                          
                        </Card>
                    </div>
                    <div className='col-md-6'>
                    <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> Logistic Regression</Card.Title>
                                <Card.Text>
                                Logistic regression is a classification algorithm used to assign observations to a discrete set of classes.<br/>
                                Some of the examples of classification problems are Email spam or not spam, Online transactions Fraud or not Fraud, Tumor Malignant or Benign.<br/> 
                                Logistic regression transforms its output using the logistic sigmoid function to return a probability value.<br/>
                                We can call a Logistic Regression a Linear Regression model but the Logistic Regression uses a more complex cost function, this cost function can be defined as the ‘Sigmoid function’ or also known as the ‘logistic function’ instead of a linear function.<br/>
                                The hypothesis of logistic regression tends it to limit the cost function between 0 and 1.<br/>
                                Therefore linear functions fail to represent it as it can have a value greater than 1 or less than 0 which is not possible as per the hypothesis of logistic regression.<br/>
                                </Card.Text>
                                <Card.Link href="/LogisticApplication">Applications</Card.Link>
                                <br />
                                <Card.Link href="/logisticPrograms">Example Programs</Card.Link>
                            </Card.Body>
                          
                        </Card>

                    </div> <br/>
                </div>    
                    <div className='row container'>

                        <div className='col-md-6'><br/>
                        <Card style={{ width: '35rem' }}>
                                <Card.Body>
                                    <Card.Title> Decision Tree</Card.Title>
                                    <Card.Text>
                                    Decision tree is a type of supervised learning algorithm (having a predefined target variable) that is mostly used in classification problems.<br/>
                                    It works for both categorical and continuous input and output variables.<br/>
                                    In this technique, we split the population or sample into two or more homogeneous sets (or sub-populations) based on most significant <br/> splitter / differentiator in input variables. 
                                    <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/08/IkBzK.png' style={{width:"400px"}}/><br/>
                                    In the image above, you can see that population is classified into four different groups based on multiple attributes to identify ‘if they will play or not’.<br/> To split the population into different heterogeneous groups, it uses various techniques like Gini, Information Gain, Chi-square, entropy.
                                    </Card.Text>
                                    <Card.Link href="/DecisionTreeApplication">Applications</Card.Link>
                                    <br />
                                    <Card.Link href="/DecisiomTreePrograms">Example Programs</Card.Link>
                                </Card.Body>
                            
                            </Card>

                        </div>
                        <div className='col-md-6'><br/>
                        <Card style={{ width: '35rem' }}>
                                <Card.Body>
                                    <Card.Title> SVM(Support Vector Machine)</Card.Title>
                                    <Card.Text>
                                    Support vector machines (SVMs) are powerful yet flexible supervised machine learning algorithms which are used for both classification and regression. But generally, they are used in classification problems.
                                    In this algorithm, we plot each data item as a point in n-dimensional space (where n is number of features you have) with the value of each feature being the value of a particular coordinate.
                                    For example, if we only had two features like Height and Hair length of an individual, we’d first plot these two variables in two dimensional space where each point has two co-ordinates (these co-ordinates are known as Support Vectors)
                                    <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/08/SVM1.png' style={{width:"400px"}}/><br/>
                                    Now, we will find some line that splits the data between the two differently classified groups of data. This will be the line such that the distances from the closest point in each of the two groups will be farthest away.<br/>
                                    <img src="https://www.analyticsvidhya.com/wp-content/uploads/2015/08/SVM2.png" style={{width:"400px"}}/><br/>
                                    In the example shown above, the line which splits the data into two differently classified groups is the black line, since the two closest points are the farthest apart from the line. This line is our classifier. Then, depending on where the testing data lands on either side of the line, that’s what class we can classify the new data as.<br/>
                                    </Card.Text>
                                    <Card.Link href="/SVMApplication">Applications</Card.Link>
                                    <br />
                                    <Card.Link href="/Svm">Example Programs</Card.Link>
                                </Card.Body>
                            
                            </Card>

                        </div>
                    </div>
                    <div className='row container'>

                    <div className='col-md-6'><br/>
                    <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> Naive Bayes </Card.Title>
                                <Card.Text> 
                                It is a classification technique based on Bayes’ theorem with an assumption of independence between predictors. In simple terms, a Naive Bayes classifier assumes that the presence of a particular feature in a class is unrelated to the presence of any other feature. For example, a fruit may be considered to be an apple if it is red, round, and about 3 inches in diameter. Even if these features depend on each other or upon the existence of the other features, a naive Bayes classifier would consider all of these properties to independently contribute to the probability that this fruit is an apple.<br/>
                                Naive Bayesian model is easy to build and particularly useful for very large data sets. Along with simplicity, Naive Bayes is known to outperform even highly sophisticated classification methods.

                                Bayes theorem provides a way of calculating posterior probability P(c|x) from P(c), P(x) and P(x|c). Look at the equation below<br/>
                                <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/08/Bayes_rule.png'/><br/>
                                Here,<br/>
                                    P(c|x) is the posterior probability of class (target) given predictor (attribute).<br/>
                                    P(c) is the prior probability of class.<br/>
                                    P(x|c) is the likelihood which is the probability of predictor given class.<br/>
                                    P(x) is the prior probability of predictor.<br/>
                                
                                
                                </Card.Text>
                                <Card.Link href="/NaiveBayesApplication">Applications</Card.Link>
                                <br />
                                <Card.Link href="/NaiveBayesPrograms">Example Programs</Card.Link>
                            </Card.Body>
                        
                        </Card>

                    </div>
                    <div className='col-md-6'><br/>
                    <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> kNN (K-Nearest Neighbors) </Card.Title>
                                <Card.Text>
                                It can be used for both classification and regression problems. However, it is more widely used in classification problems in the industry. K nearest neighbors is a simple algorithm that stores all available cases and classifies new cases by a majority vote of its k neighbors. The case being assigned to the class is most common amongst its K nearest neighbors measured by a distance function.
                                These distance functions can be Euclidean, Manhattan, Minkowski and Hamming distance. First three functions are used for continuous function and fourth one (Hamming) for categorical variables. If K = 1, then the case is simply assigned to the class of its nearest neighbor. At times, choosing K turns out to be a challenge while performing kNN modeling.<br/><br/>
                                <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/08/KNN.png' style={{width:'500px'}}/><br/>
                                KNN can easily be mapped to our real lives. If you want to learn about a person, of whom you have no information, you might like to find out about his close friends and the circles he moves in and gain access to his/her information!
                                </Card.Text>
                                <Card.Link href="/KNNApplication">Applications</Card.Link>
                                <br />
                                <Card.Link href="/KNNPrograms">Example Programs</Card.Link>
                            </Card.Body>
                        
                        </Card>

                    </div>
                </div>
                <div className='row container'>

                    <div className='col-md-6'><br />
                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> K-Means </Card.Title>
                                <Card.Text>
                                It is a type of unsupervised algorithm which solves the clustering problem. Its procedure follows a simple and easy way to classify a given data set through a certain number of clusters (assume k clusters). Data points inside a cluster are homogeneous and heterogeneous to peer groups.
                                Remember figuring out shapes from ink blots? k means is somewhat similar this activity. You look at the shape and spread to decipher how many different clusters / population are present!<br/>
                                <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/08/splatter_ink_blot_texture_by_maki_tak-d5p6zph.jpg' style={{width:'500px'}}/><br/>
                                <strong>How K-means forms cluster:</strong><br/>

                                1.K-means picks k number of points for each cluster known as centroids.<br/>
                                2.Each data point forms a cluster with the closest centroids i.e. k clusters.<br/>
                                3.Finds the centroid of each cluster based on existing cluster members. Here we have new centroids.<br/>
                                4.As we have new centroids, repeat step 2 and 3. Find the closest distance for each data point from new centroids and get associated with new k-clusters. Repeat this process until convergence occurs i.e. centroids does not change.<br/>
                                <strong>How to determine value of K:</strong><br/>
                                In K-means, we have clusters and each cluster has its own centroid. Sum of square of difference between centroid and the data points within a cluster constitutes within sum of square value for that cluster. Also, when the sum of square values for all the clusters are added, it becomes total within sum of square value for the cluster solution.

                                We know that as the number of cluster increases, this value keeps on decreasing but if you plot the result you may see that the sum of squared distance decreases sharply up to some value of k, and then much more slowly after that. Here, we can find the optimum number of cluster.<br/>
                                <img src='https://www.analyticsvidhya.com/wp-content/uploads/2015/08/Kmenas.png' style={{width:'500px'}}/><br/>
                                </Card.Text>
                                <Card.Link href="/KMeansApplication">Applications</Card.Link>
                                <br />
                                <Card.Link href="/Kmeanspythonexample">Example Programs</Card.Link>
                            </Card.Body>

                        </Card>

                    </div>
                    <div className='col-md-6'><br />
                        <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> Random Forest </Card.Title>
                                <Card.Text>
                                    Random Forest is a trademark term for an ensemble of decision trees. In Random Forest, we’ve collection of decision trees (so known as “Forest”). To classify a new object based on attributes, each tree gives a classification and we say the tree “votes” for that class. The forest chooses the classification having the most votes (over all the trees in the forest).<br />
                                    <strong>Each tree is planted & grown as follows:</strong><br />

                                    1.If the number of cases in the training set is N, then sample of N cases is taken at random but with replacement. This sample will be the training set for growing the tree.<br />
                                    2.If there are M input variables, a number m &lt &ltM is specified such that at each node, m variables are selected at random out of the M and the best split on these m is used to split the node. The value of m is held constant during the forest growing.<br />
                                    3.Each tree is grown to the largest extent possible. There is no pruning.<br />
                                </Card.Text>
                                <Card.Link href="/Randomforestapplication">Applications</Card.Link>
                                <br />
                                <Card.Link href="/">Example Programs</Card.Link>
                            </Card.Body>

                        </Card>

                    </div>
                </div>
                <div className='row container'>

                    <div className='col-md-6'><br/>
                    <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> Dimensionality Reduction Algorithms </Card.Title>
                                <Card.Text> 
                               
                                
                                </Card.Text>
                                <Card.Link href="/">Applications</Card.Link>
                                <br />
                                <Card.Link href="/">Example Programs</Card.Link>
                            </Card.Body>
                        
                        </Card>

                    </div>
                    <div className='col-md-6'><br/>
                    <Card style={{ width: '35rem' }}>
                            <Card.Body>
                                <Card.Title> Gradient Boosting Algorithms </Card.Title>
                                <Card.Text>
                               
                                </Card.Text>
                                <Card.Link href="/">Applications</Card.Link>
                                <br />
                                <Card.Link href="/">Example Programs</Card.Link>
                            </Card.Body>
                        
                        </Card>

                    </div>
                </div>
            </body>
        </html>
    );
}

export default AlgoPage;