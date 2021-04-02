<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    String id = request.getParameter("id");
%>
<div class="com-layer" id="<%=id%>">
    <div class="com-layer__box">
        <div class="com-layer__header">
            <h1>레이어 헤더</h1>
        </div>

        <div class="com-layer__content">
            ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ
        </div>


        <div class="com-layer__footer">
            <a href="#" class="com-layer__footer__submit">확인</a>
            <a href="#" class="com-layer__footer__close">닫기</a>
        </div>
    </div>
</div>