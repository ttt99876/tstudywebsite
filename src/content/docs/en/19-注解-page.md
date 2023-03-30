---
title: "spring常用注解"
description: "spring常用注解中的相关知识"
---

## 给容器中注入组件


## 注入bean的注解

### 包扫描+组件标注注解

1、@Component：泛指各种组件

2、@Controller、@Service、@Repository都可以称为@Component。

3、@Controller：控制层

4、@Service：业务层

5、@Repository：数据访问层

### @Bean

导入第三方包里面的注解

### @Import

1、@Import(要导入到容器中的组件)；

2、@ImportSelector：返回需要导入的组件的全类名数组；

3、@ImportBeanDefinitionRegistrar：手动注册bean到容器中；

### 使用spring提供的FactoryBean（工厂Bean）

## 注入bean的注解

1、@Autowired：由bean提供

@Autowired可以作用在变量、setter方法、构造函数上；

有个属性为required，可以配置为false；

2、@Inject：由JSR-330提供

@Inject用法和@Autowired一样。

3、 @Resource：由JSR-250提供

@Autowired、@Inject是默认按照类型匹配的，@Resource是按照名称匹配的，@Autowired如果需要按照名称匹配需要和@Qualifier一起使用，@Inject和@Name一起使用。

### @Primary

让spring进行自动装配的时候，默认使用首选的bean，和@Qualifier一个效果。



### @JsonIgnore
1、作用：在json虚拟化时将java bean中的一些属性忽略掉，序列化和反序列化都受影响

2、使用方法：

一般标记在属性或者方法上，返回json数据即不包含该属性

3、注解失效

如果注解失效，可能是因为你使用的是fastJson，尝试使用对应的注解来忽略字段，注解为@JSONField(serialize = false),使用方法一样

### 初始化和销毁方法
