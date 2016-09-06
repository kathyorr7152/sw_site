var period = 1000; // 1000 = 1 second
var content = '';
setInterval(function(){
            content = $('#target').text();
},period);
/*
 * feed.js v1.0.0-sha.6a4042c7eb15a20c6910fb742b8937d56c6cf8be
 * (c) 2016 Playbuzz (http://www.playbuzz.com)
 */
/*var PlayBuzz=PlayBuzz||{

};
PlayBuzz.utils||(PlayBuzz.utils=function(a,b){
  function c(c){
    var d,e={top:0,left:0},f=c,g=f&&f.ownerDocument;
    return g?(d=g.documentElement,
    f.getBoundingClientRect!=b&&(e=f.getBoundingClientRect()),
    {top:e.top+(a.pageYOffset||d.scrollTop)-(d.clientTop||0),
    left:e.left+(a.pageXOffset||d.scrollLeft)-(d.clientLeft||0)}):{top:null,left:null}}
    function d(a){
      var c={top:0,left:0},
      d=a,
      e=d&&d.ownerDocument;
      return e?(d.getBoundingClientRect!=b&&(c=d.getBoundingClientRect()),c.width||d.offsetWidth):null}return{offset:c,width:d}}(window)),
        PlayBuzz=PlayBuzz||{},
        PlayBuzz.loadingTrack=PlayBuzz.loadingTrack||{
          shouldTrackLoading:Math.random()
          <.1,pageLoadTrackerId:(1e17*Math.random()).toString(),
          hostConnectStarted:null,
          scriptStarted:Date.now(),
          browserSupportsTiming:null,
          randUserId:(1e17*Math.random()).toString(),
          iframeInjectionTime:[]},
          window.performance&&window.performance.timing&&window.performance.timing.connectStart?
          (PlayBuzz.loadingTrack.hostConnectStarted=window.performance.timing.connectStart,PlayBuzz.loadingTrack.browserSupportsTiming=!0):
          (PlayBuzz.loadingTrack.hostConnectStarted=Date.now(),PlayBuzz.loadingTrack.browserSupportsTiming=!1),
          function() {
            function tryCatch(a,b,c){
              try {
                return a.apply(b,c)}
                catch(d) {
                  return errorObject.value=d,errorObject}}
                  var errorObject,isDebugMode,styleText,styleElement;
                  PlayBuzz.core||(errorObject={value:null},
                    isDebugMode=function(){
                      var a=document.location.search;return a.indexOf("pb_debug=true")>=0}(),
                      styleText=".pb_p_logo{position:absolute;display:block;width:30px;margin:auto;top:0;left:0;}",
                      styleElement=document.createElement("style"),
                      styleElement.textContent=styleText,document.querySelector("head").appendChild(styleElement),
                  PlayBuzz.core=function(){
                      function getSpinner(){
                        var a=new Image;
                        return a.src="data:image/gif;base64,R0lGODlhIAAgALMAAP///7Ozs/v7+9bW1uHh4fLy8rq6uoGBgTQ0NAEBARsbG8TExJeXl/39/VRUVAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQFBQAAACwAAAAAIAAgAAAE5xDISSlLrOrNp0pKNRCdFhxVolJLEJQUoSgOpSYT4RowNSsvyW1icA16k8MMMRkCBjskBTFDAZyuAEkqCfxIQ2hgQRFvAQEEIjNxVDW6XNE4YagRjuBCwe60smQUDnd4Rz1ZAQZnFAGDd0hihh12CEE9kjAEVlycXIg7BAsMB6SlnJ87paqbSKiKoqusnbMdmDC2tXQlkUhziYtyWTxIfy6BE8WJt5YEvpJivxNaGmLHT0VnOgGYf0dZXS7APdpB309RnHOG5gDqXGLDaC457D1zZ/V/nmOM82XiHQjYKhKP1oZmADdEAAAh+QQFBQAAACwAAAAAGAAXAAAEchDISasKNeuJFKoHs4mUYlJIkmjIV54Soypsa0wmLSnqoTEtBw52mG0AjhYpBxioEqRNy8V0qFzNw+GGwlJki4lBqx1IBgjMkRIghwjrzcDti2/Gh7D9qN774wQGAYOEfwCChIV/gYmDho+QkZKTR3p7EQAh+QQFBQAAACwBAAAAHQAOAAAEchDISWdANesNHHJZwE2DUSEo5SjKKB2HOKGYFLD1CB/DnEoIlkti2PlyuKGEATMBaAACSyGbEDYD4zN1YIEmh0SCQQgYehNmTNNaKsQJXmBuuEYPi9ECAU/UFnNzeUp9VBQEBoFOLmFxWHNoQw6RWEocEQAh+QQFBQAAACwHAAAAGQARAAAEaRDICdZZNOvNDsvfBhBDdpwZgohBgE3nQaki0AYEjEqOGmqDlkEnAzBUjhrA0CoBYhLVSkm4SaAAWkahCFAWTU0A4RxzFWJnzXFWJJWb9pTihRu5dvghl+/7NQmBggo/fYKHCX8AiAmEEQAh+QQFBQAAACwOAAAAEgAYAAAEZXCwAaq9ODAMDOUAI17McYDhWA3mCYpb1RooXBktmsbt944BU6zCQCBQiwPB4jAihiCK86irTB20qvWp7Xq/FYV4TNWNz4oqWoEIgL0HX/eQSLi69boCikTkE2VVDAp5d1p0CW4RACH5BAUFAAAALA4AAAASAB4AAASAkBgCqr3YBIMXvkEIMsxXhcFFpiZqBaTXisBClibgAnd+ijYGq2I4HAamwXBgNHJ8BEbzgPNNjz7LwpnFDLvgLGJMdnw/5DRCrHaE3xbKm6FQwOt1xDnpwCvcJgcJMgEIeCYOCQlrF4YmBIoJVV2CCXZvCooHbwGRcAiKcmFUJhEAIfkEBQUAAAAsDwABABEAHwAABHsQyAkGoRivELInnOFlBjeM1BCiFBdcbMUtKQdTN0CUJru5NJQrYMh5VIFTTKJcOj2HqJQRhEqvqGuU+uw6AwgEwxkOO55lxIihoDjKY8pBoThPxmpAYi+hKzoeewkTdHkZghMIdCOIhIuHfBMOjxiNLR4KCW1ODAlxSxEAIfkEBQUAAAAsCAAOABgAEgAABGwQyEkrCDgbYvvMoOF5ILaNaIoGKroch9hacD3MFMHUBzMHiBtgwJMBFolDB4GoGGBCACKRcAAUWAmzOWJQExysQsJgWj0KqvKalTiYPhp1LBFTtp10Is6mT5gdVFx1bRN8FTsVCAqDOB9+KhEAIfkEBQUAAAAsAgASAB0ADgAABHgQyEmrBePS4bQdQZBdR5IcHmWEgUFQgWKaKbWwwSIhc4LonsXhBSCsQoOSScGQDJiWwOHQnAxWBIYJNXEoFCiEWDI9jCzESey7GwMM5doEwW4jJoypQQ743u1WcTV0CgFzbhJ5XClfHYd/EwZnHoYVDgiOfHKQNREAIfkEBQUAAAAsAAAPABkAEQAABGeQqUQruDjrW3vaYCZ5X2ie6EkcKaooTAsi7ytnTq046BBsNcTvItz4AotMwKZBIC6H6CVAJaCcT0CUBTgaTg5nTCu9GKiDEMPJg5YBBOpwlnVzLwtqyKnZagZWahoMB2M3GgsHSRsRACH5BAUFAAAALAEACAARABgAAARcMKR0gL34npkUyyCAcAmyhBijkGi2UW02VHFt33iu7yiDIDaD4/erEYGDlu/nuBAOJ9Dvc2EcDgFAYIuaXS3bbOh6MIC5IAP5Eh5fk2exC4tpgwZyiyFgvhEMBBEAIfkEBQUAAAAsAAACAA4AHQAABHMQyAnYoViSlFDGXBJ808Ep5KRwV8qEg+pRCOeoioKMwJK0Ekcu54h9AoghKgXIMZgAApQZcCCu2Ax2O6NUud2pmJcyHA4L0uDM/ljYDCnGfGakJQE5YH0wUBYBAUYfBIFkHwaBgxkDgX5lgXpHAXcpBIsRADs=",
                        a.style.cssText="position:absolute; left:50%; top:50%; marginLeft:-16px; marginTop:-16px;width:auto !important;height:auto !important;", 
                        a.className="plbz_frame_spinner",
                        a}
                        function getDivs(a,b){
                          var c,d,e,f,g;
                          try{
                            return a.getElementsByClassName(b)}
                            catch(h){
                              for(c=[],d=new RegExp("(^| )"+b+"( |$)"),
                                e=a.getElementsByTagName("div"),
                                f=0,
                                g=e.length;
                                f<g;f++)d.test(e[f].className)&&c.push(e[f]);
                                return c}
                        }
                        function addEventListenerToElement(a,b,c){
                          a.addEventListener?a.addEventListener(b,c):
                          a.attachEvent("on"+b,c)
                        }
                        function dispatchEvent(a,b){
                          if(callbacks[a])
                            for(var c=0;c<callbacks[a].length;c++)
                              try{
                                "function"==typeof callbacks[a][c]&&callbacks[a][c](b)}catch(d){pb.debugLog("speed-exception",d)}
                        }
                        function CDBridge(a,b){
                          var c,d,e,f;
                          PlayBuzz.loadingTrack.shouldTrackLoading&&(c="https://api.cooladata.com/v2/8c0035b9c563467eb37d67e071791c02/track",
                            d={events:[{event_name:"pageLoadTracker",user_id:PlayBuzz.loadingTrack.randUserId,event_timestamp_epoch:Date.now().toString(),
                            pageLoadStepName:a,
                            pageLoadStepTs:b,
                            pageLoadTrackerId:
                            PlayBuzz.loadingTrack.pageLoadTrackerId,
                            parentHost:document.location.hostname.toLowerCase(),
                            browserSupportsTiming:PlayBuzz.loadingTrack.browserSupportsTiming}]},
                            e=null,f=c+"?"+JSON.stringify(d),pb.ajax(f,null,null,null,"POST",e))}
                          var callbacks,messenger,pb,
                          BrowserDetect={
                            init:function(){
                              this.browser=this.searchString(this.dataBrowser)||"An unknown browser",
                              this.version=this.searchVersion(navigator.userAgent)||this.searchVersion(navigator.appVersion)||"an unknown version",
                              this.OS=this.searchString(this.dataOS)||"an unknown OS"},
                              searchString:function(a){
                                var b,c,d;
                                for(b=0;b<a.length;b++)
                                  if(c=a[b].string,d=a[b].prop,this.versionSearchString=a[b].versionSearch||a[b].identity,c){
                                    if(c.indexOf(a[b].subString)!=-1)
                                      return a[b].identity
                                    }
                                    else if(d)
                                      return a[b].identity
                              },
                              searchVersion:function(a){
                                var b=a.indexOf(this.versionSearchString);
                                if(b!=-1)return parseFloat(a.substring(b+this.versionSearchString.length+1))
                              },
                              dataBrowser:[{string:navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:navigator.vendor,subString:"iCab",identity:"iCab"},{string:navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:navigator.vendor,subString:"Camino",identity:"Camino"},{string:navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:navigator.userAgent,subString:"MSIE",identity:"Explorer",versionSearch:"MSIE"},{string:navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],
                              dataOS:[{string:navigator.platform,subString:"Win",identity:"Windows"},{string:navigator.platform,subString:"Mac",identity:"Mac"},{string:navigator.userAgent,subString:"iPhone",identity:"iPhone/iPod"},{string:navigator.platform,subString:"Linux",identity:"Linux"}]};
                              return BrowserDetect.init(),
                                callbacks={},
                              messenger=function(){
                                var a=[];
                                return{
                                  postMessage:function(a,b,c){
                                    function d(){
                                      if(window.postMessage){
                                        if(a.postMessage)
                                          return a.postMessage(b,"*"),void 0;
                                        if(a.contentWindow)
                                          return a.contentWindow.postMessage(b,"*"),void 0}
                                    }
                                    function e(){
                                      a.pbFrameListener(b)
                                    }
                                    var f=tryCatch(d);
                                    f===errorObject&&tryCatch(e)
                                  },
                                  listen:function(b){
                                    window.postMessage?addEventListenerToElement(window,"message",b):
                                    a.push(b)}
                                }}(),
                                pb={
                                  browser:BrowserDetect,
                                  isMobile:function(){
                                    return navigator.userAgent.match("/Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i")
                                    }(),
                                    debugLog:function(){
                                      isDebugMode&&console.log(arguments)
                                    },
                                    getURLParam:function(a){
                                      var b,c,d,e,f,g;
                                        if(!document.location.search.length)return null;
                                          for(b={},c=a&&a.toLowerCase?a.toLowerCase():null,d=document.location.search.substring(1).toLowerCase().split("&"),e=d.length,f=null,g=0;g<e;g++)if(f=d[g].split("="),f.length>1){
                                            if(c==f[0])
                                              return f[1];b[f[0]]=f[1]}
                                              return void 0==a?b:null
                                    },
                                    getDivsByClassName:getDivs,
                                    dispatchEvent:dispatchEvent,
                                    listen:function(a,b){
                                      callbacks[a]||(callbacks[a]=[]),callbacks[a].push(b)
                                    },
                                    ajax:function(url,identifier,callback,formatArg,method){
                                      var format,parameters,parts,now,xdr=!1,
                                    http=function(){
                                      var a=!1;
                                      if("withCredentials"in new XMLHttpRequest)
                                        try{a=new XMLHttpRequest}catch(b){pb.debugLog("speed-exception",b),a=!1}
                                      else if("undefined"!=typeof XDomainRequest)
                                        try{a=new XDomainRequest,xdr=!0,
                                        a.onload=function(){
                                          http.readyState=4,http.status=200,http.onreadystatechange()
                                        },
                                        url=url.replace(/^https?:/,""),
                                        url=location.protocol+url
                                        }
                                        catch(c){pb.debugLog("speed-exception",c),a=!1}
                                      else if("undefined"!=typeof ActiveXObject)
                                        try{
                                          a=new ActiveXObject("Msxml2.XMLHTTP")
                                        }
                                        catch(b){pb.debugLog("speed-exception",b);
                                          try{
                                            a=new ActiveXObject("Microsoft.XMLHTTP")
                                          }
                                          catch(d){a=!1}
                                        }
                                      else console.log("Playbuzz: Cors ajax is not supported");
                                        return a===!1&&console.log("Playbuzz: Couldn't send ajax request"),a}();
                                      if(http&&url){
                                        http.overrideMimeType&&http.overrideMimeType("text/xml"),
                                        format=formatArg||"text",
                                        format=format.toLowerCase(),
                                        method=method||"GET",
                                        parameters=null,
                                        "POST"==method&&(parts=url.split("?"),
                                        =parts[0],
                                        parameters=parts[1]),
                                        now="uid="+(new Date).getTime(),
                                        url+=url.indexOf("?")+1?"&":"?",
                                        url+=now;
                                        try{
                                          http.open(method,url,!0)
                                        }
                                        catch(e){return pb.debugLog("speed-exception",e),void 0}
                                        "POST"==method&&void 0!==http.setRequestHeader&&http.setRequestHeader("Content-type","application/x-www-form-urlencoded"),
                                        http.onreadystatechange=function(){
                                          if(4==http.readyState&&200==http.status){
                                            var result="";
                                            http.responseText&&(result=http.responseText),
                                            "j"==format.charAt(0)&&(result=result.replace(/[\n\r]/g,""),
                                            result=eval("("+result+")")),
                                            callback&&callback(result,identifier)
                                          }
                                        },
                                        http.send(parameters)}},
                                        loadDiv:function(a,b,c){
                                          var d;
                                            if(window.XDomainRequest)
                                              return d=new XDomainRequest,d.onerror=function(a){},
                                              d.onload=function(){c&&c(d,b,!0)},
                                              d.open("get",a),
                                              d.send(),
                                              void 0;
                                            if(window.XMLHttpRequest){
                                              d=new XMLHttpRequest,
                                              d.onreadystatechange=function(){c&&c(d,b)};
                                              try{
                                                d.open("GET",a,!0),
                                                d.send(null)
                                              }
                                              catch(e){
                                                pb.debugLog("speed-exception",e)
                                              }
                                            }
                                            else d=new ActiveXObject("Microsoft.XMLHTTP"),
                                              d&&(d.onreadystatechange=function(){c&&c(d,b)},
                                              d.open("GET",a,!0),
                                              d.send());return!1},
                                              render:function(){
                                                PlayBuzz.Feed&&PlayBuzz.Feed.renderFeed(!0),
                                                PlayBuzz.Widget&&PlayBuzz.Widget.renderWidget(),
                                                PlayBuzz.Hub&&PlayBuzz.Hub.renderHub()
                                              },
                                              sendAnalyticsEvent:function(a){
                                                PlayBuzz.core.sendMessageToParent({
                                                  name:"analyticsEvent",
                                                  event:a,
                                                  id:PlayBuzz.core.getURLParam("divId")},1)
                                              },
                                              sendMessageToParent:function(a){
                                                try{
                                                  "string"!=typeof a&&(a.id||(a.id=PlayBuzz.core.getURLParam("divId")),
                                                  a=JSON.stringify(a)),
                                                  messenger.postMessage(parent,a)
                                                }
                                                catch(b){pb.debugLog("speed-exception",b)}
                                              },
                                              sendMessageToIframe:function(a,b){
                                                try{
                                                  "string"!=typeof a&&(a=JSON.stringify(a));var c=b||document.querySelectorAll(".pb_feed_iframe")[0];
                                                  messenger.postMessage(c,a,!0)}catch(d){pb.debugLog("speed-exception",d)}},
                                              onFrameMessage:function(a){
                                                function b(){
                                                  var a,b,d,e=JSON.parse(c);
                                                  switch(e.name){case"analyticsEvent":
                                                  if(callbacks.analyticsEvent)
                                                    for(a=0;a<callbacks.analyticsEvent.length;a++)callbacks.analyticsEvent[a](e.event);
                                                      break;
                                                      case"handshake":
                                                      try{
                                                        b=PlayBuzz.Feed.getFeedContainer(e.id),d=b.querySelector("iframe"),
                                                        pb.sendMessageToIframe({event:"handshakeResponse"},d)}
                                                        catch(f){pb.debugLog("speed-exception",f)}break;
                                                        case"documentReady":"function"==typeof window.PlayBuzzCallback&&window.PlayBuzzCallback(e)
                                                      }
                                                }
                                                var c=a.data?a.data:a;
                                                tryCatch(b),
                                                dispatchEvent("onMessage",c)
                                              },
                                              spin:function(a){a&&(a.spinner||(a.spinner=getSpinner(),
                                                  a.appendChild(a.spinner),
                                                  ""==a.style.position&&(a.style.position="relative")))
                                              },
                                              stopSpinner:function(a){if(a&&a.spinner){
                                                var b=document.querySelector(".plbz_frame_spinner");
                                                b&&b.parentNode.removeChild(b),a.spinner=null
                                              }}},
                                              function(){
                                                setTimeout(function(){
                                                  try{pb.render()}
                                                  catch(a){console.error(a)}
                                                  PlayBuzz.Feed&&PlayBuzz.Feed.setDOMListener()
                                                })}(),
                                                document.addEventListener("DOMContentLoaded",
                                                  function(a){
                                                    setTimeout(function(){
                                                      try{pb.render()}
                                                      catch(a){
                                                        pb.debugLog("speed-exception",a),
                                                        addEventListenerToElement(window,"load",pb.render)}
                                                        PlayBuzz.Feed&&PlayBuzz.Feed.setDOMListener()
                                                    })
                                                  }),
                                                messenger.listen(pb.onFrameMessage),
                                                CDBridge("partnerConnectStart",PlayBuzz.loadingTrack.hostConnectStarted),
                                                CDBridge("iframeScriptReady",
                                                PlayBuzz.loadingTrack.scriptStarted),
                                                pb}())}(),
                                                window.PlayBuzz||(window.PlayBuzz={}),
                                                PlayBuzz.isIE8||(PlayBuzz.Feed=PlayBuzz.Feed||function(){
                                                  function removePreloaderFromDiv(a){
                                                    if(!(a.className.indexOf("pb_feed_rendered")>=0)){
                                                      var b=a.querySelector(".pb_feed_placeholder_container");
                                                      b.style.display="none",
                                                      a.className=a.className.replace(/pb_feed_loading/g,"pb_feed_rendered"),
                                                      a.querySelector(".pb_top_content_container").style.opacity=1
                                                    }
                                                  }
                                                  function createRegularIframe(a,b,c){
                                                    var d,e,f,g,h,i,j,k,l,m,n=settings[c],o={src:a,comments:n[PROPS.comments],divId:c};
                                                    o.articleCanonicalUrl=getCanonicalUrl(),
                                                    d=function(){
                                                      var a,b={};
                                                      for(a in n)b[a]=n[a];
                                                        return b}();
                                                      for(e in PROPS)f=PROPS[e],d[f]&&void 0!=d[f]&&(o[e]=d[f]),delete d[f];
                                                        for(e in d)o[e]=d[e];
                                                          o.hasOwnProperty("nativeId")&&(o.fromMobileApp=!0),o.social||(o.social="true"),""!=n[PROPS.appData]&&null!=n[PROPS.appData]&&void 0!=n[PROPS.appData]&&(o.appData=n[PROPS.appData]),"true"==n[PROPS.socialReferrer]?o.socialReferrer="true":o.socialReferrer="false";
                                                          try{
                                                            g=PlayBuzz.core.getURLParam("pbads_debug"),g&&(o.pbads_debug=g,console.log(o)),h=PlayBuzz.core.getURLParam("pbads_preview"),h&&(o.pbads_preview=h),i=PlayBuzz.core.getURLParam("pbads_abtest"),i&&(o.pbads_abtest=i)
                                                          }
                                                          catch(p){
                                                            PlayBuzz.core.debugLog("speed-exception",p)
                                                          }
                                                          o.pageLoadTrackerId=PlayBuzz.loadingTrack.pageLoadTrackerId,o.shouldTrackLoading=PlayBuzz.loadingTrack.shouldTrackLoading,j=/\.cloudfront\.net$/.test(domain),
                                                          PlayBuzz.iframeCreator.createFeedFrame(o,b.children[0].children[0],j),
                                                          k=(new Date).getTime(),PlayBuzz.loadingTrack.iframeInjectionTime.push({divId:o.divId,iframeInjectionTime:k}),
                                                          "auto"==n[PROPS.height]&&(l=null,m=b.querySelector(".pb_feed_iframe"),
                                                          pbIframes.indexOf(m)===-1&&pbIframes.push(m),scrollInterval=scrollInterval||setInterval(function(){
                                                              var a,b,c,d,e=document.documentElement.scrollTop||window.pageYOffset;
                                                              if(void 0!=e&&null!=e&&e!=l)for(l=e,a=0;a<pbIframes.length;a++)b=pbIframes[a],c=Math.round(PlayBuzz.utils.offset(b).top)||0,d=window.innerHeight,PlayBuzz.core.sendMessageToIframe({event:"scroll",scroll:e,offsetTop:c,windowHeight:d},b)
                                                            },250))}
                                                          function getSettings(a,b){
                                                            var c,d,e,f,g,h,i,j,k,l,m,n=settings[b],o={};
                                                            !function(){
                                                              var b,c,d,e;
                                                              for(b=0;b<a.attributes.length;b++)
                                                                if(c=a.attributes[b],
                                                                  d=c.name.split("-"),
                                                                  "data"===d[0]){
                                                                  for(d.shift(),e=1;e<d.length;e++)d[e]=d[e].charAt(0).toUpperCase()+d[e].slice(1);o[c.name]={
                                                                    val:c.value,shortName:d.join("")}}}();
                                                                    for(c in PROPS)n[PROPS[c]]=void 0!=a.attributes[PROPS[c]]?a.attributes[PROPS[c]].value:n[PROPS[c]],o.hasOwnProperty(PROPS[c])&&delete o[PROPS[c]];
                                                                      for(d in o)n[o[d].shortName]=o[d].val;
                                                                        if(void 0!=a.attributes.pbprefix&&(prefix=a.attributes.pbprefix.value,domainArr=domain.split("."),domainArr[0]=prefix,domain=domainArr.join(".")),
                                                                          isNaN(n[PROPS.width])&&(n[PROPS.width]=640),
                                                                          PlayBuzz.core.isMobile&&(e=PlayBuzz.utils.width(a),
                                                                            f=Math.min(640,window.innerWidth),
                                                                            n[PROPS.width]=Math.min(e,f)),(isNaN(n[PROPS.height])||""==n[PROPS.height])&&(n[PROPS.height]="auto"),
                                                                          (isNaN(n[PROPS.marginTop])||""==n[PROPS.marginTop])&&(n[PROPS.marginTop]=0),"auto"!=n[PROPS.game]&&void 0!=n[PROPS.game]&&!
                                                                          function(){
                                                                          var a,b,c,d,e=n[PROPS.game].split("?").shift();
                                                                          return"/"==e.charAt(e.length-1)&&(a=e.split(""),
                                                                            a.pop(),
                                                                            e=a.join("")),
                                                                          b=e.split("/"),b.length<2?(n[PROPS.game]="auto",
                                                                            void 0):(c=b.pop(),d=b.pop(),""==c||""==d?(n[PROPS.game]="auto",void 0):(n[PROPS.game]=d+"/"+c,void 0))}(),"auto"!=n[PROPS.socialUrl]&&void 0!=n[PROPS.socialUrl]&&null!=n[PROPS.socialUrl]?n[PROPS.socialUrl]=encodeURIComponent(n[PROPS.socialUrl]):n[PROPS.socialUrl]=null,a.attributes["data-links"]&&(n[PROPS.targetPage]=a.attributes["data-links"].value),"auto"==n[PROPS.targetPage]){
                                                                          if(g=document.location.toString().split("?"),h=g[1],i=g[0],h)
                                                                            for(j=h.split("&"),k=0;k<j.length;k++)
                                                                              try{l=j[k].toLowerCase(),l.search("game")<0&&l.search("pb_url")<0&&(m=i.indexOf("?")>=0?"&":"?",i+=m+l)}
                                                                            catch(p){PlayBuzz.core.debugLog("speed-exception",p)}n[PROPS.targetPage]=i}}
                                                                            function getCanonicalUrl(){
                                                                              var a,b=/^(http|https)\:\/\/([a-z0-9])+\.([a-z0-9])+(\.([a-z0-9])+)*//*/gi,c=document.querySelector('link[rel="canonical"]')&&document.querySelector('link[rel="canonical"]').getAttribute("href"),
                                                                              d=document.querySelector('meta[property="og:url"]')&&document.querySelector('meta[property="og:url"]').getAttribute("content")||document.querySelector('meta[name="og:url"]')&&document.querySelector('meta[name="og:url"]').getAttribute("content");
                                                                            return c&&null!=c.match(b)?a=c:d&&null!=d.match(b)&&(a=d),"undefined"==typeof a&&(a=c||d),"undefined"==typeof a?a:encodeURI(a)
                                                                            }
                                                                            function getParamString(a){
                                                                              var b,c="";for(b in a)""!=c&&(c+="&"),c+=b+"="+a[b];return c
                                                                            }
                                                                            function resizeContent(a){
                                                                              var b,c,d,e,f=PlayBuzz.core.browser.browser,g=PlayBuzz.core.browser.version,h="Explorer"==f&&parseInt(g)<=8,i=h?-10:0;
                                                                              try{
                                                                                for(b=PlayBuzz.utils.width(a),isNaN(settings[a.id]["data-height"])||(b-=20),c=Math.floor(b-168+i)+"px",d=a.querySelectorAll(".pb_hub_texts"),e=0;e<d.length;++e)
                                                                                  d[e].style.width=c
                                                                              }
                                                                              catch(j){PlayBuzz.core.debugLog("speed-exception",j)}
                                                                            }
                                                                            function onDivContentLoaded(a,b){
                                                                              var c,d,e,f,g,h=a.split("</style>"),
                                                                              i=h[0].replace("<style>",""),j=h[1],k=document.createElement("style");
                                                                              k.setAttribute("type","text/css"),k.styleSheet?k.styleSheet.cssText=i:k.appendChild(document.createTextNode(i)),
                                                                              document.getElementsByTagName("head")[0].appendChild(k),
                                                                              PlayBuzz.core.stopSpinner(b),pourContent(b,j),b.style.opacity=1,c=b.querySelector(".pb_top_content_container"),c&&c.style&&(c.style.opacity=1),
                                                                              d=window.addEventListener?"addEventListener":"attachEvent",
                                                                              e=window.addEventListener?"resize":"onresize",window[d](e,function(){resizeContent(b)}),resizeContent(b),
                                                                              f=0,
                                                                              g=setInterval(function(){
                                                                                f++>=10&&clearInterval(g),resizeContent(b)
                                                                              },250),
                                                                              gatherHubAnalytics(b)
                                                                            }
                                                                            function gatherHubAnalytics(a){
                                                                              var b,c,d,e=a.querySelectorAll(".pb_hub_item_container"),
                                                                              f={parentUrl:document.location.toString(),
                                                                                parentHost:document.location.host,
                                                                                numItems:e.length,pageNum:PlayBuzz.core.getURLParam("pb_page")||0,articles:[]
                                                                              };
                                                                              for(function(){
                                                                                var b,c,d,e,g,h,i=a.attributes;
                                                                                for(b in i)
                                                                                  if(c=i[b].name,c&&0==c.indexOf("data-")){
                                                                                    for(d=c.replace("data-",""),e=d.split("-"),g=1;g<e.length;g++)h=e[g].charAt(0).toUpperCase(),e[g]=h+e[g].slice(1);d=e.join(""),f[d]=i[b].value
                                                                                  }}(),b=0;b<e.length;b++)
                                                                                      f.articles.push({id:e[b].attributes["data-article-id"].value,creator:e[b].attributes["data-creator"].value,
                                                                                      article:e[b].attributes["data-article-name"].value});
                                                                                      c=JSON.stringify(f),c=encodeURIComponent(c),d=document.createElement("iframe"),
                                                                                      d.src="//"+domain+"/hubReportIframe?data="+c,d.style.width="0",d.style.height="0",d.style.border="none",d.style.position="absolute",document.body.appendChild(d)
                                                                            }
                                                                            function loadTagPage(a,b){
                                                                              var c,d,e,f,g,h;
                                                                              if(a){c=void 0==a.attributes[PROPS.tags]?"all":a.attributes[PROPS.tags].value,d=PlayBuzz.core.getURLParam("pb_url"),e=PlayBuzz.core.getURLParam("game"),a.style.minHeight="250px";
                                                                              try{
                                                                                PlayBuzz.core.spin(a)
                                                                              }
                                                                              catch(i){
                                                                                PlayBuzz.core.debugLog("speed-exception",i)
                                                                              }
                                                                              "auto"!=settings[b]["data-game"]&&void 0!=settings[b]["data-game"]||d||e?createRegularIframe(protocol+"//"+domain+"/tags/"+c,a,b):(f=a.id,f||(f="pb_hub_"+Math.round(1e4*Math.random()),a.id=f),settings[b].divId=b,settings[f]=settings[b],g={tags:settings[b]["data-tags"],profiles:settings[b]["data-profiles"],language:"",rating:"",hubId:"",
                                                                                pageNum:PlayBuzz.core.getURLParam("pb_page")||0,numItems:10,template:"defaultCss",imageSize:"auto",pbPrefix:prefix,pbHost:PlayBuzz.core.getURLParam("pbhost")||prefix+".playbuzz.com",
                                                                                targetPage:clearHash(settings[b]["data-target-page"]||document.location.toString()),
                                                                                hostPage:clearHash(document.location.toString()),hostName:document.location.hostname,parentHost:document.location.hostname,
                                                                                feed:!0,key:"Default",width:a.offsetWidth,height:settings[b]["data-height"],random:"false",thumbSize:"default",
                                                                                divId:f
                                                                              },
                                                                              h=protocol+"//"+g.pbPrefix+".playbuzz.com/widget/GetArticlesHub?"+getParamString(g),PlayBuzz.core.ajax(h,elementById[b],onDivContentLoaded))}
                                                                            }
                                                                            function clearHash(a){
                                                                              try{
                                                                                return a?a.split("#")[0]:a
                                                                              }
                                                                              catch(b){
                                                                                PlayBuzz.core.debugLog("speed-exception",b)
                                                                              }
                                                                              return a
                                                                            }
                                                                            function pourContent(a,b){
                                                                              var c=a.children[0],d=c.children[0];d.innerHTML=b
                                                                            }
                                                                            function addDOMListener(){
                                                                              function a(){
                                                                                e>0?e--:f=1e3,DOMRenderTimeout||(DOMRenderTimeout=setTimeout(function(){
                                                                                    var a,b,c;for(DOMRenderTimeout=null,a=document.getElementsByClassName("pb_feed"),b=0;b<a.length;b++)
                                                                                    try{
                                                                                      if(c=a[b].attributes["render-status"],c&&"rendered"===c.value)continue;pb_feed_object.renderFeed(!0,a[b])
                                                                                    }
                                                                                    catch(d){
                                                                                      console.error("Couldn't render element: ",d)
                                                                                    }
                                                                                  },
                                                                                  f))
                                                                              }
                                                                              var b,
                                                                              c=window.MutationObserver||window.WebKitMutationObserver,
                                                                              d=window.addEventListener,
                                                                              e=10,f=100;
                                                                              try{
                                                                                c?(b=new c(function(b){
                                                                                  (b[0].addedNodes.length||b[0].removedNodes.length)
                                                                                  &&a()
                                                                                }),
                                                                                b.observe(document.body,{childList:!0,subtree:!0})):
                                                                                d&&(obj.addEventListener("DOMNodeInserted",a,!1),obj.addEventListener("DOMNodeRemoved",a,!1))
                                                                              }
                                                                              catch(g){}
                                                                            }
                                                                            function setup(a,b){
                                                                              var c,d;
                                                                              return b?elements=b.className.indexOf("pb_feed")>=0?[b]:b.querySelectorAll(".pb_feed"):(c=document.querySelectorAll(".pb_feed"),
                                                                                d=document.querySelectorAll("#pb_feed")[0],c.length>0&&(elements=c),d&&elements.push(d)),0==elements.length?(requiresAsyncLoading=!0,"object"==typeof pb_feed_object&&(pb_feed_object.requiresAsyncLoading=!0),void 0):(function(){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r=elements.length;
                                                                                  for(b=0;b<r;b++){
                                                                                    if(c=elements[b].attributes,d=c["data-async"]&&"true"==c["data-async"].value,e=elements[b].attributes["render-status"]&&"rendered"===elements[b].attributes["render-status"].value,a&&(d||e))
                                                                                      return;
                                                                                    if(f=elements[b].attributes["element-index"]&&elements[b].attributes["element-index"].value,
                                                                                      g=f||elementIndex++,f||elements[b].setAttribute("element-index",g),
                                                                                      elements[b].setAttribute("render-status","rendered"),h=document.createElement("div"),
                                                                                      h.className="pb_top_content_container pb_feed_anim",h.style.clear="both",h.style.paddingBottom="30px",elements[b].innerHTML="",
                                                                                      elements[b].appendChild(h),h.innerHTML="<div></div>",elements[b].contentInner=h,
                                                                                      ""==elements[b].style.position&&(elements[b].style.position="relative"),i="div"+g,elementById[i]=elements[b],settings[i]={},getSettings(elements[b],"div"+g),j=settings[i][PROPS.game],k=void 0!=j&&null!=j&&"auto"!=j&&""!=j,l=topUrl.split("?")[1],void 0!=l&&(l.search("pb_url")!=-1||l.search("game")!=-1)||k){m=k?settings[i][PROPS.game]:"";
                                                                                      try{
                                                                                        for(l=l.split("&"),n=0;n<l.length;n++)o=l[n].split("="),"pb_url"!=o[0]&&"game"!=o[0]||(m=o[1])
                                                                                      }
                                                                                    catch(s){
                                                                                      PlayBuzz.core.debugLog("speed-exception",s)
                                                                                    }
                                                                                    elements[b].style.minHeight="320px",createRegularIframe(protocol+"//"+domain+"/"+m,elements[b],i),showLoadingSpinner===!0&&(p=document.createElement("div"),p.className="pb_feed_placeholder_container",q="<div class='pb_feed_placeholder_inner'>",q+="    <div class='pb_feed_placeholder_content'>",q+="        <div class='pb_feed_placeholder_preloader'>",q+="            <div style='position:absolute;width:90px;height:38px;transform:translateX(-60px);-webkit-transform:translateX(-60px);",q+="                -webkit-animation:pb_color_trans 5s;",q+="                -moz-animation:pb_color_trans 5s;",q+="                -ms-animation:pb_color_trans 5s;",q+="                animation:pb_color_trans 5s;",q+="                -webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;-ms-animation-fill-mode:forwards;animation-fill-mode:forwards;'>",q+="                    <div style='width:33%;height:100%;float:left;background-color:#bc49ff'></div>",q+="                    <div style='width:33%;height:100%;float:left;background-color:#009cff'></div>",q+="                    <div style='width:34%;height:100%;float:left;background-color:#bdbdbd'></div>",q+="            </div>",q+="            <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABUCAQAAACYJ/nYAAADp0lEQVR4Ae3aA7QkSRCF4Xjm2rZt27Zt27Zt27Zt27Z3u/Pe7DFi96jGUdWVLydXfxwrv3I1hJp2/oGAGh7DsX4jt2CvyX/olL+qjFWZEou4TXESHiMjAvAjz+Hi2ixG2syleDZ+6HEAnsWa2ijDZDLW4Us9B3gJi0qJ/LJ8MRiAn90m2iAl0wZsjd8CALjDTyiBYTzeUwqAgdhHeiRtwD7oXy/AuRWlB8Mq9PUAHBaWHs4tgN+KAuAWkAhhIfYqAMBArCmR8suiXz5gT4mY2yMHgLskatqAOwwAfuH4Ejk3Dn4aJYDbS8Fq82A/XoPn8RbfwDO4nLtipsKEzUYFeK3I4+anLuyLj6gjmdexrbZKgfDUSAF+uSJ6/Eg15jO3suTGxUcGeE1y+qUbt1ALzHnaIjnh6REAfsMc9fh8lVpwHv2hMwew2nAA/GIfvR86+TK1jrlHm+xXFvw8LOACMeN11PoGJ4kZTx8G4FYQI65PrRswGIvmnYgZAH21w9hd7fiOWmJet96ltIW1DICnTesu1HKD1cSID2YAnipGeLMsgPeIEY7JANjCuPVMSy076PdTl/Fw3iADWKcLt6eWH+vFzs2XAarTGDvq/BAA9jMeaJNkgMpYxh64NwTA86yrKwOIEZ4LAlwtRqMBgEvNO0F8gHWBu3HjA8x3rMpUowHg5zT2wILRAfjJehr4jaMDeJYY4fjIAAyoTmM/jGIDLhQjbSGiAvCjG0eM/DLUiAAM9EuLGS6ICMBgbC5m2sY/ogHQz20qOfkNqbEAn7v5JTe+FgfgcLR2SG5uZWogAM+Sw17zeNbtnr1XmGkjXwsE4Glt0ha3INf2u/ndsBUW+aVbjKy37DKAamUqKZ2fiNVAgNtUSqdNeJwaBrheAuJR1DDAV7+PKaVzm2JgEAADuXjot4RhgONDlmeNGgZ4VVukZFwffahhAO+ml1JpI47FYGooYDspVXXq7AupEADulBJpKw+ip4YDHCeo/5bjNs2+0AwGKD/FvtWxpWBuXO7Cz+2Fy1wFNdzsN8R4YlSb2G2C29HXXjToVoxBeA838RCuxSX8nJWpqtP42bEw1+MhvAof2IuVALhx8CM1YEIBuJWaEMDtqAkBmIm1hABt5RvUhACeTk0IcCthcEKAnwg/UZMBtIEPUBMCsBc1IaA2F/omBPzQiQ+pCQG4mJoQwHWpCQG9p+AfCQHahKepCQE8nJoQgIUxICHg9zH5JTUhgDf8/4fGdPMnaCBzQc6JVDQAAAAASUVORK5CYII=' class='pb_feed_anim_mask' />",q+="        </div>",q+="        <div class='pb_ie_fixer'></div>",q+="        <div class='pb_feed_loading_text'>Loading...</div>",q+="    </div>",q+="</div>",p.innerHTML=q,elements[b].appendChild(p),elements[b].className=elements[b].className.replace("pb_feed_rendered",""),elements[b].className=elements[b].className.replace("pb_feed_anim",""),elements[b].className+=" pb_feed_anim pb_feed_loading")}else loadTagPage(elements[b],i)}}(),void 0)}
                                                                            function performScroll(){
                                                                              var a,b=100,c=Math.abs(window.scrollY-scrollPosition),d=Math.min(b,c);window.scrollY>scrollPosition&&(d*=-1),a=window.scrollY,scrollBy(0,d),Math.abs(d)==b&&scrollPosition<window.innerHeight&&a!=window.scrollY?setTimeout(performScroll,15):isScrolling=!1}function scrollTo(a){
                                                                                if(!window.scrollY)
                                                                                  try{
                                                                                    return window.scrollTo(0,a),void 0
                                                                                  }
                                                                                  catch(b){
                                                                                    PlayBuzz.core.debugLog("speed-exception",b)
                                                                                  }
                                                                                  a&&(scrollPosition=a),isScrolling||(isScrolling=!0,performScroll())}
                                                                                  function scrollIframe(a,b,c){
                                                                                    var d,e,f,g,h,i,j,k,l="true"===settings[c].noScroll;l||(d=elementById[c],e=document.documentElement.scrollTop||window.pageYOffset,
                                                                                      f=d.getElementsByTagName("iframe")[0],g="iframe_top"==a?0:a,h=function(){
                                                                                        try{
                                                                                          return PlayBuzz.utils.offset(f).top
                                                                                        }
                                                                                        catch(a){
                                                                                          return PlayBuzz.core.debugLog("speed-exception",a),0
                                                                                        }}(),
                                                                                        i=h+g,j=0,isNaN(settings[c]["data-margin-top"])||(j=parseInt(settings[c]["data-margin-top"])),
                                                                                        i-=j,document.location.toString().toLowerCase().search("'isfb':'true'")>=0?FB.Canvas.scrollTo(0,i+40):i<e?b?(k="iframe_top"==a?i:a,window.scrollTo(j,k)):scrollTo(i):i>e&&(b?window.scrollTo(j,g):scrollTo(i)))
                                                                                  }
                                                                                  function createElement(a,b){
                                                                                    var c,d=document.createElement(a);for(c in b)d.setAttribute(c,b[c]);
                                                                                    return d
                                                                                  }
                                                                                  function isHtmlElement(a){
                                                                                    try{
                                                                                      return a instanceof HTMLElement
                                                                                    }
                                                                                    catch(b){
                                                                                      return PlayBuzz.core.debugLog("speed-exception",b),"object"==typeof a&&1===a.nodeType&&"object"==typeof a.style&&"object"==typeof a.ownerDocument
                                                                                    }
                                                                                  }
                                                                                  function createDataBridge(){
                                                                                    function a(a){
                                                                                      return function b(c){
                                                                                        a(c.detail)
                                                                                      }
                                                                                    }
                                                                                    var b=document.createElement("div");
                                                                                    window.PlayBuzz.trigger=function c(a){
                                                                                      var c=new CustomEvent(a.eventName,{detail:a});b.dispatchEvent(c)
                                                                                    },
                                                                                    window.PlayBuzz.on=function d(c,e){
                                                                                      var f=a(e);b.addEventListener(c,f)
                                                                                    }
                                                                                  }
                                                                                  var scrollPosition,DOMRenderTimeout,scrollInterval,styleElement,PROPS,settings,pb_feed_object,isScrolling=!1,elementIndex=0,isFirstRun=!0,elements=[],elementById={},pbIframes=[],showLoadingSpinner=null===PlayBuzz.core.getURLParam("spinner"),topUrl=document.location.toString().split("#")[0],requiresAsyncLoading=!1,prefix=PlayBuzz.core.getURLParam("pbprefix")||"www",domain=PlayBuzz.core.getURLParam("pbhost")||prefix+".playbuzz.com",protocol="http:"===document.location.protocol||"https:"===document.location.protocol?document.location.protocol:"http:",style=".pb_feed_loading{height:320px;overflow:hidden}";
                                                                                  return style+=showLoadingSpinner===!0?".pb_top_content_container{opacity:0}":".pb_top_content_container{opacity:1}",style+=".pb_feed_placeholder_container{position:absolute;top:0;width:100%;height:100%;}",style+=".pb_feed_placeholder_container,.pb_feed_placeholder_container *{direction:ltr !important;}",style+=".pb_embed_spinner_iframe{position:relative;max-width:640px;width:100%;height:320px;margin:auto;border:0}",style+=".pb_feed_placeholder_inner{position:relative;max-width:640px;width:100%;height:100%;margin:auto;}",style+=".pb_feed_placeholder_content{width:100%;height:100%;background-color:#f2f2f2;border-radius:5px;}",style+=".pb_feed_placeholder_preloader{position:absolute;top:50%;left:50%;width:29px;height:38px;margin-top:-36px;margin-left:-15px;overflow:hidden;box-sizing:border-box;}",style+=".pb_ie_fixer{position:absolute;top:50%;left:50%;width:30px;height:38px;margin-top:-36px;margin-left:14px;background-color:#f2f2f2;}",style+=".pb_feed_anim_mask{position:absolute;width:30px;top:0;left:0;}",style+=".pb_feed_loading_text{position:absolute;font-family:arial !important;font-size:11px !important;color:#aaa;text-align:center;width:100%;top:170px;direction:ltr;}",style+="@-webkit-keyframes pb_color_trans{0%{-webkit-transform:translateX(-60px)}34%{-webkit-transform:translateX(-30px)}100%{-webkit-transform:translateX(0)}}",style+="@-moz-keyframes pb_color_trans{0%{transform:translateX(-60px)}34%{transform:translateX(-30px)}100%{transform:translateX(0)}}",style+="@-ms-keyframes pb_color_trans{0%{transform:translateX(-60px)}34%{transform:translateX(-30px)}100%{transform:translateX(0)}}",style+="@keyframes pb_color_trans{0%{transform:translateX(-60px)}34%{transform:translateX(-30px)}100%{transform:translateX(0)}}",styleElement=document.createElement("style"),styleElement.textContent=style,document.querySelector("head").appendChild(styleElement),PROPS={width:"data-width",height:"data-height",tags:"data-tags",profiles:"data-profiles",language:"data-language",rating:"data-rating",hubId:"data-hubid",socialUrl:"data-social-url",appData:"data-app-data",recommend:"data-recommend",game:"data-game",key:"data-key",params:"data-params",social:"data-social",useShares:"data-shares",useComments:"data-comments",analyticsListener:"data-analytics-callback",gameInfo:"data-game-info",targetPage:"data-target-page",specificItem:"data-specific-item",singleItemMode:"data-single-item",marginTop:"data-margin-top",asyncLoading:"data-async",shareParam:"data-share-param",socialReferrer:"data-social-referrer",pbads_debug:"data-pbads_debug",pbads_preview:"data-pbads_preview",pbads_abtest:"data-pbads_abtest"},
                                                                                  settings={},
                                                                                  PlayBuzz.core.listen("onMessage",function(e){
                                                                                    var element,iframeEl,response,functionName,div,className,iframe,articleViewableTime,embedStartTime,embedDomLoadingTime,embedInjectionTime,arr,i,noAnimation,data=JSON.parse(e),divId=data.id;
                                                                                    if("queryScroll"==data.name){
                                                                                      if(element=elementById[divId],!element)
                                                                                        return;
                                                                                      iframeEl=element.querySelector(".pb_feed_iframe"),response={event:"queryScroll",queryId:data.queryId,data:{windowHeight:window.innerHeight,scroll:document.documentElement.scrollTop||window.pageYOffset,offsetTop:Math.round(PlayBuzz.utils.offset(iframeEl).top)||0}},PlayBuzz.core.sendMessageToIframe(response,iframeEl)
                                                                                    }
                                                                                      if("analyticsEvent"!=data.name){
                                                                                        if("dataBridge"===data.name)
                                                                                          return window.PlayBuzz&&window.PlayBuzz.trigger&&window.PlayBuzz.trigger(data.event),void 0;
                                                                                        if("docReady"===data.name){
                                                                                          if(div=elementById[data.id],!div.parentElement){
                                                                                            if(className="."+div.className.replace(/ /g,"."),div=document.querySelector(className),!div)
                                                                                            return console.error("There was a problem rendering Playbuzz content: container not found in DOM. Please contact Playbuzz support.");
                                                                                          elementById[data.id]=div
                                                                                        }
                                                                                          if(iframe=div.getElementsByClassName("pb_feed_iframe")[0],removePreloaderFromDiv(div),articleViewableTime=null,embedStartTime=null,embedDomLoadingTime=null,embedInjectionTime=null,window.performance&&window.performance.timing&&window.performance.timing.domLoading)
                                                                                            for(embedDomLoadingTime=window.performance.timing.domLoading,articleViewableTime=(new Date).getTime(),embedStartTime=PlayBuzz.loadingTrack.scriptStarted,arr=PlayBuzz.loadingTrack.iframeInjectionTime,i=0;i<arr.length;i++)arr[i].divId==data.id&&(embedInjectionTime=arr[i].iframeInjectionTime);
                                                                                          return PlayBuzz.core.sendMessageToIframe({
                                                                                            event:"analytics",eventData:{embedDomLoadingTime:embedDomLoadingTime,embedStartTime:embedStartTime,embedInjectionTime:embedInjectionTime,articleViewableTime:articleViewableTime}
                                                                                          },iframe),void 0}
                                                                                        if(data.resize_height){
                                                                                          element=elementById[divId],iframe=elementById[divId].querySelector(".pb_feed_iframe"),iframe.style.height=data.resize_height+"px";try{iframe.style.setProperty("max-height",data.resize_height+"px","important")}catch(e){PlayBuzz.core.debugLog("speed-exception",e),iframe.style.maxHeight=data.resize_height+"px"}
                                                                                        }
                                                                                        if(void 0!=data.scroll_y&&null!=data.scroll_y)
                                                                                          try{
                                                                                            noAnimation=1==data.noAnimation,scrollIframe(data.scroll_y,noAnimation,divId)
                                                                                          }
                                                                                          catch(e){
                                                                                            PlayBuzz.core.debugLog("speed-exception",e)
                                                                                          }
                                                                                          if(data&&"action"===data.name)
                                                                                            try{
                                                                                              switch(data.action){
                                                                                                case"openLink":window.open(data.url,"_blank");break;case"redirectPage":window.location.href=data.url
                                                                                              }
                                                                                            }
                                                                                            catch(ex){
                                                                                              PlayBuzz.core.debugLog("speed-exception",ex)
                                                                                            }}
                                                                                            else try{
                                                                                              settings&&settings[divId]&&(functionName=settings[divId][PROPS.analyticsListener],"null"!=functionName&&null!=functionName&&eval(functionName)(data.event)),"function"==typeof window.PlayBuzzCallback&&PlayBuzzCallback(data.event)
                                                                                            }catch(e){
                                                                                              console.error("Failed to dispatch event",e)
                                                                                            }}),
                                                                                            pb_feed_object={
                                                                                              renderFeed:function(a,b){
                                                                                                var c,d;"boolean"==typeof a?c=a:isHtmlElement(a)&&!isHtmlElement(b)?(d=a,c=!1):c=!1,isHtmlElement(b)&&(d=b),setup(c,d)
                                                                                              },
                                                                                          setDOMListener:function(){
                                                                                            isFirstRun&&(isFirstRun=!1,addDOMListener())
                                                                                          },
                                                                                          getFeedContainer:function(a){
                                                                                            return elementById[a]},requiresAsyncLoading:requiresAsyncLoading
                                                                                          },
                                                                                          function(){createDataBridge();
                                                                                            try{setTimeout(function(){
                                                                                              var a=new Event("PlaybuzzScriptReady");
                                                                                              window.dispatchEvent(a)
                                                                                            },10),
                                                                                            "function"==typeof window.PlayBuzzCallback&&PlayBuzzCallback({eventName:"PlaybuzzScriptReady"})}
                                                                                            catch(a){
                                                                                              console.error("Failed to dispatch event",a)}}(),pb_feed_object}()),window.PlayBuzz||(window.PlayBuzz={}),
                                                                                              PlayBuzz.isIE8||(PlayBuzz.iframeCreator=function(){
                                                                                              function a(a,b){
                                                                                                var c,d=document.createElement(a);
                                                                                                for(c in b)d.setAttribute(c,b[c]);return d
                                                                                              }
                                                                                            function b(){
                                                                                              try{
                                                                                                return window.self!==window.top
                                                                                              }
                                                                                              catch(a){
                                                                                                return console.log("speed-exception",a),!0
                                                                                              }
                                                                                            }
                                                                                            var c={};return c.createFeedFrame=function(c,d,e){
                                                                                              var f,g,h,i,j,k,l,m,n,o,p,q=!1;c.parentHost=function(){
                                                                                                var a,b=document.location.host;
                                                                                                try{b.indexOf(".")<0&&(q=!0,"string"==typeof c.canonical&&(0!=c.canonical.indexOf("//")&&0!=c.canonical.indexOf("http")||(a=document.createElement("a"),a.href=c.canonical,b=a.hostname)))
                                                                                                }
                                                                                                catch(d){}
                                                                                                return b
                                                                                                }(),
                                                                                                c.parentUrl=function(){
                                                                                                  var a=document.location.toString();
                                                                                                  return q&&"string"==typeof c.canonical&&(a=c.canonical,c.articleCanonicalUrl=a),encodeURIComponent(a)
                                                                                                }(),
                                                                                                f=document.referrer&&document.referrer.toString().split("?")[0],c.referral=encodeURIComponent(f),g=b()&&f,g&&(c.parentUrl=c.referral,f.indexOf("://")>-1?c.parentHost=f.substr(f.indexOf("://")+3):c.parentHost=f,c.parentHost=c.parentHost.split("?")[0].split("/")[0]),c.parentUrl.indexOf("applewebdata")>=0&&(c.parentHost="native-iOS-app-embed"),h=c.src+"?feed=true",i=c.width,j=c.height,k="","auto"==i?i="100%":i+="px","auto"==j?(j="100%",k="no"):j+="px",isNaN(parseInt(c.width))||(c.width=Math.round(parseInt(c.width))),isNaN(parseInt(c.height))||(c.height=Math.round(parseInt(c.height))),null!=c.articleCanonicalUrl&&(c.articleCanonicalUrl=encodeURIComponent(c.articleCanonicalUrl)),l=["www.dreamteamfc.com","www.thesun.co.uk","www.sun.ie","www.scottishsun.co.uk","www.w3schools.com"],l.indexOf(document.location.host)>=0&&(c.customVariable1=window.utag_data&&utag_data.customer_id,c.customVariable2=window.utag_data&&utag_data.tealium_visitor_id);for(m in c)h+="&"+m+"="+c[m];e===!0&&(h=h.split(/[?#]/)[0],h+=/\/$/.test(h)?"":"/",h+="index.html"),n={src:h,name:"pb_feed_iframe","class":"pb_feed_iframe",frameBorder:"0",scrolling:k,height:j,inIframe:g},
                                                                                                o=a("iframe",n),p="min-width: 100%;"  width: 1px; max-width: 640px; height:"+j+"; 
                                                                                                border: none; margin: auto;,"Explorer"==PlayBuzz.core.browser.browser&&PlayBuzz.core.browser.version<=9||(p+="display: table;"),o.setAttribute("style,p"),d.appendChild(o)},c}());*/