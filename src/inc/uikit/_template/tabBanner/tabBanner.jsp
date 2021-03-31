<%--
  Created by IntelliJ IDEA.
  User: dae93
  Date: 2021-03-31
  Time: 오후 2:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!--메인배너 타입1-->
<div class="t-tabBanner" id="tabBanner">
    <ul class="t-tabBanner__banner">
        <li><div><img src="" alt="이미지1번"></div></li>
        <li><div><img src="" alt="이미지2번"></div></li>
        <li><div><img src="" alt="이미지3번"></div></li>
        <li><div><img src="" alt="이미지4번"></div></li>
        <li><div><img src="" alt="이미지5번"></div></li>
    </ul>

    <div class="t-tabBanner__tab">
        <div><a href="#">탭 1번</a></div>
        <div><a href="#">탭 2번</a></div>
        <div><a href="#">탭 3번</a></div>
        <div><a href="#">탭 4번</a></div>
        <div><a href="#">탭 5번</a></div>
    </div>
</div>
<script>
    var test;
    $(function (){
        test = new kdh.template.tabBanner("#tabBanner",{

        });
    });
</script>