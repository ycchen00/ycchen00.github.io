---
 title: Coursera | Applied Machine Learning in Python（University of Michigan）| Assignment4
 date: 
 updated: 
 categories:
 - DataScience
 - Coursera
 - AppliedML
 tags:
 - DataScience
 - Pandas
 - Coursera
 - Machine learning
---
>Coursera密歇根大学的 Applied Data Science with Python 专项课程第三门课程Applied Machine Learning in Python Assignment4代码
<!--less-->

&emsp;&emsp; 所有quiz和assignment链接：
&emsp;&emsp;[Coursera | Applied Machine Learning in Python（University of Michigan）| Quiz](https://ycchen00.github.io/2020/12/12/AppliedML/Quiz/)
&emsp;&emsp;[Coursera | Applied Machine Learning in Python（University of Michigan）| Assignment1](https://ycchen00.github.io/2020/12/12/AppliedML/Assignment1/)
&emsp;&emsp;[Coursera | Applied Machine Learning in Python（University of Michigan）| Assignment2](https://ycchen00.github.io/2020/12/12/AppliedML/Assignment2/)
&emsp;&emsp;[Coursera | Applied Machine Learning in Python（University of Michigan）| Assignment3](https://ycchen00.github.io/2020/12/12/AppliedML/Assignment3/)
&emsp;&emsp;[Coursera | Applied Machine Learning in Python（University of Michigan）| Assignment4](https://ycchen00.github.io/2020/12/12/AppliedML/Assignment4/)
&emsp;&emsp; 有时间（需求）就把所有代码放到github上
<br>


&emsp;&emsp; 继续叨，这个不难，但是做了好久才满足要求。大家做个参考~

---

_You are currently looking at **version 1.1** of this notebook. To download notebooks and datafiles, as well as get help on Jupyter notebooks in the Coursera platform, visit the [Jupyter Notebook FAQ](https://www.coursera.org/learn/python-machine-learning/resources/bANLa) course resource._

---

# Assignment 4 - Understanding and Predicting Property Maintenance Fines

This assignment is based on a data challenge from the Michigan Data Science Team ([MDST](http://midas.umich.edu/mdst/)). 

The Michigan Data Science Team ([MDST](http://midas.umich.edu/mdst/)) and the Michigan Student Symposium for Interdisciplinary Statistical Sciences ([MSSISS](https://sites.lsa.umich.edu/mssiss/)) have partnered with the City of Detroit to help solve one of the most pressing problems facing Detroit - blight. [Blight violations](http://www.detroitmi.gov/How-Do-I/Report/Blight-Complaint-FAQs) are issued by the city to individuals who allow their properties to remain in a deteriorated condition. Every year, the city of Detroit issues millions of dollars in fines to residents and every year, many of these fines remain unpaid. Enforcing unpaid blight fines is a costly and tedious process, so the city wants to know: how can we increase blight ticket compliance?

The first step in answering this question is understanding when and why a resident might fail to comply with a blight ticket. This is where predictive modeling comes in. For this assignment, your task is to predict whether a given blight ticket will be paid on time.

All data for this assignment has been provided to us through the [Detroit Open Data Portal](https://data.detroitmi.gov/). **Only the data already included in your Coursera directory can be used for training the model for this assignment.** Nonetheless, we encourage you to look into data from other Detroit datasets to help inform feature creation and model selection. We recommend taking a look at the following related datasets:

* [Building Permits](https://data.detroitmi.gov/Property-Parcels/Building-Permits/xw2a-a7tf)
* [Trades Permits](https://data.detroitmi.gov/Property-Parcels/Trades-Permits/635b-dsgv)
* [Improve Detroit: Submitted Issues](https://data.detroitmi.gov/Government/Improve-Detroit-Submitted-Issues/fwz3-w3yn)
* [DPD: Citizen Complaints](https://data.detroitmi.gov/Public-Safety/DPD-Citizen-Complaints-2016/kahe-efs3)
* [Parcel Map](https://data.detroitmi.gov/Property-Parcels/Parcel-Map/fxkw-udwf)

___

We provide you with two data files for use in training and validating your models: train.csv and test.csv. Each row in these two files corresponds to a single blight ticket, and includes information about when, why, and to whom each ticket was issued. The target variable is compliance, which is True if the ticket was paid early, on time, or within one month of the hearing data, False if the ticket was paid after the hearing date or not at all, and Null if the violator was found not responsible. Compliance, as well as a handful of other variables that will not be available at test-time, are only included in train.csv.

Note: All tickets where the violators were found not responsible are not considered during evaluation. They are included in the training set as an additional source of data for visualization, and to enable unsupervised and semi-supervised approaches. However, they are not included in the test set.

<br>

**File descriptions** (Use only this data for training your model!)

    readonly/train.csv - the training set (all tickets issued 2004-2011)
    readonly/test.csv - the test set (all tickets issued 2012-2016)
    readonly/addresses.csv & readonly/latlons.csv - mapping from ticket id to addresses, and from addresses to lat/lon coordinates. 
     Note: misspelled addresses may be incorrectly geolocated.

<br>

**Data fields**

train.csv & test.csv

    ticket_id - unique identifier for tickets
    agency_name - Agency that issued the ticket
    inspector_name - Name of inspector that issued the ticket
    violator_name - Name of the person/organization that the ticket was issued to
    violation_street_number, violation_street_name, violation_zip_code - Address where the violation occurred
    mailing_address_str_number, mailing_address_str_name, city, state, zip_code, non_us_str_code, country - Mailing address of the violator
    ticket_issued_date - Date and time the ticket was issued
    hearing_date - Date and time the violator's hearing was scheduled
    violation_code, violation_description - Type of violation
    disposition - Judgment and judgement type
    fine_amount - Violation fine amount, excluding fees
    admin_fee - $20 fee assigned to responsible judgments
state_fee - $10 fee assigned to responsible judgments
    late_fee - 10% fee assigned to responsible judgments
    discount_amount - discount applied, if any
    clean_up_cost - DPW clean-up or graffiti removal cost
    judgment_amount - Sum of all fines and fees
    grafitti_status - Flag for graffiti violations
    
train.csv only

    payment_amount - Amount paid, if any
    payment_date - Date payment was made, if it was received
    payment_status - Current payment status as of Feb 1 2017
    balance_due - Fines and fees still owed
    collection_status - Flag for payments in collections
    compliance [target variable for prediction] 
     Null = Not responsible
     0 = Responsible, non-compliant
     1 = Responsible, compliant
    compliance_detail - More information on why each ticket was marked compliant or non-compliant


___

## Evaluation

Your predictions will be given as the probability that the corresponding blight ticket will be paid on time.

The evaluation metric for this assignment is the Area Under the ROC Curve (AUC). 

Your grade will be based on the AUC score computed for your classifier. A model which with an AUROC of 0.7 passes this assignment, over 0.75 will recieve full points.
___

For this assignment, create a function that trains a model to predict blight ticket compliance in Detroit using `readonly/train.csv`. Using this model, return a series of length 61001 with the data being the probability that each corresponding ticket from `readonly/test.csv` will be paid, and the index being the ticket_id.

Example:

    ticket_id
       284932    0.531842
       285362    0.401958
       285361    0.105928
       285338    0.018572
                 ...
       376499    0.208567
       376500    0.818759
       369851    0.018528
       Name: compliance, dtype: float32
       
### Hints

* Make sure your code is working before submitting it to the autograder.

* Print out your result to see whether there is anything weird (e.g., all probabilities are the same).

* Generally the total runtime should be less than 10 mins. You should NOT use Neural Network related classifiers (e.g., MLPClassifier) in this question. 

* Try to avoid global variables. If you have other functions besides blight_model, you should move those functions inside the scope of blight_model.

* Refer to the pinned threads in Week 4's discussion forum when there is something you could not figure it out.

## Code
```python
import pandas as pd
import numpy as np
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.svm import SVC
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
from sklearn.metrics import roc_curve, auc
from sklearn.metrics import roc_auc_score
from sklearn.ensemble import GradientBoostingClassifier
from sklearn.model_selection import GridSearchCV

def blight_model():
    # Load and clean data
    train_data = pd.read_csv('train.csv', encoding = 'ISO-8859-1')
    test_data = pd.read_csv('test.csv')
    address =  pd.read_csv('addresses.csv')
    latlons = pd.read_csv('latlons.csv')
    address_lalo = address.set_index('address').join(latlons.set_index('address'), how='left').dropna().reset_index(drop=False)
    
    train_data=pd.merge(train_data, address_lalo, on='ticket_id').set_index('ticket_id')
    test_data=pd.merge(test_data, address_lalo, on='ticket_id',how='left').set_index('ticket_id')
    test_data['lat'].fillna(method='pad', inplace=True)
    test_data['lon'].fillna(method='pad', inplace=True)
    
    train_data = train_data[(train_data['compliance'] == 0) | (train_data['compliance'] == 1)]
    train_data['compliance']=train_data['compliance'].astype(int)
    
    # Calculate time gap
    from datetime import datetime
    def time_gap(hearing_date_str, ticket_issued_date_str):
        if not hearing_date_str or type(hearing_date_str)!=str: return 73
        hearing_date = datetime.strptime(hearing_date_str, "%Y-%m-%d %H:%M:%S")
        ticket_issued_date = datetime.strptime(ticket_issued_date_str, "%Y-%m-%d %H:%M:%S")
        gap = hearing_date - ticket_issued_date
        return gap.days
    train_data['time_gap'] = train_data.apply(lambda row: time_gap(row['hearing_date'], row['ticket_issued_date']), axis=1)
    test_data['time_gap'] = test_data.apply(lambda row: time_gap(row['hearing_date'], row['ticket_issued_date']), axis=1)
    
    # Reomove train only columns
    trainOnly_columns = [
        'payment_amount', 'payment_date', 'payment_status', 'balance_due',
        'collection_status', 'compliance_detail'
    ]
    train_data.drop(trainOnly_columns, axis=1, inplace=True)
    
    # Feature used to train
    feature_columns = [
        'agency_name',
        'violation_street_name',
        'state',
        'violation_code',
        'late_fee',
        'fine_amount',
        'discount_amount',
        'judgment_amount',
        'lat',
        'lon',
        'time_gap'#'ticket_issued_date', 'hearing_date'
    ]

    convert_columns = {
        'agency_name':'category',
        'violation_street_name':'category',
        'state':'category',
        'violation_code':'category',
        'disposition':'category',
    }
    
    for df in [train_data,test_data]:
        for col, col_type in convert_columns.items():
            if col in df:
                if col_type == 'category':
                    df[col] = df[col].astype(col_type)
                    
    # Convert cetegory columns to integers
    cat_columns = train_data.select_dtypes(['category']).columns
    for df in [train_data,test_data]:
        df[cat_columns] = df[cat_columns].apply(lambda x: x.cat.codes)

    # Spilt
    X = train_data[feature_columns].copy()
    y = train_data['compliance']
    X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)
    

    test = test_data[feature_columns].copy()
    
    # Train the model
    GBC = GradientBoostingClassifier(learning_rate = 0.1, max_depth = 5, random_state = 0).fit(X_train, y_train)
    
    y_score_GBC = GBC.decision_function(X_test)
    fpr_GBC, tpr_GBC, _ = roc_curve(y_test, y_score_GBC)
    roc_auc_GBC  = auc(fpr_GBC, tpr_GBC)
    accuracy_GBC = GBC.score(X_test, y_test)
    print("accuracy = {:.4f}   AUC = {:.4f}".format(accuracy_GBC,  roc_auc_GBC))
    
    y_proba = GBC.predict_proba(test)[:,1]
    test['compliance'] = y_proba
    
    return test['compliance']

    
    # Another way
    #     grid_values = {'learning_rate': [0.01, 0.1], 'max_depth': [3, 5]}
    #     clf = GradientBoostingClassifier(random_state = 0)
    #     grid_clf_auc = GridSearchCV(clf, param_grid = grid_values, scoring = 'roc_auc')
    #     grid_clf_auc.fit(X_train, y_train)

    #     probs = grid_clf_auc.predict_proba(test)[:, 1]
    #     result = pd.Series(probs, index=test.index)

    #     return result
```


```python
blight_model()
```



    accuracy = 0.9346   AUC = 0.7943

    ticket_id
    284932    0.085164
    285362    0.017509
    285361    0.071615
    285338    0.081694
    285346    0.093148
                ...   
    376496    0.018970
    376497    0.018970
    376499    0.071046
    376500    0.071046
    369851    0.294378
    Name: compliance, Length: 61001, dtype: float64

## AutoGrader Result

----------

Your AUC of 0.787592334899 was awarded a value of 1.0 out of 1.0 total grades

