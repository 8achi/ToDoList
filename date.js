
exports.getDate = getDate;

function getDate(){
const options = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
};
var today = new Date();
return today.toLocaleDateString("en-US", options);;
}
exports.getNumericDate = getNumericDate;
function getNumericDate(){
  const options = {

    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  };
  var today = new Date();
  return    today.toLocaleDateString("en-US", options);
;

}
