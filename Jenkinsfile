properties([
    pipelineTriggers([
        githubPush()
    ])
])

pipeline {
    agent any

    stages {
        stage('Install') {
            agent {
                docker {
                    image 'node:25-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            agent {
                docker {
                    image 'node:25-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm run lint'
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:25-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm run test'
            }
        }

        stage('Build Artifacts') {
            agent {
                docker {
                    image 'node:25-alpine'
                    reuseNode true
                }
            }
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to local Docker container...'
                sh '''
                # Build the production image
                docker build -t jenkins-tuto .
                
                # Stop and remove existing container if it exists
                docker stop jenkins-tuto || true
                docker rm jenkins-tuto || true
                
                # Run the new container
                docker run -d --name jenkins-tuto -p 3000:3000 jenkins-tuto
                '''
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}

