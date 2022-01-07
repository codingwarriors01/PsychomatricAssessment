import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';


   

    const rawHTML = `
    package com.gg.ml;<br/>

    import java.io.File;<br/>
    import java.io.IOException;<br/>
    import weka.classifiers.trees.Id3;<br/>
    import weka.classifiers.Classifier;<br/>
    import weka.classifiers.Evaluation;<br/>
    import weka.classifiers.trees.J48;<br/>
    import weka.core.converters.ArffLoader;<br/>
    
    /**<br/>
     * @author Gowtham Girithar Srirangasamy<br/>
     *<br/>
     */<br/>
    public class DecisionTreeDemo {<br/>
    
        /** file names are defined*/<br/>
        public static final String TRAINING_DATA_SET_FILENAME="decision-train.arff";<br/>
        public static final String TESTING_DATA_SET_FILENAME="decision-test.arff";<br/>
        
    
        /**<br/>
         * This method is to load the data set.<br/>
         * @param fileName<br/>
         * @return<br/>
         * @throws IOException<br/>
         */<br/>
        public static Instances getDataSet(String fileName) throws IOException {<br/>
            /**<br/>
             * we can set the file i.e., loader.setFile("finename") to load the data<br/>
             */<br/>
            int classIdx = 1;<br/>
            /** the arffloader to load the arff file */<br/>
            ArffLoader loader = new ArffLoader();<br/>
            /** load the traing data */<br/>
            loader.setSource(DecisionTreeDemo.class.getResourceAsStream("/" + fileName));<br/>
            /**<br/>
             * we can also set the file like loader3.setFile(new<br/>
             * File("test-confused.arff"));<br/>
             */<br/>
            //loader.setFile(new File(fileName));<br/>
            Instances dataSet = loader.getDataSet();<br/>
            /** set the index based on the data given in the arff files */<br/>
            dataSet.setClassIndex(classIdx);<br/>
            return dataSet;<br/>
        }<br/>
    
        /**<br/>
         * This method is used to process the input and return the statistics.<br/>
         * <br/>
         * @throws Exception<br/>
         */<br/>
        public static void process() throws Exception {<br/>
    
            Instances trainingDataSet = getDataSet(TRAINING_DATA_SET_FILENAME);<br/>
            Instances testingDataSet = getDataSet(TESTING_DATA_SET_FILENAME);<br/>
            
            System.out.println("************************** J48 *************************");<br/>
            /** Classifier here is Linear Regression */<br/>
            Classifier classifier = new J48();<br/>
            
            //J48,Id3<br/>
            /** */<br/>
            classifier.buildClassifier(trainingDataSet);<br/>
            /**<br/>
             * train the alogorithm with the training data and evaluate the<br/>
             * algorithm with testing data<br/>
             */<br/>
            Evaluation eval = new Evaluation(trainingDataSet);<br/>
            eval.evaluateModel(classifier, testingDataSet);<br/>
            /** Print the algorithm summary */<br/>
            System.out.println("** Decision Tress Evaluation with Datasets **");<br/>
            System.out.println(eval.toSummaryString());<br/>
            System.out.print(" the expression for the input data as per alogorithm is ");<br/>
            System.out.println(classifier);<br/>
            System.out.println(eval.toMatrixString());<br/>
            System.out.println(eval.toClassDetailsString());<br/>
            
            System.out.println("************************** ID3 *************************");<br/>
            /** Classifier here is Linear Regression */<br/>
            Classifier id3Classifier = new Id3();<br/>
            
            //J48,Id3<br/>
            /** */<br/>
            id3Classifier.buildClassifier(trainingDataSet);<br/>
            /**<br/>
             * train the alogorithm with the training data and evaluate the<br/>
             * algorithm with testing data<br/>
             */<br/>
            Evaluation evalId3 = new Evaluation(trainingDataSet);<br/>
            evalId3.evaluateModel(id3Classifier, testingDataSet);<br/>
            /** Print the algorithm summary */<br/>
            System.out.println("** Decision Tress Evaluation with Datasets **");<br/>
            System.out.println(evalId3.toSummaryString());<br/>
            System.out.print(" the expression for the input data as per alogorithm is ");<br/>
            System.out.println(id3Classifier);<br/>
            System.out.println(evalId3.toMatrixString());<br/>
            System.out.println(evalId3.toClassDetailsString());<br/>
            
        }<br/>
        
    }<br/>
    `
    function DecisionTreeJava(){
        return(
      <div>
          <h5>Decision Tree in Java</h5>
        { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default DecisionTreeJava;
  



    
    

