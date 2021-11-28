# Paypal Payment Integration 

## Description
This project has been designed to integrate Paypal 'PayWith Paypal Button' to our code/ server/client. The list of functions it performs are below -
1) To create an order and make payment for the same.
2) To show success/error message for the order
3) To list all the transaction for the given start date and end date.


#### This repository contains PayPal's JS Button SDK and code for v2/checkout/orders integration.

## Prerequisites
Not required only client/browser i.e(Chrome,IE,Firefox etc)

## Languages
The code is written in core Javascript and is running on browser

## Webpage Usage explanation step by step - 
1) index.html - The starting page, this is the actual webapp page to begin the execution. The page shows a navigation bar to toggle between Make Payment and List Transactions options at the top. 

Lets go to 'Make Payment' tab, 

<img width="500" alt="Screenshot 2021-11-28 at 11 48 32 PM" src="https://user-images.githubusercontent.com/17101128/143780817-cb6f473c-0c5c-4c1b-bb72-c429ce419346.png">

2)On 'click' of 'Pay with Paypal' button the request hits the Paypal server and seeks for approval and asks for login credentials.

<img width="500" alt="Screenshot 2021-11-28 at 11 53 06 PM" src="https://user-images.githubusercontent.com/17101128/143781180-38f43948-032c-47e6-9215-89def371ce20.png">

3)On giving login credentials it will take us to payment page, 

<img width="500" alt="Screenshot 2021-11-28 at 11 53 21 PM" src="https://user-images.githubusercontent.com/17101128/143781238-74a725e6-8281-49fc-9462-eec5517850fe.png">

4)Once the payment is complete the success message is shown on the actual webpage / or else error message is displayed

<img width="500" alt="Screenshot 2021-11-28 at 11 53 43 PM" src="https://user-images.githubusercontent.com/17101128/143781312-880e95b3-6798-496a-b490-03726dc07520.png">

<img width="500" alt="Screenshot 2021-11-28 at 11 58 31 PM" src="https://user-images.githubusercontent.com/17101128/143781323-9cb57fc8-ef3c-4b0b-89c5-909b117a3e36.png">

5)Now lets go to 'List Transactions' tab and put the Start Date and End Date , hit 'Submit' button ,

<img width="500" alt="Screenshot 2021-11-28 at 11 58 51 PM" src="https://user-images.githubusercontent.com/17101128/143781382-55b0b264-1087-4921-b54e-0f7957b27bda.png">

the list of all the transaction will be shown in a table for the given dates.

## Credentials
1) Client Id and Secret Key is hardcoded in the code index.js
	##### a. PAYPAL_CLIENT = 'AUZZ8lWCcJlcNBX0OchPP8FuBUJPifPlb3C3PksFXnonTiaj3dEhNU53-TaPMJgeZpNd_w2_0-z9df9A';
	##### b. PAYPAL_SECRET = 'EOfOGo120Lf-SEPMXB_JqhbLolwWq06FJqRiCS8vgcJBR3Q8OMo6bdYnm-3ihw0kY_Pn_lNBKbYDRYhc';
2) Using the ClientId and Secret Key, access token is generated and used in the code.
3) To execute the code please use your "PAYPAL_CLIENT","PAYPAL_SECRET"

## Execution
Just download the folder and run 'index.html' in your browser and you are good to go.
