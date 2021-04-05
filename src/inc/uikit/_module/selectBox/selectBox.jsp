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
    * id  (필수값)
    * */
    String id = request.getParameter("id");

    /*
     * isDisabled 입력불가 사용 여부
     * true: 사용
     * false: 미사용(디폴트)
     * */
    boolean isDisabled = (request.getParameter("isDisabled") == null ) ? false : Boolean.parseBoolean(request.getParameter("isDisabled"));
%>

<div class="m-selectBox" id="<%=id%>">
    <div class="m-selectBox__button">
        <a href="#" ><span>셀렉트박스 버튼</span></a>
    </div>
    <div class="m-selectBox__options">
        <ul>
            <li>
                <label>
                    <input type="radio" name="selectBoxOption" value="옵션을 선택해주세요">
                    <span>옵션을 선택해주세요</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="selectBoxOption" value="옵션명1">
                    <span>옵션명1</span>
                </label>
            </li>
            <li class="-disabled">
                <label>
                    <input type="radio" name="selectBoxOption" value="옵션명2">
                    <span>옵션명2</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="selectBoxOption" value="옵션명3">
                    <span>옵션명3</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="selectBoxOption" value="옵션명4">
                    <span>옵션명4</span>
                </label>
            </li>
            <li>
                <label>
                    <input type="radio" name="selectBoxOption" value="옵션명5">
                    <span>옵션명5</span>
                </label>
            </li>
        </ul>
    </div>
</div>

<script>
    var aaa;
    $(function () {
        aaa = new kdh.module.selectBox("#<%=id%>",{
            isDisabled: <%=isDisabled%>
        });
    });


    /*
    * API
    *
    * 실행부
    * aaa = new selectBox("id값",{
            옵션
        });
    * 파라미터 :: id , 옵션 {
            isDisabled: true // 비활성화여부
        }
    *
    * 함수
    * aaa.open(); 셀렉트박스(옵션리스트) 열기
    * aaa.close(); 셀렉트박스(옵션리스트) 닫기
    * aaa.toggle(); 셀렉트박스(옵션리스트) 토글
    * aaa.select(인덱스); 해당 인덱스 선택
    * aaa.toggleEnabled("enabled"); 셀렉트박스 활성화
    * aaa.toggleEnabled("disabled"); 셀렉트박스 비활성화
    *
    * aaa.index 현재 인덱스 값
    * aaa.value 현재 값
    * */
</script>