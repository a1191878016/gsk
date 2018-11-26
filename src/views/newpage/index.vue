<template>
  <div id="pageData">

  </div>

</template>

<script>
  import $ from 'jquery'
    export default {
      name: "news",
      mounted(){
        let str=sessionStorage.getItem('tableData')
        console.log(str)
        document.getElementById('pageData').innerHTML=str
        // $("#id img").each(function () {
        //   var img = $(this);
        //   var img_src=img.attr("src")+"?"+Math.random();
        //   var img_Height=parseInt(img[0].height) + 20;
        //   var img_Width=parseInt(img[0].wi()) + 20;
        //   var frameid='frameimg'+ Math.random();
        //   window.img='<img id="img" src=\''+img_src+'\' />';
        //   window.img +='<style> body img{box-sizing: border-box;box-shadow:rgb(102,102,102) 0.2em 0.2em 0.5em;border-color:white;vertical-align: middle; max-width: 100%;visibility: visible  !important; }</style>';
        //   window.img +='<script> window.onload=function() {' ;
        //   window.img +='parent.document.getElementById(\''+frameid+'\').height=document.getElementById(\'img\').height +\'px\';' ;
        //   window.img +='parent.document.getElementById(\''+frameid+'\').width=document.getElementById(\'img\').width+\'px\';' ;
        //   window.img +='}<' +'/script>';
        //   img.parent().append('<iframe class="img_frame" id="'+frameid + '" src="javascript:parent.img" frameBorder="0" scrolling="no"> </iframe>> ');
        //   img.remove();
        // })
      },
    }

</script>

<style scoped>

</style>
