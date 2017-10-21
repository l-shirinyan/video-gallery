export default function albumDataService (){
	var _data = [];

  var addData = function(data) {
      _data = data;
  };

  var getData = function(){
      return _data;
  };

  return {
    addData: addData,
    getData: getData
  };
}