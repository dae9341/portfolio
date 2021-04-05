<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/__header.jsp"></jsp:include>
<!--//코드 header-->
<div class="wsgFrame">
    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">배너 스와이퍼 - 기본</p>
        <jsp:include page="bannerSwiper.jsp">
            <jsp:param name="id" value="bannerSwiperWSG1"></jsp:param>
        </jsp:include>
    </div>

    <div class="wsgFrame__layout">
        <p class="wsgFrame__layout__title">배너 스와이퍼 - 슬라이드 바 사용</p>
        <jsp:include page="bannerSwiper.jsp">
            <jsp:param name="id" value="bannerSwiperWSG2"></jsp:param>
            <jsp:param name="isBar" value="true"></jsp:param>
        </jsp:include>
    </div>

</div>
<!--코드 header-->
<jsp:include page="../../../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 header-->
