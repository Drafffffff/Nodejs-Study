# -*- coding: utf-8 -*-
import scrapy
from zstu2018.items import Zstu2018Item

class ZstuSpider(scrapy.Spider):
    name = 'zstu'
    allowed_domains = ['edu.cn']
    start_urls = ['http://news.zstu.edu.cn/lgyw1.htm','http://news.zstu.edu.cn/xyjw.htm']

    IsContinue= True

    def parse(self, response):
        nodes = response.xpath("//ul[@class='right_vter']/div")
        for node in nodes:
            time = str( node.xpath("./span/text()").extract()[0])
            # if time[0:4] != "2018":
            #     self.IsContinue = False 
            #     break
            link = node.xpath("./a/@href").extract()[0]
            if link.find("../") != -1:
                link = link[3:]
            yield scrapy.Request('http://news.zstu.edu.cn/' + link,callback=self.parse_link,dont_filter=False)

        if self.IsContinue:
            link=response.xpath("//a[@class='Next'][1]/@href").extract()[0]
            if link.find("lgyw1/") == -1:
                link = "lgyw1/"+link
            NextLink = "http://news.zstu.edu.cn/" + link
            yield scrapy.Request(NextLink , callback = self.parse,dont_filter=True)


    def parse_link(self, response):
        item = Zstu2018Item()
        articals = response.xpath("//*[@id='vsb_content']/p/text()").extract()
        articals2 = response.xpath("//*[@id='vsb_content_2']/p/text()").extract()
        main_artical = ""
        for artical in articals:
            # artical=artical.encode("utf-8")
            string = str(artical)
            main_artical += string
        for artical in articals2:
            # artical=artical.encode("utf-8")
            string = str(artical)
            main_artical += string
        item["articl"]= main_artical
        title = response.xpath("/html/body/div[4]/div[2]/form/div/div[1]/text()").extract()[0]
        item["title"] = title
        yield item
        