<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/__header.jsp"></jsp:include>
<!--//코드 header-->
<div class="wsgFrame">
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">상품 리스트 - 기본</p>
        <jsp:include page="itemBasicList.jsp">
            <jsp:param name="id" value="itemBasicListWSG1"></jsp:param>
        </jsp:include>
    </div>

</div>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 header-->
