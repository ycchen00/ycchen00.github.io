---

_You are currently looking at **version 1.1** of this notebook. To download notebooks and datafiles, as well as get help on Jupyter notebooks in the Coursera platform, visit the [Jupyter Notebook FAQ](https://www.coursera.org/learn/python-data-analysis/resources/0dhYG) course resource._

---

# The Python Programming Language: Functions


```python
x = 1
y = 2
x + y
```




    3




```python
y
```




    2



<br>
`add_numbers` is a function that takes two numbers and adds them together.


```python
def add_numbers(x, y):
    return x + y

add_numbers(1, 2)
```




    3



<br>
'add_numbers' updated to take an optional 3rd parameter. Using `print` allows printing of multiple expressions within a single cell.


```python
def add_numbers(x,y,z=None):
    if (z==None):
        return x+y
    else:
        return x+y+z

print(add_numbers(1, 2))
print(add_numbers(1, 2, 3))
```

    3
    6
    

<br>
`add_numbers` updated to take an optional flag parameter.


```python
def add_numbers(x, y, z=None, flag=False):
    if (flag):
        print('Flag is true!')
    if (z==None):
        return x + y
    else:
        return x + y + z
    
print(add_numbers(1, 2, flag=True))
```

    Flag is true!
    3
    

<br>
Assign function `add_numbers` to variable `a`.


```python
def add_numbers(x,y):
    return x+y

a = add_numbers
a(1,2)
```




    3



# The Python Programming Language: Types and Sequences

<br>
Use `type` to return the object's type.


```python
type('This is a string')
```




    str




```python
type(None)
```




    NoneType




```python
type(1)
```




    int




```python
type(1.0)
```




    float




```python
type(add_numbers)
```




    function



<br>
Tuples are an immutable data structure (cannot be altered).


```python
x = (1, 'a', 2, 'b')
type(x)
```




    tuple



<br>
Lists are a mutable data structure.


```python
x = [1, 'a', 2, 'b']
type(x)
```




    list



<br>
Use `append` to append an object to a list.


```python
x.append(3.3)
print(x)
```

    [1, 'a', 2, 'b', 3.3]
    

<br>
This is an example of how to loop through each item in the list.


```python
for item in x:
    print(item)
```

    1
    a
    2
    b
    3.3
    

<br>
Or using the indexing operator:


```python
i=0
while( i != len(x) ):
    print(x[i])
    i = i + 1
```

    1
    a
    2
    b
    3.3
    

<br>
Use `+` to concatenate lists.


```python
[1,2] + [3,4]
```




    [1, 2, 3, 4]



<br>
Use `*` to repeat lists.


```python
[1]*3
```




    [1, 1, 1]



<br>
Use the `in` operator to check if something is inside a list.


```python
1 in [1, 2, 3]
```




    True



<br>
Now let's look at strings. Use bracket notation to slice a string.


```python
x = 'This is a string'
print(x[0]) #first character
print(x[0:1]) #first character, but we have explicitly set the end character
print(x[0:2]) #first two characters

```

    T
    T
    Th
    

<br>
This will return the last element of the string.


```python
x[-1]
```




    'g'



<br>
This will return the slice starting from the 4th element from the end and stopping before the 2nd element from the end.


```python
x[-4:-2]
```




    'ri'



<br>
This is a slice from the beginning of the string and stopping before the 3rd element.


```python
x[:3]
```




    'Thi'



<br>
And this is a slice starting from the 4th element of the string and going all the way to the end.


```python
x[3:]
```




    's is a string'




```python
firstname = 'Christopher'
lastname = 'Brooks'

print(firstname + ' ' + lastname)
print(firstname*3)
print('Chris' in firstname)

```

    Christopher Brooks
    ChristopherChristopherChristopher
    True
    

<br>
`split` returns a list of all the words in a string, or a list split on a specific character.


```python
firstname = 'Christopher Arthur Hansen Brooks'.split(' ')[0] # [0] selects the first element of the list
lastname = 'Christopher Arthur Hansen Brooks'.split(' ')[-1] # [-1] selects the last element of the list
print(firstname)
print(lastname)
```

    Christopher
    Brooks
    

<br>
Make sure you convert objects to strings before concatenating.


```python
'Chris' + 2
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-27-9d01956b24db> in <module>
    ----> 1 'Chris' + 2
    

    TypeError: can only concatenate str (not "int") to str



```python
'Chris' + str(2)
```




    'Chris2'



<br>
Dictionaries associate keys with values.


```python
x = {'Christopher Brooks': 'brooksch@umich.edu', 'Bill Gates': 'billg@microsoft.com'}
x['Christopher Brooks'] # Retrieve a value by using the indexing operator

```




    'brooksch@umich.edu'




```python
x['Kevyn Collins-Thompson'] = None
x['Kevyn Collins-Thompson']
```

<br>
Iterate over all of the keys:


```python
for name in x:
    print(x[name])
```

    brooksch@umich.edu
    billg@microsoft.com
    None
    

<br>
Iterate over all of the values:


```python
for email in x.values():
    print(email)
```

    brooksch@umich.edu
    billg@microsoft.com
    None
    

<br>
Iterate over all of the items in the list:


```python
for name, email in x.items():
    print(name)
    print(email)
```

    Christopher Brooks
    brooksch@umich.edu
    Bill Gates
    billg@microsoft.com
    Kevyn Collins-Thompson
    None
    

<br>
You can unpack a sequence into different variables:


```python
x = ('Christopher', 'Brooks', 'brooksch@umich.edu')
fname, lname, email = x
```


```python
fname
```




    'Christopher'




```python
lname
```




    'Brooks'



<br>
Make sure the number of values you are unpacking matches the number of variables being assigned.


```python
x = ('Christopher', 'Brooks', 'brooksch@umich.edu', 'Ann Arbor')
fname, lname, email = x
```


    ---------------------------------------------------------------------------

    ValueError                                Traceback (most recent call last)

    <ipython-input-13-d2c50ec4987a> in <module>
          1 x = ('Christopher', 'Brooks', 'brooksch@umich.edu', 'Ann Arbor')
    ----> 2 fname, lname, email = x
    

    ValueError: too many values to unpack (expected 3)


# The Python Programming Language: More on Strings


```python
print('Chris' + 2)
```


    ---------------------------------------------------------------------------

    TypeError                                 Traceback (most recent call last)

    <ipython-input-14-928a1e955b60> in <module>
    ----> 1 print('Chris' + 2)
    

    TypeError: can only concatenate str (not "int") to str



```python
print('Chris' + str(2))
```

<br>
Python has a built in method for convenient string formatting.


```python
sales_record = {
'price': 3.24,
'num_items': 4,
'person': 'Chris'}

sales_statement = '{} bought {} item(s) at a price of {} each for a total of {}'

print(sales_statement.format(sales_record['person'],
                             sales_record['num_items'],
                             sales_record['price'],
                             sales_record['num_items']*sales_record['price']))

```

# Reading and Writing CSV files

<br>
Let's import our datafile mpg.csv, which contains fuel economy data for 234 cars.

* mpg : miles per gallon
* class : car classification
* cty : city mpg
* cyl : # of cylinders
* displ : engine displacement in liters
* drv : f = front-wheel drive, r = rear wheel drive, 4 = 4wd
* fl : fuel (e = ethanol E85, d = diesel, r = regular, p = premium, c = CNG)
* hwy : highway mpg
* manufacturer : automobile manufacturer
* model : model of car
* trans : type of transmission
* year : model year


```python
import csv

%precision 2

with open('../datasets/mpg.csv') as csvfile:
    mpg = list(csv.DictReader(csvfile))
    
mpg[:3] # The first three dictionaries in our list.
```

<br>
`csv.Dictreader` has read in each row of our csv file as a dictionary. `len` shows that our list is comprised of 234 dictionaries.


```python
len(mpg)
```




    234



<br>
`keys` gives us the column names of our csv.


```python
mpg[0].keys()
```




    dict_keys(['', 'manufacturer', 'model', 'displ', 'year', 'cyl', 'trans', 'drv', 'cty', 'hwy', 'fl', 'class'])



<br>
This is how to find the average cty fuel economy across all cars. All values in the dictionaries are strings, so we need to convert to float.


```python
sum(float(d['cty']) for d in mpg) / len(mpg)
```




    16.86



<br>
Similarly this is how to find the average hwy fuel economy across all cars.


```python
sum(float(d['hwy']) for d in mpg) / len(mpg)
```




    23.44



<br>
Use `set` to return the unique values for the number of cylinders the cars in our dataset have.


```python
cylinders = set(d['cyl'] for d in mpg)
cylinders
```




    {'4', '5', '6', '8'}



<br>
Here's a more complex example where we are grouping the cars by number of cylinder, and finding the average cty mpg for each group.


```python
CtyMpgByCyl = []

for c in cylinders: # iterate over all the cylinder levels
    summpg = 0
    cyltypecount = 0
    for d in mpg: # iterate over all dictionaries
        if d['cyl'] == c: # if the cylinder level type matches,
            summpg += float(d['cty']) # add the cty mpg
            cyltypecount += 1 # increment the count
    CtyMpgByCyl.append((c, summpg / cyltypecount)) # append the tuple ('cylinder', 'avg mpg')

CtyMpgByCyl.sort(key=lambda x: x[0])
CtyMpgByCyl
```




    [('4', 21.01), ('5', 20.50), ('6', 16.22), ('8', 12.57)]



<br>
Use `set` to return the unique values for the class types in our dataset.


```python
vehicleclass = set(d['class'] for d in mpg) # what are the class types
vehicleclass
```




    {'2seater', 'compact', 'midsize', 'minivan', 'pickup', 'subcompact', 'suv'}



<br>
And here's an example of how to find the average hwy mpg for each class of vehicle in our dataset.


```python
HwyMpgByClass = []

for t in vehicleclass: # iterate over all the vehicle classes
    summpg = 0
    vclasscount = 0
    for d in mpg: # iterate over all dictionaries
        if d['class'] == t: # if the cylinder amount type matches,
            summpg += float(d['hwy']) # add the hwy mpg
            vclasscount += 1 # increment the count
    HwyMpgByClass.append((t, summpg / vclasscount)) # append the tuple ('class', 'avg mpg')

HwyMpgByClass.sort(key=lambda x: x[1])
HwyMpgByClass
```




    [('pickup', 16.88),
     ('suv', 18.13),
     ('minivan', 22.36),
     ('2seater', 24.80),
     ('midsize', 27.29),
     ('subcompact', 28.14),
     ('compact', 28.30)]



# The Python Programming Language: Dates and Times


```python
import datetime as dt
import time as tm
```

<br>
`time` returns the current time in seconds since the Epoch. (January 1st, 1970)


```python
tm.time()
```




    1614223686.18



<br>
Convert the timestamp to datetime.


```python
dtnow = dt.datetime.fromtimestamp(tm.time())
dtnow
```




    datetime.datetime(2021, 2, 25, 11, 28, 6, 196625)



<br>
Handy datetime attributes:


```python
dtnow.year, dtnow.month, dtnow.day, dtnow.hour, dtnow.minute, dtnow.second # get year, month, day, etc.from a datetime
```




    (2021, 2, 25, 11, 28, 6)



<br>
`timedelta` is a duration expressing the difference between two dates.


```python
delta = dt.timedelta(days = 100) # create a timedelta of 100 days
delta
```




    datetime.timedelta(days=100)



<br>
`date.today` returns the current local date.


```python
today = dt.date.today()
```


```python
today - delta # the date 100 days ago
```




    datetime.date(2020, 11, 17)




```python
today > today-delta # compare dates
```




    True



# The Python Programming Language: Objects and map()

<br>
An example of a class in python:


```python
class Person:
    department = 'School of Information' #a class variable

    def set_name(self, new_name): #a method
        self.name = new_name
    def set_location(self, new_location):
        self.location = new_location
```


```python
person = Person()
person.set_name('Christopher Brooks')
person.set_location('Ann Arbor, MI, USA')
print('{} live in {} and works in the department {}'.format(person.name, person.location, person.department))
```

    Christopher Brooks live in Ann Arbor, MI, USA and works in the department School of Information
    

<br>
Here's an example of mapping the `min` function between two lists.


```python
store1 = [10.00, 11.00, 12.34, 2.34]
store2 = [9.00, 11.10, 12.34, 2.01]
cheapest = map(min, store1, store2)
cheapest
```




    <map at 0x2177d83a1c0>



<br>
Now let's iterate through the map object to see the values.


```python
for item in cheapest:
    print(item)
```

    9.0
    11.0
    12.34
    2.01
    

# The Python Programming Language: Lambda and List Comprehensions

<br>
Here's an example of lambda that takes in three parameters and adds the first two.


```python
my_function = lambda a, b, c : a + b
```


```python
my_function(1, 2, 3)
```




    3



<br>
Let's iterate from 0 to 999 and return the even numbers.


```python
my_list = []
for number in range(0, 1000):
    if number % 2 == 0:
        my_list.append(number)
my_list
```




    [0,
     2,
     4,
     6,
     8,
     10,
     12,
     14,
     16,
     18,
     20,
     22,
     24,
     26,
     28,
     30,
     32,
     34,
     36,
     38,
     40,
     42,
     44,
     46,
     48,
     50,
     52,
     54,
     56,
     58,
     60,
     62,
     64,
     66,
     68,
     70,
     72,
     74,
     76,
     78,
     80,
     82,
     84,
     86,
     88,
     90,
     92,
     94,
     96,
     98,
     100,
     102,
     104,
     106,
     108,
     110,
     112,
     114,
     116,
     118,
     120,
     122,
     124,
     126,
     128,
     130,
     132,
     134,
     136,
     138,
     140,
     142,
     144,
     146,
     148,
     150,
     152,
     154,
     156,
     158,
     160,
     162,
     164,
     166,
     168,
     170,
     172,
     174,
     176,
     178,
     180,
     182,
     184,
     186,
     188,
     190,
     192,
     194,
     196,
     198,
     200,
     202,
     204,
     206,
     208,
     210,
     212,
     214,
     216,
     218,
     220,
     222,
     224,
     226,
     228,
     230,
     232,
     234,
     236,
     238,
     240,
     242,
     244,
     246,
     248,
     250,
     252,
     254,
     256,
     258,
     260,
     262,
     264,
     266,
     268,
     270,
     272,
     274,
     276,
     278,
     280,
     282,
     284,
     286,
     288,
     290,
     292,
     294,
     296,
     298,
     300,
     302,
     304,
     306,
     308,
     310,
     312,
     314,
     316,
     318,
     320,
     322,
     324,
     326,
     328,
     330,
     332,
     334,
     336,
     338,
     340,
     342,
     344,
     346,
     348,
     350,
     352,
     354,
     356,
     358,
     360,
     362,
     364,
     366,
     368,
     370,
     372,
     374,
     376,
     378,
     380,
     382,
     384,
     386,
     388,
     390,
     392,
     394,
     396,
     398,
     400,
     402,
     404,
     406,
     408,
     410,
     412,
     414,
     416,
     418,
     420,
     422,
     424,
     426,
     428,
     430,
     432,
     434,
     436,
     438,
     440,
     442,
     444,
     446,
     448,
     450,
     452,
     454,
     456,
     458,
     460,
     462,
     464,
     466,
     468,
     470,
     472,
     474,
     476,
     478,
     480,
     482,
     484,
     486,
     488,
     490,
     492,
     494,
     496,
     498,
     500,
     502,
     504,
     506,
     508,
     510,
     512,
     514,
     516,
     518,
     520,
     522,
     524,
     526,
     528,
     530,
     532,
     534,
     536,
     538,
     540,
     542,
     544,
     546,
     548,
     550,
     552,
     554,
     556,
     558,
     560,
     562,
     564,
     566,
     568,
     570,
     572,
     574,
     576,
     578,
     580,
     582,
     584,
     586,
     588,
     590,
     592,
     594,
     596,
     598,
     600,
     602,
     604,
     606,
     608,
     610,
     612,
     614,
     616,
     618,
     620,
     622,
     624,
     626,
     628,
     630,
     632,
     634,
     636,
     638,
     640,
     642,
     644,
     646,
     648,
     650,
     652,
     654,
     656,
     658,
     660,
     662,
     664,
     666,
     668,
     670,
     672,
     674,
     676,
     678,
     680,
     682,
     684,
     686,
     688,
     690,
     692,
     694,
     696,
     698,
     700,
     702,
     704,
     706,
     708,
     710,
     712,
     714,
     716,
     718,
     720,
     722,
     724,
     726,
     728,
     730,
     732,
     734,
     736,
     738,
     740,
     742,
     744,
     746,
     748,
     750,
     752,
     754,
     756,
     758,
     760,
     762,
     764,
     766,
     768,
     770,
     772,
     774,
     776,
     778,
     780,
     782,
     784,
     786,
     788,
     790,
     792,
     794,
     796,
     798,
     800,
     802,
     804,
     806,
     808,
     810,
     812,
     814,
     816,
     818,
     820,
     822,
     824,
     826,
     828,
     830,
     832,
     834,
     836,
     838,
     840,
     842,
     844,
     846,
     848,
     850,
     852,
     854,
     856,
     858,
     860,
     862,
     864,
     866,
     868,
     870,
     872,
     874,
     876,
     878,
     880,
     882,
     884,
     886,
     888,
     890,
     892,
     894,
     896,
     898,
     900,
     902,
     904,
     906,
     908,
     910,
     912,
     914,
     916,
     918,
     920,
     922,
     924,
     926,
     928,
     930,
     932,
     934,
     936,
     938,
     940,
     942,
     944,
     946,
     948,
     950,
     952,
     954,
     956,
     958,
     960,
     962,
     964,
     966,
     968,
     970,
     972,
     974,
     976,
     978,
     980,
     982,
     984,
     986,
     988,
     990,
     992,
     994,
     996,
     998]



<br>
Now the same thing but with list comprehension.


```python
my_list = [number for number in range(0,1000) if number % 2 == 0]
my_list
```




    [0,
     2,
     4,
     6,
     8,
     10,
     12,
     14,
     16,
     18,
     20,
     22,
     24,
     26,
     28,
     30,
     32,
     34,
     36,
     38,
     40,
     42,
     44,
     46,
     48,
     50,
     52,
     54,
     56,
     58,
     60,
     62,
     64,
     66,
     68,
     70,
     72,
     74,
     76,
     78,
     80,
     82,
     84,
     86,
     88,
     90,
     92,
     94,
     96,
     98,
     100,
     102,
     104,
     106,
     108,
     110,
     112,
     114,
     116,
     118,
     120,
     122,
     124,
     126,
     128,
     130,
     132,
     134,
     136,
     138,
     140,
     142,
     144,
     146,
     148,
     150,
     152,
     154,
     156,
     158,
     160,
     162,
     164,
     166,
     168,
     170,
     172,
     174,
     176,
     178,
     180,
     182,
     184,
     186,
     188,
     190,
     192,
     194,
     196,
     198,
     200,
     202,
     204,
     206,
     208,
     210,
     212,
     214,
     216,
     218,
     220,
     222,
     224,
     226,
     228,
     230,
     232,
     234,
     236,
     238,
     240,
     242,
     244,
     246,
     248,
     250,
     252,
     254,
     256,
     258,
     260,
     262,
     264,
     266,
     268,
     270,
     272,
     274,
     276,
     278,
     280,
     282,
     284,
     286,
     288,
     290,
     292,
     294,
     296,
     298,
     300,
     302,
     304,
     306,
     308,
     310,
     312,
     314,
     316,
     318,
     320,
     322,
     324,
     326,
     328,
     330,
     332,
     334,
     336,
     338,
     340,
     342,
     344,
     346,
     348,
     350,
     352,
     354,
     356,
     358,
     360,
     362,
     364,
     366,
     368,
     370,
     372,
     374,
     376,
     378,
     380,
     382,
     384,
     386,
     388,
     390,
     392,
     394,
     396,
     398,
     400,
     402,
     404,
     406,
     408,
     410,
     412,
     414,
     416,
     418,
     420,
     422,
     424,
     426,
     428,
     430,
     432,
     434,
     436,
     438,
     440,
     442,
     444,
     446,
     448,
     450,
     452,
     454,
     456,
     458,
     460,
     462,
     464,
     466,
     468,
     470,
     472,
     474,
     476,
     478,
     480,
     482,
     484,
     486,
     488,
     490,
     492,
     494,
     496,
     498,
     500,
     502,
     504,
     506,
     508,
     510,
     512,
     514,
     516,
     518,
     520,
     522,
     524,
     526,
     528,
     530,
     532,
     534,
     536,
     538,
     540,
     542,
     544,
     546,
     548,
     550,
     552,
     554,
     556,
     558,
     560,
     562,
     564,
     566,
     568,
     570,
     572,
     574,
     576,
     578,
     580,
     582,
     584,
     586,
     588,
     590,
     592,
     594,
     596,
     598,
     600,
     602,
     604,
     606,
     608,
     610,
     612,
     614,
     616,
     618,
     620,
     622,
     624,
     626,
     628,
     630,
     632,
     634,
     636,
     638,
     640,
     642,
     644,
     646,
     648,
     650,
     652,
     654,
     656,
     658,
     660,
     662,
     664,
     666,
     668,
     670,
     672,
     674,
     676,
     678,
     680,
     682,
     684,
     686,
     688,
     690,
     692,
     694,
     696,
     698,
     700,
     702,
     704,
     706,
     708,
     710,
     712,
     714,
     716,
     718,
     720,
     722,
     724,
     726,
     728,
     730,
     732,
     734,
     736,
     738,
     740,
     742,
     744,
     746,
     748,
     750,
     752,
     754,
     756,
     758,
     760,
     762,
     764,
     766,
     768,
     770,
     772,
     774,
     776,
     778,
     780,
     782,
     784,
     786,
     788,
     790,
     792,
     794,
     796,
     798,
     800,
     802,
     804,
     806,
     808,
     810,
     812,
     814,
     816,
     818,
     820,
     822,
     824,
     826,
     828,
     830,
     832,
     834,
     836,
     838,
     840,
     842,
     844,
     846,
     848,
     850,
     852,
     854,
     856,
     858,
     860,
     862,
     864,
     866,
     868,
     870,
     872,
     874,
     876,
     878,
     880,
     882,
     884,
     886,
     888,
     890,
     892,
     894,
     896,
     898,
     900,
     902,
     904,
     906,
     908,
     910,
     912,
     914,
     916,
     918,
     920,
     922,
     924,
     926,
     928,
     930,
     932,
     934,
     936,
     938,
     940,
     942,
     944,
     946,
     948,
     950,
     952,
     954,
     956,
     958,
     960,
     962,
     964,
     966,
     968,
     970,
     972,
     974,
     976,
     978,
     980,
     982,
     984,
     986,
     988,
     990,
     992,
     994,
     996,
     998]


