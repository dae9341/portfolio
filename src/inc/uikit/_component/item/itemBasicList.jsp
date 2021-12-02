<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");
%>
<!--상품 리스트-->
<div id="<%=id%>">

</div>
<%--<div className={`col-md-3 col-sm-4 col-xs-6`}> row형 --%>
<%--<div className={`col-md-6 col-sm-6 col-xs-12`}> list형 --%>
<script>
    $(function () {
        $.ajax({
            type:"GET",
            url:"../../../../../data.json",
            success:function (data) {

                var convertDATA = kdh.convert.itemBasic(data);
                var param={
                    itemData: convertDATA,
                    displayType:"row",
                    isSwitchBtn:true
                };

                ReactDOM.render(new ItemBasicListWrap(param).render(), document.getElementById("<%=id%>"));
                kdh.atom.itemZzimInit();
            },
            error:function (err) {
                console.log(err);
            }

        });


    });
</script>
<!--//상품 리스트-->