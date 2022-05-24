$(document).ready(
    function(){
       var params = new URLSearchParams(location.search);
       var id = params.get("opcao");
        
       $.ajax({
        url:"http://jsonplaceholder.typicode.com/posts/"+id,
        type:"GET",
        success:function(data){    
            
        $('#titulo').append(data.title);
        $('#corpo').append(data.body);


        $.ajax({
            url:"http://jsonplaceholder.typicode.com/posts/"+id+"/comments",
            type:"GET",
            success:function(data){
                $.each(data, function(i, item){
                    $('#comentarios').append(
                        '<div>'+
                        '<b>'+item.name+'</b><br>'
                        +item.email+
                        '<p>'+item.body+'</p>'
                        +'</div><br>'
                    )
            
                })
        
            },
            error:function(data){}
    },
       

       )}

})})