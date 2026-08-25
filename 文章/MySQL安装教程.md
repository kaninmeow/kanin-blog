### 1.下载安装包
1. 进入mysql官网：https://mysql.com
2. 点击上方的“下载”

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313508456-7a151e86-1085-46ed-b61e-fcc903d6a210.png)

3. 点击MySQL Community (GPL) Downloads »

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313551404-38616960-d2f0-4a88-84a8-d08600b20947.png)

4. 点击MySQL Installer for Windows

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313611266-25b5dff1-2e92-419b-8208-54fe14c5aff2.png)

5. 点击download下载

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313632484-501c8b10-c9d1-4286-8eac-ed13a651ad37.png)

6. 点击No thanks, just start my download.可以不用账号下载

### 安装MySQL
1. 双击安装包打开MySQL Install

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313884641-de083970-77d2-491d-a0b6-a723be4b9d3d.png)

2. 选择Server only 只安装服务器

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313919708-11fd5242-fadb-438a-b17d-76c0f557dd4c.png)

3. 单击mysql Server8.0.45，并点击Execute，等待安装结束后点击next

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776313998156-38d7c3d7-841a-4b31-913c-7aab2f4f127c.png)

4. 保持默认即可，点击Next

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314043075-60881201-a6c3-42c3-83b6-204c3e35e75c.png)

5. 保持默认点击Next

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314066981-d533f5d9-69cb-49c6-9c15-5f4b28268ddf.png)

6. 设置root账户密码，开发环境不建议设置的太复杂，容易忘

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314126959-a32bf523-0689-4e0b-a556-93691829d803.png)

7. 保持默认点击Next

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314163699-6aa59878-b9fa-495e-8083-a7b688ba42c0.png)

8. 记住这里的安装地址保持默认！！！一定不要更改，点击Next
9. 点击Execule等待安装结束即可

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314238408-a8534a9e-95aa-4c52-b81e-1aad1de6324c.png)

10. 点击Next即可
11. 下面开始设置环境变量，按win + s 搜索“设置系统环境变量”按enter打开系统属性对话框

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314790276-b3e20598-5f9b-40c8-b531-47789629799b.png)

12. 点击环境变量，打开环境变量对话框

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314819928-f8953ce5-81a6-4834-9edd-bcdcb86ffadd.png)

13. 双击系统环境变量中的“Path”打开编辑环境变量对话框

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776314874386-0c59d600-e61f-4f5c-9c1e-6294463b3049.png)

14. 单击新建按钮 -> 输入MySQL的安装地址+"\bin"，如果第八步没做更改的话直接填写“C:\Program Files\MySQL\MySQL Server 8.0\bin”即可
15. 依次点击每个对话框的确定按钮关闭所有对话框
16. 重启电脑
17. 按win + r 输入cmd打开命令提示符，输入“mysql --version”如果弹出如下提示及代表安装成功

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776315229031-3d0e99dc-5563-4df6-bb21-3b8a38da6f80.png)

