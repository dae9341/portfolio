<%@ page contentType="text/html;charset=UTF-8" language="java" %>

<div class="m-itemBasic">
    <!--링크-->
    <a href="#" class="m-itemBasic__link"></a>
    <!--//링크-->

    <!--썸네일-->
    <div class="m-itemBasic__image">
        <jsp:include page="../../_atom/item/itemImage.jsp"></jsp:include>
        <jsp:include page="../../_atom/item/itemZzim.jsp"></jsp:include>
    </div>
    <!--//썸네일-->

    <div class="m-itemBasic__content">
        <jsp:include page="../../_atom/item/itemName.jsp"></jsp:include>
        <jsp:include page="../../_atom/item/itemPrice.jsp">
            <jsp:param name="priceType" value="sale"></jsp:param>
        </jsp:include>
        <jsp:include page="../../_atom/item/itemStat.jsp"></jsp:include>
        <jsp:include page="../../_atom/item/itemBenefit.jsp"></jsp:include>
    </div>
</div>