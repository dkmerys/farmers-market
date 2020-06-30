import React from 'react';
import Month from './Month'

const availableProduce = [  
  {  
     month: "January",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  },
  {  
     month: "February",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "March",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "April",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Garlic",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Potatoes"
     ]
  },
  {  
     month: "May",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Asparagus",
        "Cauliflower",
        "Garlic",
        "Lettuce",
        "Potatoes",
        "Radishes"
     ]
  },
  {  
     month: "June",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Blackberries",
        "Cherries",
        "Raspberries",
        "Strawberries",
        "Asparagus",
        "Broccoli",
        "Cauliflower",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash"
     ]
  },
  {  
     month: "July",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Rhubarb",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Raspberries",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "August",
     selection: [  
        "Apples",
        "Apricots",
        "Blackberries",
        "Blueberries",
        "Cherries",
        "Melons",
        "Nectarines",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Rhubarb",
        "Strawberries",
        "Tomatoes",
        "Beets",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "September",
     selection: [  
        "Apples",
        "Blueberries",
        "Grapes",
        "Melons",
        "Peaches",
        "Pears",
        "Plums",
        "Raspberries",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "October",
     selection: [  
        "Apples",
        "Grapes",
        "Hazelnuts",
        "Melons",
        "Peaches",
        "Pears",
        "Tomatoes",
        "Broccoli",
        "Brussel Sprouts",
        "Cabbage",
        "Carrots",
        "Cauliflower",
        "Corn",
        "Cucumber",
        "Eggplant",
        "Garlic",
        "Green Beans",
        "Kohlrabi",
        "Lettuce",
        "Mushrooms",
        "Onions",
        "Peas",
        "Peppers",
        "Potatoes",
        "Pumpkins",
        "Radishes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "November",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Squash",
        "Turnips"
     ]
  },
  {  
     month: "December",
     selection: [  
        "Apples",
        "Hazelnuts",
        "Pears",
        "Broccoli",
        "Carrots",
        "Cauliflower",
        "Garlic",
        "Mushrooms",
        "Onions",
        "Potatoes",
        "Turnips"
     ]
  }
];

function January(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[0].month}
        selection={availableProduce[0].selection}/>
    </React.Fragment>
  )
}
function February(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[1].month}
        selection={availableProduce[1].selection}/>
    </React.Fragment>
  )
}
function March(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[2].month}
        selection={availableProduce[2].selection}/>
    </React.Fragment>
  )
}
function April(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[3].month}
        selection={availableProduce[3].selection}/>
    </React.Fragment>
  )
}
function May(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[4].month}
        selection={availableProduce[4].selection}/>
    </React.Fragment>
  )
}
function June(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[5].month}
        selection={availableProduce[5].selection}/>
    </React.Fragment>
  )
}
function July(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[6].month}
        selection={availableProduce[6].selection}/>
    </React.Fragment>
  )
}
function August(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[7].month}
        selection={availableProduce[7].selection}/>
    </React.Fragment>
  )
}
function September(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[8].month}
        selection={availableProduce[8].selection}/>
    </React.Fragment>
  )
}
function October(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[9].month}
        selection={availableProduce[9].selection}/>
    </React.Fragment>
  )
}
function November(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[10].month}
        selection={availableProduce[10].selection}/>
    </React.Fragment>
  )
}
function December(){
  return(
    <React.Fragment>  
        <Month month={availableProduce[11].month}
        selection={availableProduce[11].selection}/>
    </React.Fragment>
  )
}

export {January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}