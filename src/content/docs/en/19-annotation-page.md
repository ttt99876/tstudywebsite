---
title: "常用注解"
description: "常用注解中的相关知识"
---

## 一、@RestController

    1、@RestController 是@controller和@ResponseBody 的结合，@RestController注解属于springmvc的，并不属于springboot的

            @Controller 将当前修饰的类注入SpringBoot IOC容器，该类代表控制器类(控制层/表现层)。这里控制层里面的每个方法，都可以去调用@Service标识的类（业务逻辑层）

            @ResponseBody 它的作用简短截说就是指该类中所有的API接口返回的数据，甭管你对应的方法返回Map或是其他Object，它会以Json字符串的形式返回给客户端（浏览器页面）



## 二、@RequestMapping

    1、作用：将请求和处理请求的控制器方法关联起来，建立映射关系。SpringMVC 接收到指定的请求，就会来找到在映射关系中对应的控制器方法来处理这个请求。

    2、位置

            （1）标识一个类：设置映射请求路径的初始信息

            （2）标识一个方法：设置映射请求路径的具体信息

    3、属性

            （1）value

                  通过请求地址匹配请求映射

                  是一个字符串类型的数组时，表示请求映射能够匹配多个请求地址所对应的请求

                  必须设置，至少通过请求地址匹配请求映射，value可以省略 。如@RequestMapping("/simpleParam")

            （2）method

                  通过请求的请求方式（get或者post）匹配请求映射

                  是一个RequestMethod类型的数组，表示该请求映射能够匹配多种请求方式的请求,如@RequestMapping(value="/simpleParam",method="RequestMethod.GET")

                  若当前请求的请求地址满足请求映射的value属性，但是不满足method属性，则浏览器报错405:Request method ‘POST’ not supported。针对处理指定请求方式控制错误，SpringMVC中提供了@RequestMapping的派生注解

                        处理get请求的映射:@GetMapping

                        处理post请求的映射:@PosttMapping

                        处理put请求的映射:@PutMapping

                        处理delete请求的映射:@DeleteMapping

            （3）params

                  通过请求的请求参数匹配请求映射

                  是一个字符串类型的数组，可以通过四种表达式设置请求参数和请求映射的匹配关系
```js
"param":要求请求映射所匹配的请求必须携带param请求参数
"!param":要求请求映射所匹配的请求必须  不能  携带param请求参数
"param=value":要求请求映射所匹配的请求必须携带param请求参数  且 param=value
"param != value":要求请求映射所匹配的请求必须携带param请求参数 且 param != value
```
```java
  @RequestMapping(
        value={"/simpleParam","/test"},
        method={RequestMethod.GET,RequestMethod.POST},
        params={"username","password != 123456"}
    )
    
    public String simpleParam(@RequestParam(name = "name") String username, Integer age) {
        //String name = request.getParameter("name");
        //String ageStr = request.getParameter("age");
        //int age = Integer.parseInt(ageStr);
        System.out.println(username + ":" + age);
        return "200";
    }
```

            （3）headers

                  通过请求头信息匹配请求映射

                  注解的headers属性是一个字符串类型的数组，可以通过四种表达式设置请求头信息和请求映射的匹配关系

```js
"header":要求请求映射所匹配的请求必须携带header请求参数
"!header":要求请求映射所匹配的请求必须  不能  携带header请求参数
"header=value":要求请求映射所匹配的请求必须携带header请求参数  且 header=value
"header != value":要求请求映射所匹配的请求必须携带header请求参数 且 header != value
```

## 三、SpringMVC支持ant风格的路径

    1、？表示任意单个字符

    2、*表示任意0个或多个字符

    3、**表示任意的一层或多层目录

## 四、SpringMVC支持路径中的占位符
    1、原始方式：/deleteUser?id=1

    2、rest方式：/deleteUser/1

## 五、@RequestParam
    1、作用：将请求参数区域的数据映射到控制层方法的参数上

    2、主要参数有：

            value（name）:请求中传入参数的名称，如果不设置后台接口的value值，则会默认为该变量名。
```java
// 注解源码
@Target({ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface RequestParam {
    @AliasFor("name")
    String value() default "";

    @AliasFor("value")
    String name() default "";

    boolean required() default true;

    String defaultValue() default "\n\t\t\n\t\t\n\ue000\ue001\ue002\n\t\t\t\t\n";
}
```
```java
// 设置了value（name）="值"  则前端传参的参数名可以为此值
  public String simpleParam(@RequestParam(name = "name") String username, Integer age) {
        //String name = request.getParameter("name");
        //String ageStr = request.getParameter("age");
        //int age = Integer.parseInt(ageStr);
        System.out.println(username + ":" + age);
        return "200";
    }

// 如不设置value（name）="值"，前端所传参数必须要是方法参数username
```

            required:该参数是否为必传项。默认为true,表示请求中一定要传入对应的参数，否则会报404错误，如果设置为false时，当请求中没有此参数，将会默认为Null,而对于基本数据类型的变量，则必须有值，这是会抛出空指针异常。如果允许空值，则接口中变量需要使用包装类来声明

            defaultValue:参数的默认值，如果请求中没有同名的参数时，该变量默认为此值。注意默认值可以使用SqlEL表达式。如"#{systemProperties[‘java.vm.version’]}"



## 六、@PathVariable
    @PathVariable 映射 URL 绑定的占位符。通过 @PathVariable 可以将 URL 中占位符参数绑定到控制器处理方法的入参中:URL 中的 {xxx} 占位符可以通过@PathVariable(“xxx”) 绑定到操作方法的入参中。
```java
    @RequestMapping("/paths/{id}/{name}")
    public String paths(@PathVariable Integer id,@PathVariable String name) {
        System.out.println(id+" "+name);//输入几就是几
        return "ok";
    }
```

## 七、@Component

    泛指各种组件.将单前类交给IOC容器管理，成为IOC容器中的bean。@Controller、@Service、@Repository都可以称为@Component

        @Controller：控制层

        @Service：业务层

        @Repository：数据访问层


## 八、@Autowired

    由bean提供，可以作用在变量、setter方法、构造函数上；

    有个属性为required，可以配置为false。

    默认是按照类型进行，如果存在多个相同类型的bean，将会报错。解决方式如下：

                        @Primary 配合控制反转使用。如出现两个实现类，此时可以用这个注解来确定使用那个实现类

                        @Qualifier  配合@Autowired使用。 @Qualifier("首字母小写的实现类的类名")

                        @Resource 和@Autowired注解一样的位置，单独使用，通过name指定实现类的类名（首字母小写）@Resource(name="empServiceB")

## 九、@Resource
    和@Autowired一样。

## 十、@Autowired、@Resource的区别
                @Autowired和@Resource的区别

                        @Autowired是spring框架提供的注解，而@Resource是JDK提供的注解

                        @Autowired默认是按照类型注入，而@Resource默认是按照名称注入

## 十一、@Inject

    由JSR-330提供。@Inject用法和@Autowired一样。

## 十二、@ComponentScan

    前面声明bean的四大注解，要想生效，还需要被组件扫描注解@ComponentScan扫描

    @ComponentScan注解虽然没有显示配置，但是实际上已经包含在启动类声明注解@SpringBootApplication中，默认扫描的范围是启动类所在包及其子包,可以看源码

![image](/img/java/springBoot/14-Bean组件扫描.png)

## 十三、@Mapper
    在运行时，会自动生成该接口的实现类对象（代理对象），并且将该对象交给IOC容器管理
```java
@Mapper 
public interface UserMapper {
    public List<User> list();
}
```
## @SpringBootTest 
    springboot整合单元测试的注解
```java
@SpringBootTest //springboot整合单元测试的注解
class MybatisDemoApplicationTests {

    @Test //方法测试
    void contextLoads() {
    }

}
```






## lombok
    是一个实用的java类库，能通过注解的形式自动生成构造器、getter/setter、equals、hashcode、toString等方法，并可以自动化生成日志变量，简化java开发、提高效率

注解|作用
-|:-:
@Getter/@Setter	     | 为所有的属性提供get/set方法  
@ToString            | 会给类自动生成易阅读的toString方法 
@EqualsAndHashCode	 | 根据类所拥有的非静态字段自动重写equals方法和hashCode方法 
@Data                | 提供了更综合的生成代码功能（@Getter + @Setter + @ToString + @EqualsAndHashCode） 
@NoArgsConstructor   | 为实体类生成无参的构造器方法
@AllArgsConstructor  | 为实体类生成除了static修饰的字段之外带有各参数的构造器方法

    目的
![image](/img/java/mybatis/05-lombok.png)

    使用
```java
<!-- 添加lombok，减少实体类的臃肿-->
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
</dependency>
```
    实体类
```java
@Data
@NoArgsConstructor
@AllArgsConstructor
public class User {
    private Integer id;
    private String name;
    private Short age;
    private Short gender;
    private String phone;
}
```

## @Options
    在新增数据的时候，自动将生成的主键值，赋值给emp对象的id属性

            useGeneratedKeys：是否是自增长，必须设置 true

            keyProperty：实体类主键属性名称

            keyColumn：数据库主键字段名称
```java
// keyProperty指定要出现的值，useGeneratedKeys
@Options(keyProperty = "id",useGeneratedKeys = true)
```

## @Param
    用来在DAO层中声明参数的注解方式 或者  指明一个函数的参数的意思

    可以归档方法或构造器的某个单一参数，或者归档类、接口以及泛型方法的类型参数。
```java
public List<Emp> getByIf(@Param("name")String name ,@Param("gender")Short gender,@Param("begin")LocalDate begin, @Param("end")LocalDate end);

List<Emp> empList = empMapper.getByIf("张",(short)1, LocalDate.of(2010, 2, 2), LocalDate.of(2020, 2, 2));
```

## @Slf4j
    lombok下面的注解，用来输出日志信息

    相当于private  static Logger log = LoggerFactory.getLogger(DeptController.class);
