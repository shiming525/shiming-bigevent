//文章分类所有功能
var category = {
    category_show:function(callback){
        $.get(type.category_show,function(res){
            callback(res);
        })
    },
    category_add:function(name,slug,callback){
        $.post(type.category_add,{name:name,slug:slug},function(res){
            callback(res);
        })
    },
    category_delete:function(id,callback){
        $.post(type.category_delete,{id:id},function(res){
            callback(res);
        })
    }
}