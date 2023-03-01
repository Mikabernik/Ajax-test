$(document).ready(function(){
    $('#form').submit(function(e){
        e.preventDefault();
        alert("hello")
        $.ajax({
            type:'post',
            url : 'Ajax.php',
            data :$('#form').serialize(),
            
            success: function(result){
                    alert (result)
                   
            },
            error : function(){
                alert ("error")
            }
        });
    });

})