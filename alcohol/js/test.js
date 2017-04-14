var openFile = function(event) {
        var input = event.target;

        var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          var node = document.getElementById('output');
          node.innerText += text;
          console.log(reader.result.substring(0, 200));// this is showing first 200 characters in the console
        };
        reader.readAsText(input.files[0]);
      };
