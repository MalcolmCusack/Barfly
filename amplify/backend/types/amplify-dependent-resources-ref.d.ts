export type AmplifyDependentResourcesAttributes = {
    "storage": {
        "barflystorage": {
            "BucketName": "string",
            "Region": "string"
        }
    },
    "function": {
        "CreateUser": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    }
}