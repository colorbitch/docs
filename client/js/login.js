$('#login-btn').click(function(){
    var data = {
        password:$('#password').val(),
        username:$('#username').val()
    };
    
    $.docsajax({
        url:'/login',
        method:'post',
        data:JSON.stringify(data),
        contentType:'application/json',
        success:function(d){
            console.log(d);
        }
    });
});