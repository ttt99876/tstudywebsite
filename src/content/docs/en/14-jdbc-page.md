---
title: "JDBC"
description: "JDBC中的相关知识"
---
JDBC( Java DataBase Connectivity ) 称为 Java数据库连接 ，它是一种用于数据库访问的**应用程序 API** ，由一组用Java语言编写的类和接口组成.

有了JDBC,就可以用**统一的语法**对**多种关系数据库**进行访问，而不用担心其数据库操作**语言的差异**。 

有了JDBC，就不必为访问Mysql数据库专门写一个程序，为访问Oracle又专门写一个程序等。

![image](/img/java/JDBC/jdbc原理图.png)

JDBC本质：官方(sun公司)定义的一套操作所有关系型数据库的规则——接口。各个数据库厂商去实现这套接口，提供数据库驱动jar包，我们可以使用这套接口（JDBC）编程。真正执行的代码是驱动jar包中的实现类
   
## 一、入门

### 步骤

    1、导入驱动jar包(对应mysql服务版本下载),官网可以下载：https://www.mvnrepository.com/   [导一次就可以了]

![image](/img/java/JDBC/jar包下载教程.png)

            （1）新建lib文件夹，统一管理jar包，将下载的jar包复制到此文件夹下

            （2）右键lib文件夹---》添加为库---》确定

![image](/img/java/JDBC/添加jar包到库.png)



    2、注册驱动
```java
// alt+enter 可以快速抛出异常，Exception表示全部异常都被抛出
Class.forName("com.mysql.jdbc.Driver");//服务版本5.几的

Class.forName("com.mysql.cj.jdbc.Driver");//服务版本8.几的
```

    3、获取数据库的连接对象Connection
```java
// 快捷键alt+enter可以快速生成变量
//  Connection connection = DriverManager.getConnection(url, 用户名, 密码);
 Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/db3", "root", "password");
```

    4、定义sql
```java
String sql = "update account set menoy = 100 where id =1";
```


    5、获取执行sql语句的对象Statement
```java
 Statement statement = connection.createStatement();
```

    6、执行sql，接受返回结果
```java
 int i = statement.executeUpdate(sql);
```

    7、处理结果
```java
 System.out.println(i);
```

    8、释放资源
```java
 statement.close();
 connection.close();
```
![image](/img/java/JDBC/代码展示.png)

## api的含义

### 驱动管理对象：DriverManager

            1、注册驱动

                  mysql5之后的驱动包，可以省略注册驱动的步骤，因为自动加载jar包中的META-INF/services/java.sql.Driver文件中的驱动类

            2、获取数据库连接

                  getConnection(),里面有三个参数，url,用户名和密码，url对各个数据库都有差异。

                  语法：jsbc:mysql://ip地址（域名）:端口/数据库名称?参数键值对1&参数键值对2...
```java
jdbc:mysql://localhost:3306/db3
```
                  如果连接的是本机Mysql服务器，并且mysql服务默认端口是3306，则url可以简写为：jdbc:mysql:///数据库名?参数键值对
                  配置useSSL=FALSE参数，禁用安全连接方式，解决警告提示。如 String url="jdbc:mysql:///db1?useSSL=false";

### 数据库连接对象：Connection

            1、获取执行sql的对象

                  普通执行sql对象
```java
Statement stmt = conn.createStatement();
```
                  预编译sql的执行sql对象：防止sql注入
```java
PreparedStatement   preparedStatement (sql)
```
                  执行存储过程的对象
```java
CallableStatement  prepareCall(sql)
```

            2、管理事务

                  开启事务
```java
setAutoCommit(boolean autoCommit):true为自动提交事务   /  false手动提交事务，即为开启事务
```
                  提交事务
```java
commit()
```
                  回滚事务
```java
rollback()
```

### 执行sql的对象：Statement
            执行sql语句

                  execute(String sql):可以执行任意的sql【了解】

                  executeUpdate(String sql)   执行DML（insert、update、delete）和 DDL（create 、alter、drop）语句
```java
    返回值：DML语句影响的行数，判断sql是否执行成功：>0执行成功
            DDL语句执行后，执行成功也可能返回0
```
                  ResultSet executeQuery(String sql)：执行DQL（select）语句

            练习
```java
//4.1更新数据
String sql = "update account set menoy = 100 where id =1";
//4.2 account 添加一条记录
String insertSql = "insert into account values (4,'tt',600),(5,'ttt',1060),(6,'yy',888)";
//4.3 account 修改
String sql1 = "update account set name = 'ttt1' where id =5";
//4.4 account 删除一条记录
String deleteSql = "delete from account where id = 6";
//4.5
//5、获取执行sql对象
Statement statement = connection.createStatement();
//6、执行sql，接受返回结果
int i = statement.executeUpdate(sql);
int insertI = statement.executeUpdate(insertSql);
int updateI = statement.executeUpdate(sql1);
int deleteI = statement.executeUpdate(deleteSql);
    
```
演示一个更新数据
```java
 public static void main(String[] args) throws Exception {
        //2、注册驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        ////3、获取数据库的连接对象Connection
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/db3", "root", "123456");
        //4、定义sql语句
        //4.1更新数据
        String sql = "update account set menoy = 100 where id =1";
      
        //5、获取执行sql对象
        Statement statement = connection.createStatement();
        //6、执行sql，接受返回结果
        try {
            int i = statement.executeUpdate(sql);
            //7、处理结果
            if(i>0){
                System.out.println("执行成功");
            }else {
                System.out.println("执行失败");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            //8、释放资源
            //避免空指针异常
            if(statement != null){
                try {
                    statement.close();
                }catch (SQLException e){
                    e.printStackTrace();
                }
            }
            if(connection != null){
                try {
                    connection.close();
                }catch (SQLException e){
                    e.printStackTrace();
                }
            }
        }
    }

```
此时控制台会打印出中文的    执行成功
![image](/img/java/JDBC/执行sql语句练习结果.png)

### 结果集对象：ResultSet 结果集对象，封装查询结果

            使用步骤：

                      游标向下移动一行 next()

                      判断是否有数据 next()，判断当前行是否是最后一行末尾。返回的是布尔值：如果是，则返回false,如果不是，则返回true

                      获取数据 getXxx(参数)

            next() ：游标向下移动一行,判断当前行是否是最后一行末尾。返回的是布尔值：如果是，则返回false,如果不是，则返回true

            getXxx(参数) ：获取数据。 Xxx表示数据类型

                  Xxx表示数据类型

                  参数

                      int：代表列的编号，从1开始 。如getInt(1) 、  getDouble(3)

                      String：代表列的名称。如getString("字段名称")

```java
public static void main(String[] args) throws Exception {
        ResultSet re = null;
        //1、导入jar包
        //2、注册驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        ////3、获取数据库的连接对象Connection
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/db3", "root", "123456");
        //4、定义sql语句
        //4.1更新数据
        String sql = "select * from account";

        //5、获取执行sql对象
        Statement statement = connection.createStatement();
        //6、执行sql，接受返回结果
        try {
            re = statement.executeQuery(sql);
            //7、处理结果
            //光标移动到下一行
            re.next();
        //    获取数据
            int id = re.getInt(1);
            String name = re.getString("name");
            double menoy = re.getDouble(3);
            System.out.println(id);
            System.out.println(name);
            System.out.println(menoy);

        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            //8、释放资源
            //避免空指针异常
            if(statement != null){
                try {
                    statement.close();
                }catch (SQLException e){
                    e.printStackTrace();
                }
            }
            if(connection != null){
                try {
                    connection.close();
                }catch (SQLException e){
                    e.printStackTrace();
                }
            }
        }
    }
```
![image](/img/java/JDBC/ResultSet案例结果.png)

查询所有数据
```java
   public static void main(String[] args) throws Exception {
        ResultSet re = null;
        //1、导入jar包
        //2、注册驱动
        Class.forName("com.mysql.cj.jdbc.Driver");
        ////3、获取数据库的连接对象Connection
        Connection connection = DriverManager.getConnection("jdbc:mysql://localhost:3306/db3", "root", "123456");
        //4、定义sql语句
        //4.1更新数据
        String sql = "select * from account";

        //5、获取执行sql对象
        Statement statement = connection.createStatement();
        //6、执行sql，接受返回结果
        try {
            re = statement.executeQuery(sql);
            //7、处理结果
            //光标移动到下一行
            //if(re.next()){
            //    //    获取数据
            //    int id = re.getInt(1);
            //    String name = re.getString("name");
            //    double menoy = re.getDouble(3);
            //    System.out.println(id+"----"+name+"----"+menoy);
            // }
            while (re.next()) {//循环查询，知道最后一行
                int id = re.getInt(1);
                String name = re.getString("name");
                double menoy = re.getDouble(3);
                System.out.println(id + "----" + name + "----" + menoy);
            }


        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            //8、释放资源
            //避免空指针异常
            if (statement != null) {
                try {
                    statement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (connection != null) {
                try {
                    connection.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    }

```

![image](/img/java/JDBC/ResultSet案例循环查询结果.png)


            实际使用：查询emp表，并将查询的数据封装为一个集合
```java
// 实体类
package cn.ttt.domin;
/**
 * 实体类，用来封装数据
 */

import java.util.Date;
public class Emp {
    private int id;
    private  String eName;
    private int jobId;
    private int mgr;
    private Date joinDate;
    private double salary;
    private double bonus;
    private int deptId;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String geteName() {
        return eName;
    }

    public void seteName(String eName) {
        this.eName = eName;
    }

    public int getJobId() {
        return jobId;
    }

    public void setJobId(int jobId) {
        this.jobId = jobId;
    }

    public int getMgr() {
        return mgr;
    }

    public void setMgr(int mgr) {
        this.mgr = mgr;
    }

    public Date getJoinDate() {
        return joinDate;
    }

    public void setJoinDate(Date joinDate) {
        this.joinDate = joinDate;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    public double getBonus() {
        return bonus;
    }

    public void setBonus(double bonus) {
        this.bonus = bonus;
    }

    public int getDeptId() {
        return deptId;
    }

    public void setDeptId(int deptId) {
        this.deptId = deptId;
    }

    @Override
    public String toString() {
        return "Emp{" +
                "id=" + id +
                ", eName='" + eName + '\'' +
                ", jobId=" + jobId +
                ", mgr=" + mgr +
                ", joinDate=" + joinDate +
                ", salary=" + salary +
                ", bonus=" + bonus +
                ", deptId=" + deptId +
                '}';
    }
}

// 操作类
package cn.ttt.jdbc;

import cn.ttt.domin.Emp;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JdbcDemo4 {
    public static void main(String[] args) {
        List<Emp> list1 = new JdbcDemo4().findAll();
        System.out.println(list1);
    }
    public List<Emp> findAll() {
        Statement statement=null;
        ResultSet resultSet = null;
        Connection con = null;
        List<Emp> list = null;
        try {
            //注册驱动
            Class.forName("com.mysql.cj.jdbc.Driver");
            //获取连接
            con = DriverManager.getConnection("jdbc:mysql:///db3", "root", "123456");
            //定义sql语句
            String sql = "select * from emp";
            //获取sql对象
            statement = con.createStatement();
            //执行sql语句
            resultSet = statement.executeQuery(sql);
            Emp emp =  new Emp();;
            list = new ArrayList<>();
            //循环输出emp表中的所有数据，封装成集合
            while (resultSet.next()){
                int id = resultSet.getInt(1);
                String ename = resultSet.getString("ename");
                int jobId = resultSet.getInt(3);
                int mgr = resultSet.getInt(4);
                Date joinDate = resultSet.getDate("joindate");
                double salary = resultSet.getDouble(6);
                double bonus = resultSet.getDouble(7);
                int deptId = resultSet.getInt(8);

                emp.setId(id);
                emp.seteName(ename);
                emp.setJobId(jobId);
                emp.setMgr(mgr);
                emp.setJoinDate(joinDate);
                emp.setSalary(salary);
                emp.setBonus(bonus);
                emp.setDeptId(deptId);
                //System.out.println(emp);
                list.add(emp);
                //System.out.println(list);
            }

        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            if(resultSet != null){
                try {
                    resultSet.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(statement != null){
                try {
                    statement.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if(con != null){
                try {
                    con.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }

        }
        //返回集合
        return list;
    }
}

```

### 执行sql的对象：PreparedStatement
在 二、联系  的案例中，会出现sql注入。如下情况

        用户 随便输入 用户名，密码为 a' or 'a' = 'a 。 会显示登录成功

    sql注入：

        再拼接sql时，有一些sql的特殊关键字参与字符串的拼接，会造成安全性问题

    解决sql注入：

        通过PreparedStatement来解决，参数使用？（占位符）来表示
```java
  String sql = "select * from user where username = ? and password = ?";
```
    步骤：

        1、导入驱动jar包

        2、注册驱动

        3、获取数据库连接对象

        4、定义sql

        5、获取执行sql语句的对象PreparedStatement ：Connection.prepareStatement(String sql)

        6、给占位符赋值   ：xxx.setString(第几个参数,赋什么值);

        7、执行sql,接受返回结果   xxx.executeQuery()

        8、处理结果

        9、释放资源
```java
package cn.ttt.jdbc;

import cn.ttt.utils.JDBCUtils;

import java.sql.*;
import java.util.Scanner;

public class JdbcDemo5 {
    public static void main(String[] args) {
        //1、键盘录入，接受用户名和密码
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入用户名：");
        String username = scanner.nextLine();
        System.out.println("请输入密码：");
        String password = scanner.nextLine();
        //boolean flag = new JdbcDemo5().login(username, password);
        boolean flag2 = new JdbcDemo5().login2(username, password);

        //if(flag){
        //    System.out.println("登录成功");
        //}else {
        //    System.out.println("用户名或密码错误");
        //}
        if(flag2){
            System.out.println("登录成功");
        }else {
            System.out.println("用户名或密码错误");
        }
    }
    Connection connection = null;
    Statement statement = null;
    PreparedStatement preparedStatement = null;
    ResultSet resultSet = null;

    /**
     * 使用PreparedStatement来获取数据
     * @param username
     * @param password
     * @return
     */
    public boolean login2(String username,String password){
        if(username == null || password ==null){
            return false;
        }
        //获取连接
        try {
            connection = JDBCUtils.getConnection();
            //定义sql语句
            //String sql = "select * from user where username = username && password = password";
            String sql = "select * from user where username = ? and password =  ?";

            //使用预编译来输入sql语句，参数用？代替
            //获取执行sql对象
            //statement = connection.createStatement();
            preparedStatement = connection.prepareStatement(sql);
            //给?赋值
            preparedStatement.setString(1,username);
            preparedStatement.setString(2,password);
            //执行sql,不传参
            resultSet = preparedStatement.executeQuery();
            return resultSet.next();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            //  释放资源
            JDBCUtils.close(resultSet,preparedStatement,connection);
        }
        return false;
    }

}

```
![image](/img/java/JDBC/解决sql注入问题.png)

后期会用preparedStatement对象，不用statement对象了


## 二、封装JDBC工具类
### 目的：简化书写

### 分析：

        1、抽取注册驱动

        2、抽取一个方法连接对象

        3、抽取一个方法释放对象

        4、通过配置文件，配置连接对象中的参数

```java
// 工具类
package cn.ttt.utils;

import java.io.FileReader;
import java.io.IOException;
import java.net.URL;
import java.sql.*;
import java.util.Properties;

/**
 * JDBC工具类
 */
public class JDBCUtils {
    private static String url;
    private static String user;
    private static String password;
    private static String driver;

    /**
     * 文件的读取，只需要读取一次既可以拿到这些值，使用静态代码块
     */
    static {
        //读取资源文件，获取值
        try {
            //1、创建Properties集合类
            Properties properties = new Properties();
            //获取src路徑下的文件的方式 ----》classLoader类加载器
            ClassLoader classLoader = JDBCUtils.class.getClassLoader();
            URL resource = classLoader.getResource("jdbc.properties");
            String path = resource.getPath();
            //2、加载文件
            properties.load(new FileReader(path));
            //3、获取数据，赋值
            url = properties.getProperty("url");
            user = properties.getProperty("user");
            password = properties.getProperty("password");
            driver = properties.getProperty("driver");
            //注册驱动
            Class.forName(driver);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }

    /**
     * 获取连接
     *
     * @return
     */
    public static Connection getConnection() throws SQLException {
        //通过配置文件，可以替代参数
        return DriverManager.getConnection(url, user, password);
    }

    /**
     * 释放资源
     *
     * @param statement
     * @param connection
     */
    public static void close(ResultSet resultSet, Statement statement, Connection connection) {
        if (resultSet != null) {
            try {
                resultSet.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (statement != null) {
            try {
                statement.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if (connection != null) {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

}

```

![image](/img/java/JDBC/JDBC工具类封装1.png)
```java
// 测试类
package cn.ttt.jdbc;

import cn.ttt.domin.Emp;
import cn.ttt.utils.JDBCUtils;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class JdbcDemo4 {
    public static void main(String[] args) {
        List<Emp> list1 = new JdbcDemo4().findAll();
        System.out.println(list1);
    }
    public List<Emp> findAll() {
        Statement statement=null;
        ResultSet resultSet = null;
        Connection con = null;
        List<Emp> list = null;
        try {
            //获取连接
            con = JDBCUtils.getConnection();
            //定义sql语句
            String sql = "select * from emp";
            //获取sql对象
            statement = con.createStatement();
            //执行sql语句
            resultSet = statement.executeQuery(sql);
            Emp emp =  new Emp();;
            list = new ArrayList<>();
            //循环输出emp表中的所有数据，封装成集合
            while (resultSet.next()){
                int id = resultSet.getInt(1);
                String ename = resultSet.getString("ename");
                int jobId = resultSet.getInt(3);
                int mgr = resultSet.getInt(4);
                Date joinDate = resultSet.getDate("joindate");
                double salary = resultSet.getDouble(6);
                double bonus = resultSet.getDouble(7);
                int deptId = resultSet.getInt(8);

                emp.setId(id);
                emp.seteName(ename);
                emp.setJobId(jobId);
                emp.setMgr(mgr);
                emp.setJoinDate(joinDate);
                emp.setSalary(salary);
                emp.setBonus(bonus);
                emp.setDeptId(deptId);
                list.add(emp);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
        
            JDBCUtils.close(resultSet,statement,con);

        }
        //返回集合
        return list;
    }
}

```

    详解配置文件：

        1、配置文件jdbc.properties
```java
url=jdbc:mysql:///db3
user=root
password=123456
driver=com.mysql.cj.jdbc.Driver
```

        2、在工具类中通过文件Properties读取，写在静态方法static内
```java
    private static String url;
    private static String user;
    private static String password;
    private static String driver;

    /**
     * 文件的读取，只需要读取一次既可以拿到这些值，使用静态代码块
     */
    static {
        //读取资源文件，获取值
        try {
            //1、创建Properties集合类
            Properties properties = new Properties();
            //2、加载文件
            properties.load(new FileReader("src/jdbc.properties"));
            //3、获取数据，赋值
            url = properties.getProperty("url");
            user = properties.getProperty("user");
            password = properties.getProperty("password");
            driver = properties.getProperty("driver");
            //注册驱动
            Class.forName(driver);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        }

    }
```
        3、在封装连接对象时候
```java
 public static Connection getConnection() throws SQLException {
        //通过配置文件，可以替代参数
        return DriverManager.getConnection(url, user, password);
 }
```
        4、注意：在配置文件和工具类中的私有变量要一一对应，否则会读取数据库不成功

![image](/img/java/JDBC/jdbc配置文件.png)

    详解获取src下的路径：
```java
    //1、创建Properties集合类
    Properties properties = new Properties();
    //获取src路徑下的文件的方式 ----》classLoader类加载器
    ClassLoader classLoader = JDBCUtils.class.getClassLoader();
    URL resource = classLoader.getResource("jdbc.properties");
    String path = resource.getPath();
    //2、加载文件
    properties.load(new FileReader(path));
```






### 练习
    需求：通过键盘录入用户名和密码；  判断用户是否登录成功

    实现：

        1、创建数据库、表
```js
create table user (
	id int PRIMARY KEY auto_increment,
	username VARCHAR(32),
	password VARCHAR(32)
);
insert into user VALUES(1,"ttt","123456"),(2,"haha","123");
select * from user;
```

        2、创建一个类：执行登录方法
```java
package cn.ttt.jdbc;

import cn.ttt.utils.JDBCUtils;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Scanner;

public class JdbcDemo5 {
    public static void main(String[] args) {
        //1、键盘录入，接受用户名和密码
        Scanner scanner = new Scanner(System.in);
        System.out.println("请输入用户名：");
        String username = scanner.nextLine();
        System.out.println("请输入密码：");
        String password = scanner.nextLine();
        boolean flag = new JdbcDemo5().login(username, password);
        if(flag){
            System.out.println("登录成功");
        }else {
            System.out.println("用户名或密码错误");
        }
    }
    Connection connection = null;
    Statement statement = null;
    ResultSet resultSet = null;
    public boolean login(String username,String password){
        if(username == null || password ==null){
            return false;
        }
        //获取连接
        try {
            connection = JDBCUtils.getConnection();
            //定义sql语句
            //String sql = "select * from user where username = username && password = password";
            String sql = "select * from user where username = '"+username+"' and password =  '"+password+"'";
            System.out.println(sql);
            //获取执行sql对象
            statement = connection.createStatement();
            //执行sql
            resultSet = statement.executeQuery(sql);
            return resultSet.next();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
         //  释放资源
         JDBCUtils.close(resultSet,statement,connection);
        }
        return false;
    }
}

```

![image](/img/java/JDBC/登录结果.png)

## 三、JDBC控制事务
在目录数据库（二）中的二里面说到过事务

### 事务的基本介绍
        1、事务的概念

                一个包含多个步骤的业务操作，被事务管理，那么这些操作要么同时成功，要么同时失败

        2、事务的概念

                开启事务

                提交事务

                回滚事务

        3、使用Connection对象来管理事务

                开启事务：setAutoCommit(boolean autoCommit) 调用该方法设置参数为false，即为开始事务

                提交事务：commit()

                回滚事务：rollback()

        4、注意：

                建议手动开启事务, 用一次 就开启一次

                开启事务之后, 要么commit, 要么rollback

                一旦commit或者rollback, 当前的事务就结束了

                回滚到指定的回滚点, 但是这个时候事务没有结束的


### 事务的四大特征

        1、原子性：是不可分割的最小操作单位，要么同时成功，要么同时失败

        2、一致性：事务操作前后，数据总量不变

        3、隔离性：多个事务之间，相互独立

        4、持久性：当事务提交或回滚后，数据库会持久化的保存数据

### 事务的隔离级别（了解）

    多个事务之间隔离的，相互独立的。但是多个事务操作同一批数据，则会引发一些数据，设置不同的隔离级别就可以解决这些问题。

        存在的问题：

                脏读：一个事务，读取到另一个事务中没有提交的数据

                不可重复读（虚读）：在同一个事务中，两次 读取到的数据不一样

                幻读：一个事务操作（DML）数据表中所有记录，另一个事务添加了一条数据，则第一个事务查询不到自己的修改

        隔离级别字符串：

                read uncommitted：读未提交     ----三个问题都会产生

                read committed：读已提交       ----不可重复读、幻读 oracle默认

                repeatable read：可重复读      ----幻读   mysql默认

                serializab：串行化             ----不会出现任何问题

### 练习
    转账情况

```java
public static void main(String[] args) {
        Connection connection=null;
        PreparedStatement preparedStatement = null;
        PreparedStatement preparedStatement1 = null;
        try {
            //获取连接
            connection = JDBCUtils.getConnection();
            //定义sql
            String sql ="update account set menoy = menoy-? where id =?";
            String sql2 ="update account set menoy = menoy+? where id =?";
            //执行sql语句
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement1 = connection.prepareStatement(sql2);
            //设置参数
            preparedStatement.setInt(1,100);
            preparedStatement.setInt(2,2);
            preparedStatement1.setInt(1,100);
            preparedStatement1.setInt(2,1);
            //执行结果
            preparedStatement.executeUpdate();
            preparedStatement1.executeUpdate();
            //提交事务
            connection.commit();
        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            JDBCUtils.close1(preparedStatement,connection);
            JDBCUtils.close1(preparedStatement,null);
        }
    }
```
    开启事务

+ 在sql之前开启事务

+ 当所有sql都执行完提交事务

+ 在catch中回滚事务
```java
 public static void main(String[] args) {
        Connection connection=null;
        PreparedStatement preparedStatement = null;
        PreparedStatement preparedStatement1 = null;
        try {
            //获取连接
            connection = JDBCUtils.getConnection();
            //开启事务
            connection.setAutoCommit(false);
            //定义sql
            String sql ="update account set menoy = menoy-? where id =?";
            String sql2 ="update account set menoy = menoy+? where id =?";
            //执行sql语句
            preparedStatement = connection.prepareStatement(sql);
            preparedStatement1 = connection.prepareStatement(sql2);
            //设置参数
            preparedStatement.setDouble(1,100);
            preparedStatement.setInt(2,2);
            preparedStatement1.setDouble(1,100);
            preparedStatement1.setInt(2,1);
            //执行结果
            preparedStatement.executeUpdate();
            int i = 3/0;
            preparedStatement1.executeUpdate();

        } catch (SQLException e) {
            e.printStackTrace();
            //事务回滚
            try {
                if(connection!=null){
                    connection.rollback();
                }
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
        }finally {
            JDBCUtils.close1(preparedStatement,connection);
            JDBCUtils.close1(preparedStatement,null);
        }
    }

```
虽然依旧报错，但是数据库里面的数据没有发生任何变化，如果没有开启事务，报错+数据库发生变化

## 四、数据库连接池
### 概念
一个容器（集合），存放数据库的容器，当系统初始化后，容器被创建，容器中会申请一些连接对象，当用户来访问数据库时，从容器中获取连接对象，用户访问完之后，会将连接对象归还给容器。

    好处：

        节约资源

        用户访问高效

    实现：

        标准接口：javax.sql包下的DataSource 。有个getConnection()方法，获取连接.如果连接对象Connection是从连接池中获取的，那么调用Connection.close()方法，则不会再关闭连接了，而是归还连接

        使用数据库厂商来实现

                C3P0:数据库连接池技术

                Druid:数据库连接池实现技术，由阿里巴巴提供的

### C3P0使用的步骤(比较老，不在演示)

    步骤：

        1、导入jar包（两个），比较老，更新至2019年，暂停维护了，对于高版本的mysql，可能出现不兼容的情况

                c3p0-0.9.5.2.jar        

                mchange-commons-java-0.2.12.jar

                数据库连接的jar包

        2、定义配置文件

                名称： c3p0.properties 或者 c3p0-config.xml

                路径：直接将文件放在src目录下即可。

        3、创建核心对象 数据库连接池对象：ComboPooledDataSource

        4、获取连接：getConnection

因为我的mysql服务版本比较高，就不在演示了。贴一篇博客：https://blog.csdn.net/qq_60281421/article/details/124331835


### druid(阿里的，高效)

    步骤：

        1. 导入jar包 druid-1.0.9.jar

        2. 定义配置文件：

                是properties形式的

                可以叫任意名称，可以放在任意目录下

        3. 加载配置文件。Properties

        4. 获取数据库连接池对象：通过工厂来来获取  DruidDataSourceFactory

        5. 获取连接：getConnection

    演示：

        配置文件
```java
driverClassName = com.mysql.cj.jdbc.Driver
url=jdbc:mysql:///db3
username=root
password=123456
# 初始化的连接数量
initialSize=5
# 最大连接数
maxActive=10
# 最大等待时间
maxWait=3000
```
        类文件
```java
package cn.ttt.druid;

import com.alibaba.druid.pool.DruidDataSource;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.util.Properties;

/**
 * 演示druid
 */
public class DruidDemo {
    public static void main(String[] args) throws Exception {
        //1. 导入jar包 druid-1.0.9.jar

        //2. 定义配置文件：

        //3. 加载配置文件。Properties
        Properties properties = new Properties();
        InputStream resourceAsStream = DruidDemo.class.getClassLoader().getResourceAsStream("druid.properties");
        properties.load(resourceAsStream);

        //4. 获取数据库连接池对象：通过工厂来来获取  DruidDataSourceFactory
        DataSource dataSource = DruidDataSourceFactory.createDataSource(properties);
        //5. 获取连接：getConnection
        Connection connection = dataSource.getConnection();
        System.out.println(connection);
    }
}

```
    注意：使用mysql8.0后 相应jar包版本。驱动名也要修改

        1.spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

        2.druid 版本 1.1.10以上

        3.mysql-connector-java 版本 8.0.11以上

### druid工具类

    步骤：

        1. 定义一个类 JDBCUtils

        2. 提供静态代码块加载配置文件，初始化连接池对象

        3. 提供方法

                （1）获取连接方法：通过数据库连接池获取连接

                （2）释放资源

                （3）获取连接池的方法  

    演示：
```java
package cn.ttt.utils;

import cn.ttt.druid.DruidDemo;
import com.alibaba.druid.pool.DruidDataSourceFactory;

import javax.sql.DataSource;
import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.Properties;

/**
 * Druid连接池的工具类
 */
public class DruidUtils {
    //定义成员变量 DataSource
    private static DataSource ds;

    static {

        try {
            //加载配置文件
            Properties properties = new Properties();
            properties.load(DruidDemo.class.getClassLoader().getResourceAsStream("druid.properties"));
            //获取DataSource
            ds = DruidDataSourceFactory.createDataSource(properties);
        } catch (IOException e) {
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    // 获取连接
    public static Connection getConnection() throws SQLException {
        return ds.getConnection();
    }

//    释放资源
    public static void close(Statement stmt,Connection conn) {
        //if(stmt!=null){
        //    stmt.close();//归还连接
        //}
        //if(conn!=null){
        //    conn.close();
        //}
        close(null,stmt,conn);
    }

    //    释放资源
    public static void close(ResultSet res,Statement stmt, Connection conn)  {
        if(res!=null){
            try {
                res.close();//归还连接
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(stmt!=null){
            try {
                stmt.close();//归还连接
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        if(conn!=null){
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    //获取连接池的方法
    public static DataSource getDataSource(){
        return ds;
    }
}


```
    测试工具类：
```java
package cn.ttt.druid;

import cn.ttt.utils.DruidUtils;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

/**
 * 演示druid
 */
public class DruidDemo2 {
    public static void main(String[] args) {

        Connection connection =null;
        PreparedStatement preparedStatement =null;
        try {
            //获取连接：getConnection
            connection = DruidUtils.getConnection();
            //定义sql语句
            String sql = "insert into account values (null,?,?)";
            //获取preparedStatement对象
            preparedStatement = connection.prepareStatement(sql);
            //设置值
            preparedStatement.setString(1,"ttz");
            preparedStatement.setDouble(2,20);
            //执行sql
            int count = preparedStatement.executeUpdate();
            System.out.println(count);

        } catch (SQLException e) {
            e.printStackTrace();
        }finally {
            DruidUtils.close(preparedStatement,connection);
        }
        //System.out.println(connection);
    }
}

```

## 五、jdbc Template
Template意思是模板，JDBCTemplate是Spring为我们提供的，一组访问访问数据库的类库，Spring对JDBC的封装,通俗点说就是Spring对jdbc的封装的模板。

事实上spring jdbcTelemplete用得很少。 大家选择spring，是因为spring给你提供bean 得DI AOP 等功能之后，还作为一个容器帮你管理bean。 同时封装了很多接口，用于整合其他的优秀框架。

### 步骤
        1.导入jar包

![image](/img/java/JDBC/jdbcTemplate所需要的jar包.png)

        2.创建jdbcTemplate对象，依赖于数据源DateSource

                JdbcTemplate template = new JdbcTemplate(ds)

        3.调用jdbcTemplate的方法来执行CRUD的操作

                update：执行DML语句。增、删、改语句

                query：查询结果，将结果封装为javaBean对象

                queryForXXX：执行查询相关语句   

                    queryForMap():查询结果将结果集封装为map集合，将列名作为key，将值作为value 将这条记录封装为一个map集合。 注意：这个方法查询的结果集长度只能是1

                    queryForList():查询结果将结果集封装为list集合。注意：将每一条记录封装为一个Map集合，再将Map集合装载到List集合中。

                    queryForObject：查询结果，将结果封装为对象，一般用于聚合函数的查询。

![image](/img/java/JDBC/jdbcTemplate代码.png)
不演示增删改查等操作了，mysql版本太高，有些jar包太低，会出现不兼容的问题，如果使用的是5.x的版本的mysql可以继续研究一下哦

