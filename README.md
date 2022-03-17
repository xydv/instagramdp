# Installation
```node
> npm install instagramdp
```
# Usage
## Import
```node
const instagramdp = require("instagramdp");
```
## Using Async/Await!.
```node
async function getProfilePicture() {
    const response = await instagramdp.getDP("codewithaadi")
    console.log(response);
}

getProfilePicture()
```
## Using Promises!.
```node
instagramdp.getDP("codewithaadi").then(response => console.log(response))
```
