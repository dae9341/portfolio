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
    * id (필수값)
    * */
    String id = request.getParameter("id");

    /*
    * type 인풋 type 요소
    * text : 텍스트입력 (디폴트)
    * password : 패스워드
    * number : 숫자
    *
    * */
    String type = (request.getParameter("type") == null ) ? "text" : request.getParameter("type");

    /*
    * placeholder :placeholder값
    * */
    String placeholder = (request.getParameter("placeholder") == null ) ? "입력하세요." : request.getParameter("placeholder");

    /*
     * isDisabled 입력불가 사용 여부
     * true: 사용
     * false: 미사용(디폴트)
     * */
    boolean isDisabled = (request.getParameter("isDisabled") == null ) ? false : Boolean.parseBoolean(request.getParameter("isDisabled"));
    String disabledClass = isDisabled ? "-disabled":"";


    /*
    * isClearFunc 내용입력시 삭제 버튼 사용 여부
    * true: 사용(디폴트)
    * false: 미사용
    * */
    boolean isClearFunc = (request.getParameter("isClearFunc") == null ) ? true : Boolean.parseBoolean(request.getParameter("isClearFunc"));


    /*
     * isPwToggleFunc 패스워드 보이기/가리기 사용 여부
     * true: 사용
     * false: 미사용(디폴트)
     * */
    boolean isPwToggleFunc = (request.getParameter("isPwToggleFunc") == null ) ? false : Boolean.parseBoolean(request.getParameter("isPwToggleFunc"));

%>
<span class="a-input <%=disabledClass%>" id="<%=id%>">
    <input type="<%=type%>" class="a-input__area" placeholder="<%=placeholder%>" <%if(isDisabled){%>disabled="disabled" <%}%> autocapitalize="off">


    <%if(!isDisabled && (isClearFunc || isPwToggleFunc)){%>
    <span class="a-input__btns">
        <%if(isClearFunc){%>
        <a href="#" class="a-input__clear"></a>
        <%}%>


        <%if(type.equals("password")&& isPwToggleFunc){%>
        <label for="<%=id%>PwView" class="a-input__pwView">
            <input type="checkbox" id="<%=id%>PwView">
            <span class="a-input__pwView__text">보이기</span>
        </label>
        <%}%>
    </span>
    <%}%>
</span>
<script>
    <%if(isClearFunc){%>
    var test;
    $(function () {
        test = new kdh.atom.input("#<%=id%>");
    });
    <%}%>
</script>