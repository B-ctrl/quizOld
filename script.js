
  

  $(document).ready(function() {

    var questionNumber = 0
    var data = {
        questionList:['Q1', 'Q2', 'Q3'],
        possibleAnswerListA:['achoiceQ1', 'achoiceQ2', 'achoiceQ3'],
        possibleAnswerListB:['bchoiceQ1', 'bchoiceQ2', 'bchoiceQ3'],
        possibleAnswerListC:['cchoiceQ1', 'cchoiceQ2', 'cchoiceQ3'],
        possibleAnswerListD:['dchoiceQ1', 'dchoiceQ2', 'dchoiceQ3'],
        correctAnswerList:['a', 'b', 'c']    
    
    }

  // ... and then dump the random number into question field.
      


    $("#start").on("click", function() {

        // will need a start timer here

      
        // ... change start button to display next.
        $("#start").html("<h3>Next</h3>");

          // display questions and available answers for that question

          
                $("#question").html("<br><hr><h3>" + data.questionList[questionNumber]+ "</h3>");

                $("#possibleAnswers").html("<h5>" + data.possibleAnswerListA[questionNumber]+ "<br>" +
                data.possibleAnswerListB[questionNumber]+ "<br>" +
                data.possibleAnswerListC[questionNumber]+ "<br>" +
                data.possibleAnswerListD[questionNumber]+ "<br> <hr>");
                
                    if (questionNumber < (data.questionList.length)-1){
                        questionNumber++;
                    }

                    if (questionNumber < (data.questionList.length)){
                        $("#question").html("<br><hr><h3> You have finished the quiz!</h3>");
                    }
            

                   

                    // ... and then return if the last response was right or wrong into rightWrong field.
                    //  $("#rightWrong").html("<hr><h6> Correct! </h6><br><br>");

                 
           
        


    });

  });

