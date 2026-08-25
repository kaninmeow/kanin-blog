<font style="color:rgb(15, 17, 21);">Claude Code 是 Anthropic 推出的</font>**<font style="color:rgb(15, 17, 21);">AI 编程代理</font>**<font style="color:rgb(15, 17, 21);">，它不仅是传统的代码补全工具或聊天助手，而是一个能够在终端、桌面应用和 IDE 中自主运行的</font>**<font style="color:rgb(15, 17, 21);">命令行代理</font>**<font style="color:rgb(15, 17, 21);">——可以读取代码库、编辑文件、执行命令，并在执行可能具有破坏性的操作前请求确认。</font>

<font style="color:rgb(15, 17, 21);">它的独特之处在于</font>**<font style="color:rgb(15, 17, 21);">代理循环</font>**<font style="color:rgb(15, 17, 21);">的工作机制：当你交给它一个任务时，它会自主经历「收集上下文 → 采取行动 → 验证结果」的循环，将数十个操作链接在一起并根据中间结果不断调整</font><font style="color:rgb(15, 17, 21);">。这意味着它不是被动地回答你的问题，而是主动地替你完成编码任务。</font>

<font style="color:rgb(15, 17, 21);">Claude Code 于 2025 年 2 月首次亮相，如今已成为 Anthropic 最重要的 AI Agent 样板之一，被用来证明「AI 可以进入真实工作现场」的核心产品。</font>

### 安装node.js
a. 去[Node.js — 下载 Node.js®](https://nodejs.org/zh-cn/download)点击“Windows安装程序”下载安装包

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783496830355-ab727689-d48a-4462-b5fb-f6b5d89ff1ac.png)

b. 打开下载好的安装包，一路下一步即可！

### 安装claude code
a. 按win + r 打开运行对话框，输入powershell按回车打开终端

b. 在终端中输入如下指令：

```bash
npm install -g @anthropic-ai/claude-code
```

	<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783497056903-29125971-5a8f-4560-be4b-bbdd9789904b.png)

c. 出现如上图所示提示及代表安装成功，关掉当前powershell终端

提示：使用npm安装会出现powershell不能调用claude，但是cmd可以使用的情况，配置完成之后可以让claude自行修复

### 按win + r打开运行对话框，输入cmd按回车打开终端，在终端中输入`claude`即可打开claude code。但是现在没有配置api key，所以会报错
<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783497312234-529991ef-517a-4d72-b735-c5fccd62ac68.png)

### 配置api key：
a. 打开如下目录`C:\Users\你的用户名\.claude`新建文本文件并命名为`settings.json`(需要打开文件扩展名)<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783497539800-a6a1ae0e-b1e5-490c-a141-d6c6ce9ade5b.png)

b. 使用你的文本编辑器打开，这里使用记事本打开，在里面粘贴如下内容：

```json
{
  "env": {
    "ANTHROPIC_BASE_URL": "基础URL",
    "ANTHROPIC_AUTH_TOKEN": "API_KEY",
    "ANTHROPIC_MODEL": "模型ID",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "模型ID",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "模型ID",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "模型ID"
  }
}
```

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783497763173-751421bb-f9ef-48a1-bbd9-b7abee081c04.png)

c. ctrl + s保存，关闭记事本

注意：如果你没有API KEY可以去[Xiaomi Mimo](https://mimo.mi.com/)注册一个mimo，填写如下邀请码可以获得10元的额度`<font style="color:rgb(0, 0, 0);">YZDEVH</font>`

<font style="color:rgb(0, 0, 0);">d. 回到刚才的cmd，重新输入claude 即可打开如下页面，这里是选择claude code 的主题我们保持默认直接按回车即可</font>

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783497948341-5b0d2d51-fa92-495c-ad87-388073ce4a17.png)

e. 这里和下个页面都直接按回车即可

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783497980445-61f3b80e-63a9-4607-91ac-b5b414af6e79.png)

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783498015213-5956f238-9fc0-4911-90c1-42f1b4c4b4f5.png)

f. 看到如下页面就代表claude code 已经配置好了。

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1783498028249-93b8700a-3b85-45c7-a4ef-2e329244d236.png)

### 现在使用claude code修复不能使用powershell运行claude code 的问题，直接给claude发送如下提示词，即可，过程中问yes/no都选择yes就行：
```bash
现在我是用cmd运行Claude是可以正常运行的，但是使用powershell运行claude无法正常运行，帮我修复这个问题！
```

