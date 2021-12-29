import React from 'react';
import 'bootstrap'
import DOMPurify from 'dompurify';




    const rawHTML = `
        <h2>Implementation of Naive Bayes </h2><br/>
        To find whether an email is ham or spam, we have training samples listed below<br/>
        <img src='https://www.codingame.com/servlet/fileservlet?id=14578829794670'/><br/>
        now we will calculate which category the sentence "you won lottery" belongs to? Naive Bayes is a probabilistic classifier. To determine whether an email is ham or spam, we want to calculate the probability that the sentence "you won lottery" is ham and the probability that its spam.<br/>
        The probabilities are calculated using the word frequencies. It is calculated using some basic properties of probabilities and the Bayes theorem. The conditional probabilities like the one discussed here will suits for the Bayes theorem.<br/>

        P (A | B) = (P (B | A) * P(A))/ P(B)<br/>

        Let us do one sample example to understand the probability calculation.<br/>

        P (ham| you won lottery) = (P (you won lottery | ham) * P(ham))/ P (you won lottery)<br/>

        In our classifier, we are trying to find out the category which has the bigger probability.so we can discard the divisor and perform how many times the sentence "you won lottery" appears in ham category divide it by the total and obtain P (you won lottery | ham)<br/>

        we here assume that every word in a sentence is independent of the other ones.so, we are not considering entire sentences but rather at individual’s words. Example: "Good things are “and "things are Good" are same.<br/>

        P (you won lottery | ham) = P (you | ham) * P (won | ham) * P (lottery | ham)<br/>

        P (you won lottery | spam) = P (you | spam) * P (won | spam) * P (lottery | spam)<br/>

        with this above formula, we will find which one this sentence belongs to.<br/>

        There are cases, some of the words will not be in training sets and the value is 0. The multiplication of 0 with others will be 0. To avoid this, we are going to use Laplace smoothing. i.e., we will add 1 to every count so it will not be zero<br/>

        The words are listed in the above table. The total number of words: 15 The total number of ham words: 7 The total number of spam words: 10<br/>

        You won Lottery?<br/>

        P (you | ham) = (1 + 1)/ (7 + 15)<br/>

        P (you | spam) = (1 + 1)/ (10 + 15)<br/>

        Like the above we will calculate for every word and multiply using the above probability. The results for the one who have higher probability won.

        "You won Lottery" belongs to spam category<br/>
    `
    function NaiveByesJavaQuestion(){
        return(
            
      <div>
         
                  { <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(rawHTML) }} /> }
      </div>
      )
    }
    export default NaiveByesJavaQuestion;
       
  
