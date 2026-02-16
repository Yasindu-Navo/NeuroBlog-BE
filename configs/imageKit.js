import ImageKit from 'imagekit'

var imageKIT = new ImageKit({
    publicKey : process.env.ImageKIT_PUBLICKEY,
    privateKey:process.env.ImageKIT_PRIVATEKEY,
    urlEndpoint : process.env.ImageKIT_URLENDPOINT
})

export default imageKIT;
