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



## 二、

## 三、

## 四、