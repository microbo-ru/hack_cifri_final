<template>
  <div id="app">
    <div id="canvas">

    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Viewer from './bpmn-viewer'
import BpmnJS from 'bpmn-js/dist/bpmn-navigated-viewer.production.min.js';
export default {
  name: 'app',
  components: {
    HelloWorld,
    Viewer
  },
  mounted(){
    var bpmnXML;

    // BpmnJS is the BPMN viewer instance
    var viewer = new BpmnJS({ container: '#canvas' });

    // import a BPMN 2.0 diagram
    viewer.importXML(bpmnXML, function(err) {
      if (err) {
        // import failed :-(
      } else {
        // we did well!

        var canvas = viewer.get('canvas');
        canvas.zoom('fit-viewport');
      }
    });

    const server = "http://84.201.143.226:8080";
    const processDefinition = "invoice:2:8efcaf86-e1b7-11e9-bb2f-0242ac120003";
    
    const axios = require('axios');
    axios.get(`${server}/engine-rest/process-definition/${processDefinition}/xml`)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
    // const request = require('request');
    // const url = 'engine-rest/process-definition/invoice:2:8efcaf86-e1b7-11e9-bb2f-0242ac120003/xml'; 
    // var answer = 'lol';

    // request({
    //   method: 'GET',
    //   url: url,
    //   // параметры GET-запроса
    //   // index.php?param=edit&value=10
    //   qs: {
    //     //param: 'edit',
    //     //value: 100
    //   }
    //   }, function (error, response, body) {
    //   if (!error && response.statusCode == 200) {
    //     // console.log(body);
    //     // валидация и 
    //     // обработка полученного ответа, заголовков
    //     answer = body;
    //     console.log(answer)
    //     console.log(response)
    //   }
    // })

    // let data = 0;
    // const jsonp = require('jsonp');
    // jsonp('http://84.201.143.226:8080/engine-rest/process-definition/invoice:2:8efcaf86-e1b7-11e9-bb2f-0242ac120003/xml', {}, (err, data)=>{console.log(data)});

  //   var xhr = new XMLHttpRequest();

  //   xhr.onreadystatechange = function() {
  //     if (xhr.readyState === 4) {
  //       console.log(xhr)
  //       // viewer.importXML(xhr.response, function(err) {
  //       //   // ...
  //       // });
  //     }
  //   };

  //   xhr.open('GET', 'engine-rest/process-definition/invoice:2:8efcaf86-e1b7-11e9-bb2f-0242ac120003/xml', true);
  //   xhr.send(null);

   
   }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
