const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.save = async (name, data) => {
    const params = {
        Bucket: 'pizza-luvrs-hengzhenj94',
        Key: `pizzas/${name}.png`,
        Body: Buffer.from(data, 'base64'),
        ContentEncoding: 'base64',
        ContentType: 'image/png'
    }

    s3.putObject(params).promise()
    return `//pizza-luvrs-hengzhenj94.s3-us-west-2.amazonaws.com/${params.Key}`
}