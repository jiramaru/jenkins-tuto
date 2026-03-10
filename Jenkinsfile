properties([
    pipelineTriggers([
        githubPush()
    ])
])

pipeline {
    agent any

    stages {
        stage("Build") {
            agent {
                docker {
                    image 'node:25-alpine'
                    reuseNode true
                }
            }
            steps {
                sh '''
                echo 'Building the application...'
                ls -la
                node --version
                npm --version
                npm ci
                npm run build
                ls -la
                '''
                
              }
          }
        stage("Test") {

            steps {
                sh '''
                echo 'Running tests...'
                '''
            }
        }
     }
}

