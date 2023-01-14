import React from 'react';
import "../styles/homepage.css";

function Home(props) {

    return (
        <div>
            <h2>How To Use The Quick Start Project</h2>
            <div className="homepageText">
                <p>
                    <h3>Github Setup</h3>
                    1. Make 2 new github repos (Backend and Frontend)<br/>
                    2. Clone Quick Start Project backend and frontend repos and delete their git folders<br/>
                    3. Git init to the new repos<br/>
                    4. Add REMOTE_USER and REMOTE_PW secrets in your backend github repo (User: admin, PW: - tomcat-users - (Purple and Green))<br/>
                    <div className="homepageTextDiv">
                        - Go to Settings, scroll to Security, click on Secrets, choose Actions
                    </div>

                    <h3>Backend</h3>
                    <p className="cursive"> To get your backend code deployed</p>
                    1. Create a new database in mySQL Workbench on the remote Digital Ocean connection (User: root, PW: - MYSQL_ROOT_PASSWORD - (White and blue))<br/>
                    2. Create the same database as in the previous step locally (user: dev, PW: ax2)<br/>
                    3. In the pom.xml file:<br/>
                    <div className="homepageTextDiv">
                        - Change Name and ArtifactID to the name of your project (both should be the same)<br/>
                        - Change the remote server (remote.server) to your domain name (ex. https://haj.com/manager/text) <br/>
                        - Change the database name (db.name) to the database you created in step 1. <br/>
                    </div>
                    4. In MySQL create a test database locally<br/>
                    5. In .github/workflows/mavenworkflow.yml change the name of DB_DATABASE to the test database you just created<br/>
                    6. In resources/META-INF/persistence.xml:<br/>
                    <div className="homepageTextDiv">
                        - On line 24 (or close to) make sure that the property value is a link to your remote database<br/>
                        - Also make sure that the values on the two next lines correspond to the correct user (root) and password (- MYSQL_ROOT_PASSWORD - (White and blue)) <br/>
                    </div>

                    Your pipeline and github actions should now be working. Try to push something to main and see if github actions succeeds.

                    <h3>Frontend</h3>
                    <p className="cursive"> To get your frontend code deployed</p>

                    1. Do something
                </p>
            </div>

        </div>
    );
}

export default Home;
