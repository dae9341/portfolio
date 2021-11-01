<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");
%>
<!--상품: 기본형 -->
<div id="<%=id%>">
</div>
<script>
    $(function () {
        ReactDOM.render(new ItemBasic().render(), document.getElementById("<%=id%>"))
    })
</script>
<!--//상품: 기본형 -->