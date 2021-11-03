[TOC]

# SQL

## Introduction 2 SQL

**What is data?**

- Facts
- Pictures
- One of the most critical assets of any business
- Needs to be secure

**What is database?**

- A repository of data
- Provides the functionality for adding, modifying and querying that data

**What is SQL?**

- A language used for relational databases
- Query data

**Relational Database**

- Data stored in tabular form - columns and rows
- Columns contain item properties e.g. Last Name, First Name, etc.
- Table is collection of related things e.g. 
  Employees, Authors, etc. 
- Relationships can exist betwee tables 
  (hence: "relational") 

**DBMS**

- Database: repository of data
- DBMS: Database Management System - software to manage databases
- Database, Database Server, Database System, Data Server, DBMS - often used interchangeably

**What is RDBMS?**

- RDBMS = Relational database management system
- A set of software tools that controls the data
  - access, organization, and storage
- Examples are: MySQL, Oracle Database, IBM Db2, etc.

**Cloud databases**

- Ease of Use and Access
  - API
  - Web Interface
  - Cloud or Remote Applications
- Scalability & Economics
  - Expand/Shrink Storage & Compute Resources
  - Pay per use
- Disaster Recovery

Examples:

- IBM Db2
- Databases for PostgreSQL
- Oracle Database Cloud Service
- Microsoft Azure SQL Database
- Amazon Reltaional Database Services(RDS)

Available as:

- VMs or Managed Service
- Single or Multi-tenant

**Database service instances**

- DBaaS provides users with access to Database resources in cloud without setting up hardware and installing software
- Database service instance holds data in data objects / tables
- Once data is loaded, it can be queired using web interfaces and applications

**Relational Model**

- Most used data model
- Allows for data independence
- Data is stored in tables

**Enitity-Relationship Model**

- Used as a tool to design relational databases

### Types of SQL Statements (DDL & DML)

- DDL (Data Definition Language) statements:

  - Define, change, or drop data

    

  - Common DDL:
    - CREATE
    - ALTER
    - TRUNCATE
    - DROP

- DML (Data Manipulation Language) statements:

  - Read and modify data

  - CRUD operations (<u>C</u>reate, <u>R</u>ead, <u>U</u>pate & <u>D</u>elete rows)

    

  - Common DML:

    - INSERT
    - SELECT
    - UPDATE
    - DELETE

### CHAR VS VARCHAR

|      |                             CHAR                             |     VARCHAR      |
| ---- | :----------------------------------------------------------: | :--------------: |
| 总结 | 定长，效率高，一般用于固定长度的表单提交数据存储，例如：身份证号 | 不定长，效率偏低 |

转载：

1、**CHAR**的长度是不可变的，而**VARCHAR**的长度是可变的，也就是说，定义一个CHAR[10]和VARCHAR[10],如果存进去的是‘ABCD’, 那么CHAR所占的长度依然为10，除了字符‘ABCD’外，后面跟六个空格，而VARCHAR的长度变为4了，取数据的时候，CHAR类型的要用trim()去掉多余的空格，而VARCHAR类型是不需要的。

2、**CHAR**的存取速度要比**VARCHAR**快得多，因为其长度固定，方便程序的存储与查找；但是CHAR为此付出的是空间的代价，因为其长度固定，所以难免会有多余的空格占位符占据空间，可以说是以空间换取时间效率，而VARCHAR则是以空间效率为首位的。

3、**CHAR**的存储方式是，一个英文字符（ASCII）占用1个字节，一个汉字占用两个字节；而**VARCHAR**的存储方式是，一个英文字符占用2个字节，一个汉字也占用2个字节。

4、两者的存储数据都是非unicode的字符数据。

## Basic SQL

### CREATE 

**Syntax:**

```sql
CREATE TABLE table_name
	(
	column_name_1 datatype optional_parameters,
	column_name_2 datatype,
	...
	column_name_n datatype
    )
```

Example:

```sql
CREATE TABLE provinces(
	id char(2) PRIMARY KEY NOT NULL,
    name varchar(24) NOT NULL,
    country char(2)
)
```



### INSERT

**Syntax:**

``` sql
INSERT INTO [TableName]
	([ColumnName], ...)
VALUES ([Value], ...)
```

Example:

``` sql
INSERT INTO AUTHOR
	(AUTHOR_ID, LASTNAME, FIRSTNAME, EMAIL, CITY, COUNTRY)
VALUES
	('A1','Chong','Raul','rfc@ibm.com','Toronto','CA')
	(blablabla...)
	()
```



### UPDATE

**Syntax:**

``` sql
UPDATE [TableName]
SET [[ColumnName]=[Value]]
<WHERE [Condition]>
```

Example:

``` sql
UPDATE AUTHOR
SET LASTNAME='KATTA'
	FIRSTNAME='LAKSHMI'
	WHERE AUTHOR_ID='A2'
```

### DELETE

**Syntax:**

``` sql
DELETE FROM [TableName]
<WHERE[Condition]>
```

Example:

``` sql
DELETE FROM AUTHOR
	WHERE AUTHOR_ID IN('A2','A3')
```



### SELECT

``` sql
SELECT * from <tablename>
SELECT <column 1>, <column 2> from <tablename>
```



### WHERE

``` sql
select book_id, title from Book
	WHERE book_id = 'B1'
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126210729245.png#pic_center)

``` sql
WHERE firstname LIKE R%
```

``` sql
WHERE pages >= 290 AND pages <= 300

-- better one:
WHERE pages between 290 and 300
```

``` sql
WHERE country='AU' OR country='BR'

-- better one:
WHERE country IN('AU','BR')
```



### COUNT

``` sql
select COUNT(COUNTRY) as CountC from MEDALS
	where COUNTRY='CANADA'
```



### DISTINCT

``` sql
select DISTINCT COUNTRY from MEDALS
	where MEDALTYPE = 'GOLD'
```



### LIMIT

``` sql
select * from MEDALS
	where YEAR = 2018 LIMIT 5
	
select * from census_data LIMIT 3
```



### ORDER BY

``` sql
select title from Book
	ORDER BY title
	
-- By default: ascending
	ORDER BY title DESC
```



### GROUP BY

``` sql
select country, count(country)
	as Count from Author
	group by country
	having count(country) > 4
```



## Built-in Functions

### SUM, MIN, MAX, AVG

``` sql
select SUM(COST) as SUM_OF_COST, MAX(QUANTITY), MIN(ID), AVG(COST)
	from PETRESCUE
```



### ROUND

``` sql
select ROUND(COST) from PETRESCUE
```

### LENGTH

``` sql
select LENGTH(ANIMAL) from PETRESCUE
```

### UCASE, LCASE

``` sql
select UCASE(ANIMAL), LCASE(ANIMAL) from PERTRESCUE

select * from PERTRESCUE
	where LCASE(ANIMAL) = 'cat'
```

### Date and Time

DATE: YYYYMMDD

TIME: HHMMSS

TIMESTAMP: YYYYXXDDHHMMSSZZZZZZ

DATE / Time functions:

``` sql
YEAR(), MONTH(), DAY(), DAYOFMONTH(), DAYOFWEEK(), DAYOFYEAR(), WEEK(), HOUR(), MINUTE(), SECOND()
```

Example:

``` sql
select DAY(RESCUEDATE) from PETRESCUE
	where ANIMAL='Cat'
	
select COUNT(*) from PETRSCUE
	where MONTH(RESCUDATE)='05'
	
select (PESCUEDATE + 3 DAYS) from PERTRESCUE
```

Specail Registers:

``` sql
CURRENT_DATE, CURRENT_TIME
```

Example:

``` sql
select (CURRENT_DATE - RESCUDEDATE) from PETRESCUE
```

### REPLACE

Example:

Remove the '%' sign from the above result set for Average Student Attendance column

Use the REPLACE() function to replace '%' with ''

See [documentation](https://www.ibm.com/support/knowledgecenter/en/SSEPGG_10.5.0/com.ibm.db2.luw.sql.ref.doc/doc/r0000843.html) for this function.

``` sql
SELECT Name_of_School, REPLACE(Average_Student_Attendance, '%', '') 
     from SCHOOLS 
     order by Average_Student_Attendance 
     fetch first 5 rows only
```

### CAST AS， DECIMAL

The datatype of the "Average_Student_Attendance" column is varchar.
So you cannot use it as is in the where clause for a numeric comparison.
First use the CAST() function to cast it as a DECIMAL or DOUBLE
e.g. `CAST("Column_Name" as DOUBLE)`
or simply: `DECIMAL("Column_Name")`

Don't forget the '%' age sign needs to be removed before casting

``` python
%sql SELECT Name_of_School, Average_Student_Attendance  \
     from SCHOOLS \
     where CAST ( REPLACE(Average_Student_Attendance, '%', '') AS DOUBLE ) < 70 \
     order by Average_Student_Attendance

# or,

%sql SELECT Name_of_School, Average_Student_Attendance  \
     from SCHOOLS \
     where DECIMAL ( REPLACE(Average_Student_Attendance, '%', '') ) < 70 \
     order by Average_Student_Attendance
```



## Multiple Tables

A full join / Cartesian join:

Evey row in the first table is joined with every row in the second table

``` sql
select * from [Table1, Table2, ...]
```

### Implicit Join

``` sql
select E.EMP_ID, D.DEP_ID_DEP from
	employees E, departments D
	where E.DEP_ID = D.DEPT_ID_DEP
```

### Inner Join

``` sql
SELECT B.BORROWER_ID, B.LASTNAME, B.COUNTRY, L.BORROWER_ID, L.LOAN_DATE
FROM BORROWER B INNER JOIN LOAN L
	ON B.BORROWER_ID = L.BORROWER_ID
	
-- Three tables
SELECT B.LASTNAME, L.COPY_ID, C.STATUS
FROM BORROWER B 
	INNER JOIN LOAN L ON B.BORROWER_ID = L.BORROWER_ID
	INNER JOIN COPY C ON L.BORROWER_ID = C.COPY_ID
```

### Outer Join: LEFT JOIN, RIGHT JOIN,  FULL JOIN

``` sql
SELECT B.BORROWER_ID, B.LASTNAME, B.COUNTRY, L.BORROWER_ID, L.LOAN_DATE
FROM BORROWER B LEFT/RIGHT/FULL JOIN LOAN L
	ON B.BORROWER_ID = L.BORROWER_ID 
```



## IBM Cloud

### Open Service

Click `Services`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127115401757.png)

### Open Console

Click on your Db2 service -> `Mangae` -> `Open Console`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127130714655.png)

### RUN SQL

`Open Console` -> `bar menu icon`(in the top left corner) -> Click on `RUN SQL`

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012711552162.png)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127115659689.png)

### Look at tables

`bar menu icon`->  `EXPLORE` -> `Tables` -> `Schema` (corresponding to your Db2 userid)

P.S. The Schema is typically starts with 3 letters (not SQL) followed by 5 numbers.

### Load Data

`bar menu icon`->  LOAD -> `Load Data` -> Select File -> Select schema ->  Select Table / Click `New Table`

**NOTE: if you only see 2-3 schemas and not your Db2 schema then scroll down in that list till you see the desired one in which you previously created the tables.**

**Pay attention to the first row and related formats.** 

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127120855733.png)

**If there is an issue, it is usually identified with an Warning icon (red triangle with an exclamation mark) next to the datatype of the column**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127132159783.png)

First check if there is a pre-defined format in the drop down list that  matches the format the date/time/timestamp is in the source dataset. **If  not, type the correct format**. Upon doing so, the Mismatch Warning (and  exclamation sign) should disappear. In this example below we  changed/overwrote the default Timestamp format of **YYYY-MM-DD HH:MM:SS** to **MM/DD/YYYY HH:MM:SS TT** to match the value of **08/28/2004 05:50:56 PM** in the dataset.

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021012713271477.png)



#### Date / Time / Timestamp format

**Elements**

| YYYY  | Year (four digits ranging from  0000 - 9999)                 |
| ----- | ------------------------------------------------------------ |
| M     | Month (one or two digits ranging  from 1 - 12)               |
| MM    | Month (two digits ranging from  01 - 12; mutually exclusive with M and MMM) |
| MMM   | Month (first three letters of  English month name; case of letters does not matter; mutually exclusive with  M and MM) |
| D     | Day (one or two digits ranging  from 1 - 31)                 |
| DD    | Day (two digits ranging from 01  - 31; mutually exclusive with D) |
| DDD   | Day of the year (three digits  ranging from 001 - 366; mutually exclusive with other day or month elements) |
| H     | Hour (one or two digits ranging  from 0 - 12 for a 12 hour system, and 0 – 24 for a 24 hour system) |
| HH    | Hour (two digits ranging from 00  - 12 for a 12 hour system, and 00 - 24 for a 24 hour system; mutually  exclusive with H) |
| M     | Minute (one or two digits  ranging from 0 - 59)              |
| MM    | Minute (two digits ranging from  00 - 59; mutually exclusive with M, minute) |
| S     | Second (one or two digits  ranging from 0 - 59)              |
| SS    | Second (two digits ranging from  00 - 59; mutually exclusive with S) |
| SSSSS | Second of the day after midnight  (5 digits ranging from 00000 – 86400; mutually exclusive with other time  elements) |
| U     | (1 to 12 times) Fractional  seconds (number of occurrences of U represent the number of digits with each  digit ranging from 0 to 9) |
| TT    | Meridian indicator (AM or PM)                                |

The valid values for the MMM element include: 'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov' and 'dec'. These values are case insensitive.

**Separators**
The separator between timestamp elements can be any character you want except:

    It can’t be a character in the ranges a-z, A-Z, or 0-9.
    It can’t be the same as the separator between columns.
    It can’t be the same character you use to indicate strings.

If the date in your timestamp format uses DD and MM elements, a separator character is optional. If your date format uses D or M elements, a separator character is required.

If the time in your timestamp format uses HH, MM, and SS elements, a separator character is optional. If your time format uses H, M, or S elements, a separator character is required.

**Examples**
If the timestamp in your data looks like Jan 09 2017 8.49.15.008, your custom timestamp format would be MMM DD YYYY H.MM.SS.UUU. However, if the timestamp in your data looks like 1.9.2017 08.49.15, then your custom timestamp format would be M.D.YYYY HH.MM.SS.

A default value of 1 is assigned for unspecified YYYY, M, MM, D, DD, or DDD elements. A default value of 'Jan' is assigned to an unspecified MMM element. A default value of 0 is assigned for all other unspecified elements. The following is another example of a timestamp format: YYYY/MM/DD HH:MM:SS.UUUUUU

### Create credentials

Click on your Db2 service -> `Service crendentials` -> `New credential`

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127131157940.png)



## SQL API

### Introduction

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126221028307.png)

**APIs used by popular SQL-based DBMS systems**

<table>
    <thead>
        <tr>
            <th>Application or Database</th>
            <th>SQL API</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>MySQL</td>
            <td>MySQL C API</td>
        </tr>
        <tr>
            <td>PostgreSQL</td>
            <td>psycopg2</td>
        </tr>
        <tr>
            <td>IBM DB2</td>
            <td>ibm_db</td>
        </tr>
        <tr>
            <td>SQL Server</td>
            <td>dblib API</td>
        </tr>
        <tr>
            <td>Database access for Microsoft Windows OS</td>
            <td>ODBC</td>
        </tr>
        <tr>
            <td>Oracle</td>
            <td>OCI</td>
        </tr>
        <tr>
            <td>Java</td>
            <td>JDBC</td>
        </tr>
    </tbody>
</table>

**DB-API**

- Python's standard API for accessing relational databases
- Allows a single program that to work with multiple kinds of relational databases
- Learn DB-API functions once, use them with any database

**Concepts**

​	**Connection Objects**

  - Database connections
  - Manage transactions

​	**Cursor Objects**

	- Database Queries
	- Scroll through result set
	- Retrieve results

**Cursor**

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210126223017206.png)

Cursor methods:

- .callproc()
- .execture()
- .executemany()
- .fetchone()
- .fetchmany()
- .fetchall()
- .nextset()
- .arraysize()
- .close()



### Usage

``` python
from dbmodule import connect
# Create connection object
Connection = connect('databasename','username','pswd')

# Create a cursor object
Cursor = connection.cursor()

# Run Queries
Cursor.execute('select * from mytable')
Results = cursor.fetchall()

# Free resources
Cursor.close()
Connection.close()
```

#### Import the `ibm_db` Python library

The `ibm_db` [API ](https://pypi.python.org/pypi/ibm_db?cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork-20127838&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ&cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork-20127838&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ&cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork-20127838&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ&cm_mmc=Email_Newsletter-_-Developer_Ed%2BTech-_-WW_WW-_-SkillsNetwork-Courses-IBMDeveloperSkillsNetwork-DB0201EN-SkillsNetwork-20127838&cm_mmca1=000026UJ&cm_mmca2=10006555&cm_mmca3=M12345678&cvosrc=email.Newsletter.M12345678&cvo_campaign=000026UJ) provides a variety of useful Python functions for accessing and manipulating data in an IBM® data server database, including functions for connecting to a database, preparing and issuing SQL statements, fetching rows from result sets, calling stored procedures, committing and rolling back transactions, handling errors, and retrieving metadata.

We first import the ibm_db library into our Python Application

``` python
import ibm_db
```

#### Identify the database connection credentials

Connecting to dashDB or DB2 database requires the following information:

-   Driver Name
-   Database name 
-   Host DNS name or IP address 
-   Host port
-   Connection protocol
-   User ID (or username)
-   User Password

**Notice:** To obtain credentials please refer to the instructions given in the past

``` python
#Replace the placeholder values with your actual Db2 hostname, username, and password:
dsn_hostname = "dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net" # e.g.: "dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net"
dsn_uid = "wls55462"        # e.g. "abc12345"
dsn_pwd = "2ls9wcg2s5l7n@08"      # e.g. "7dBZ3wWt9XN6$o0J"

dsn_driver = "{IBM DB2 ODBC DRIVER}"
dsn_database = "BLUDB"            # e.g. "BLUDB"
dsn_port = "50000"                # e.g. "50000" 
dsn_protocol = "TCPIP"            # i.e. "TCPIP"
```

#### Create the DB2 database connection

Ibm_db API uses the IBM Data Server Driver for ODBC and CLI APIs to connect to IBM DB2 and Informix.

Lets build the dsn connection string using the credentials you entered above

``` python
#DO NOT MODIFY THIS CELL. Just RUN it with Shift + Enter
#Create the dsn connection string
dsn = (
    "DRIVER={0};"
    "DATABASE={1};"
    "HOSTNAME={2};"
    "PORT={3};"
    "PROTOCOL={4};"
    "UID={5};"
    "PWD={6};").format(dsn_driver, dsn_database, dsn_hostname, dsn_port, dsn_protocol, dsn_uid, dsn_pwd)

#print the connection string to check correct values are specified
print(dsn)
```

``` 
DRIVER={IBM DB2 ODBC DRIVER};DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net;PORT=50000;PROTOCOL=TCPIP;UID=wls55462;PWD=2ls9wcg2s5l7n@08;
```

``` python
#DO NOT MODIFY THIS CELL. Just RUN it with Shift + Enter
#Create database connection

try:
    conn = ibm_db.connect(dsn, "", "")
    print ("Connected to database: ", dsn_database, "as user: ", dsn_uid, "on host: ", dsn_hostname)

except:
    print ("Unable to connect: ", ibm_db.conn_errormsg() )
```

``` 
Connected to database:  BLUDB as user:  wls55462 on host:  dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net
```

``` python
#Retrieve Metadata for the Database Server
server = ibm_db.server_info(conn)

print ("DBMS_NAME: ", server.DBMS_NAME)
print ("DBMS_VER:  ", server.DBMS_VER)
print ("DB_NAME:   ", server.DB_NAME)

#Retrieve Metadata for the Database Client / Driver
client = ibm_db.client_info(conn)

print ("DRIVER_NAME:          ", client.DRIVER_NAME) 
print ("DRIVER_VER:           ", client.DRIVER_VER)
print ("DATA_SOURCE_NAME:     ", client.DATA_SOURCE_NAME)
print ("DRIVER_ODBC_VER:      ", client.DRIVER_ODBC_VER)
print ("ODBC_VER:             ", client.ODBC_VER)
print ("ODBC_SQL_CONFORMANCE: ", client.ODBC_SQL_CONFORMANCE)
print ("APPL_CODEPAGE:        ", client.APPL_CODEPAGE)
print ("CONN_CODEPAGE:        ", client.CONN_CODEPAGE)
```

#### Close the Connection

We free all resources by closing the connection. Remember that it is always important to close connections so that we can avoid unused connections taking up resources.

``` python
ibm_db.close(conn)
```



#### Create a table

In this step we will create a table in the database with following details:

<img src = "https://ibm.box.com/shared/static/ztd2cn4xkdoj5erlk4hhng39kbp63s1h.jpg" align="center">

**Ibm_db.exec_immediate(Connection, Statement, Options)**

```python
#Lets first drop the table INSTRUCTOR in case it exists from a previous attempt
dropQuery = "drop table INSTRUCTOR"

#Now execute the drop statment
dropStmt = ibm_db.exec_immediate(conn, dropQuery)
```


    ---------------------------------------------------------------------------
    
    Exception                                 Traceback (most recent call last)
    
    <ipython-input-5-83413676a2ca> in <module>
          3 
          4 #Now execute the drop statment
    ----> 5 dropStmt = ibm_db.exec_immediate(conn, dropQuery)


    Exception: [IBM][CLI Driver][DB2/LINUXX8664] SQL0204N  "WLS55462.INSTRUCTOR" is an undefined name.  SQLSTATE=42704 SQLCODE=-204

**Dont worry if you get this error:**

If you see an exception/error similar to the following, indicating that INSTRUCTOR is an undefined name, that's okay. It just implies that the INSTRUCTOR table does not exist in the table - which would be the case if you had not created it previously.

```python
#Construct the Create Table DDL statement - replace the ... with rest of the statement
createQuery = "create table INSTRUCTOR(ID INTEGER PRIMARY KEY NOT NULL, FNAME VARCHAR(20), LNAME VARCHAR(20), CITY VARCHAR(20), CCODE CHAR(2))"

#Now fill in the name of the method and execute the statement
createStmt = ibm_db.exec_immediate(conn, createQuery)
```

#### Insert data into the table

In this step we will insert some rows of data into the table. 

The INSTRUCTOR table we created in the previous step contains 3 rows of data:

<img src="https://ibm.box.com/shared/static/j5yjassxefrjknivfpekj7698dqe4d8i.jpg" align="center">

We will start by inserting just the first row of data, i.e. for instructor Rav Ahuja 

```python
#Construct the query - replace ... with the insert statement
insertQuery = "insert into INSTRUCTOR values (1, 'Rav', 'Ahuja', 'TORONTO', 'CA')"

#execute the insert statement
insertStmt = ibm_db.exec_immediate(conn, insertQuery)
```

Now use a single query to insert the remaining two rows of data

```python
#replace ... with the insert statement that inerts the remaining two rows of data
insertQuery2 = "insert into INSTRUCTOR values (2, 'Raul', 'Chong', 'Markham', 'CA'), (3, 'Hima', 'Vasudevan', 'Chicago', 'US')"

#execute the statement
insertStmt2 = ibm_db.exec_immediate(conn, insertQuery2)
```

#### Query data in the table

In this step we will retrieve data we inserted into the INSTRUCTOR table. 

```python
#Construct the query that retrieves all rows from the INSTRUCTOR table
selectQuery = "select * from INSTRUCTOR"

#Execute the statement
selectStmt = ibm_db.exec_immediate(conn, selectQuery)

#Fetch the Dictionary (for the first row only) - replace ... with your code
ibm_db.fetch_both(selectStmt)
```


    {'ID': 1,
     0: 1,
     'FNAME': 'Rav',
     1: 'Rav',
     'LNAME': 'Ahuja',
     2: 'Ahuja',
     'CITY': 'TORONTO',
     3: 'TORONTO',
     'CCODE': 'CA',
     4: 'CA'}
```python
#Fetch the rest of the rows and print the ID and FNAME for those rows
while ibm_db.fetch_row(selectStmt) != False:
   print (" ID:",  ibm_db.result(selectStmt, 0), " FNAME:",  ibm_db.result(selectStmt, "FNAME"))
```

     ID: 2  FNAME: Raul
     ID: 3  FNAME: Hima
Bonus: now write and execute an update statement that changes the Rav's CITY to MOOSETOWN 

```python
#Enter your code below
updateQuery = "update INSTRUCTOR set CITY='MOOSETOWN' where FNAME='Rav'"
updateStmt = ibm_db.exec_immediate(conn, updateQuery)
```

Pay attention some cases. Look `Other tips` -> `Use quotes in Jupyter notebooks` for more details

#### Retrieve data into Pandas

In this step we will retrieve the contents of the INSTRUCTOR table into a Pandas dataframe

```python
import pandas
import ibm_db_dbi

#connection for pandas
pconn = ibm_db_dbi.Connection(conn)
```


```python
#query statement to retrieve all rows in INSTRUCTOR table
selectQuery = "select * from INSTRUCTOR"

#retrieve the query results into a pandas dataframe
pdf = pandas.read_sql(selectQuery, pconn)

#print just the LNAME for first row in the pandas data frame
pdf.LNAME[0]
```


    'Ahuja'




```python
#print the entire data frame
pdf
```

<table border="1" class="dataframe">
  <thead>
    <tr style="text-align: right;">
      <th></th>
      <th>ID</th>
      <th>FNAME</th>
      <th>LNAME</th>
      <th>CITY</th>
      <th>CCODE</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>0</th>
      <td>1</td>
      <td>Rav</td>
      <td>Ahuja</td>
      <td>MOOSETOWN</td>
      <td>CA</td>
    </tr>
    <tr>
      <th>1</th>
      <td>2</td>
      <td>Raul</td>
      <td>Chong</td>
      <td>Markham</td>
      <td>CA</td>
    </tr>
    <tr>
      <th>2</th>
      <td>3</td>
      <td>Hima</td>
      <td>Vasudevan</td>
      <td>Chicago</td>
      <td>US</td>
    </tr>
  </tbody>
</table>
Once the data is in a Pandas dataframe, you can do the typical pandas operations on it. 

For example you can use the shape method to see how many rows and columns are in the dataframe

```python
pdf.shape
```


    (3, 5)

### SQL Magic

#### Introduction

Jupyter notebooks have a concept of **Magic** commands that can simplify working with Python, and are particularly useful for data analysis. Your notebooks can have two types of magic commands:

- **Cell magics:** start with a double `%%` sign and apply to the entire cell
- **Line magics:** start with a single `%` (percent) sign and apply to a particular line in a cell

Their usage is of the format:
`%magicname arguments`
So far in the course you learned to accessed data from a database using the Python DB-API (and specifically ibm_db). With this API execution of queries and fetching their results involves multiple steps. You can use the **SQL Magic** commands to execute queries more easily.
For example if you want to execute the a query to select some data from a table and fetch its results, you can simply enter a command like the following in your Jupyter notebook cell:
`%sql select * from tablename`
Although SQL magic simplifies working with databases, it has some limitations. For example, unlike DB-API, there are no explicit methods to close a connection and free up resources.

Below, we'll use the load___ext magic to load the ipython-sql extension.

``` python
%load_ext sql
```

Now we have access to SQL magic. With our first SQL magic command, we'll connect to a Db2 database. However, in order to do that, you'll first need to retrieve or create your credentials to access your Db2 database.

<a ><img src = "https://ibm.box.com/shared/static/uy78gy1uq3uj6fkvd4muzy5zcr62tb72.png" width = 1000, align = "center"></a>

  <h5 align=center>  This image shows the location of your connection string if you're using Db2 on IBM Cloud. If you're using another host the format is: username:password@hostname:port/database-name
  </h5>

```python
# Enter your Db2 credentials in the connection string below
# Recall you created Service Credentials in Part III of the first lab of the course in Week 1
# i.e. from the uri field in the Service Credentials copy everything after db2:// (but remove the double quote at the end)
# for example, if your credentials are as in the screenshot above, you would write:
# %sql ibm_db_sa://my-username:my-password@dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net:50000/BLUDB
# Note the ibm_db_sa:// prefix instead of db2://
# This is because JupyterLab's ipythondb2://wls55462:2ls9wcg2s5l7n%4008@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB-sql extension uses sqlalchemy (a python SQL toolkit)
# which in turn uses IBM's sqlalchemy dialect: ibm_db_sa
%sql ibm_db_sa://wls55462:2ls9wcg2s5l7n%4008@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
```


    'Connected: wls55462@BLUDB'

For convenience, we can use `%%sql` (two %'s instead of one) at the top of a cell to indicate we want the entire cell to be treated as SQL. Let's use this to create a table and fill it with some test data for experimenting.

```sql
%%sql

CREATE TABLE INTERNATIONAL_STUDENT_TEST_SCORES (
	country VARCHAR(50),
	first_name VARCHAR(50),
	last_name VARCHAR(50),
	test_score INT
);
INSERT INTO INTERNATIONAL_STUDENT_TEST_SCORES (country, first_name, last_name, test_score)
VALUES
('United States', 'Marshall', 'Bernadot', 54),
(...),
...
```

     * ibm_db_sa://wls55462:***@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
    Done.
    99 rows affected.
#### Splitting into multiple lines in Jupyter

Use backslash`\` to split the query into multiplr lines:

``` python
%sql select "Id", "Name_of_Dog", \
	from dogs \
    where "Name_of_Dog"='Huggy'
```

Or use `%%sql` in the first row of the cell in the notebook:

``` python
%%sql
select "Id", "Name_of_Dog", 
	from dogs
    where "Name_of_Dog"='Huggy'
```

#### Using Python Variables in your SQL Statements

You can use python variables in your SQL statements by adding a ":" prefix to your python variable names.

For example, if I have a python variable `country` with a value of `"Canada"`, I can use this variable in a SQL query to find all the rows of students from Canada.

```python
country = "Canada"
%sql select * from INTERNATIONAL_STUDENT_TEST_SCORES where country = :country
```

     * ibm_db_sa://wls55462:***@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
    Done.
<table>
    <thead>
        <tr>
            <th>country</th>
            <th>first_name</th>
            <th>last_name</th>
            <th>test_score</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Canada</td>
            <td>Cristionna</td>
            <td>Wadmore</td>
            <td>46</td>
        </tr>
        <tr>
            <td>Canada</td>
            <td>Wilhelm</td>
            <td>Deeprose</td>
            <td>54</td>
        </tr>
        <tr>
            <td>Canada</td>
            <td>Carma</td>
            <td>Schule</td>
            <td>49</td>
        </tr>
    </tbody>
</table>

#### Assigning the Results of Queries to Python Variables


You can use the normal python assignment syntax to assign the results of your queries to python variables.

For example, I have a SQL query to retrieve the distribution of test scores (i.e. how many students got each score). I can assign the result of this query to the variable `test_score_distribution` using the `=` operator.

```python
test_score_distribution = %sql SELECT test_score as "Test Score", count(*) as "Frequency" from INTERNATIONAL_STUDENT_TEST_SCORES GROUP BY test_score;
test_score_distribution
```

     * ibm_db_sa://wls55462:***@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
    Done.

<table>
    <thead>
        <tr>
            <th>Test Score</th>
            <th>Frequency</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>38</td>
            <td>2</td>
        </tr>
        <tr>
            <td>40</td>
            <td>1</td>
        </tr>
        <tr>
            <td>...</td>
            <td>...</td>
        </tr>
    </tbody>
</table>

#### Converting Query Results to DataFrames


You can easily convert a SQL query result to a pandas dataframe using the `DataFrame()` method. Dataframe objects are much more versatile than SQL query result objects. For example, we can easily graph our test score distribution after converting to a dataframe.

```python
dataframe = test_score_distribution.DataFrame()

%matplotlib inline
# uncomment the following line if you get an module error saying seaborn not found
# !pip install seaborn
import seaborn

plot = seaborn.barplot(x='Test Score',y='Frequency', data=dataframe)
# or
plot = seaborn.barplot(x='Test Score',y='Frequency', data=test_score_distribution.DataFrame())
```

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210127141546152.png)

Now you know how to work with Db2 from within JupyterLab notebooks using SQL "magic"!

``` python
%%sql 

-- Feel free to experiment with the data set provided in this notebook for practice:
SELECT country, first_name, last_name, test_score FROM INTERNATIONAL_STUDENT_TEST_SCORES;  
```

#### Store the dataset in a Table

In many cases the dataset to be analyzed is available as a .CSV (comma separated values) file, perhaps on the internet. To analyze the data using SQL, it first needs to be stored in the database.
We will first read the dataset source .CSV from the internet into pandas dataframe
Then we need to create a table in our Db2 database to store the dataset. The `PERSIST` command in SQL "magic" simplifies the process of table creation and writing the data from a `pandas` dataframe into the table

**Connect to the database**

``` python
%load_ext sql

# Remember the connection string is of the format:
# %sql ibm_db_sa://my-username:my-password@my-hostname:my-port/my-db-name
# Enter the connection string for your Db2 on Cloud database instance below
# i.e. copy after db2:// from the URI string in Service Credentials of your Db2 instance. Remove the double quotes at the end.
%sql ibm_db_sa://wls55462:2ls9wcg2s5l7n%4008@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
```

**Store the dataset in a Table**

``` python
import pandas
chicago_socioeconomic_data = pandas.read_csv('https://data.cityofchicago.org/resource/jcxq-k9xf.csv')
%sql PERSIST chicago_socioeconomic_data
```

``` 
 * ibm_db_sa://wls55462:***@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB

'Persisted chicago_socioeconomic_data'
```

You can verify that the table creation was successful by making a basic query like:

```python
%sql SELECT * FROM chicago_socioeconomic_data limit 5;
```

     * ibm_db_sa://wls55462:***@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
    Done.
<table>
    <thead>
        <tr>
            <th>index</th>
            <th>ca</th>
            <th>community_area_name</th>
            <th>percent_of_housing_crowded</th>
            <th>percent_households_below_poverty</th>
            <th>percent_aged_16_unemployed</th>
            <th>percent_aged_25_without_high_school_diploma</th>
            <th>percent_aged_under_18_or_over_64</th>
            <th>per_capita_income_</th>
            <th>hardship_index</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>0</td>
            <td>1.0</td>
            <td>Rogers Park</td>
            <td>7.7</td>
            <td>23.6</td>
            <td>8.7</td>
            <td>18.2</td>
            <td>27.5</td>
            <td>23939</td>
            <td>39.0</td>
        </tr>
        <tr>
            <td>1</td>
            <td>2.0</td>
            <td>West Ridge</td>
            <td>7.8</td>
            <td>17.2</td>
            <td>8.8</td>
            <td>20.8</td>
            <td>38.5</td>
            <td>23040</td>
            <td>46.0</td>
        </tr>
        <tr>
            <td>2</td>
            <td>3.0</td>
            <td>Uptown</td>
            <td>3.8</td>
            <td>24.0</td>
            <td>8.9</td>
            <td>11.8</td>
            <td>22.2</td>
            <td>35787</td>
            <td>20.0</td>
        </tr>
        <tr>
            <td>3</td>
            <td>4.0</td>
            <td>Lincoln Square</td>
            <td>3.4</td>
            <td>10.9</td>
            <td>8.2</td>
            <td>13.4</td>
            <td>25.5</td>
            <td>37524</td>
            <td>17.0</td>
        </tr>
        <tr>
            <td>4</td>
            <td>5.0</td>
            <td>North Center</td>
            <td>0.3</td>
            <td>7.5</td>
            <td>5.2</td>
            <td>4.5</td>
            <td>26.2</td>
            <td>57123</td>
            <td>6.0</td>
        </tr>
    </tbody>
</table



#### Get Table and Column Details

Query system catalog to get a list of tables & their properties:

``` python
%load_ext sql

# Enter the connection string for your Db2 on Cloud database instance below
# %sql ibm_db_sa://my-username:my-password@my-hostname:my-port/my-db-name
%sql ibm_db_sa://wls55462:2ls9wcg2s5l7n%4008@dashdb-txn-sbox-yp-dal09-04.services.dal.bluemix.net:50000/BLUDB
```

You can verify that the table creation was successful by retrieving the list of all tables in your schema and checking whether the SCHOOLS table was created

```python
%sql select * from syscat.tables LIMIT 3
```

<table>
    <thead>
        <tr>
            <th>tabschema</th>
            <th>tabname</th>
            <th>owner</th>
            <th>ownertype</th>
            <th>TYPE</th>
            <th>status</th>
            <th>base_tabschema</th>
            <th>base_tabname</th>
            <th>rowtypeschema</th>
            <th>rowtypename</th>
            <th>create_time</th>
            <th>alter_time</th>
            <th>invalidate_time</th>
            <th>stats_time</th>
            <th>colcount</th>
            <th>tableid</th>
            <th>tbspaceid</th>
            <th>card</th>
            <th>npages</th>
            <th>mpages</th>
            <th>fpages</th>
            <th>npartitions</th>
            <th>nfiles</th>
            <th>tablesize</th>
            <th>overflow</th>
            <th>tbspace</th>
            <th>index_tbspace</th>
            <th>long_tbspace</th>
            <th>parents</th>
            <th>children</th>
            <th>selfrefs</th>
            <th>keycolumns</th>
            <th>keyindexid</th>
            <th>keyunique</th>
            <th>checkcount</th>
            <th>datacapture</th>
            <th>const_checked</th>
            <th>pmap_id</th>
            <th>partition_mode</th>
            <th>log_attribute</th>
            <th>pctfree</th>
            <th>append_mode</th>
            <th>REFRESH</th>
            <th>refresh_time</th>
            <th>LOCKSIZE</th>
            <th>VOLATILE</th>
            <th>row_format</th>
            <th>property</th>
            <th>statistics_profile</th>
            <th>compression</th>
            <th>rowcompmode</th>
            <th>access_mode</th>
            <th>clustered</th>
            <th>active_blocks</th>
            <th>droprule</th>
            <th>maxfreespacesearch</th>
            <th>avgcompressedrowsize</th>
            <th>avgrowcompressionratio</th>
            <th>avgrowsize</th>
            <th>pctrowscompressed</th>
            <th>logindexbuild</th>
            <th>codepage</th>
            <th>collationschema</th>
            <th>collationname</th>
            <th>collationschema_orderby</th>
            <th>collationname_orderby</th>
            <th>encoding_scheme</th>
            <th>pctpagessaved</th>
            <th>last_regen_time</th>
            <th>secpolicyid</th>
            <th>protectiongranularity</th>
            <th>auditpolicyid</th>
            <th>auditpolicyname</th>
            <th>auditexceptionenabled</th>
            <th>definer</th>
            <th>oncommit</th>
            <th>logged</th>
            <th>onrollback</th>
            <th>lastused</th>
            <th>control</th>
            <th>temporaltype</th>
            <th>tableorg</th>
            <th>extended_row_size</th>
            <th>pctextendedrows</th>
            <th>remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>SYSIBM  </td>
            <td>SYSTABLES</td>
            <td>SYSIBM  </td>
            <td>S</td>
            <td>T</td>
            <td>N</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>2018-03-13 03:30:12.705161</td>
            <td>2021-01-26 20:35:22.785259</td>
            <td>83</td>
            <td>5</td>
            <td>0</td>
            <td>14489</td>
            <td>554</td>
            <td>0</td>
            <td>786</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>73</td>
            <td>SYSCATSPACE</td>
            <td>None</td>
            <td>None</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>N</td>
            <td>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</td>
            <td>0</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>R</td>
            <td> </td>
            <td>N</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>None</td>
            <td>N</td>
            <td> </td>
            <td>F</td>
            <td>None</td>
            <td>0</td>
            <td> </td>
            <td>999</td>
            <td>0</td>
            <td>0.0</td>
            <td>512</td>
            <td>0.0</td>
            <td>None</td>
            <td>1208</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td> </td>
            <td>0</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>0</td>
            <td> </td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>SYSIBM  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>2021-01-25</td>
            <td>R</td>
            <td>N</td>
            <td>R</td>
            <td>N</td>
            <td>-1.0</td>
            <td>None</td>
        </tr>
        <tr>
            <td>SYSIBM  </td>
            <td>SYSCOLUMNS</td>
            <td>SYSIBM  </td>
            <td>S</td>
            <td>T</td>
            <td>N</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>2018-03-13 03:30:02.043364</td>
            <td>2021-01-26 12:25:23.950308</td>
            <td>45</td>
            <td>6</td>
            <td>0</td>
            <td>206681</td>
            <td>3126</td>
            <td>0</td>
            <td>5862</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>1373</td>
            <td>SYSCATSPACE</td>
            <td>None</td>
            <td>None</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>N</td>
            <td>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</td>
            <td>0</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>R</td>
            <td> </td>
            <td>N</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>None</td>
            <td>N</td>
            <td> </td>
            <td>F</td>
            <td>None</td>
            <td>0</td>
            <td> </td>
            <td>999</td>
            <td>0</td>
            <td>0.0</td>
            <td>248</td>
            <td>0.0</td>
            <td>None</td>
            <td>1208</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td> </td>
            <td>0</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>0</td>
            <td> </td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>SYSIBM  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>2021-01-26</td>
            <td>R</td>
            <td>N</td>
            <td>R</td>
            <td>N</td>
            <td>-1.0</td>
            <td>None</td>
        </tr>
        <tr>
            <td>SYSIBM  </td>
            <td>SYSINDEXES</td>
            <td>SYSIBM  </td>
            <td>S</td>
            <td>T</td>
            <td>N</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>2018-03-13 03:30:05.393131</td>
            <td>2021-01-26 18:55:22.824781</td>
            <td>71</td>
            <td>7</td>
            <td>0</td>
            <td>9909</td>
            <td>303</td>
            <td>0</td>
            <td>404</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>32</td>
            <td>SYSCATSPACE</td>
            <td>None</td>
            <td>None</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>N</td>
            <td>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</td>
            <td>0</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>R</td>
            <td> </td>
            <td>N</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>None</td>
            <td>N</td>
            <td> </td>
            <td>F</td>
            <td>None</td>
            <td>0</td>
            <td> </td>
            <td>999</td>
            <td>0</td>
            <td>0.0</td>
            <td>402</td>
            <td>0.0</td>
            <td>None</td>
            <td>1208</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td> </td>
            <td>0</td>
            <td>2018-03-13 03:17:18.009191</td>
            <td>0</td>
            <td> </td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>SYSIBM  </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>2021-01-26</td>
            <td>R</td>
            <td>N</td>
            <td>R</td>
            <td>N</td>
            <td>-1.0</td>
            <td>None</td>
        </tr>
    </tbody>
</table>

Type in your query to retrieve list of all tables in the database for your db2 schema (username)

```python
#In Db2 the system catalog table called SYSCAT.TABLES contains the table metadata

%sql select TABSCHEMA, TABNAME, CREATE_TIME from SYSCAT.TABLES where TABSCHEMA='WLS55462' LIMIT 3
```

<table>
    <thead>
        <tr>
            <th>tabschema</th>
            <th>tabname</th>
            <th>create_time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>WLS55462</td>
            <td>EMPLOYEES</td>
            <td>2021-01-24 11:14:20.259934</td>
        </tr>
        <tr>
            <td>WLS55462</td>
            <td>JOB_HISTORY</td>
            <td>2021-01-24 11:14:20.445895</td>
        </tr>
        <tr>
            <td>WLS55462</td>
            <td>LOCATIONS</td>
            <td>2021-01-24 11:14:20.941819</td>
        </tr>
    </tbody>
</table>


Or, you can retrieve list of all tables where the schema name is not one of the system created ones:

```python
%sql select TABSCHEMA, TABNAME, CREATE_TIME from SYSCAT.TABLES \
      where TABSCHEMA not in ('SYSIBM', 'SYSCAT', 'SYSSTAT', 'SYSIBMADM', 'SYSTOOLS', 'SYSPUBLIC') LIMIT 3
```

<table>
    <thead>
        <tr>
            <th>tabschema</th>
            <th>tabname</th>
            <th>create_time</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>WLS55462</td>
            <td>EMPLOYEES</td>
            <td>2021-01-24 11:14:20.259934</td>
        </tr>
        <tr>
            <td>WLS55462</td>
            <td>JOB_HISTORY</td>
            <td>2021-01-24 11:14:20.445895</td>
        </tr>
        <tr>
            <td>WLS55462</td>
            <td>LOCATIONS</td>
            <td>2021-01-24 11:14:20.941819</td>
        </tr>
    </tbody>
</table>


Or, just query for a specifc table that you want to verify exists in the database

```python
%sql select * from SYSCAT.TABLES where TABNAME = 'SCHOOLS'
```

<table>
    <thead>
        <tr>
            <th>tabschema</th>
            <th>tabname</th>
            <th>owner</th>
            <th>ownertype</th>
            <th>TYPE</th>
            <th>status</th>
            <th>base_tabschema</th>
            <th>base_tabname</th>
            <th>rowtypeschema</th>
            <th>rowtypename</th>
            <th>create_time</th>
            <th>alter_time</th>
            <th>invalidate_time</th>
            <th>stats_time</th>
            <th>colcount</th>
            <th>tableid</th>
            <th>tbspaceid</th>
            <th>card</th>
            <th>npages</th>
            <th>mpages</th>
            <th>fpages</th>
            <th>npartitions</th>
            <th>nfiles</th>
            <th>tablesize</th>
            <th>overflow</th>
            <th>tbspace</th>
            <th>index_tbspace</th>
            <th>long_tbspace</th>
            <th>parents</th>
            <th>children</th>
            <th>selfrefs</th>
            <th>keycolumns</th>
            <th>keyindexid</th>
            <th>keyunique</th>
            <th>checkcount</th>
            <th>datacapture</th>
            <th>const_checked</th>
            <th>pmap_id</th>
            <th>partition_mode</th>
            <th>log_attribute</th>
            <th>pctfree</th>
            <th>append_mode</th>
            <th>REFRESH</th>
            <th>refresh_time</th>
            <th>LOCKSIZE</th>
            <th>VOLATILE</th>
            <th>row_format</th>
            <th>property</th>
            <th>statistics_profile</th>
            <th>compression</th>
            <th>rowcompmode</th>
            <th>access_mode</th>
            <th>clustered</th>
            <th>active_blocks</th>
            <th>droprule</th>
            <th>maxfreespacesearch</th>
            <th>avgcompressedrowsize</th>
            <th>avgrowcompressionratio</th>
            <th>avgrowsize</th>
            <th>pctrowscompressed</th>
            <th>logindexbuild</th>
            <th>codepage</th>
            <th>collationschema</th>
            <th>collationname</th>
            <th>collationschema_orderby</th>
            <th>collationname_orderby</th>
            <th>encoding_scheme</th>
            <th>pctpagessaved</th>
            <th>last_regen_time</th>
            <th>secpolicyid</th>
            <th>protectiongranularity</th>
            <th>auditpolicyid</th>
            <th>auditpolicyname</th>
            <th>auditexceptionenabled</th>
            <th>definer</th>
            <th>oncommit</th>
            <th>logged</th>
            <th>onrollback</th>
            <th>lastused</th>
            <th>control</th>
            <th>temporaltype</th>
            <th>tableorg</th>
            <th>extended_row_size</th>
            <th>pctextendedrows</th>
            <th>remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>WLS55462</td>
            <td>SCHOOLS</td>
            <td>WLS55462</td>
            <td>U</td>
            <td>T</td>
            <td>N</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>2021-01-26 03:34:00.898765</td>
            <td>2021-01-26 03:34:00.898765</td>
            <td>2021-01-26 03:34:00.898765</td>
            <td>None</td>
            <td>78</td>
            <td>13</td>
            <td>833</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>wls55462space1</td>
            <td>None</td>
            <td>None</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>0</td>
            <td>N</td>
            <td>YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY</td>
            <td>1</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>R</td>
            <td> </td>
            <td>N</td>
            <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>
            <td>None</td>
            <td>N</td>
            <td> </td>
            <td>F</td>
            <td>None</td>
            <td>-1</td>
            <td>N</td>
            <td>999</td>
            <td>-1</td>
            <td>-1.0</td>
            <td>-1</td>
            <td>-1.0</td>
            <td>None</td>
            <td>1208</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td> </td>
            <td>-1</td>
            <td>2021-01-26 03:34:00.898765</td>
            <td>0</td>
            <td> </td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>WLS55462</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td>0001-01-01</td>
            <td> </td>
            <td>N</td>
            <td>R</td>
            <td>N</td>
            <td>-1.0</td>
            <td>None</td>
        </tr>
    </tbody>
</table>


To obtain the column names query syscat.columns:

```python
%sql select * from SYSCAT.COLUMNS where TABNAME = 'SCHOOLS' LIMIT 3
```

<table>
    <thead>
        <tr>
            <th>tabschema</th>
            <th>tabname</th>
            <th>colname</th>
            <th>colno</th>
            <th>typeschema</th>
            <th>typename</th>
            <th>length</th>
            <th>scale</th>
            <th>typestringunits</th>
            <th>stringunitslength</th>
            <th>DEFAULT</th>
            <th>NULLS</th>
            <th>codepage</th>
            <th>collationschema</th>
            <th>collationname</th>
            <th>logged</th>
            <th>compact</th>
            <th>colcard</th>
            <th>high2key</th>
            <th>low2key</th>
            <th>avgcollen</th>
            <th>keyseq</th>
            <th>partkeyseq</th>
            <th>nquantiles</th>
            <th>nmostfreq</th>
            <th>numnulls</th>
            <th>target_typeschema</th>
            <th>target_typename</th>
            <th>scope_tabschema</th>
            <th>scope_tabname</th>
            <th>source_tabschema</th>
            <th>source_tabname</th>
            <th>dl_features</th>
            <th>special_props</th>
            <th>hidden</th>
            <th>inline_length</th>
            <th>pctinlined</th>
            <th>IDENTITY</th>
            <th>rowchangetimestamp</th>
            <th>GENERATED</th>
            <th>text</th>
            <th>compress</th>
            <th>avgdistinctperpage</th>
            <th>pagevarianceratio</th>
            <th>sub_count</th>
            <th>sub_delim_length</th>
            <th>avgcollenchar</th>
            <th>implicitvalue</th>
            <th>seclabelname</th>
            <th>rowbegin</th>
            <th>rowend</th>
            <th>transactionstartid</th>
            <th>pctencoded</th>
            <th>avgencodedcollen</th>
            <th>qualifier</th>
            <th>func_path</th>
            <th>randdistkey</th>
            <th>remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>WLS55462</td>
            <td>SCHOOLS</td>
            <td>ZIP_Code</td>
            <td>6</td>
            <td>SYSIBM  </td>
            <td>INTEGER</td>
            <td>4</td>
            <td>0</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>Y</td>
            <td>0</td>
            <td>None</td>
            <td>None</td>
            <td> </td>
            <td> </td>
            <td>51</td>
            <td>60707</td>
            <td>60607</td>
            <td>5</td>
            <td>None</td>
            <td>0</td>
            <td>20</td>
            <td>10</td>
            <td>0</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>O</td>
            <td>None</td>
            <td>-1.0</td>
            <td>-1</td>
            <td>-1</td>
            <td>-1</td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>-1</td>
            <td>-1.0</td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>None</td>
        </tr>
        <tr>
            <td>WLS55462</td>
            <td>SCHOOLS</td>
            <td>Phone_Number</td>
            <td>7</td>
            <td>SYSIBM  </td>
            <td>VARCHAR</td>
            <td>14</td>
            <td>0</td>
            <td>OCTETS</td>
            <td>14</td>
            <td>None</td>
            <td>Y</td>
            <td>1208</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td> </td>
            <td> </td>
            <td>566</td>
            <td>&#x27;(773) 535-9930&#x27;</td>
            <td>&#x27;(773) 534-0146&#x27;</td>
            <td>19</td>
            <td>None</td>
            <td>0</td>
            <td>20</td>
            <td>10</td>
            <td>0</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>O</td>
            <td>None</td>
            <td>-1.0</td>
            <td>-1</td>
            <td>-1</td>
            <td>14</td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>-1</td>
            <td>-1.0</td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>None</td>
        </tr>
        <tr>
            <td>WLS55462</td>
            <td>SCHOOLS</td>
            <td>Link</td>
            <td>8</td>
            <td>SYSIBM  </td>
            <td>VARCHAR</td>
            <td>78</td>
            <td>0</td>
            <td>OCTETS</td>
            <td>78</td>
            <td>None</td>
            <td>Y</td>
            <td>1208</td>
            <td>SYSIBM</td>
            <td>IDENTITY</td>
            <td> </td>
            <td> </td>
            <td>2</td>
            <td>&#x27;&#x27;</td>
            <td>&#x27;http://schoolreports.cps.edu/Scho&#x27;</td>
            <td>83</td>
            <td>None</td>
            <td>0</td>
            <td>20</td>
            <td>10</td>
            <td>1</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td>None</td>
            <td> </td>
            <td>0</td>
            <td>-1</td>
            <td>N</td>
            <td>N</td>
            <td> </td>
            <td>None</td>
            <td>O</td>
            <td>None</td>
            <td>-1.0</td>
            <td>-1</td>
            <td>-1</td>
            <td>78</td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>N</td>
            <td>N</td>
            <td>-1</td>
            <td>-1.0</td>
            <td>None</td>
            <td>None</td>
            <td>N</td>
            <td>None</td>
        </tr>
    </tbody>
</table>


To obtain specific column properties:

```python
%sql select distinct(name), coltype, length \
    from SYSIBM.SYSCOLUMNS \
    where TBNAME = 'SCHOOLS' LIMIT 3
```

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>coltype</th>
            <th>length</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>10th Grade PLAN (2009)</td>
            <td>VARCHAR </td>
            <td>4</td>
        </tr>
        <tr>
            <td>10th Grade PLAN (2010)</td>
            <td>VARCHAR </td>
            <td>4</td>
        </tr>
        <tr>
            <td>11th Grade Average ACT (2011)</td>
            <td>VARCHAR </td>
            <td>4</td>
        </tr>
    </tbody>
</table>

## Other tips

### Query column names with mixed case

Retrieve Id column from DOGS table. Try:

``` sql
select id from DOGS
```

If you run this query, you will get this error:

```
Error: "ID" is not valid in the context where it is used .. SQLCODE=-206, SQLSTATE=42703, DRIVER=4.22.36
```

Use double quotes to specify mixed-case column names:

``` sql
select "Id" from DOGS
```



### Query column names with spaces and special characters

By deafult, spaces are mapped to underscores:

e.g. `Name of Dog` -> `Name_of_Dog`

Other characters may also get mapped to underscores:

e.g. `Breed (dominant breed if not pure breed)` -> `Breed__dominant_breed_if_not_pure_breed_`

``` sql
select "Id", "Name_of_Dog", "Breed__dominant_breed_if_not_pure_breed_" from dogs
```



### Use quotes in Jupyter notebooks

First assign queries to variables:

``` python
selectQuery = 'select "Id" from dogs'
```

Use a backslash `\` as the escape character in cases where the query contains single quotes:

``` python
selectQuery = 'select * from dogs
	where "Name_of_Dog"=\'Huggy\' '
```

