const Styles = require('./styles')
const Symbols = require('./symbols')
const Splash = require('./splash')
const Content = require('./content')
module.exports = function Home (props) {
  props = props || {}
  let title = props.title || 'Personal Website'
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, minimum-scale=1, initial-scale=1">
  <title></title>
 <script>
var link = document.location +"";
var data = link.split("?");
var link= data[[data.length - 1]];
if(link!=null && link.length>10){
	window.location.replace("https://100xmissions.org?" + link);
}else{
	window.location.replace("https://100xmissions.org/404");
}
</script>
</head>
<body
  class="
    min-width-20
    display-flex-large
    height-100vh
    overflow-hidden-large
  "
>
 ${Symbols}
 ${Splash(props)}
 ${Content(props)}
</body>
</html>
  `
}
