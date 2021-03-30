<%--
  Created by IntelliJ IDEA.
  User: dae93
  Date: 2021-03-30
  Time: 오후 2:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /*
    * template 형식으로 파라미터는 참고용, html구조 그대로 옵션만 변경해서 코딩
    * */

    /*
    * type
    * type-default(디폴트): 기본형태로 li요소에만 보더 존재
    * type-full: li요소, ul의 빈영역에 보더 존재
    * type-waffle: 겉 테두리 보더 제거
    *
    * */
    String type = (request.getParameter("type") == null ) ? "type-default" : request.getParameter("type");


    /*
    * row
    * row숫자: 숫자만큼 row가 나눠짐.
    * (현재 1~6까지 세팅, 디폴트 4)
    * */
    String row = (request.getParameter("row") == null ) ? "4" : request.getParameter("row");
%>

<ul class="t-boxList -row4 type-full">
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
