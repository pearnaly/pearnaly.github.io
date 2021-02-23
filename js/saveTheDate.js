(function() {

  'use strict';

  document.addEventListener('keydown', musicPlay);
  document.addEventListener('click', musicPlay);
  document.addEventListener('touch', musicPlay);

  function musicPlay() {
    document.getElementById('music').play();
    document.removeEventListener('keydown', musicPlay);
    document.removeEventListener('click', musicPlay);
    document.removeEventListener('touch', musicPlay);
  }

  // get the form elements defined in your form HTML above

  var form = document.getElementById("form");
  var button = document.getElementById("button");
  var status = document.getElementById("status");

  // Success and Error functions for after the form is submitted

  function success() {
    form.reset();
    status.style = "display: blok;";
  }

  function error() {
  }

  // handle the form submission event

  form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    button.disabled = true;
    var data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
  });


// helper function for sending an AJAX request

  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }

})();
