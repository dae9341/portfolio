<%--
  Created by IntelliJ IDEA.
  User: dae93
  Date: 2021-03-31
  Time: 오후 2:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<!--메인배너 타입1-->
<a class="t-tabBanner" id="tabBanner">
    <ul class="t-tabBanner__banner">
        <li><a href="#"><img src="//ui.ssgcdn.com/cmpt/banner/202112/2021120114494557809909758990_343.jpg" alt="이미지1번"></a></li>
        <li><a href="#"><img src="//ui.ssgcdn.com/cmpt/banner/202112/2021120315402292969203529920_569.jpg" alt="이미지2번"></a></li>
        <li><a href="#"><img src="//ui.ssgcdn.com/cmpt/banner/202112/2021120213240280787378642837_944.jpg" alt="이미지3번"></a></li>
        <li><a href="#"><img src="//ui.ssgcdn.com/cmpt/banner/202111/2021112616441326707616223761_168.jpg" alt="이미지4번"></a></li>
        <li><a href="#"><img src="//ui.ssgcdn.com/cmpt/banner/202111/2021112611291196827094126709_295.jpg" alt="이미지5번"></a></li>
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