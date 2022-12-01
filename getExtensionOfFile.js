const getExtensionOfFile = (fileName) => {
    const fileExtension = fileName.split('.').pop();
    return fileExtension;
}
console.log(getExtensionOfFile('dir//:testtest##1234.mp4'));

const getFileExtension = (fileName) => {
    return fileName.slice(fileName.lastIndexOf('.'));
}
console.log(getFileExtension('dir//:testtest##1234.mp4'));