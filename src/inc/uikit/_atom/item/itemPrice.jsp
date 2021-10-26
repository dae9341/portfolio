<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%
    /**
     * priceType [String:"normal"]
     * -normal: 판매가 표기
     * -sale: 할인가 표기
     * -rental: 상담상품
     *
     * */
    String priceType = (request.getParameter("priceType") == null) ? "normal":request.getParameter("priceType");

%>

<div class="a-itemPrice">
    <%if(priceType.equals("normal")){%>
    <span class="a-itemPrice__now">12,900</span>
    <%}%>
    <%if(priceType.equals("sale")){%>
    <span class="a-itemPrice__percent">60%</span>
    <span class="a-itemPrice__now">12,900</span>
    <span class="a-itemPrice__origin">32,900</span>
    <%}%>
    <%if(priceType.equals("rental")){%>
    <span class="a-itemPrice__rental">상담접수상품</span>
    <%}%>
</div>