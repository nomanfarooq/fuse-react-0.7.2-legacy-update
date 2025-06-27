 pipeline {
    agent any


    stages {


        stage('SSH to EC2') {

            steps {
                sshagent(credentials: ['azure-DMS']) {
                    sh 'ssh -o StrictHostKeyChecking=no azureuser@13.82.3.15 "whoami && ls && /bin/bash /home/azureuser/script_frontend.sh"'
                }
            }
        }


    }
}
