<%--
  Created by IntelliJ IDEA.
  User: dae93
  Date: 2021-03-31
  Time: 오후 2:03
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%

    /*
     * isChecked 체크 사용 여부
     * true: 사용
     * false: 미사용(디폴트)
     * */
    boolean isChecked = (request.getParameter("isChecked") == null ) ? false : Boolean.parseBoolean(request.getParameter("isChecked"));

    /*
     * isDisabled 입력불가 사용 여부
     * true: 사용
     * false: 미사용(디폴트)
     * */
    boolean isDisabled = (request.getParameter("isDisabled") == null ) ? false : Boolean.parseBoolean(request.getParameter("isDisabled"));
    String disabledClass = isDisabled ? "-disabled":"";

%>
<label class="a-checkbox <%=disabledClass%>">
    <input type="checkbox" name="" tabindex="" <%if(isChecked){%> checked <%}%> class="a-checkbox__input" <%if(isDisabled){%>disabled="disabled"<%}%>>
    <i class="a-checkbox__virtualBox"></i>
    <span class="a-checkbox__name">체크박스</span>
</label>
<%--
    샘플::
<label class="a-checkbox -disabled">
    <input type="checkbox" name="" tabindex="" checked class="a-checkbox__input" disabled="disabled">
    <i class="a-checkbox__virtualBox"></i>
    <span class="a-checkbox__name">체크박스</span>
</label>

--%>