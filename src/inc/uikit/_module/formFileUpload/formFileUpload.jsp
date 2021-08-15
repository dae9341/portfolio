<%--
  Created by IntelliJ IDEA.
  User: dae93
  Date: 2021-08-15
  Time: 오전 9:13
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");

%>

<div class="m-formFileUpload" id="<%=id%>">
    <input type="text" readonly="readonly">
    <input class="-hidden" type="file" id="<%=id%>Input">
    <label class="t-btn -sm -tanWhite" for="<%=id%>Input">업로드</label>
</div>

<script>
    var <%=id%>;
    $(function () {
        <%=id%>= new kdh.module.formFileUpload("#<%=id%>",{
            defaultText:"선택된 파일이 없습니다."
        });

        /**
         * API
         * <%=id%>.value :: value값
         * <%=id%>.fileName:: file명
         * */
    })
</script>