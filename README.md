<div id="top"></div>
<!--
*** Google Cloud Serverless Hackathon 
*** This project is for the Google Cloud Easy as Pie Serverless Hacathon.  The proposed plan will use Google Cloud's to build and deploy serverless application using Cloud Run, Cloud function, Cloud Storage and other Google tools.
*** Thanks again! Let's create something AMAZING! :D
-->



<!-- BEHAVIOR SUPPORT PLANNER -->
<!--
*** Behavior Support Planner a tool meant to address the individualized needs of a child or youth with complex behavioral health problems
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://www.bucklit.com.au">
    <img src="https://drive.google.com/file/d/1CVWffWjEachGYa1fUNK1bh8PH4XuZPJQ/view?usp=sharing" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">BEHAVIOR SUPPORT PLANNER</h3>

  <p align="center">
    Behavior Support Planner a tool meant to address the individualized needs of a child or youth with complex behavioral health problems.

<a href="https://www.figma.com/file/xQDKaye9msu41Z6X1Cpk1r/Google-Cloud-Platform%3DBSS-Implementation?node-id=0%3A1">
Technical architecture or solutions flow diagram.
  </a>

  </p>
</div>






<!-- ABOUT THE PROJECT -->
## THE ISSUE

Behavior practitioners in the disability and other sectors across the globe have to manually capture data to create proper support plans for their clients. This tool will address the issue by automating the process by capturing and collating the data to be presented in a way that would be helpful for the behaviour support practionters.

<p align="right">(<a href="#top">back to top</a>)</p>

## SERVERLESS SOLUTION

The system will allow logging of the behavior/incident. Which involves capturing the incident - paying attention to and recording antecedent, triggers, and mood state. Over time it builds a picture of the client. The system proposed will analyze and collate the data, finally presenting a report that can help identify specific triggers.
<p align="right">(<a href="#top">back to top</a>)</p>

 <img src="https://drive.google.com/file/d/1ecXeTvrlNddhpXRWKBMbGZ5O-ehbV8PK/view" alt="Banner" width="700" height="250">

### Built With

* [Google Cloud Storage](https://nextjs.org/)
* [Google Cloud Run](https://nextjs.org/)
* [Google Cloud BigQuery](https://nextjs.org/)
* [Data Studio](https://nextjs.org/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

Instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

_Below are the steps on installing and setting up environment. 

1. Google cloud initialise project 
   ```sh
   gcloud config set project behavior-support-system
   ```

2. Google cloud enable required services
   ```sh
   gcloud services enable \
     cloudfunctions.googleapis.com \
     run.googleapis.com \
     workflows.googleapis.com \
     storage.googleapis.com
   ```

3. Clone the repo
   ```sh
   git clone https://github.com/techbin/hackathon-gcp.git 
   ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Create a Bucket 
   ```sh
   gsutil mb gs://bss_json
   ```
6. Copy JSON to Bucket 
   ```sh
   gsutil cp pulllogs.json gs://bss_json
   ```

7. Google cloud build command
   ```sh
   gcloud builds submit --tag gcr.io/behavior-support-system/readjsontobigquery
   ```
8. Google cloud deploy command
   ```sh
   gcloud run deploy --image gcr.io/behavior-support-system/readjsontobigquery --max-instances=3
   ```

8. Check logs to check the status. This will also help troubleshooting any issues.

<p align="right">(<a href="#top">back to top</a>)</p>


