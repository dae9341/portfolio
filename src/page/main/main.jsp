<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!--코드 header-->
<jsp:include page="../../../src/inc/common/header.jsp"></jsp:include>
<!--//코드 header-->

<!-- UI header -->
<jsp:include page="../../../src/inc/uikit/common/header/header.jsp"></jsp:include>
<!-- //UI header -->
<div class="p-main">
    <!-- 탭리스트 -->
    <div class="t-headerAttachTab" id="headerAttachTab">
        <div class="t-headerAttachTab__list">
            <ul>
                <li class="current">상품설명</li>
                <li>기본정보</li>
                <li>상품후기(415)</li>
                <li>Q&amp;A(85)</li>
            </ul>
        </div>
    </div>
    <!-- //탭리스트 -->

    <div class="p-main__head">
        메인페이지
        <div class="p-main__head__banner">
            <jsp:include page="../../../src/inc/uikit/_component/bannerSwiper/bannerSwiper.jsp">
                <jsp:param name="id" value="mainBannerSwiper"/>
            </jsp:include>
        </div>
    </div>

    <div>
        <jsp:include page="../../../src/inc/uikit/_template/boxList/boxList.jsp"></jsp:include>
        <jsp:include page="../../../src/inc/uikit/_template/boxList/boxList.jsp"></jsp:include>
        <jsp:include page="../../../src/inc/uikit/_template/boxList/boxList.jsp"></jsp:include>
        <jsp:include page="../../../src/inc/uikit/_template/boxList/boxList.jsp"></jsp:include>
    </div>

    <a href="#" onclick="kdh.common.layer.open('#layerTest1'); return false;">레이어 테스트</a>

    <jsp:include page="../../../src/inc/uikit/common/layer/layer.jsp">
        <jsp:param name="id" value="layerTest1"></jsp:param>
    </jsp:include>
    <script>
        $(function (){
            kdh.template.headerAttachTab("#headerAttachTab")
        });
    </script>
</div>
<!-- UI footer -->
<jsp:include page="../../../src/inc/uikit/common/footer/footer.jsp"></jsp:include>
<!-- //UI footer -->
<!--코드 footer-->
<jsp:include page="../../../src/inc/common/footer.jsp"></jsp:include>
<!--//코드 footer-->