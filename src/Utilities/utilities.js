import { theme_green } from './Colors.js'
import { theme_blue } from './Colors.js'
import { theme_yellow } from './Colors.js'

export const handleMasteryColorLevel = (mastery_level) =>{
  switch(mastery_level){
    case "proficient":
      return "#008f00";
    case "intermediate":
      return "#4B77BE";
    case "basic":
      return "#F4D03F"
  }
}

export const randomThemeColor = () =>{
  var items = ["#008f00", "#4B77BE", "#F4D03F"]
  var item = items[Math.floor(Math.random()*items.length)];
  return item
}

export function jumpTo(id_tag){
  var elmnt = document.getElementById(id_tag);
  elmnt.scrollIntoView({behavior:"smooth",block:"center"});
}

export function getIndent(mul){
  const indentBase = 2;
  return (2 * mul).toString() + "vw"
}

export function IntroEmphasisDEVColorDecider(obj,default_color){
  if(obj == "react-native"){
    return "#61dbfb"
  }else if(obj == "python-front"){
    return "#306998"
  }else if(obj == "python-back"){
    return "#ffd43b"
  }else if(obj == "aws"){
    return "#ff9900"
  }else{
    return default_color
  }
}
//import { getIndent } from '../Utilities/utilities.js'
