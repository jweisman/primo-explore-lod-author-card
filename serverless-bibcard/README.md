# Serverless Bibcard API

This is serverless API implementation of the [Bibcard](https://github.com/UW-Madison-Library/bibcard) library from the University of Wisconsin/Madison. It accepts a URI and returns a JSON representation of the results of the `Person`.

A version of this API is deployed to `https://api.exldevnetwork.net/bibcard/`. [Click here](https://api.exldevnetwork.net/bibcard/?uri=http://id.loc.gov/authorities/names/n2008054754) to see the results for Michelle Obama.

## Run locally
To run this API locally after cloning this repository, first build it using the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html):
```
sam build --use-container
```

Create a file called `event.json`:
```
{"queryStringParameters":{"uri":"http://id.loc.gov/authorities/names/n97108433"}}
```

And run the API locally:
```
sam local invoke -e event.json 
```

## Dependencies
This API uses a [Lambda layer](https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html) in AWS to provide the dependencies. To build the dependencies, 

The following AWS CLI command is used to make the layer available to all who deploy the Serverless API below.

```
aws lambda add-layer-version-permission --layer-name BibCard-Dependencies --statement-id xaccount --action lambda:GetLayerVersion --principal "*" --version-number <VERSION> --profile <PROFILE> --region us-east-1
```

To build the dependencies layer, run the following (adapted from [this post](https://medium.com/@joshua.a.kahn/exploring-aws-lambda-layers-and-ruby-support-5510f81b4d14)):

```
$ mkdir layer/ruby && mkdir layer/ruby/gems
$ docker run --rm \
             -v $PWD/layer:/var/layer \
             -w /var/layer \
             lambci/lambda:build-ruby2.7 \
             bundle install --path=ruby/gems
# move directories and throw out cache
$ mv ruby/gems/ruby/* ruby/gems/ && \
    rm -rf ruby/gems/ruby
# zip and clean-up
$ zip -r layer.zip ruby
$ rm -rf .bundle && rm -rf ruby
```

Then deploy the new version of the layer.

## Deploy the Serverless API
This app is available in the [AWS Serverless Application Repository](https://serverlessrepo.aws.amazon.com/applications/arn:aws:serverlessrepo:us-east-1:523567452838:applications~serverless-bibcard). 

Click to [Deploy the Serverless Application](https://console.aws.amazon.com/lambda/home#/create/app?applicationId=arn:aws:serverlessrepo:us-east-1:523567452838:applications~serverless-bibcard) from the AWS Console.
