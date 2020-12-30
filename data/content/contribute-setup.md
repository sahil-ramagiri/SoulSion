# Setting Up the development environment

<br/><br/>

### Step 1 - Forking the repo

***

* Go to [https://github.com/sauravshah31/SoulSion](https://github.com/sauravshah31/SoulSion)
* Fork the repository
* Once the forking is complete, clone the forked repo to your local machine
    ```
    cd path_to_directory_where_you_want_to_clone
    git clone https://github.com/your-username/SoulSion.git
    ```
<br/>
<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://drive.google.com/file/d/1TKMsX4E8Z9RSOVe5ssOvyV5gqJ_4tpbW/preview"  allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowfullscreen webkitallowfullscreen mozallowfullscreen seamless></iframe>
</div>

<br/>
<br/>
<br/>

### Front End (React) development setup

***

The following guide will help you to setup the react environment for the front-end development of SoulSion.

<mark>
Note: If you are making contribution to the backend, skip to the next section, you dont need this
</mark>
<br/><br/>

* change the directory to front-end
* Install dependencies
* Run the web server

    ```
    cd SoulSion/front-end
    npm install
    npm run start
    ```
<br/>
<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://drive.google.com/file/d/1iuj6g5FQk4m3PV93jj7ZrUGQ5h6c33iW/preview"  allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowfullscreen webkitallowfullscreen mozallowfullscreen seamless></iframe>
</div>
<br/>
<br/>
<br/>

### Back End (Flask) development setup

***

The following guide will help you to setup the flask environment for the back-end development of SoulSion.

<mark>
Note: If you are making contribution to the frontend, go to the previous section, you dont need this
</mark>
<br/><br/>

* change the directory to back-end
* create a virtual enviroment
* Activate the virtual environment
* change directory to src
* Install requirements
* Run the web server

    ```
    cd SoulSion/back-end
    virtualenv -p /usr/bin/python3 venv
    source venv/bin/activate
    cd src
    pip install -r requirements.txt
    python app.py
    ```
<br/>
<div class="embed-responsive embed-responsive-16by9">
<iframe src="https://drive.google.com/file/d/11fN-Ti6k-cADlJNURdefIIoVYPoHBXAd/preview"  allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture" allowfullscreen webkitallowfullscreen mozallowfullscreen seamless></iframe>
</div>

<br/>
<br/>
<br/>

Stuck somewhere? Don't worry, send us a message and we will help you out.