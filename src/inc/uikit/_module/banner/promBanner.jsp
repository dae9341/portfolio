<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");
%>
<!--프로모션 배너-->
<div class="m-promBanner">
    <a href="#1" class="m-promBanner__link">
        <div class="m-promBanner__image">
            <img class="a-bannerImage" src="//ui.ssgcdn.com/cmpt/banner/202107/2021070912255828307943863794_674.png" alt="">
        </div>
        <div class="m-promBanner__content">
            <div class="m-promBanner__content__title">TV쇼핑의 신세계</div>
            <div class="m-promBanner__content__detail">쇼핑라이브 대표상품 만나보기</div>
        </div>
    </a>
    <a href="#2" class="m-promBanner__category"><img src="//ui.ssgcdn.com/cmpt/banner/202109/2021092916071584549435591053_618.png" alt=""></a>


    <a href="#3" class="m-promBanner__directLink">
        바로가기 >
    </a>

</div>
<!--//프로모션 배너-->