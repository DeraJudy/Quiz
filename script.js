// Questions array
const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Lisbon"],
      correctAnswer: 2
    },
    {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: 2
    }
  ];
  
  // Start Quiz function
  function startQuiz() {
    let quizContainer = document.getElementById('quiz');
    let resultContainer = document.getElementById('result');
    quizContainer.innerHTML = '';
    resultContainer.innerHTML = '';
  
    let score = 0;
  
    for (let i = 0; i < questions.length; i++) {
      // Display question
      let questionElement = document.createElement('div');
      questionElement.classList.add('question');
      questionElement.innerHTML = `${i + 1}. ${questions[i].question}`;
      quizContainer.appendChild(questionElement);
  
      // Display options
      for (let j = 0; j < questions[i].options.length; j++) {
        let optionElement = document.createElement('button');
        optionElement.innerHTML = questions[i].options[j];
        optionElement.addEventListener('click', function() {
          if (j === questions[i].correctAnswer) {
            score++;
          }
          // Disable buttons after selection
          let buttons = questionElement.nextElementSibling.children;
          for (let k = 0; k < buttons.length; k++) {
            buttons[k].disabled = true;
          }
          // Highlight the correct answer
          buttons[questions[i].correctAnswer].style.backgroundColor = 'green';
          // Highlight the incorrect answer if chosen
          if (j !== questions[i].correctAnswer) {
            buttons[j].style.backgroundColor = 'red';
          }
        });
        quizContainer.appendChild(optionElement);
      }
  
      // Add a separator
      let separator = document.createElement('hr');
      quizContainer.appendChild(separator);
    }
  
    // Display final score
    let scoreButton = document.createElement('button');
    scoreButton.innerHTML = 'Show Score';
    scoreButton.addEventListener('click', function() {
      resultContainer.innerHTML = `Your score is: ${score} out of ${questions.length}`;
    });
    quizContainer.appendChild(scoreButton);
  }
  