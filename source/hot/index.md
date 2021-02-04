---
title: hot
date: 2021-02-04 20:26:17
---
<div id="hot"></div>
<script src="https://cdn1.lncld.net/static/js/av-core-mini-0.6.4.js"></script>
<script>AV.initialize("IIxoA3ee1ciYV5xd5SgDvW6L-gzGzoHsz", "qAn9F29OLCHlKc9xCSCxInWT");</script>
<script type="text/javascript">
  var time=0
  var title=""
  var url=""
  var query = new AV.Query('Counter');
  query.notEqualTo('id',0);
  query.descending('time');
  query.limit(1000);
  query.find().then(function (todo) {
    for (var i=0;i<1000;i++){
      var result=todo[i].attributes;
      time=result.time;
      title=result.title;
      url=result.url;
      var content="<p>"+"<font color='#1C1C1C'>"+"¡¾ÎÄÕÂÈÈ¶È:"+time+"¡æ¡¿"+"</font>"+"<a href='"+"https://ycchen00.github.io/"+url+"'>"+title+"</a>"+"</p>";
      document.getElementById("hot").innerHTML+=content
    }
  }, function (error) {
    console.log("error");
  });
</script>
