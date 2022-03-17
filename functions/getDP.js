const request = require("request");
const cheerio = require("cheerio");

module.exports = (username) => {
    return new Promise(async (resolve, reject) => {
        request(`https://imginn.org/${username}/`, function (error, response, body) {
            if (!error) {
                if (response.statusCode == 200) {
                    const $ = cheerio.load(body);
                    $(".avatar").each(function () {
                        resolve({ status: 200, picture: (($(this).children("img").first().attr("src").trim()).split("org/?"))[1] });
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