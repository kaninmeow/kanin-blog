# 创建项目
1. 点击“文件-新建-项目”。打开新建项目对话框

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776304261273-2764a199-137c-489e-9fdb-9011c602c7d9.png)

2. 在打开的新建项目对话框中单机左侧项目类型中的SpringBoot 创建SpringBootd项目

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776304370541-cb98f7db-b0f9-44dc-8ae7-d9603f0fcca4.png)

3. 内容解释：
    1. 语言：选择java
    2. 类型：指的是包管理器类型，web项目一般选择maven
    3. 组：一般是公司与名反写比如：com.wfit
    4. 工件：通常是项目名称
    5. 软件包名称：公司域名反写+包名
    6. JDK：根据实际需求，这里我们选择“openJDK 17.0.12”
    7. java：大版本和JDK保持一致
    8. 打包：jar

填写完成后单击下一步

<!-- 这是一张图片，ocr 内容为： -->
![](https://cdn.nlark.com/yuque/0/2026/png/60175026/1776304570068-617d3238-dc03-43cd-9dd8-b1488b494693.png)

4. 这里是选择java依赖，把SprungBoot版本改为3.5.13，我们勾选一下项：
    1. Spring Web
    2. MySQL Driver
    3. Lombok

单击创建

5. 主要文件及文件夹介绍：
    1. .idea: idea生成的文件夹，用于保存idea的配置信息
    2. .mvn：maven的文件夹存放了maven的部分配置
    3. src：代码存放文件夹
    4. pom.xml: 项目的基本信息和依赖坐标
6. 改造application.properties文件：  
将application.propertie重命名为application.yml，并且讲原本内容改为：

```yaml
spring:
  application:
    name: dome
```

7. 手动导入一些必备依赖：
    1. MyBatisPlus：

```xml
<dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
            <version>3.5.15</version>
        </dependency>
```

<font style="color:rgb(53, 56, 65);">在</font><font style="color:rgb(53, 56, 65);"> </font>`<font style="color:rgb(53, 56, 65);background-color:rgb(236, 238, 242);">application.yml</font>`<font style="color:rgb(53, 56, 65);"> </font><font style="color:rgb(53, 56, 65);">配置文件中添加 H2 数据库的相关配置：</font>

```plain
# DataSource Config

spring:

  datasource:

    driver-class-name: org.h2.Driver

    username: root

    password: test

  sql:

    init:

      schema-locations: classpath:db/schema-h2.sql

      data-locations: classpath:db/data-h2.sql
```

<font style="color:rgb(53, 56, 65);">在 Spring Boot 启动类中添加</font><font style="color:rgb(53, 56, 65);"> </font>`<font style="color:rgb(53, 56, 65);background-color:rgb(236, 238, 242);">@MapperScan</font>`<font style="color:rgb(53, 56, 65);"> </font><font style="color:rgb(53, 56, 65);">注解，扫描 Mapper 文件夹：</font>

```plain
@SpringBootApplication

@MapperScan("com.baomidou.mybatisplus.samples.quickstart.mapper")

public class Application {
    public static void main(String[] args) {

        SpringApplication.run(Application.class, args);

    }




}
```

    2. <font style="color:rgb(53, 56, 65);">knife4j：</font>

```xml
<dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
            <version>4.4.0</version>
        </dependency>
```

8. 运行测试，在浏览器访问：localhost:8080/doc.html
9. 完整pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>3.2.5</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.example</groupId>
    <artifactId>demo</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>demo</name>
    <description>demo</description>
    <url/>
    <licenses>
        <license/>
    </licenses>
    <developers>
        <developer/>
    </developers>
    <scm>
        <connection/>
        <developerConnection/>
        <tag/>
        <url/>
    </scm>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>com.baomidou</groupId>
            <artifactId>mybatis-plus-spring-boot3-starter</artifactId>
            <version>3.5.15</version>
        </dependency>

        <dependency>
            <groupId>com.github.xiaoymin</groupId>
            <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>
            <version>4.4.0</version>
        </dependency>

        <dependency>
            <groupId>mysql</groupId>
            <artifactId>mysql-connector-java</artifactId>
            <version>8.0.33</version>
            <scope>runtime</scope>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>

</project>

```

10. 完整application.yml

```yaml
spring:
  application:
    name: dome
  datasource:
    driver-class-name: com.mysql.cj.jdbc.Driver
    url: jdbc:mysql://localhost:3306/database_name?useUnicode=true&characterEncoding=utf-8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true
    username: username
    password: 1234
  # sql:
  #   init:
  #     schema-locations: classpath:db/schema-h2.sql
  #     data-locations: classpath:db/data-h2.sql
# springdoc-openapi????
springdoc:
  swagger-ui:
    path: /swagger-ui.html
    tags-sorter: alpha
    operations-sorter: alpha
  api-docs:
    path: /v3/api-docs
  group-configs:
    - group: 'default'
      paths-to-match: '/**'
      packages-to-scan: com.xiaominfo.knife4j.demo.web
# knife4j???????????????
knife4j:
  enable: true
  setting:
    language: zh_cn
```

