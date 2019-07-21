### Live Messenger

This application was built as a simple live messaging platform built with React and Socket.io

[Live Demo](http://jesse-live-messenger.s3-website.ca-central-1.amazonaws.com)

Login information is not persistent to allow for quick testing and demoing between the accounts.

The backend (API) can be found here [Dynamic Schools API](https://github.com/effekt/live-messenger-api)

##### Services

The application is spread across the following services:

| Service | Description |
| ------- | ----------- |
| [ElephantSQL](https://www.elephantsql.com) | Handles the Postgres database |
| [AWS S3](https://aws.amazon.com/s3/) | Serves the static React application |
| [AWS EC2](https://aws.amazon.com/ec2/) | Provides the Socket.io connections |


Accounts:

educator1@schools.com: p@ssw0rd

educator2@schools.com: p@ssw0rd

parent@schools.com: p@ssw0rd