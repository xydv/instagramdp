const request = require("request");
const cheerio = require("cheerio");
var urlencode = require('urlencode');

module.exports = (username) => {
    return new Promise(async (resolve, reject) => {
        request(`https://imginn.org/${username}/`, function (error, response, body) {
            if (!error) {
                if (response.statusCode == 200) {
                    const $ = cheerio.load(body);
                    $(".avatar").each(function () {
                        let imageurl = $(this).children("img").first().attr("src").trim();
                        if (imageurl.includes("imginn.org")) {
                            resolve({ status: 200, picture: (imageurl.split("org/?"))[1] });
                        } else if (imageurl.includes("pimg.tw")) {
                            resolve({ status: 200, picture: urlencode.decode((imageurl.split("?url="))[1]) });
                        }
                    });
                } else {
                    resolve({ status: 404, picture: "Image Not Found!" });
                }
            } else {
                resolve({ status: 400, picture: "Sone Error Occurred!!" });
            }
        })
    })
}
