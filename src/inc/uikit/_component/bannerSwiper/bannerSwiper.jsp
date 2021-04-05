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

    /*
     * isAutoplay 오토슬라이드 사용 여부
     * true: 사용(디폴트)
     * false: 미사용
     * */
    boolean isAutoplay = (request.getParameter("isAutoplay") == null ) ? true : Boolean.parseBoolean(request.getParameter("isAutoplay"));


    /*
     * isCounter 카운터 사용 여부
     * true: 사용(디폴트)
     * false: 미사용
     * */
    boolean isCounter = (request.getParameter("isCounter") == null ) ? true : Boolean.parseBoolean(request.getParameter("isCounter"));

    /*
     * 슬라이드 바 입력불가 사용 여부
     * true: 사용
     * false: 미사용(디폴트)
     * */
    boolean isBar = (request.getParameter("isBar") == null ) ? false : Boolean.parseBoolean(request.getParameter("isBar"));
%>

<div class="c-bannerSwiper" id="<%=id%>">
    <div class="c-bannerSwiper__swiper">
        <!-- Slider main container -->
        <div class="swiper-container">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
                <div class="swiper-slide">Slide 4</div>
                <div class="swiper-slide">Slide 5</div>
                <div class="swiper-slide">Slide 6</div>
                <div class="swiper-slide">Slide 7</div>
                <div class="swiper-slide">Slide 8</div>
                <div class="swiper-slide">Slide 9</div>
            </div>
            <%if(!isBar){%>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
            <%}%>

            <!-- If we need navigation buttons -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

        </div>

        <%if(isCounter){%>
        <!--카운터-->
        <div class="c-bannerSwiper__counter">
        </div>
        <!--//카운터-->
        <%}%>

        <%if(isBar){%>
        <!--바 표시-->
        <div class="c-bannerSwiper__bar">
        </div>
        <!--//바 표시-->
        <%}%>
    </div>
</div>

<script>
    var <%=id%>;
    $(function () {
        <%=id%> = new kdh.component.bannerSwiper("#<%=id%>",{
            autoplay:<%=isAutoplay%>,
            counter:<%=isCounter%>,
            bar:<%=isBar%>
        });
    })
</script>