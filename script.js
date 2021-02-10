function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const allFoods = {
    foodInfo: ['pizza', 'pasta', 'steak', 'burger'],
    foodOutcome: ['cold', 'raw', 'perfectly cooked', 'too hot', 'weird'],
    advice: ['Do not eat it', 'as to speak with the manager', 'do not pay', 'leave a good tip']
  }
  
  // Store the 'wisdom' in an array
  let personalFood = []
  
  // Iterate over the object
  for(let prop in allFoods) {
    let optionIdx = generateRandomNumber(allFoods[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'foodInfo':
        personalFood.push(`Your food choice is: "${allFoods[prop][optionIdx]}".`)
        break
      case 'foodOutcome':
        personalFood.push(`Your food is: "${allFoods[prop][optionIdx]}".`)
        break
      case 'advice':
        personalFood.push(`You should: "${allFoods[prop][optionIdx]}".`)
        break
      default:
        personalFood.push('There is not enough info.')
    }
  }
  
  function formatFood(food) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalFood.join('\n')
    console.log(formatted)
  }
  
  formatFood(personalFood); 