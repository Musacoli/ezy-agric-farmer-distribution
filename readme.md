# Ezy Agric Farmer Distribution (Uganda)

> This is a simple HTML Page which enables an Agricultural Officer, to know the farmer
distribution per district to give them a holistic picture of the
population involvement in the agricultural sector of Uganda

## How to run

-  Clone the repository to your local machine

`git clone https://github.com/Musacoli/ezy-agric-farmer-distribution.git`

-  CD into the folder with the code

`cd ezy-agric-farmer-distribution`

-  To run the server `cd` into the api folder

`cd api`

-  Make sure you have `python3`, `pip3` and `virtualenv` on your machine
-  Open the Virtual Environment for running the server by running 
`virtualenv venv`

- `cd` into the venv folder : `cd venv`
- Then run the following command to activate the virtual env
`source bin/activate`

- `cd` back to the api root directory: `cd ../`
- To install all the necessary requirements run:

`pip3 install requirements.txt`

- After the installation is complete start the server by running the following command
`pyhton3 app.py`

You should have something like this to let you know that your server is running successfully

```
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: on
 * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
 * Restarting with stat
 * Debugger is active!
 * Debugger PIN: 291-626-774
```

- Take note of the running on part.
- If yours is different from the above one, then update the following line of code in the client folder
    - Go to client/assets/js/script.js
    - On `line 10` update the host of the api with your host above.
    
    ```
  fetch("{your_server_host_address}/api/v1/farmers/distribution")
  ```
  
- After running the server, feel free to open the HTML file in client via any browser of choice




