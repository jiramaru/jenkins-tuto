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
                
                # Stop and remove existing container using port 3000
                EXISTING_CONTAINER=$(docker ps -q --filter "publish=3000")
                if [ ! -z "$EXISTING_CONTAINER" ]; then
                    echo "Stopping container $EXISTING_CONTAINER using port 3000..."
                    docker stop $EXISTING_CONTAINER
                    docker rm $EXISTING_CONTAINER
                fi
                
                # Also ensure jenkins-tuto name is free
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

