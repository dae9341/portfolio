<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/__header.jsp"></jsp:include>
<!--//코드 header-->
<div class="wsgFrame">
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">파일업로드 커스텀 - 기본</p>
        <jsp:include page="formFileUpload.jsp">
            <jsp:param name="id" value="formFileUpload0"></jsp:param>
        </jsp:include>
    </div>
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">파일업로드 커스텀 - 기본(고정)</p>
        <jsp:include page="formFileUpload.jsp">
            <jsp:param name="id" value="formFileUpload1"></jsp:param>
        </jsp:include>
    </div>

</div>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 header-->
