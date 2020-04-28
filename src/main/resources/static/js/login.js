function checkForm() {
//	var loginForm = {}
//	loginForm["userid"]= $("#userid").val();
//	loginForm["password"]= $("#password").val();
	var loginForm = $("#loginForm").serializeObject();
    $("#signin").prop("disabled", true);
	$.ajax({
        type : "post",
        url :  contextpath+"/login",
        data : JSON.stringify(loginForm),
        contentType : "application/json; charset=utf-8",
        dataType : "json",
        success : function(obj) {
          if (obj.code == "ok"){
        	  window.location.href = contextpath+"/index";
          }else if (obj.code== "1"){
            showModal("#submit_warning", obj.result.msg);
          }else{
            var childWindow = window.open('about:blank',Date.now());
            childWindow.location.href = obj.result.result;
          }
        },
        error : function(e) {
          window.location.href = "exception";
        }
      });
	return false;
}
$(document).ready(function() {

//    $("#loginForm").submit(function(event){
//    	event.preventDefault(); //prevent default action
//    	alert($(this).serialize());
//    	$.ajax({
//    		url : "/spadmin/login",
//    		type: "post",
//    		data : $(this).serialize(),
//    			contentType: false,
//    			processData:false,
//    	}).done(function(response){ //
//    		$("#server-results").html(response);
//    	});
//    });
});