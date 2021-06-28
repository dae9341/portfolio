<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="m-productBasicListWrap">

</div>
<script>
    $(function (){
        $.ajax({
            url:'/best100Data.json',
            success:function (data){
                init(data);
            },
        });
    });

    function init(data){
        const productBasic = new ProductBasicList(data);
        ReactDOM.render(productBasic.render(), document.querySelector(".m-productBasicListWrap"));
    }
</script>
