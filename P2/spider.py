from bs4 import BeautifulSoup
import requests

url = 'http://www.hhu.edu.cn/s/1/t/2655/p/11/c/425/d/441/list.htm'
wb_data = requests.get(url)
soup = BeautifulSoup(wb_data.text,'lxml')
imgs = soup.select('#newslist > table > tbody img')
descs = soup.select('#newslist > table > tbody td')

for img,desc in zip(imgs,descs):
	print(img.get('src'))
	print(desc.get_text(strip=True))

# for img,desc in zip(imgs,descs):
# 	data = {
# 		'img':img.get('src'),
# 		'desc':desc.get_text()
# 	}
# 	print(data)
