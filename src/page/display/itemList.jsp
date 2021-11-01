<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--코드 header-->
<jsp:include page="../../../src/inc/common/header.jsp"></jsp:include>
<!--//코드 header-->

<div class="p-itemList">

    <jsp:include page="../../inc/uikit/_component/item/itemBasicList.jsp">
        <jsp:param name="id" value="itemBasicList1"></jsp:param>
    </jsp:include>

</div>
<!--코드 footer-->
<jsp:include page="../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 footer-->