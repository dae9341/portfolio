<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /**
     * itemStatus [String:""]
     * -soldout: 일시품절
     * -ready: 상품 준비중
     *
     * */
    String itemStatus = (request.getParameter("itemStatus")==null)? "" : request.getParameter("itemStatus");
    String itemStatusClass = itemStatus.equals("") ? "":" -"+itemStatus;

%>
<div class="a-itemImage<%=itemStatusClass%>">
    <img src="" alt="">

    <%if(itemStatus.equals("soldout")){%>
    <span class="a-itemImage__soldout">
        일시품절
    </span>
    <%}%>
    <%if(itemStatus.equals("ready")){%>
    <span class="a-itemImage__ready">
        상품 준비중
    </span>
    <%}%>
</div>