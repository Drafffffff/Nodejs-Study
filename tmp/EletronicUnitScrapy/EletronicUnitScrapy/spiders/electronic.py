import scrapy
from EletronicUnitScrapy.items import EletronicunitscrapyItem


class ElecSpider(scrapy.Spider):
    name = "elec"
    allowed_domains = [".dfrobot.com.cn"]
    start_urls = []
    for i in range(1, 13):
        start_url = "http://www.dfrobot.com.cn/category.php?id=223&price_min=0&price_max=0&page=" + \
            str(i) + "&sort=goods_id&order=DESC"
        start_urls.append(start_url)

    def parse(self, response):
        items = response.xpath('//*[@class="name xiaoFont"]')

        for item in items:
            # print("++++++++++++++++++++++++++++++++++++++")
            Elect = EletronicunitscrapyItem()
            Elect['address'] = "http://www.dfrobot.com.cn/" + \
                item.xpath("./@href").extract()[0]
            Elect['name'] = item.xpath("./@title").extract()[0]
            # print(Elect['address'], '\n', Elect['name'])
            yield scrapy.Request(Elect['address'], callback=self.parse_link, dont_filter=False, meta={'Elect': Elect})

    def parse_link(self, response):
        Elect = response.meta['Elect']
        print (Elect['name'])
        # passw
        yield Elect
