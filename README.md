# InstagramDP - Instagram Profile Picture Package
[![image](https://nodei.co/npm/instagramdp.png)](https://www.npmjs.com/package/instagramdp)
## Installation
```sh
$ npm install instagramdp
```
---
## Usage
### Import
```node
const instagramdp = require("instagramdp");
```
---
### Using Async/Await!.
```node
async function getProfilePicture() {
    const response = await instagramdp.getDP("codewithaadi")
    console.log(response);
}

getProfilePicture()
```
---
### Using Promises!.
```node
instagramdp.getDP("codewithaadi").then(response => console.log(response))
```
---
## Buy Me A Coffee
<a href="https://www.buymeacoffee.com/aaaaayyyyy" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="28" width="119"></a>
