# LA Server/API endpoints

Written in Go. Deployed with [App Engine](https://cloud.google.com/appengine).

## Run

To run:

`go run .`

What's more useful is to run it with [watchexec](https://github.com/watchexec/watchexec):

`watchexec --restart --exts go "echo -- && go run ."`

Above assuming you ran it from inside `server` folder, will rerun your server on any .go file changes.

## Deploying

Can follow [these instructions](https://cloud.google.com/appengine/docs/standard/go/building-app) if you want to deploy it like us. It shows how to login to GCP with `gcloud` tool, then deploy with `gcloud app deploy`. Can also deploy this go server code anywhere else you like.
