const {chromium} = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const listArr = [];

  await page.goto('https://www.gongyoungshop.kr/main.do'); // 메인 페이지 이동
  console.log("메인페이지 이동");

  await page.click('.c-gnb__nav__a:nth-child(7)'); // 베스트 클릭
  console.log("베스트100 이동");

  await timesleep();
  console.log("3초 딜레이 종료");

  const data_best100 = await page.$$(`#bestCont > ul >li`);
  console.log("데이터 추출");

  async function timesleep (){
    await page.evaluate(() => {
      return new Promise((resolve) => setTimeout(resolve, 3000));

    });
  };

  for (let list of data_best100) {
    const obj = {}

    const $num = await list.$(`.num`);
    const num = await $num.innerText();

    const $thumnail = await list.$(`.m-goods .m-goods__canvas__thumb .a-goodsThumb img`);
    const thumnailUrl = await $thumnail.getAttribute("src");

    const $goodsName = await list.$(`.m-goods .m-goods__info .a-goodsName__name`);
    const goodsName = await $goodsName.innerText();

    const $goodsPrice = await list.$(`.m-goods .a-price__price`);
    const goodsPrice = await $goodsPrice.innerText();

    const $isGoodsZzim = await list.$(`.m-goods .a-goodsZzim`);
    const isGoodsZzim = $isGoodsZzim ? true:false;


    obj.num = num;
    obj.thumnailUrl = thumnailUrl;
    obj.goodsName = goodsName;
    obj.goodsPrice = goodsPrice;
    obj.isGoodsZzim = isGoodsZzim;


    listArr.push(obj)
  }

  console.log(listArr);

  const best100Data = await JSON.stringify(listArr);
  fs.writeFileSync('best100Data.json', best100Data);
  // console.log('url::',page.url());
  // console.log('data::',data_best100);

  // await page.screenshot({path: 'C:\\Users\\kdh976\\Desktop\\테스트\\dataExtract.png',fullPage:true});

  await browser.close();

})();






