<%--
  Created by IntelliJ IDEA.
  User: dae93
  Date: 2021-02-07
  Time: 오전 10:44
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
     * id (필수값)
     * */
    String id = request.getParameter("id");
%>

<div class="c-promSlider" id="<%=id%>">
    <div class="slipper-container c-promSlider__container">
        <div class="slipper-wrapper">
            <div class="slipper-item c-promSlider__container__item" style="background: #007aff">
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
            </div>
            <div class="slipper-item c-promSlider__container__item" style="background: yellowgreen">
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
            </div>
            <div class="slipper-item c-promSlider__container__item">
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
                <jsp:include page="../../../uikit/_module/banner/promBanner.jsp"></jsp:include>
            </div>
        </div>
    </div>

    <div class="c-promSlider__paging">
        <jsp:include page="../../../uikit/_module/swiperPiece/slipperPaging.jsp"></jsp:include>
    </div>

</div>

<script>
    var test;
    $(function () {
        test=new kdh.component.promSlider("#<%=id%>",{
            initIdx: 0,
            speed:500,
            autoPlay:false,
            transition:"none",
            delay:2000,
        });
    })
</script>