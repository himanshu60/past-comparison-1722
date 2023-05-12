<p  align="center">
<img src="#" alt="Image" style="width: 20%; border-radius:50%">
</p>

## Project Code :  
   ```
    military-waste-5460
   ```

## Project Name : 
   ```
Locks & Looks
   ```

<br>

## Deployed Link :

   - Frontend - https://snipsandspikes.netlify.app/
   - Backend  - https://hair-salon-backend.onrender.com


<br>

## Warning :  useCamelCase  



  
<br>

# What are the requirements ?

- User can login and sign up
    - OTP will be sent by nodmailer
- User can login with google account
- User can visit pages 
- User can see services 
- User can book services / appointments and pay
    - User can view appointment 
    - User rescheduled apointments
    - User can cancel appointment
    - User can book the appointment for someone else.
    - User can give feedback on appointment
    - User can see account details / update them / get previous appointment  
    - User will be notified confirmationi email 
- Real time chat support
- Feedback 
- Logout 



# Tech stack 

### Frontend 

- Bootstrap / HTML / CSS / JavaScript / SweeperJS 

### Backend 
 
- NodeJS 
- ExpressJS

- Database : MongoDB, MySQL 



# Schema : 

- user 
     - name
     - email
     - password

- stylist 
     - name 
     - email 
     - salary
     - image

- services 
    - service_name 
    - service_image
    - service_price
    - service_description
    - service_category 
    - service_by_gender

- Slots 
     - id
     - start time
     - end time
     - stylistId
     - available
     - slotId  


- appointments 
    - stylerid
    - userID
    - serviceId
    - date,
    - time,
    - service_name,
    - service_des,
    - styler_name


## 
<br>

# API Endpoints 
----
<br>

## `Services`
<br>   

- Male Services
                
        GET    -   /services/male 
        POST   -   /services/male/addMaleService
        PATCH  -   /services/male/update/:id
        DELETE -   /services/male/delete/:id

- Female Services

        GET    -   /services/female 
        GET    -   /services/female/female/:id 
        POST   -   /services/female/addFemaleService
        PATCH  -   /services/female/update/:id
        DELETE -   /services/female/delete/:id


<br>

## `Stylist`
<br>   

- Stylers 
                
        GET    -   /stylist/styler 
        POST   -   /stylist/styler/addStylistService
        PATCH  -   /stylist/styler/update/:id
        DELETE -   /stylist/styler/delete/:id


<br>

## `Appointment`
<br>   

- Appointment 
                
        GET    -   /appointments/appointment
        POST   -   /appointments/appointment/add
        PATCH  -   /appointments/appointment/update/:id
        DELETE -   /appointments/appointment/delete/:id

# screenshots

![Screenshot (572)](![Screenshot (30)](https://github.com/himanshu60/past-comparison-1722/assets/112817197/018c6410-f64b-4ecf-8d18-ea92053672f9)
)
![Screenshot (574)]()
![Screenshot (575)]()
![Screenshot (576)]()
![Screenshot (577)]()
