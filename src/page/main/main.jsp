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
<%--
    <div class="p-main__content">
        <div class="p-main__content__list">
            <ul class="t-boxList -row4 type-default">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li>
                <li>8</li>
                <li>9</li>
                <li>10</li>
            </ul>
        </div>

    </div>--%>
</div>
<!-- UI footer -->
<jsp:include page="../../inc/uikit/footer/footer.jsp"></jsp:include>
<!-- //UI footer -->
<!--코드 footer-->
<jsp:include page="../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 footer-->