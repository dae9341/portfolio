<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="test">

</div>
<script>
    $(function (){
        const productBasic = new ProductBasic();
        ReactDOM.render(productBasic.render(), document.querySelector(".test"));
    })
</script>
