// For the faq
function toggleAnswer(questionNumber) {
    var answerId = "answer" + questionNumber;
    var answerElement = document.getElementById(answerId);
  
    if (answerElement.style.display === 'block') {
      answerElement.style.display = 'none';
    } else {
      answerElement.style.display = 'block';
    }
  }



//   Current time and date display
  function updateDateTime() {
    var currentDate = new Date();
    var dateElement = document.getElementById('currentDate');
    var timeElement = document.getElementById('currentTime');

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var formattedDate = currentDate.toLocaleDateString('en-US', options);
    var formattedTime = currentDate.toLocaleTimeString();

    dateElement.innerHTML = 'Date: ' + formattedDate;
    timeElement.innerHTML = 'Time: ' + formattedTime;
  }

  // Call the function 
  updateDateTime();

    // Function to open the popup
    function openPopup() {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
    }

    // Function to close the popup
    function closePopup() {
    document.getElementById('popup').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
    }