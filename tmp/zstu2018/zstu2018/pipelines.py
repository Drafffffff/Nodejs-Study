# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://doc.scrapy.org/en/latest/topics/item-pipeline.html


class Zstu2018Pipeline(object):
    def __init__(self):
        self.f = open('data.txt','w',encoding='utf-8')
        pass


    def process_item(self, item, spider):
        text = (item["title"]+"\n"+item["articl"]+"\n")
        self.f.write(text)
        return item


    def close_spiser(self,spider):
        self.f.close()
        pass

