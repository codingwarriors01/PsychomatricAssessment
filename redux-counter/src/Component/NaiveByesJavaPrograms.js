import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
        package com.gg.ml;<br/>

        import java.io.File;<br/>
        
        import weka.classifiers.Classifier;<br/>
        import weka.classifiers.Evaluation;<br/>
        import weka.classifiers.bayes.NaiveBayesMultinomial;<br/>
        import weka.core.Instances;<br/>
        import weka.core.converters.ArffLoader;<br/>
        import weka.filters.Filter;<br/>
        import weka.filters.unsupervised.attribute.StringToWordVector;<br/>

        /**<br/>
         * @author Gowtham Girithar Srirangasamy<br/>
         *<br/>
         */<br/>
        public class NaiveBayesDemo {<br/>
            /** file names are defined */<br/>
            public static final String TRAINING_DATA_SET_FILENAME = "naive-train.arff";<br/>
            public static final String TESTING_DATA_SET_FILENAME = "naive-test.arff";<br/>
            public static final String PREDICTION_DATA_SET_FILENAME = "naive-confused.arff";<br/>

            /**<br/>
             * This method is to load the data set.<br/>
             * <br/>
             * @param fileName<br/>
             * @return<br/>
             * @throws Exception<br/>
             */<br/>
            public static Instances getDataSet(String fileName) throws Exception {<br/>
                /**<br/>
                 * we can set the file i.e., loader.setFile("finename") to load the data<br/>
                 */<br/>
                StringToWordVector filter = new StringToWordVector();<br/>
                int classIdx = 1;<br/>
                /** the arffloader to load the arff file */<br/>
                ArffLoader loader = new ArffLoader();<br/>
                /** load the traing data */<br/>
                loader.setSource(NaiveBayesDemo.class.getResourceAsStream("/"+fileName));<br/>
                /**<br/>
                 * we can also set the file like loader3.setFile(new<br/>
                 * File("test-confused.arff"));<br/>
                 */<br/>
                //loader.setFile(new File(fileName));<br/>
                Instances dataSet = loader.getDataSet();<br/>
                /** set the index based on the data given in the arff files */<br/>
                dataSet.setClassIndex(classIdx);<br/>
                filter.setInputFormat(dataSet);<br/>
                dataSet = Filter.useFilter(dataSet, filter);<br/>
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
                Instances predictingDataSet = getDataSet(PREDICTION_DATA_SET_FILENAME);<br/>
                /** Classifier here is Linear Regression */<br/>
                Classifier classifier = new NaiveBayesMultinomial();<br/>
                /** */<br/>
                classifier.buildClassifier(trainingDataSet);<br/>
                /**<br/>
                 * train the alogorithm with the training data and evaluate the<br/>
                 * algorithm with testing data<br/>
                 */<br/>
                Evaluation eval = new Evaluation(trainingDataSet);<br/>
                eval.evaluateModel(classifier, testingDataSet);<br/>
                /** Print the algorithm summary */<br/>
                System.out.println("** Naive Bayes Evaluation with Datasets **");<br/>
                System.out.println(eval.toSummaryString());<br/>
                System.out.print(" the expression for the input data as per alogorithm is ");<br/>
                System.out.println(classifier);<br/>
                for (int i = 0; i < predictingDataSet.numInstances(); i++) {<br/>
                    System.out.println(predictingDataSet.instance(i));<br/>
                    double index = classifier.classifyInstance(predictingDataSet.instance(i));<br/>
                    String className = trainingDataSet.attribute(0).value((int) index);<br/>
                    System.out.println(className);<br/>
                }<br/>
                <br/>
            }<br/>
        }<br/>
       
    `
    function NaiveByesJavaPrograms(){
        return(
            
      <div>
         
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default NaiveByesJavaPrograms;
       
  
