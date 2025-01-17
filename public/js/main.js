function createCalendar(elem, year, month) {
  
    //months in js are 0...11
    let mon = month - 1;
  
    tests
    //get days, month for year
    let d = new Date(year, mon)
  
  
    //set up table header (weekdays)
    let table = "<table><tr><th>Sunday</th><th>Monday</th><th>Tuesday</th><th>Wednesday</th><th>Thursday</th><th>Friday</th><th>Saturday</th></tr><tr>";
  
    
  
    //spaces for the first row 
    for(let i = 0; i < getDay(d); i++) {
      table += '<td></td>';
    }
  
    //<td> with actual dates
    while(d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';
    
  
    if(getDay(d) % 7 == 6){
      //sunday, last day of week - new line
      table += '</tr><tr>';
    }
  
    d.setDate(d.getDate() + 1);
    }
  
    if(getDay(d) != 0){
      for(let i = getDay(d); i < 7; i++){
        table += '<td></td>';
      }
    }
  
    //close the table
    table += '</tr></table>'
  
  
  
    elem.innerHTML = table

    if(month === 10){
        document.querySelector('h2').innerText = 'October'
    }
  }
  
  function getDay(date){
    //get day number from 0 (monday) to 6(sunday)
    let day = date.getDay();
    if (day == 0) day = 7;
  
  
  
    //make Sunday(0) the last day
    return day;
  }

  document.getElementById('calendar').addEventListener('click', (event) => event.target.style.backgroundColor = bgChange());

  function bgChange() {
    const red = `red`;
    return red;
  }
  createCalendar(calendar, 2022, 10)


  