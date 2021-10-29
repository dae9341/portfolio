<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");
%>

<div class="c-itemBasicList -row" id="<%=id%>">

    <%for(int i=0; i<13; i++){%>
    <div class="col-md-3 col-sm-4 col-xs-6">
        <jsp:include page="../../_module/item/itemBasic.jsp"></jsp:include>
    </div>
    <%}%>
</div>
