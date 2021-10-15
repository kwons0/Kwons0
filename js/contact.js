let delta, num = 0, move, timer;
const mql = window.matchMedia("screen and (max-width: 1024px)");

$(document).on("touchstart",function(){
  var scrollTop = $(window).scrollTop();

  if( mql.matches ){
    if( scrollTop > $('.submit').offset().top - 100){
      $('.burger, .logo, .mail').addClass('black')
    }else{
      $('.burger, .logo, .mail').removeClass('black')
    }
  }
});


$(window).on('mousewheel DOMMouseScroll',function(e){
  if( mql.matches ) return;
    delta = e.originalEvent.wheelDelta || e.originalEvent.detail * -40;
    clearTimeout(move);
    move = setTimeout(function(){
      if(delta < 0){
          if(num < 2) num++; //down
      }else{
          if(num > 0) num--;   //up
      }
      ani();

      if(num > 0){
          $('body').css({ 'background-color' : '#111111'})
          $('.burger, .logo, .mail').addClass('black')
      }else{
          $('body').css({ 'background-color' : 'transparent'})
          $('.burger, .logo, .mail').removeClass('black')
      }

      
      clearTimeout(timer);

      if( num !== 2 ){
          $('.timebar span').removeClass('active');
          $('.timebar span').css({ 'transition' : '0s','transition-delay' : '.5s'})
      }else{
          $('.timebar span').addClass('active')
          $('.timebar span').css({ 'transition' : '8s','transition-delay' : '0s'})
          timer = setTimeout(function(){
              location.href = '../about.html'
          },8000);
      }
        
    },100);
});

function ani(){
    $('html,body').animate({ 
        scrollTop : $(window).height() * num 
    });
};

function init(){
    setTimeout(function(){
        $('html,body').scrollTop(0);
        $('body').css({ 'background-color' : 'transparent'})
        $('.burger, .logo, .mail').removeClass('black')
        num=0;
    },100)
}
init();



// 폼 제출 알림 메시지
(function() {
    // get all data in form and return object
    function getFormData(form) {
      var elements = form.elements;
      var honeypot;
  
      var fields = Object.keys(elements).filter(function(k) {
        if (elements[k].name === "honeypot") {
          honeypot = elements[k].value;
          return false;
        }
        return true;
      }).map(function(k) {
        if(elements[k].name !== undefined) {
          return elements[k].name;
        // special case for Edge's html collection
        }else if(elements[k].length > 0){
          return elements[k].item(0).name;
        }
      }).filter(function(item, pos, self) {
        return self.indexOf(item) == pos && item;
      });
  
      var formData = {};
      fields.forEach(function(name){
        var element = elements[name];
        
        // singular form elements just have one value
        formData[name] = element.value;
  
        // when our element has multiple items, get their values
        if (element.length) {
          var data = [];
          for (var i = 0; i < element.length; i++) {
            var item = element.item(i);
            if (item.checked || item.selected) {
              data.push(item.value);
            }
          }
          formData[name] = data.join(', ');
        }
      });
  
      // add form-specific values into the data
      formData.formDataNameOrder = JSON.stringify(fields);
      formData.formGoogleSheetName = form.dataset.sheet || "responses"; // default sheet name
      formData.formGoogleSendEmail
        = form.dataset.email || ""; // no email by default
  
      return {data: formData, honeypot: honeypot};
    }
  
    function handleFormSubmit(event) {  // handles form submit without any jquery
      event.preventDefault();           // we are submitting via xhr below
      var form = event.target;
      var formData = getFormData(form);
      var data = formData.data;
  
      // If a honeypot field is filled, assume it was done so by a spam bot.
      if (formData.honeypot) {
        return false;
      }
  
      disableAllButtons(form);
      var url = form.action;
      var xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // xhr.withCredentials = true;
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            form.reset();
            var formElements = form.querySelector(".form-elements")
            if (formElements) {
              formElements.style.display = "none"; // hide form
            }
            var thankYouMessage = form.querySelector(".thankyou_message");
            if (thankYouMessage) {
                alert( $('.thankyou_message').text() )
            }
          }
      };
      // url encode form data for sending as post data
      var encoded = Object.keys(data).map(function(k) {
          return encodeURIComponent(k) + "=" + encodeURIComponent(data[k]);
      }).join('&');
      xhr.send(encoded);
    }
    
    function loaded() {
      // bind to the submit event of our form
      var forms = document.querySelectorAll("form.gform");
      for (var i = 0; i < forms.length; i++) {
        forms[i].addEventListener("submit", handleFormSubmit, false);
      }
    };
    document.addEventListener("DOMContentLoaded", loaded, false);
  
    function disableAllButtons(form) {
      var buttons = form.querySelectorAll("button");
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
      }
    }
  })();
