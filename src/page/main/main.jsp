<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--코드 header-->
<jsp:include page="../../../src/inc/common/header.jsp"></jsp:include>
<!--//코드 header-->

<!-- UI header -->
<jsp:include page="../../inc/uikit/header/header.jsp"></jsp:include>
<!-- //UI header -->
<div class="p-main">
    <div class="p-main__head">
        메인페이지
        <div class="p-main__head__banner">
            <jsp:include page="../../../src/inc/uikit/_component/bannerSwiper/bannerSwiper.jsp">
                <jsp:param name="id" value="mainBannerSwiper"/>
            </jsp:include>
        </div>
    </div>
</div>
<!-- UI footer -->
<jsp:include page="../../inc/uikit/footer/footer.jsp"></jsp:include>
<!-- //UI footer -->
<!--코드 footer-->
<jsp:include page="../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 footer-->