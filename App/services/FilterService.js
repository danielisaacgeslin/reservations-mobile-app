export function date(date){
  while(date.indexOf('-') !== -1){
    date = date.replace('-','/')
  }
  return date;
}

export function time(time){
  time = String(time);
  switch (time) {
    case '1':
      return 'Morning';
    case '2':
      return 'Evening';
    case '3':
      return 'Afternoon';
    default:
      return '';
  }
}

export function department(department){
  switch(department){
    case '1':
      return 'A';
    case '2':
      return 'B';
    case '3':
      return 'C';
    case '4':
      return 'D';
    case '5':
      return 'E';
    case '6':
      return 'F';
    case '7':
      return 'G';
    default:
      return '';
  }
}
