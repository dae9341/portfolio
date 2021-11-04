<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");
%>
<!--상품 리스트-->
<div class="c-itemBasicListWrap" id="<%=id%>">

</div>
<script>
    $(function () {
        $.ajax({
            type:"GET",
            url:"../../../../../data.json",
            success:function (data) {

                var aa = kdh.convert.itemBasic(data);

                ReactDOM.render(new ItemBasicList(aa).render(), document.getElementById("<%=id%>"));
                kdh.atom.itemZzimInit();
            },
            error:function (err) {
                console.log(err);
            }

        });


    });
</script>
<!--//상품 리스트-->