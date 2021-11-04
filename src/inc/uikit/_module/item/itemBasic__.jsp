<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/__header.jsp"></jsp:include>
<!--//코드 header-->
<div class="wsgFrame">
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">상품모듈 - 기본</p>
        <jsp:include page="itemBasic.jsp">
            <jsp:param name="id" value="itemBasicWSG1"></jsp:param>
        </jsp:include>
        <jsp:include page="itemBasic.jsp">
            <jsp:param name="id" value="itemBasicWSG2"></jsp:param>
        </jsp:include>
    </div>
    <script>
        $(function () {
            kdh.atom.itemZzimInit();
        })
    </script>

</div>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 header-->


<script id="tvLivePrdJsonData" type="text/html" ></script>
